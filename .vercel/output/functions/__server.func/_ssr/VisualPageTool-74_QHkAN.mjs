import { o as __toESM } from "../_runtime.mjs";
import { d as validateVisualPageData, i as isValidVisualPageSlug, n as emptyVisualPageData, o as normalizeVisualPageSlug, r as isRecord, s as parseVisualPageData } from "./journey-B_M3DgbB.mjs";
import { i as require_react } from "../_libs/dnd-kit__accessibility+react.mjs";
import { o as require_jsx_runtime } from "../_libs/dnd-kit__react+react.mjs";
import { t as getSiteContent } from "./content.functions-CpNu_vv6.mjs";
import { n as createVisualPageConfig, t as createPuckPageMetadata } from "./components-BlQRDkPd.mjs";
import { o as useClient, s as useCurrentUser } from "../_libs/sanity+[...].mjs";
import { n as Puck } from "../_libs/@puckeditor/core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/VisualPageTool-74_QHkAN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EDITORIAL_WRITE_ROLES = /* @__PURE__ */ new Set(["administrator", "editor"]);
function hasEditorialWriteAccess(user) {
	return user?.roles.some(({ name }) => EDITORIAL_WRITE_ROLES.has(name)) ?? false;
}
var API_VERSION = "2025-02-19";
var PAGE_LIST_QUERY = `*[_type == "visualPage"] | order(_updatedAt desc){
  _id, _rev, title, "slug": slug.current, publicationStatus, _updatedAt
}`;
var MEDIA_QUERY = `*[_type == "documentaryMedia" && publicationStatus in ["draft", "published"] && consentStatus in ["granted", "notApplicable"] && kind in ["image", "video"] && defined(select(kind == "image" => image.asset, kind == "video" => coalesce(file.asset, externalUrl)))] | order(_id match "drafts.*" asc){
  _id, title, kind, alt, caption, credit, externalUrl, publicationStatus,
  "imageAssetId": image.asset._ref,
  "imageUrl": image.asset->url,
  "fileUrl": file.asset->url,
  "imageAlt": image.alt,
  "imageCaption": image.caption,
  "imageCredit": image.credit,
  "posterUrl": poster.asset->url
}`;
var ARTISANS_QUERY = `*[_type == "artisanProfile" && publicationStatus in ["draft", "published"] && consentStatus == "granted"] | order(_id match "drafts.*" asc){
  _id, displayName, role, biography, quote, quoteConsent, publicationStatus,
  "portraitUrl": portrait.asset->url,
  "portraitAlt": portrait.alt,
  "portraitCredit": portrait.credit
}`;
var SHAWLS_QUERY = `*[_type == "shawl" && publicationStatus in ["draft", "published"]] | order(_id match "drafts.*" asc){
  _id, title, description, materials, dimensions, provenance, provenanceVerified, publicationStatus,
  "imageUrl": mainImage.asset->url,
  "imageAlt": mainImage.alt,
  "imageCaption": mainImage.caption,
  "imageCredit": mainImage.credit,
  "gallery": gallery[]{ "url": asset->url, alt, caption, credit }
}`;
function canonicalId(id) {
	return id.replace(/^drafts\./, "");
}
function pageSlugFromTitle(title) {
	return normalizeVisualPageSlug(title) || "new-page";
}
function pageStatus(page) {
	return page._id.startsWith("drafts.") || page.publicationStatus !== "published" ? "Draft" : "Published";
}
function imageUrl(value) {
	if (!value) return void 0;
	try {
		const url = new URL(value);
		return url.protocol === "https:" ? url.toString() : void 0;
	} catch {
		return;
	}
}
function buildLibrary(media, artisanRows, shawlRows, chapters) {
	const uniqueRows = (rows) => {
		const grouped = /* @__PURE__ */ new Map();
		for (const row of rows) {
			const id = canonicalId(row._id);
			if (!grouped.get(id) || row._id.startsWith("drafts.")) grouped.set(id, row);
		}
		return [...grouped.values()];
	};
	const selectedMedia = uniqueRows(media);
	const selectedArtisans = uniqueRows(artisanRows);
	const selectedShawls = uniqueRows(shawlRows);
	const assets = Object.fromEntries(selectedMedia.flatMap((row) => {
		const source = imageUrl(row.imageUrl ?? row.fileUrl ?? row.externalUrl ?? void 0);
		if (!source) return [];
		const asset = {
			id: canonicalId(row._id),
			kind: row.kind,
			publicationStatus: row.publicationStatus === "published" && !row._id.startsWith("drafts.") ? "published" : "draft",
			src: source,
			alt: row.imageAlt ?? row.alt ?? "Documentary media",
			caption: row.imageCaption ?? row.caption ?? void 0,
			credit: row.imageCredit ?? row.credit ?? void 0,
			url: source,
			assetRef: row.imageAssetId ?? void 0,
			fileUrl: imageUrl(row.fileUrl),
			externalUrl: imageUrl(row.externalUrl ?? void 0),
			poster: imageUrl(row.posterUrl) ? {
				src: imageUrl(row.posterUrl),
				alt: "Documentary video poster"
			} : void 0
		};
		return [[asset.id, asset]];
	}));
	const imageOptions = selectedMedia.filter((row) => row.kind === "image" && !!row.imageAssetId && !!(row.imageAlt?.trim() || row.alt?.trim()) && !!(row.imageCredit?.trim() || row.credit?.trim()) && !!assets[canonicalId(row._id)]).map((row) => ({
		label: row.title?.trim() || row.alt?.trim() || "Documentary image",
		value: canonicalId(row._id)
	}));
	const sharingImageOptions = selectedMedia.flatMap((row) => row.kind === "image" && row.imageAssetId && (row.imageAlt?.trim() || row.alt?.trim()) && (row.imageCredit?.trim() || row.credit?.trim()) && assets[canonicalId(row._id)] ? [{
		label: row.title?.trim() || row.alt?.trim() || "Documentary image",
		value: row.imageAssetId
	}] : []);
	const videoOptions = selectedMedia.filter((row) => row.kind === "video" && !!row.credit?.trim() && !!assets[canonicalId(row._id)]).map((row) => ({
		label: row.title?.trim() || row.caption?.trim() || "Documentary video",
		value: canonicalId(row._id)
	}));
	const artisans = Object.fromEntries(selectedArtisans.map((row) => {
		const id = canonicalId(row._id);
		const portraitSrc = imageUrl(row.portraitUrl);
		return [id, {
			id,
			...row.displayName ? { displayName: row.displayName } : {},
			...row.role ? { role: row.role } : {},
			...row.biography ? { biography: row.biography } : {},
			...row.quoteConsent === true && row.quote ? { quote: row.quote } : {},
			quoteConsent: row.quoteConsent === true,
			consentStatus: "granted",
			publicationStatus: row.publicationStatus === "draft" || row._id.startsWith("drafts.") ? "draft" : "published",
			portrait: portraitSrc ? {
				src: portraitSrc,
				alt: row.portraitAlt ?? `Portrait of ${row.displayName ?? "an artisan"}`,
				credit: row.portraitCredit
			} : void 0
		}];
	}));
	const shawls = Object.fromEntries(selectedShawls.flatMap((row) => {
		if (!row.title?.trim()) return [];
		const src = imageUrl(row.imageUrl);
		const shawl = {
			title: row.title,
			description: row.description,
			mainImage: src ? {
				src,
				alt: row.imageAlt ?? `${row.title} — full drape`,
				caption: row.imageCaption,
				credit: row.imageCredit
			} : void 0,
			gallery: (row.gallery ?? []).flatMap((image) => {
				const galleryUrl = imageUrl(image.url ?? void 0);
				return galleryUrl ? [{
					src: galleryUrl,
					alt: image.alt ?? `${row.title} detail`,
					caption: image.caption ?? void 0,
					credit: image.credit ?? void 0
				}] : [];
			}),
			materials: row.materials ?? [],
			dimensions: row.dimensions,
			provenance: row.provenance,
			provenanceVerified: row.provenanceVerified === true
		};
		return [[canonicalId(row._id), shawl]];
	}));
	const shawlPublicationStatus = Object.fromEntries(selectedShawls.map((row) => [canonicalId(row._id), row.publicationStatus === "published" && !row._id.startsWith("drafts.") ? "published" : "draft"]));
	return {
		imageOptions,
		sharingImageOptions,
		videoOptions,
		artisanOptions: selectedArtisans.map((row) => ({
			label: [row.displayName, row.role].filter(Boolean).join(" — ") || "Consented artisan",
			value: canonicalId(row._id)
		})),
		shawlOptions: selectedShawls.map((row) => ({
			label: row.title,
			value: canonicalId(row._id)
		})),
		assets,
		artisans,
		shawls,
		shawlPublicationStatus,
		chapters
	};
}
function referencedIds(data, key) {
	const references = /* @__PURE__ */ new Set();
	for (const block of data.content) {
		if (!isRecord(block.props)) continue;
		const value = block.props[key];
		if (typeof value === "string" && value) references.add(canonicalId(value));
	}
	return [...references];
}
function VisualPageTool(_props) {
	const client = useClient({ apiVersion: API_VERSION }).withConfig({
		perspective: "raw",
		useCdn: false
	});
	const currentUser = useCurrentUser();
	const canEdit = hasEditorialWriteAccess(currentUser);
	const [pages, setPages] = (0, import_react.useState)([]);
	const [library, setLibrary] = (0, import_react.useState)();
	const [page, setPage] = (0, import_react.useState)();
	const [data, setData] = (0, import_react.useState)(emptyVisualPageData);
	const [title, setTitle] = (0, import_react.useState)("");
	const [slug, setSlug] = (0, import_react.useState)("");
	const [seoTitle, setSeoTitle] = (0, import_react.useState)("");
	const [seoDescription, setSeoDescription] = (0, import_react.useState)("");
	const [shareImageId, setShareImageId] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("Choose a page or create a new one.");
	const [error, setError] = (0, import_react.useState)();
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [invalidConfiguration, setInvalidConfiguration] = (0, import_react.useState)(false);
	const refreshPages = (0, import_react.useCallback)(async () => {
		const result = await client.fetch(PAGE_LIST_QUERY);
		const unique = /* @__PURE__ */ new Map();
		for (const item of result) {
			const id = canonicalId(item._id);
			if (!unique.get(id) || item._id.startsWith("drafts.")) unique.set(id, item);
		}
		setPages([...unique.values()]);
	}, [client]);
	const refreshLibrary = (0, import_react.useCallback)(async () => {
		const [media, artisans, shawls, serializedContent] = await Promise.all([
			client.fetch(MEDIA_QUERY),
			client.fetch(ARTISANS_QUERY),
			client.fetch(SHAWLS_QUERY),
			getSiteContent({ data: { scope: "published" } })
		]);
		const content = JSON.parse(serializedContent);
		setLibrary(buildLibrary(media, artisans, shawls, content.chapters));
	}, [client]);
	(0, import_react.useEffect)(() => {
		if (!canEdit) return;
		let active = true;
		Promise.all([refreshPages(), refreshLibrary()]).catch((cause) => {
			if (!active) return;
			console.error("[visual pages] Studio content load failed", cause);
			setError("Could not load pages or media from Sanity. Check your Studio dataset access and retry.");
		});
		return () => {
			active = false;
		};
	}, [
		canEdit,
		refreshPages,
		refreshLibrary
	]);
	const puckConfig = (0, import_react.useMemo)(() => createVisualPageConfig(library?.imageOptions ?? [], library?.videoOptions ?? [], library?.artisanOptions ?? [], library?.shawlOptions ?? [], library?.chapters.map((chapter) => ({
		label: `${chapter.number}. ${chapter.title}`,
		value: String(chapter.number)
	})) ?? []), [library]);
	const puckMetadata = (0, import_react.useMemo)(() => createPuckPageMetadata(library?.assets ?? {}, library?.artisans ?? {}, library?.chapters ?? [], library?.shawls ?? {}, true), [library]);
	const openPage = (0, import_react.useCallback)(async (id) => {
		setBusy(true);
		setError(void 0);
		try {
			const baseId = canonicalId(id);
			const [draft, published] = await Promise.all([client.getDocument(`drafts.${baseId}`), client.getDocument(baseId)]);
			const selected = draft ?? published;
			if (!selected) {
				setError("That page no longer exists. Refresh the page list and try again.");
				return;
			}
			const parsed = parseVisualPageData(selected.pageConfig);
			const invalid = !!selected.pageConfig && !parsed;
			if (selected.pageConfig && !parsed) setError("This page has invalid Puck data. The editor did not load it; repair the stored configuration before saving.");
			setInvalidConfiguration(invalid);
			setPage({
				...selected,
				_id: baseId
			});
			setData(parsed ?? emptyVisualPageData);
			setTitle(selected.title ?? "");
			setSlug(selected.slug ?? "");
			setSeoTitle(selected.seo?.title ?? "");
			setSeoDescription(selected.seo?.description ?? "");
			const shareRef = selected.seo?.shareImage;
			setShareImageId(typeof shareRef === "object" && shareRef !== null && "asset" in shareRef && typeof shareRef.asset === "object" && shareRef.asset !== null && "_ref" in shareRef.asset && typeof shareRef.asset._ref === "string" ? shareRef.asset._ref : "");
			setStatus(`${pageStatus(selected)} page loaded.`);
		} catch (cause) {
			console.error("[visual pages] page load failed", cause);
			setError("Could not load this page from Sanity. Check your dataset permissions and retry.");
		} finally {
			setBusy(false);
		}
	}, [client]);
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
			pageConfig: JSON.stringify(emptyVisualPageData)
		});
		setTitle(newTitle);
		setSlug(pageSlugFromTitle(newTitle));
		setSeoTitle("");
		setSeoDescription("");
		setShareImageId("");
		setData(emptyVisualPageData);
		setError(void 0);
		setInvalidConfiguration(false);
		setStatus("New page — save a draft before previewing.");
	};
	const makePageFields = (pageData, publicationStatus) => {
		const validation = validateVisualPageData(pageData);
		if (!validation.success) throw new Error(validation.issues.join(" "));
		if (publicationStatus === "published" && validation.data.content.length === 0) throw new Error("Add at least one approved section before publishing this page.");
		if (publicationStatus === "published" && !library) throw new Error("Wait for the Sanity content library to load before publishing.");
		if (!title.trim()) throw new Error("Add a page title before saving.");
		if (!isValidVisualPageSlug(slug)) throw new Error("Use a lowercase, hyphen-separated page path (reserved paths are not allowed).");
		const shareImage = shareImageId ? Object.values(library?.assets ?? {}).find((asset) => asset.assetRef === shareImageId) : void 0;
		if (shareImageId && (!shareImage?.assetRef || !shareImage.credit?.trim() || !library?.sharingImageOptions.some((item) => item.value === shareImageId))) throw new Error("The selected sharing image is unavailable. Choose a published documentary image.");
		if (publicationStatus === "published" && library) {
			const imageIds = [
				"imageId",
				"imageOneId",
				"imageTwoId",
				"imageThreeId",
				"posterId"
			].flatMap((key) => referencedIds(validation.data, key));
			const videoIds = referencedIds(validation.data, "mediaId");
			const mediaIds = [...imageIds, ...videoIds];
			if (imageIds.some((id) => !library.imageOptions.some((item) => item.value === id))) throw new Error("Every selected image needs published alternative text and credit.");
			if (videoIds.some((id) => !library.videoOptions.some((item) => item.value === id))) throw new Error("Every selected video needs a published media credit.");
			if (mediaIds.some((id) => library.assets[id]?.publicationStatus !== "published")) throw new Error("Publish every selected image and video before publishing this page.");
			if (referencedIds(validation.data, "artisanId").some((id) => library.artisans[id]?.publicationStatus !== "published")) throw new Error("Publish every selected artisan profile before publishing this page.");
			if (referencedIds(validation.data, "shawlId").some((id) => library.shawlPublicationStatus[id] !== "published")) throw new Error("Publish every selected shawl collection before publishing this page.");
			if (shareImage && shareImage.publicationStatus !== "published") throw new Error("Publish the selected sharing image before publishing this page.");
		}
		return {
			title: title.trim(),
			slug: {
				_type: "slug",
				current: slug
			},
			pageConfig: JSON.stringify(validation.data),
			publicationStatus,
			seo: {
				title: seoTitle.trim() || null,
				description: seoDescription.trim() || null,
				shareImage: shareImage ? {
					_type: "documentaryImage",
					asset: {
						_type: "reference",
						_ref: shareImage.assetRef
					},
					alt: shareImage.alt || `${title.trim()} sharing image`,
					...shareImage.caption ? { caption: shareImage.caption } : {},
					credit: shareImage.credit
				} : null
			}
		};
	};
	const saveDraft = async (pageData = data) => {
		if (!canEdit) {
			setError("Your Sanity role does not allow saving visual page drafts.");
			return;
		}
		if (!page) return;
		setBusy(true);
		setError(void 0);
		try {
			const fields = makePageFields(pageData, "draft");
			const baseId = canonicalId(page._id);
			const draftId = `drafts.${baseId}`;
			if (await client.fetch(`*[_type == "visualPage" && slug.current == $slug && _id != $id && _id != $draftId][0]._id`, {
				slug,
				id: baseId,
				draftId
			})) throw new Error("That page path is already used by another visual page.");
			const draft = await client.getDocument(draftId);
			let savedRevision;
			if (draft) savedRevision = (await client.patch(draftId).ifRevisionId(draft._rev).set(fields).commit())._rev;
			else savedRevision = (await client.create({
				_id: draftId,
				_type: "visualPage",
				...fields
			}))._rev;
			setPage({
				...page,
				_id: baseId,
				_rev: savedRevision,
				title: fields.title,
				slug,
				pageConfig: fields.pageConfig
			});
			setData(pageData);
			setStatus("Draft saved to Sanity.");
			await refreshPages();
		} catch (cause) {
			console.error("[visual pages] draft save failed", cause);
			setError(cause instanceof Error ? cause.message : "Draft save failed. Check your Sanity permissions and try again.");
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
		setError(void 0);
		try {
			const fields = makePageFields(data, "published");
			const baseId = canonicalId(page._id);
			const draftId = `drafts.${baseId}`;
			if (await client.fetch(`*[_type == "visualPage" && slug.current == $slug && _id != $id && _id != $draftId][0]._id`, {
				slug,
				id: baseId,
				draftId
			})) throw new Error("That page path is already used by another visual page.");
			const [draft, published] = await Promise.all([client.getDocument(draftId), client.getDocument(baseId)]);
			let transaction = client.transaction();
			if (published) transaction = transaction.patch(baseId, (patch) => patch.ifRevisionId(published._rev).set(fields));
			else transaction = transaction.create({
				_id: baseId,
				_type: "visualPage",
				...fields
			});
			if (draft) {
				transaction = transaction.patch(draftId, (patch) => patch.ifRevisionId(draft._rev).set(fields));
				transaction = transaction.delete(draftId);
			}
			await transaction.commit({ visibility: "sync" });
			const saved = await client.getDocument(baseId);
			setPage({
				...page,
				_id: baseId,
				_rev: saved?._rev ?? page._rev,
				title: fields.title,
				slug,
				pageConfig: fields.pageConfig,
				publicationStatus: "published"
			});
			setStatus("Page published. The public route now serves this approved configuration.");
			await refreshPages();
		} catch (cause) {
			console.error("[visual pages] publish failed", cause);
			setError(cause instanceof Error ? cause.message : "Publishing failed. Check your Sanity permissions and try again.");
		} finally {
			setBusy(false);
		}
	};
	if (!currentUser) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		role: "status",
		children: "Sign in to Sanity Studio to manage visual pages."
	});
	if (!canEdit) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "m-6 max-w-2xl rounded-xl border border-border bg-paper p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-2xl",
			children: "Visual page editor access required"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm leading-6 text-muted-foreground",
			children: "Your Sanity account is signed in, but this tool is available only to project Administrators and Editors. Ask the project administrator to assign the appropriate Sanity role. Sanity dataset permissions remain the authority for all reads and writes."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col overflow-auto bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "sticky top-0 z-20 border-b border-border bg-paper px-5 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1600px] flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Discovering Roots · Page editor"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 font-display text-3xl",
						children: "Visual Pages"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "rounded border border-border px-4 py-2 text-sm",
							onClick: startNewPage,
							children: "Create page"
						}), page && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: `rounded border border-border px-4 py-2 text-sm ${page._rev ? "" : "pointer-events-none opacity-50"}`,
								href: `/pages/${encodeURIComponent(slug)}`,
								target: "_blank",
								rel: "noreferrer",
								"aria-disabled": !page._rev,
								title: page._rev ? "Open this page; draft access requires an active Studio preview session." : "Save the page before opening its website route.",
								children: "Open website route"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "rounded border border-border px-4 py-2 text-sm disabled:opacity-50",
								disabled: busy || invalidConfiguration || !library,
								onClick: () => void saveDraft(),
								children: "Save draft"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "rounded bg-slate px-4 py-2 text-sm text-paper disabled:opacity-50",
								disabled: busy || invalidConfiguration || !library,
								onClick: () => void publishPage(),
								children: "Publish"
							})
						] })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-2 max-w-[1600px] text-sm text-muted-foreground",
					role: "status",
					children: status
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-2 max-w-[1600px] text-sm text-destructive",
					role: "alert",
					children: error
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex w-full max-w-[1600px] flex-1 flex-col gap-5 p-5",
			children: !page ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-labelledby": "visual-page-list-heading",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "visual-page-list-heading",
						className: "font-display text-2xl",
						children: "Your pages"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm text-muted-foreground",
						children: "Create a page, arrange approved sections, save it as a draft, then preview and publish it when ready. The existing homepage remains unchanged. To view drafts, start Website Preview in the Studio Presentation tool; the website route respects the authorized preview session."
					}),
					pages.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 divide-y divide-border border-y border-border",
						children: pages.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex flex-wrap items-center justify-between gap-3 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: item.title || "Untitled page"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: [
									"/pages/",
									item.slug || "missing-path",
									" · ",
									pageStatus(item)
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "rounded border border-border px-4 py-2 text-sm",
								disabled: busy,
								onClick: () => void openPage(item._id),
								children: "Edit page"
							})]
						}, canonicalId(item._id)))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 border border-dashed border-border p-6 text-sm text-muted-foreground",
						children: "No visual pages yet. Create a page to begin; the website homepage will not be changed."
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-3 border-b border-border pb-5 md:grid-cols-2 lg:grid-cols-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-1 text-sm",
						children: ["Page title", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "rounded border border-input bg-white px-3 py-2",
							value: title,
							onChange: (event) => setTitle(event.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-1 text-sm",
						children: [
							"Page path",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "rounded border border-input bg-white px-3 py-2",
								value: slug,
								onChange: (event) => setSlug(normalizeVisualPageSlug(event.target.value)),
								"aria-describedby": "visual-page-path-help"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								id: "visual-page-path-help",
								className: "text-xs text-muted-foreground",
								children: ["Public URL: /pages/", slug || "your-page"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-1 text-sm",
						children: ["Search title", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "rounded border border-input bg-white px-3 py-2",
							maxLength: 70,
							value: seoTitle,
							onChange: (event) => setSeoTitle(event.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-1 text-sm",
						children: ["Search description", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "rounded border border-input bg-white px-3 py-2",
							maxLength: 180,
							value: seoDescription,
							onChange: (event) => setSeoDescription(event.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-1 text-sm",
						children: ["Sharing image", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: "rounded border border-input bg-white px-3 py-2",
							value: shareImageId,
							onChange: (event) => setShareImageId(event.target.value),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Use the page default"
							}), library?.sharingImageOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: option.value,
								children: option.label
							}, option.value))]
						})]
					})
				]
			}), library ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-h-[700px] flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Puck, {
					config: puckConfig,
					data,
					metadata: puckMetadata,
					onChange: (nextData) => {
						setData(nextData);
						setInvalidConfiguration(false);
						setStatus("Unsaved changes — save draft before leaving.");
					},
					onPublish: () => void saveDraft(),
					permissions: { publish: false },
					headerTitle: title || "Untitled page",
					headerPath: `/pages/${slug || "new-page"}`,
					height: "min(78vh, 1000px)"
				}, page._id)
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "status",
				children: "Loading the component library and media choices…"
			})] })
		})]
	});
}
//#endregion
export { VisualPageTool };
