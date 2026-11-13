import { useCallback, useEffect, useMemo, useState } from "react";
import { Puck, type Data } from "@puckeditor/core";
import "@puckeditor/core/puck.css";
import { useClient, useCurrentUser, type Tool } from "sanity";
import { getSiteContent } from "@/lib/content.functions";
import type { SiteContent } from "@/lib/sanity/types";
import {
  emptyVisualPageData,
  isValidVisualPageSlug,
  normalizeVisualPageSlug,
  parseVisualPageData,
  validateVisualPageData,
} from "./data";
import {
  createPuckPageMetadata,
  createVisualPageConfig,
  type PuckPageArtisan,
  type PuckPageAsset,
} from "./components";
import type { ShawlView } from "@/lib/sanity/types";
import { isRecord } from "@/sanity/journey";
import { hasEditorialWriteAccess } from "@/sanity/access";

const API_VERSION = "2025-02-19";
const PAGE_LIST_QUERY = `*[_type == "visualPage"] | order(_updatedAt desc){
  _id, _rev, title, "slug": slug.current, publicationStatus, _updatedAt
}`;
const MEDIA_QUERY = `*[_type == "documentaryMedia" && publicationStatus in ["draft", "published"] && consentStatus in ["granted", "notApplicable"] && kind in ["image", "video"] && defined(select(kind == "image" => image.asset, kind == "video" => coalesce(file.asset, externalUrl)))] | order(_id match "drafts.*" asc){
  _id, title, kind, alt, caption, credit, externalUrl, publicationStatus,
  "imageAssetId": image.asset._ref,
  "imageUrl": image.asset->url,
  "fileUrl": file.asset->url,
  "imageAlt": image.alt,
  "imageCaption": image.caption,
  "imageCredit": image.credit,
  "posterUrl": poster.asset->url
}`;
const ARTISANS_QUERY = `*[_type == "artisanProfile" && publicationStatus in ["draft", "published"] && consentStatus == "granted"] | order(_id match "drafts.*" asc){
  _id, displayName, role, biography, quote, quoteConsent, publicationStatus,
  "portraitUrl": portrait.asset->url,
  "portraitAlt": portrait.alt,
  "portraitCredit": portrait.credit
}`;
const SHAWLS_QUERY = `*[_type == "shawl" && publicationStatus in ["draft", "published"]] | order(_id match "drafts.*" asc){
  _id, title, description, materials, dimensions, provenance, provenanceVerified, publicationStatus,
  "imageUrl": mainImage.asset->url,
  "imageAlt": mainImage.alt,
  "imageCaption": mainImage.caption,
  "imageCredit": mainImage.credit,
  "gallery": gallery[]{ "url": asset->url, alt, caption, credit }
}`;

interface PageListItem {
  _id: string;
  _rev: string;
  title?: string;
  slug?: string;
  publicationStatus?: string;
  _updatedAt?: string;
}

interface PageDocument extends PageListItem {
  _type: "visualPage";
  pageConfig?: string;
  seo?: {
    title?: string;
    description?: string;
    shareImage?: unknown;
  };
}

interface MediaRow {
  _id: string;
  title?: string;
  kind: "image" | "video";
  publicationStatus?: string;
  alt?: string | null;
  caption?: string | null;
  credit?: string | null;
  externalUrl?: string | null;
  imageUrl?: string | null;
  imageAssetId?: string | null;
  fileUrl?: string | null;
  imageAlt?: string | null;
  imageCaption?: string | null;
  imageCredit?: string | null;
  posterUrl?: string | null;
}

interface ArtisanRow {
  _id: string;
  displayName?: string;
  role?: string;
  biography?: string;
  quote?: string;
  quoteConsent?: boolean;
  publicationStatus?: string;
  portraitUrl?: string;
  portraitAlt?: string;
  portraitCredit?: string;
}

interface ShawlRow {
  _id: string;
  title: string;
  description?: string;
  materials?: string[];
  dimensions?: string;
  provenance?: string;
  provenanceVerified?: boolean;
  publicationStatus?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageCaption?: string;
  imageCredit?: string;
  gallery?: {
    url?: string | null;
    alt?: string | null;
    caption?: string | null;
    credit?: string | null;
  }[];
}

interface PageLibrary {
  imageOptions: { label: string; value: string }[];
  sharingImageOptions: { label: string; value: string }[];
  videoOptions: { label: string; value: string }[];
  artisanOptions: { label: string; value: string }[];
  shawlOptions: { label: string; value: string }[];
  assets: Record<string, PuckPageAsset>;
  artisans: Record<string, PuckPageArtisan>;
  shawls: Record<string, ShawlView>;
  shawlPublicationStatus: Record<string, "draft" | "published">;
  chapters: SiteContent["chapters"];
}

function canonicalId(id: string): string {
  return id.replace(/^drafts\./, "");
}

function pageSlugFromTitle(title: string): string {
  return normalizeVisualPageSlug(title) || "new-page";
}

function pageStatus(page: PageListItem): string {
  return page._id.startsWith("drafts.") || page.publicationStatus !== "published"
    ? "Draft"
    : "Published";
}

function imageUrl(value?: string | null): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

function buildLibrary(
  media: MediaRow[],
  artisanRows: ArtisanRow[],
  shawlRows: ShawlRow[],
  chapters: SiteContent["chapters"],
): PageLibrary {
  const uniqueRows = <T extends { _id: string }>(rows: T[]): T[] => {
    const grouped = new Map<string, T>();
    for (const row of rows) {
      const id = canonicalId(row._id);
      const previous = grouped.get(id);
      if (!previous || row._id.startsWith("drafts.")) grouped.set(id, row);
    }
    return [...grouped.values()];
  };
  const selectedMedia = uniqueRows(media);
  const selectedArtisans = uniqueRows(artisanRows);
  const selectedShawls = uniqueRows(shawlRows);
  const assets = Object.fromEntries(
    selectedMedia.flatMap((row) => {
      const source = imageUrl(row.imageUrl ?? row.fileUrl ?? row.externalUrl ?? undefined);
      if (!source) return [];
      const asset: PuckPageAsset = {
        id: canonicalId(row._id),
        kind: row.kind,
        publicationStatus:
          row.publicationStatus === "published" && !row._id.startsWith("drafts.")
            ? "published"
            : "draft",
        src: source,
        alt: row.imageAlt ?? row.alt ?? "Documentary media",
        caption: row.imageCaption ?? row.caption ?? undefined,
        credit: row.imageCredit ?? row.credit ?? undefined,
        url: source,
        assetRef: row.imageAssetId ?? undefined,
        fileUrl: imageUrl(row.fileUrl),
        externalUrl: imageUrl(row.externalUrl ?? undefined),
        poster: imageUrl(row.posterUrl)
          ? { src: imageUrl(row.posterUrl), alt: "Documentary video poster" }
          : undefined,
      };
      return [[asset.id, asset]];
    }),
  );
  const imageOptions = selectedMedia
    .filter(
      (row) =>
        row.kind === "image" &&
        !!row.imageAssetId &&
        !!(row.imageAlt?.trim() || row.alt?.trim()) &&
        !!(row.imageCredit?.trim() || row.credit?.trim()) &&
        !!assets[canonicalId(row._id)],
    )
    .map((row) => ({
      label: row.title?.trim() || row.alt?.trim() || "Documentary image",
      value: canonicalId(row._id),
    }));
  const sharingImageOptions = selectedMedia.flatMap((row) =>
    row.kind === "image" &&
    row.imageAssetId &&
    (row.imageAlt?.trim() || row.alt?.trim()) &&
    (row.imageCredit?.trim() || row.credit?.trim()) &&
    assets[canonicalId(row._id)]
      ? [
          {
            label: row.title?.trim() || row.alt?.trim() || "Documentary image",
            value: row.imageAssetId,
          },
        ]
      : [],
  );
  const videoOptions = selectedMedia
    .filter((row) => row.kind === "video" && !!row.credit?.trim() && !!assets[canonicalId(row._id)])
    .map((row) => ({
      label: row.title?.trim() || row.caption?.trim() || "Documentary video",
      value: canonicalId(row._id),
    }));
  const artisans = Object.fromEntries(
    selectedArtisans.map((row) => {
      const id = canonicalId(row._id);
      const portraitSrc = imageUrl(row.portraitUrl);
      const artisan: PuckPageArtisan = {
        id,
        ...(row.displayName ? { displayName: row.displayName } : {}),
        ...(row.role ? { role: row.role } : {}),
        ...(row.biography ? { biography: row.biography } : {}),
        ...(row.quoteConsent === true && row.quote ? { quote: row.quote } : {}),
        quoteConsent: row.quoteConsent === true,
        consentStatus: "granted",
        publicationStatus:
          row.publicationStatus === "draft" || row._id.startsWith("drafts.")
            ? "draft"
            : "published",
        portrait: portraitSrc
          ? {
              src: portraitSrc,
              alt: row.portraitAlt ?? `Portrait of ${row.displayName ?? "an artisan"}`,
              credit: row.portraitCredit,
            }
          : undefined,
      };
      return [id, artisan];
    }),
  );
  const shawls = Object.fromEntries(
    selectedShawls.flatMap((row) => {
      if (!row.title?.trim()) return [];
      const src = imageUrl(row.imageUrl);
      const shawl: ShawlView = {
        title: row.title,
        description: row.description,
        mainImage: src
          ? {
              src,
              alt: row.imageAlt ?? `${row.title} — full drape`,
              caption: row.imageCaption,
              credit: row.imageCredit,
            }
          : undefined,
        gallery: (row.gallery ?? []).flatMap((image) => {
          const galleryUrl = imageUrl(image.url ?? undefined);
          return galleryUrl
            ? [
                {
                  src: galleryUrl,
                  alt: image.alt ?? `${row.title} detail`,
                  caption: image.caption ?? undefined,
                  credit: image.credit ?? undefined,
                },
              ]
            : [];
        }),
        materials: row.materials ?? [],
        dimensions: row.dimensions,
        provenance: row.provenance,
        provenanceVerified: row.provenanceVerified === true,
      };
      return [[canonicalId(row._id), shawl]];
    }),
  );
  const shawlPublicationStatus: PageLibrary["shawlPublicationStatus"] = Object.fromEntries(
    selectedShawls.map((row): [string, "draft" | "published"] => [
      canonicalId(row._id),
      row.publicationStatus === "published" && !row._id.startsWith("drafts.")
        ? "published"
        : "draft",
    ]),
  );
  return {
    imageOptions,
    sharingImageOptions,
    videoOptions,
    artisanOptions: selectedArtisans.map((row) => ({
      label: [row.displayName, row.role].filter(Boolean).join(" — ") || "Consented artisan",
      value: canonicalId(row._id),
    })),
    shawlOptions: selectedShawls.map((row) => ({ label: row.title, value: canonicalId(row._id) })),
    assets,
    artisans,
    shawls,
    shawlPublicationStatus,
    chapters,
  };
}

function referencedIds(data: Data, key: string): string[] {
  const references = new Set<string>();
  for (const block of data.content) {
    if (!isRecord(block.props)) continue;
    const value = block.props[key];
    if (typeof value === "string" && value) references.add(canonicalId(value));
  }
  return [...references];
}

export function VisualPageTool(_props: { tool: Tool }) {
  const client = useClient({ apiVersion: API_VERSION }).withConfig({
    perspective: "raw",
    useCdn: false,
  });
  const currentUser = useCurrentUser();
  const canEdit = hasEditorialWriteAccess(currentUser);
  const [pages, setPages] = useState<PageListItem[]>([]);
  const [library, setLibrary] = useState<PageLibrary>();
  const [page, setPage] = useState<PageDocument>();
  const [data, setData] = useState<Data>(emptyVisualPageData);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [shareImageId, setShareImageId] = useState("");
  const [status, setStatus] = useState("Choose a page or create a new one.");
  const [error, setError] = useState<string>();
  const [busy, setBusy] = useState(false);
  const [invalidConfiguration, setInvalidConfiguration] = useState(false);

  const refreshPages = useCallback(async () => {
    const result = await client.fetch<PageListItem[]>(PAGE_LIST_QUERY);
    const unique = new Map<string, PageListItem>();
    for (const item of result) {
      const id = canonicalId(item._id);
      const previous = unique.get(id);
      if (!previous || item._id.startsWith("drafts.")) unique.set(id, item);
    }
    setPages([...unique.values()]);
  }, [client]);

  const refreshLibrary = useCallback(async () => {
    const [media, artisans, shawls, serializedContent] = await Promise.all([
      client.fetch<MediaRow[]>(MEDIA_QUERY),
      client.fetch<ArtisanRow[]>(ARTISANS_QUERY),
      client.fetch<ShawlRow[]>(SHAWLS_QUERY),
      getSiteContent(),
    ]);
    const content = JSON.parse(serializedContent) as SiteContent;
    setLibrary(buildLibrary(media, artisans, shawls, content.chapters));
  }, [client]);

  useEffect(() => {
    if (!canEdit) return;
    let active = true;
    void Promise.all([refreshPages(), refreshLibrary()]).catch((cause: unknown) => {
      if (!active) return;
      console.error("[visual pages] Studio content load failed", cause);
      setError(
        "Could not load pages or media from Sanity. Check your Studio dataset access and retry.",
      );
    });
    return () => {
      active = false;
    };
  }, [canEdit, refreshPages, refreshLibrary]);

  const puckConfig = useMemo(
    () =>
      createVisualPageConfig(
        library?.imageOptions ?? [],
        library?.videoOptions ?? [],
        library?.artisanOptions ?? [],
        library?.shawlOptions ?? [],
        library?.chapters.map((chapter) => ({
          label: `${chapter.number}. ${chapter.title}`,
          value: String(chapter.number),
        })) ?? [],
      ),
    [library],
  );
  const puckMetadata = useMemo(
    () =>
      createPuckPageMetadata(
        library?.assets ?? {},
        library?.artisans ?? {},
        library?.chapters ?? [],
        library?.shawls ?? {},
        true,
      ),
    [library],
  );

  const openPage = useCallback(
    async (id: string) => {
      setBusy(true);
      setError(undefined);
      try {
        const baseId = canonicalId(id);
        const [draft, published] = await Promise.all([
          client.getDocument<PageDocument>(`drafts.${baseId}`),
          client.getDocument<PageDocument>(baseId),
        ]);
        const selected = draft ?? published;
        if (!selected) {
          setError("That page no longer exists. Refresh the page list and try again.");
          return;
        }
        const parsed = parseVisualPageData(selected.pageConfig);
        const invalid = !!selected.pageConfig && !parsed;
        if (selected.pageConfig && !parsed) {
          setError(
            "This page has invalid Puck data. The editor did not load it; repair the stored configuration before saving.",
          );
        }
        setInvalidConfiguration(invalid);
        setPage({ ...selected, _id: baseId });
        setData(parsed ?? emptyVisualPageData);
        setTitle(selected.title ?? "");
        setSlug(selected.slug ?? "");
        setSeoTitle(selected.seo?.title ?? "");
        setSeoDescription(selected.seo?.description ?? "");
        const shareRef = selected.seo?.shareImage;
        setShareImageId(
          typeof shareRef === "object" &&
            shareRef !== null &&
            "asset" in shareRef &&
            typeof shareRef.asset === "object" &&
            shareRef.asset !== null &&
            "_ref" in shareRef.asset &&
            typeof shareRef.asset._ref === "string"
            ? shareRef.asset._ref
            : "",
        );
        setStatus(`${pageStatus(selected)} page loaded.`);
      } catch (cause) {
        console.error("[visual pages] page load failed", cause);
        setError("Could not load this page from Sanity. Check your dataset permissions and retry.");
      } finally {
        setBusy(false);
      }
    },
    [client],
  );

  const startNewPage = () => {
    if (!canEdit) {
      setError("Your Sanity role does not allow visual page editing.");
      return;
    }
    const newTitle = "Untitled visual page";
    setPage({
      _id: `visualPage-${crypto.randomUUID()}`,
      _rev: "",
      _type: "visualPage",
      title: newTitle,
      slug: pageSlugFromTitle(newTitle),
      publicationStatus: "draft",
      pageConfig: JSON.stringify(emptyVisualPageData),
    });
    setTitle(newTitle);
    setSlug(pageSlugFromTitle(newTitle));
    setSeoTitle("");
    setSeoDescription("");
    setShareImageId("");
    setData(emptyVisualPageData);
    setError(undefined);
    setInvalidConfiguration(false);
    setStatus("New page — save a draft before previewing.");
  };

  const makePageFields = (pageData: Data, publicationStatus: "draft" | "published") => {
    const validation = validateVisualPageData(pageData);
    if (!validation.success) throw new Error(validation.issues.join(" "));
    if (publicationStatus === "published" && validation.data.content.length === 0) {
      throw new Error("Add at least one approved section before publishing this page.");
    }
    if (publicationStatus === "published" && !library) {
      throw new Error("Wait for the Sanity content library to load before publishing.");
    }
    if (!title.trim()) throw new Error("Add a page title before saving.");
    if (!isValidVisualPageSlug(slug)) {
      throw new Error(
        "Use a lowercase, hyphen-separated page path (reserved paths are not allowed).",
      );
    }
    const shareImage = shareImageId
      ? Object.values(library?.assets ?? {}).find((asset) => asset.assetRef === shareImageId)
      : undefined;
    if (
      shareImageId &&
      (!shareImage?.assetRef ||
        !shareImage.credit?.trim() ||
        !library?.sharingImageOptions.some((item) => item.value === shareImageId))
    ) {
      throw new Error(
        "The selected sharing image is unavailable. Choose a published documentary image.",
      );
    }
    if (publicationStatus === "published" && library) {
      const imageIds = ["imageId", "imageOneId", "imageTwoId", "imageThreeId", "posterId"].flatMap(
        (key) => referencedIds(validation.data, key),
      );
      const videoIds = referencedIds(validation.data, "mediaId");
      const mediaIds = [...imageIds, ...videoIds];
      if (imageIds.some((id) => !library.imageOptions.some((item) => item.value === id))) {
        throw new Error("Every selected image needs published alternative text and credit.");
      }
      if (videoIds.some((id) => !library.videoOptions.some((item) => item.value === id))) {
        throw new Error("Every selected video needs a published media credit.");
      }
      if (mediaIds.some((id) => library.assets[id]?.publicationStatus !== "published")) {
        throw new Error("Publish every selected image and video before publishing this page.");
      }
      if (
        referencedIds(validation.data, "artisanId").some(
          (id) => library.artisans[id]?.publicationStatus !== "published",
        )
      ) {
        throw new Error("Publish every selected artisan profile before publishing this page.");
      }
      if (
        referencedIds(validation.data, "shawlId").some(
          (id) => library.shawlPublicationStatus[id] !== "published",
        )
      ) {
        throw new Error("Publish every selected shawl collection before publishing this page.");
      }
      if (shareImage && shareImage.publicationStatus !== "published") {
        throw new Error("Publish the selected sharing image before publishing this page.");
      }
    }
    return {
      title: title.trim(),
      slug: { _type: "slug", current: slug },
      pageConfig: JSON.stringify(validation.data),
      publicationStatus,
      seo: {
        title: seoTitle.trim() || null,
        description: seoDescription.trim() || null,
        shareImage: shareImage
          ? {
              _type: "documentaryImage",
              asset: { _type: "reference", _ref: shareImage.assetRef },
              alt: shareImage.alt || `${title.trim()} sharing image`,
              ...(shareImage.caption ? { caption: shareImage.caption } : {}),
              credit: shareImage.credit,
            }
          : null,
      },
    };
  };

  const saveDraft = async (pageData = data) => {
    if (!canEdit) {
      setError("Your Sanity role does not allow saving visual page drafts.");
      return;
    }
    if (!page) return;
    setBusy(true);
    setError(undefined);
    try {
      const fields = makePageFields(pageData, "draft");
      const baseId = canonicalId(page._id);
      const draftId = `drafts.${baseId}`;
      const slugOwner = await client.fetch<string | null>(
        `*[_type == "visualPage" && slug.current == $slug && _id != $id && _id != $draftId][0]._id`,
        { slug, id: baseId, draftId },
      );
      if (slugOwner) throw new Error("That page path is already used by another visual page.");
      const draft = await client.getDocument<{ _rev: string }>(draftId);
      let savedRevision: string;
      if (draft) {
        const saved = await client.patch(draftId).ifRevisionId(draft._rev).set(fields).commit();
        savedRevision = saved._rev;
      } else {
        const saved = await client.create({ _id: draftId, _type: "visualPage", ...fields });
        savedRevision = saved._rev;
      }
      setPage({
        ...page,
        _id: baseId,
        _rev: savedRevision,
        title: fields.title,
        slug,
        pageConfig: fields.pageConfig,
      });
      setData(pageData);
      setStatus("Draft saved to Sanity.");
      await refreshPages();
    } catch (cause) {
      console.error("[visual pages] draft save failed", cause);
      setError(
        cause instanceof Error
          ? cause.message
          : "Draft save failed. Check your Sanity permissions and try again.",
      );
    } finally {
      setBusy(false);
    }
  };

  const publishPage = async () => {
    if (!canEdit) {
      setError("Your Sanity role does not allow publishing visual pages.");
      return;
    }
    if (!page) return;
    setBusy(true);
    setError(undefined);
    try {
      const fields = makePageFields(data, "published");
      const baseId = canonicalId(page._id);
      const draftId = `drafts.${baseId}`;
      const slugOwner = await client.fetch<string | null>(
        `*[_type == "visualPage" && slug.current == $slug && _id != $id && _id != $draftId][0]._id`,
        { slug, id: baseId, draftId },
      );
      if (slugOwner) throw new Error("That page path is already used by another visual page.");
      const [draft, published] = await Promise.all([
        client.getDocument<{ _rev: string }>(draftId),
        client.getDocument<{ _rev: string }>(baseId),
      ]);
      let transaction = client.transaction();
      if (published) {
        transaction = transaction.patch(baseId, (patch) =>
          patch.ifRevisionId(published._rev).set(fields),
        );
      } else {
        transaction = transaction.create({ _id: baseId, _type: "visualPage", ...fields });
      }
      if (draft) {
        transaction = transaction.patch(draftId, (patch) =>
          patch.ifRevisionId(draft._rev).set(fields),
        );
        transaction = transaction.delete(draftId);
      }
      await transaction.commit({ visibility: "sync" });
      const saved = await client.getDocument<PageDocument>(baseId);
      setPage({
        ...page,
        _id: baseId,
        _rev: saved?._rev ?? page._rev,
        title: fields.title,
        slug,
        pageConfig: fields.pageConfig,
        publicationStatus: "published",
      });
      setStatus("Page published. The public route now serves this approved configuration.");
      await refreshPages();
    } catch (cause) {
      console.error("[visual pages] publish failed", cause);
      setError(
        cause instanceof Error
          ? cause.message
          : "Publishing failed. Check your Sanity permissions and try again.",
      );
    } finally {
      setBusy(false);
    }
  };

  if (!currentUser) {
    return <p role="status">Sign in to Sanity Studio to manage visual pages.</p>;
  }

  if (!canEdit) {
    return (
      <div className="m-6 max-w-2xl rounded-xl border border-border bg-paper p-6">
        <h1 className="font-display text-2xl">Visual page editor access required</h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Your Sanity account is signed in, but this tool is available only to project
          Administrators and Editors. Ask the project administrator to assign the appropriate Sanity
          role. Sanity dataset permissions remain the authority for all reads and writes.
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-0 flex-col overflow-auto bg-paper">
      <header className="sticky top-0 z-20 border-b border-border bg-paper px-5 py-4">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Discovering Roots · Page editor</p>
            <h1 className="mt-1 font-display text-3xl">Visual Pages</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className="rounded border border-border px-4 py-2 text-sm"
              onClick={startNewPage}
            >
              Create page
            </button>
            {page && (
              <>
                <a
                  className={`rounded border border-border px-4 py-2 text-sm ${page._rev ? "" : "pointer-events-none opacity-50"}`}
                  href={`/pages/${encodeURIComponent(slug)}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-disabled={!page._rev}
                  title={
                    page._rev
                      ? "Open this page; draft access requires an active Studio preview session."
                      : "Save the page before opening its website route."
                  }
                >
                  Open website route
                </a>
                <button
                  type="button"
                  className="rounded border border-border px-4 py-2 text-sm disabled:opacity-50"
                  disabled={busy || invalidConfiguration || !library}
                  onClick={() => void saveDraft()}
                >
                  Save draft
                </button>
                <button
                  type="button"
                  className="rounded bg-slate px-4 py-2 text-sm text-paper disabled:opacity-50"
                  disabled={busy || invalidConfiguration || !library}
                  onClick={() => void publishPage()}
                >
                  Publish
                </button>
              </>
            )}
          </div>
        </div>
        <p className="mx-auto mt-2 max-w-[1600px] text-sm text-muted-foreground" role="status">
          {status}
        </p>
        {error && (
          <p className="mx-auto mt-2 max-w-[1600px] text-sm text-destructive" role="alert">
            {error}
          </p>
        )}
      </header>

      <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col gap-5 p-5">
        {!page ? (
          <section aria-labelledby="visual-page-list-heading">
            <h2 id="visual-page-list-heading" className="font-display text-2xl">
              Your pages
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Create a page, arrange approved sections, save it as a draft, then preview and publish
              it when ready. The existing homepage remains unchanged. To view drafts, start Website
              Preview in the Studio Presentation tool; the website route respects the authorized
              preview session.
            </p>
            {pages.length ? (
              <ul className="mt-6 divide-y divide-border border-y border-border">
                {pages.map((item) => (
                  <li
                    key={canonicalId(item._id)}
                    className="flex flex-wrap items-center justify-between gap-3 py-4"
                  >
                    <div>
                      <p className="font-medium">{item.title || "Untitled page"}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        /pages/{item.slug || "missing-path"} · {pageStatus(item)}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="rounded border border-border px-4 py-2 text-sm"
                      disabled={busy}
                      onClick={() => void openPage(item._id)}
                    >
                      Edit page
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-6 border border-dashed border-border p-6 text-sm text-muted-foreground">
                No visual pages yet. Create a page to begin; the website homepage will not be
                changed.
              </p>
            )}
          </section>
        ) : (
          <>
            <section className="grid gap-3 border-b border-border pb-5 md:grid-cols-2 lg:grid-cols-5">
              <label className="grid gap-1 text-sm">
                Page title
                <input
                  className="rounded border border-input bg-white px-3 py-2"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </label>
              <label className="grid gap-1 text-sm">
                Page path
                <input
                  className="rounded border border-input bg-white px-3 py-2"
                  value={slug}
                  onChange={(event) => setSlug(normalizeVisualPageSlug(event.target.value))}
                  aria-describedby="visual-page-path-help"
                />
                <span id="visual-page-path-help" className="text-xs text-muted-foreground">
                  Public URL: /pages/{slug || "your-page"}
                </span>
              </label>
              <label className="grid gap-1 text-sm">
                Search title
                <input
                  className="rounded border border-input bg-white px-3 py-2"
                  maxLength={70}
                  value={seoTitle}
                  onChange={(event) => setSeoTitle(event.target.value)}
                />
              </label>
              <label className="grid gap-1 text-sm">
                Search description
                <input
                  className="rounded border border-input bg-white px-3 py-2"
                  maxLength={180}
                  value={seoDescription}
                  onChange={(event) => setSeoDescription(event.target.value)}
                />
              </label>
              <label className="grid gap-1 text-sm">
                Sharing image
                <select
                  className="rounded border border-input bg-white px-3 py-2"
                  value={shareImageId}
                  onChange={(event) => setShareImageId(event.target.value)}
                >
                  <option value="">Use the page default</option>
                  {library?.sharingImageOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </section>
            {library ? (
              <div className="min-h-[700px] flex-1">
                <Puck
                  key={page._id}
                  config={puckConfig}
                  data={data}
                  metadata={puckMetadata}
                  onChange={(nextData) => {
                    setData(nextData);
                    setInvalidConfiguration(false);
                    setStatus("Unsaved changes — save draft before leaving.");
                  }}
                  onPublish={() => void saveDraft()}
                  permissions={{ publish: false }}
                  headerTitle={title || "Untitled page"}
                  headerPath={`/pages/${slug || "new-page"}`}
                  height="min(78vh, 1000px)"
                />
              </div>
            ) : (
              <p role="status">Loading the component library and media choices…</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
