import { a as stringType, r as objectType } from "../_libs/zod.mjs";
import { r as isRecord, s as parseVisualPageData } from "./journey-B_M3DgbB.mjs";
import { l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { i as setResponseHeader, t as getRequest } from "./request-response-CTjQf9X-.mjs";
import { t as createServerRpc } from "./createServerRpc-CxD4EZ5P.mjs";
import { n as readSanityEnv } from "./env-D5BOqlbE.mjs";
import { a as imageUrl, i as mapShawl, n as hasValidPreviewSession, o as createPreviewClient, r as loadSiteContent, s as createPublishedClient } from "./content.server-Bh19StYR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/visual-page.functions-BWnZpx3K.js
var VISUAL_PAGE_QUERY = `*[_type == "visualPage" && slug.current == $slug && ($preview == true || publicationStatus == "published")][0]{
  _id, title, "slug": slug.current, publicationStatus, pageConfig,
  "seo": seo{ title, description, "shareImage": shareImage{ alt, "url": asset->url } }
}`;
var PAGE_ASSETS_QUERY = `*[_type == "documentaryMedia" && (_id in $ids || _id in $draftIds) && publicationStatus != "withdrawn" && ($preview == true || publicationStatus == "published") && consentStatus in ["granted", "notApplicable"]]{
  _id, kind, alt, caption, credit, externalUrl,
  "imageUrl": image.asset->url,
  "imageAssetId": image.asset._ref,
  "imageAlt": image.alt,
  "imageCaption": image.caption,
  "imageCredit": image.credit,
  "fileUrl": file.asset->url,
  "posterUrl": poster.asset->url
}`;
var PAGE_ARTISANS_QUERY = `*[_type == "artisanProfile" && (_id in $ids || _id in $draftIds) && consentStatus == "granted" && ($preview == true || publicationStatus == "published") && publicationStatus != "withdrawn"]{
  _id, displayName, role, biography, quoteConsent,
  "quote": select(quoteConsent == true => quote),
  consentStatus, publicationStatus,
  "portraitUrl": portrait.asset->url,
  "portraitAlt": portrait.alt,
  "portraitCredit": portrait.credit
}`;
var PAGE_SHAWLS_QUERY = `*[_type == "shawl" && (_id in $ids || _id in $draftIds) && publicationStatus != "withdrawn" && ($preview == true || publicationStatus == "published")]{
  _id, title, description,
  mainImage{ asset, alt, caption, credit },
  gallery[]{ asset, alt, caption, credit },
  materials, dimensions, provenance, provenanceVerified
}`;
function referencedIds(data, key) {
	const ids = /* @__PURE__ */ new Set();
	for (const block of data.content) {
		if (!isRecord(block.props)) continue;
		const value = block.props[key];
		if (typeof value === "string" && value) ids.add(value.replace(/^drafts\./, ""));
	}
	return [...ids];
}
function pageIds(data, keys) {
	return [...new Set(keys.flatMap((key) => referencedIds(data, key)))];
}
function preferredDocuments(documents, preview) {
	const preferred = /* @__PURE__ */ new Map();
	for (const document of documents) {
		const id = document._id.replace(/^drafts\./, "");
		if (!preferred.get(id) || preview && document._id.startsWith("drafts.")) preferred.set(id, document);
	}
	return preferred;
}
function mediaUrl(raw) {
	const value = raw.imageUrl ?? raw.fileUrl ?? raw.externalUrl ?? void 0;
	if (!value) return void 0;
	try {
		const url = new URL(value);
		return url.protocol === "https:" ? url.toString() : void 0;
	} catch {
		return;
	}
}
function mapPageAsset(raw) {
	const src = mediaUrl(raw);
	if (!src) return void 0;
	const image = raw.imageUrl ? {
		src,
		alt: raw.imageAlt ?? raw.alt ?? "Documentary image",
		caption: raw.imageCaption ?? raw.caption ?? void 0,
		credit: raw.imageCredit ?? raw.credit ?? void 0
	} : void 0;
	const poster = raw.posterUrl && /^https:\/\//.test(raw.posterUrl) ? {
		src: raw.posterUrl,
		alt: raw.alt ?? "Documentary video poster"
	} : void 0;
	return {
		id: raw._id.replace(/^drafts\./, ""),
		kind: raw.kind === "video" ? "video" : "image",
		src: image?.src ?? src,
		alt: image?.alt ?? raw.alt ?? "Documentary media",
		caption: image?.caption ?? raw.caption ?? void 0,
		credit: image?.credit ?? raw.credit ?? void 0,
		assetRef: raw.imageAssetId ?? void 0,
		url: src,
		fileUrl: raw.fileUrl ?? void 0,
		externalUrl: raw.externalUrl ?? void 0,
		poster
	};
}
function mapPageArtisan(raw) {
	const portraitUrl = raw.portraitUrl && /^https:\/\//.test(raw.portraitUrl) ? raw.portraitUrl : void 0;
	return {
		id: raw._id.replace(/^drafts\./, ""),
		displayName: raw.displayName ?? void 0,
		role: raw.role ?? void 0,
		biography: raw.biography ?? void 0,
		quote: raw.quoteConsent === true ? raw.quote ?? void 0 : void 0,
		quoteConsent: raw.quoteConsent === true,
		consentStatus: raw.consentStatus ?? "pending",
		publicationStatus: raw.publicationStatus ?? "draft",
		portrait: portraitUrl ? {
			src: portraitUrl,
			alt: raw.portraitAlt ?? `Portrait of ${raw.displayName ?? "an artisan"}`,
			credit: raw.portraitCredit ?? void 0
		} : void 0
	};
}
async function loadVisualPage(options) {
	const env = options.env ?? readSanityEnv();
	if (!env.configured) return null;
	const preview = await hasValidPreviewSession(env, options.cookieHeader);
	const client = preview ? createPreviewClient(env) : createPublishedClient(env);
	const page = await client.fetch(VISUAL_PAGE_QUERY, {
		slug: options.slug,
		preview
	});
	if (!page || typeof page.title !== "string" || page.slug !== options.slug) return null;
	const data = parseVisualPageData(page.pageConfig);
	if (!data) {
		console.error("[sanity] visual page configuration is invalid", { slug: options.slug });
		return null;
	}
	const [mediaIds, artisanIds, shawlIds] = [
		pageIds(data, [
			"imageId",
			"imageOneId",
			"imageTwoId",
			"imageThreeId",
			"posterId",
			"mediaId"
		]),
		pageIds(data, ["artisanId"]),
		pageIds(data, ["shawlId"])
	];
	const draftIds = [
		...mediaIds,
		...artisanIds,
		...shawlIds
	].map((id) => `drafts.${id}`);
	const [rawMedia, rawArtisans, rawShawls, siteContent] = await Promise.all([
		mediaIds.length ? client.fetch(PAGE_ASSETS_QUERY, {
			ids: mediaIds,
			draftIds,
			preview
		}) : Promise.resolve([]),
		artisanIds.length ? client.fetch(PAGE_ARTISANS_QUERY, {
			ids: artisanIds,
			draftIds,
			preview
		}) : Promise.resolve([]),
		shawlIds.length ? client.fetch(PAGE_SHAWLS_QUERY, {
			ids: shawlIds,
			draftIds,
			preview
		}) : Promise.resolve([]),
		loadSiteContent({
			cookieHeader: options.cookieHeader ?? null,
			env
		})
	]);
	const selectedMedia = preferredDocuments(rawMedia, preview);
	const selectedArtisans = preferredDocuments(rawArtisans, preview);
	const selectedShawls = preferredDocuments(rawShawls, preview);
	const assets = Object.fromEntries([...selectedMedia.values()].flatMap((raw) => {
		const asset = mapPageAsset(raw);
		return asset ? [[asset.id, asset]] : [];
	}));
	const artisans = Object.fromEntries([...selectedArtisans.values()].map((raw) => {
		const artisan = mapPageArtisan(raw);
		return [artisan.id, artisan];
	}));
	const shawls = Object.fromEntries(shawlIds.flatMap((id) => {
		const raw = selectedShawls.get(id);
		if (!raw) return [];
		const shawl = mapShawl(raw, (img, width) => imageUrl(env, img, width));
		return shawl ? [[id, shawl]] : [];
	}));
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
			preview
		},
		seo: page.seo ?? {}
	};
}
var getVisualPage_createServerFn_handler = createServerRpc({
	id: "b5893fe778d5a15e64d15f8a95594b2dd143a7130bd9be73e9572e40724fe5c7",
	name: "getVisualPage",
	filename: "src/lib/visual-page.functions.ts"
}, (opts) => getVisualPage.__executeServer(opts));
var getVisualPage = createServerFn({ method: "GET" }).validator(objectType({ slug: stringType().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/) })).handler(getVisualPage_createServerFn_handler, async ({ data }) => {
	setResponseHeader("Cache-Control", "private, no-store, max-age=0");
	setResponseHeader("Pragma", "no-cache");
	setResponseHeader("Vary", "Cookie");
	const page = await loadVisualPage({
		slug: data.slug,
		cookieHeader: getRequest().headers.get("cookie")
	});
	return JSON.stringify(page);
});
//#endregion
export { getVisualPage_createServerFn_handler };
