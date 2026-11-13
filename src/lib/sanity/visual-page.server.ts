import "@tanstack/react-start/server-only";

import { loadSiteContent, hasValidPreviewSession } from "./content.server";
import { createPreviewClient, createPublishedClient } from "./client";
import { readSanityEnv, type SanityEnv } from "./env";
import { imageUrl } from "./image";
import { mapShawl } from "./map";
import { parseVisualPageData } from "@/sanity/puck/data";
import type { PuckPageArtisan, PuckPageAsset, PuckPageMetadata } from "@/sanity/puck/components";
import type { CmsShawl, ShawlView } from "./types";
import { isRecord } from "@/sanity/journey";
import type { Data } from "@puckeditor/core";

const VISUAL_PAGE_QUERY = `*[_type == "visualPage" && slug.current == $slug && ($preview == true || publicationStatus == "published")][0]{
  _id, title, "slug": slug.current, publicationStatus, pageConfig,
  "seo": seo{ title, description, "shareImage": shareImage{ alt, "url": asset->url } }
}`;

const PAGE_ASSETS_QUERY = `*[_type == "documentaryMedia" && (_id in $ids || _id in $draftIds) && publicationStatus != "withdrawn" && ($preview == true || publicationStatus == "published") && consentStatus in ["granted", "notApplicable"]]{
  _id, kind, alt, caption, credit, externalUrl,
  "imageUrl": image.asset->url,
  "imageAssetId": image.asset._ref,
  "imageAlt": image.alt,
  "imageCaption": image.caption,
  "imageCredit": image.credit,
  "fileUrl": file.asset->url,
  "posterUrl": poster.asset->url
}`;

const PAGE_ARTISANS_QUERY = `*[_type == "artisanProfile" && (_id in $ids || _id in $draftIds) && consentStatus == "granted" && ($preview == true || publicationStatus == "published") && publicationStatus != "withdrawn"]{
  _id, displayName, role, biography, quoteConsent,
  "quote": select(quoteConsent == true => quote),
  consentStatus, publicationStatus,
  "portraitUrl": portrait.asset->url,
  "portraitAlt": portrait.alt,
  "portraitCredit": portrait.credit
}`;

const PAGE_SHAWLS_QUERY = `*[_type == "shawl" && (_id in $ids || _id in $draftIds) && publicationStatus != "withdrawn" && ($preview == true || publicationStatus == "published")]{
  _id, title, description,
  mainImage{ asset, alt, caption, credit },
  gallery[]{ asset, alt, caption, credit },
  materials, dimensions, provenance, provenanceVerified
}`;

export interface VisualPageView {
  title: string;
  slug: string;
  preview: boolean;
  data: Data;
  settings: Awaited<ReturnType<typeof loadSiteContent>>["settings"];
  metadata: PuckPageMetadata;
  seo: {
    title?: string;
    description?: string;
    shareImage?: { alt?: string | null; url?: string | null } | null;
  };
}

interface VisualPageDocument {
  title?: string | null;
  slug?: string | null;
  publicationStatus?: string | null;
  pageConfig?: string | null;
  seo?: VisualPageView["seo"] | null;
}

interface RawMedia {
  _id: string;
  kind?: "image" | "video" | "audio";
  alt?: string | null;
  caption?: string | null;
  credit?: string | null;
  externalUrl?: string | null;
  imageUrl?: string | null;
  imageAssetId?: string | null;
  imageAlt?: string | null;
  imageCaption?: string | null;
  imageCredit?: string | null;
  fileUrl?: string | null;
  posterUrl?: string | null;
}

interface RawArtisan {
  _id: string;
  displayName?: string | null;
  role?: string | null;
  biography?: string | null;
  quote?: string | null;
  quoteConsent?: boolean | null;
  consentStatus?: "pending" | "granted" | "withdrawn" | null;
  publicationStatus?: "draft" | "published" | "withdrawn" | null;
  portraitUrl?: string | null;
  portraitAlt?: string | null;
  portraitCredit?: string | null;
}

interface RawShawl extends CmsShawl {
  _id: string;
}

function referencedIds(data: Data, key: string): string[] {
  const ids = new Set<string>();
  for (const block of data.content) {
    if (!isRecord(block.props)) continue;
    const value = block.props[key];
    if (typeof value === "string" && value) ids.add(value.replace(/^drafts\./, ""));
  }
  return [...ids];
}

function pageIds(data: Data, keys: string[]): string[] {
  return [...new Set(keys.flatMap((key) => referencedIds(data, key)))];
}

function preferredDocuments<T extends { _id: string }>(
  documents: T[],
  preview: boolean,
): Map<string, T> {
  const preferred = new Map<string, T>();
  for (const document of documents) {
    const id = document._id.replace(/^drafts\./, "");
    const existing = preferred.get(id);
    if (!existing || (preview && document._id.startsWith("drafts."))) {
      preferred.set(id, document);
    }
  }
  return preferred;
}

function mediaUrl(raw: RawMedia): string | undefined {
  const value = raw.imageUrl ?? raw.fileUrl ?? raw.externalUrl ?? undefined;
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

function mapPageAsset(raw: RawMedia): PuckPageAsset | undefined {
  const src = mediaUrl(raw);
  if (!src) return undefined;
  const image = raw.imageUrl
    ? {
        src,
        alt: raw.imageAlt ?? raw.alt ?? "Documentary image",
        caption: raw.imageCaption ?? raw.caption ?? undefined,
        credit: raw.imageCredit ?? raw.credit ?? undefined,
      }
    : undefined;
  const poster =
    raw.posterUrl && /^https:\/\//.test(raw.posterUrl)
      ? { src: raw.posterUrl, alt: raw.alt ?? "Documentary video poster" }
      : undefined;
  return {
    id: raw._id.replace(/^drafts\./, ""),
    kind: raw.kind === "video" ? "video" : "image",
    src: image?.src ?? src,
    alt: image?.alt ?? raw.alt ?? "Documentary media",
    caption: image?.caption ?? raw.caption ?? undefined,
    credit: image?.credit ?? raw.credit ?? undefined,
    assetRef: raw.imageAssetId ?? undefined,
    url: src,
    fileUrl: raw.fileUrl ?? undefined,
    externalUrl: raw.externalUrl ?? undefined,
    poster,
  };
}

function mapPageArtisan(raw: RawArtisan): PuckPageArtisan {
  const portraitUrl =
    raw.portraitUrl && /^https:\/\//.test(raw.portraitUrl) ? raw.portraitUrl : undefined;
  return {
    id: raw._id.replace(/^drafts\./, ""),
    displayName: raw.displayName ?? undefined,
    role: raw.role ?? undefined,
    biography: raw.biography ?? undefined,
    quote: raw.quoteConsent === true ? (raw.quote ?? undefined) : undefined,
    quoteConsent: raw.quoteConsent === true,
    consentStatus: raw.consentStatus ?? "pending",
    publicationStatus: raw.publicationStatus ?? "draft",
    portrait: portraitUrl
      ? {
          src: portraitUrl,
          alt: raw.portraitAlt ?? `Portrait of ${raw.displayName ?? "an artisan"}`,
          credit: raw.portraitCredit ?? undefined,
        }
      : undefined,
  };
}

export interface LoadVisualPageOptions {
  slug: string;
  cookieHeader?: string | null;
  env?: SanityEnv;
}

export async function loadVisualPage(
  options: LoadVisualPageOptions,
): Promise<VisualPageView | null> {
  const env = options.env ?? readSanityEnv();
  if (!env.configured) return null;

  const preview = await hasValidPreviewSession(env, options.cookieHeader);
  const client = preview ? createPreviewClient(env) : createPublishedClient(env);
  const page = await client.fetch<VisualPageDocument | null>(VISUAL_PAGE_QUERY, {
    slug: options.slug,
    preview,
  });
  if (!page || typeof page.title !== "string" || page.slug !== options.slug) return null;

  const data = parseVisualPageData(page.pageConfig);
  if (!data) {
    console.error("[sanity] visual page configuration is invalid", { slug: options.slug });
    return null;
  }

  const [mediaIds, artisanIds, shawlIds] = [
    pageIds(data, ["imageId", "imageOneId", "imageTwoId", "imageThreeId", "posterId", "mediaId"]),
    pageIds(data, ["artisanId"]),
    pageIds(data, ["shawlId"]),
  ];
  const draftIds = [...mediaIds, ...artisanIds, ...shawlIds].map((id) => `drafts.${id}`);
  const [rawMedia, rawArtisans, rawShawls, siteContent] = await Promise.all([
    mediaIds.length
      ? client.fetch<RawMedia[]>(PAGE_ASSETS_QUERY, { ids: mediaIds, draftIds, preview })
      : Promise.resolve([]),
    artisanIds.length
      ? client.fetch<RawArtisan[]>(PAGE_ARTISANS_QUERY, { ids: artisanIds, draftIds, preview })
      : Promise.resolve([]),
    shawlIds.length
      ? client.fetch<RawShawl[]>(PAGE_SHAWLS_QUERY, {
          ids: shawlIds,
          draftIds,
          preview,
        })
      : Promise.resolve([]),
    loadSiteContent({ cookieHeader: options.cookieHeader ?? null, env }),
  ]);
  const selectedMedia = preferredDocuments(rawMedia, preview);
  const selectedArtisans = preferredDocuments(rawArtisans, preview);
  const selectedShawls = preferredDocuments(rawShawls, preview);
  const assets = Object.fromEntries(
    [...selectedMedia.values()].flatMap((raw) => {
      const asset = mapPageAsset(raw);
      return asset ? [[asset.id, asset]] : [];
    }),
  );
  const artisans = Object.fromEntries(
    [...selectedArtisans.values()].map((raw) => {
      const artisan = mapPageArtisan(raw);
      return [artisan.id, artisan];
    }),
  );
  const shawls = Object.fromEntries(
    shawlIds.flatMap((id) => {
      const raw = selectedShawls.get(id);
      if (!raw) return [];
      const shawl = mapShawl(raw, (img, width) => imageUrl(env, img, width));
      return shawl ? [[id, shawl]] : [];
    }),
  );

  return {
    title: page.title,
    slug: page.slug,
    preview,
    data,
    settings: siteContent.settings,
    metadata: {
      assets,
      artisans,
      chapters: siteContent.chapters,
      shawls,
      preview,
    },
    seo: page.seo ?? {},
  };
}
