import { t as chapters } from "./chapters-C_aVntiJ.mjs";
import { n as demoSettings, t as PLACEHOLDER_CONTACT } from "./demo-content-BiMKquFk.mjs";
import { t as createClient } from "../_libs/@sanity/client+[...].mjs";
import { t as createImageUrlBuilder } from "../_libs/sanity__image-url.mjs";
import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as readSanityEnv } from "./env-D5BOqlbE.mjs";
import { a as verifyPreviewToken, i as readCookie, t as PREVIEW_COOKIE } from "./preview-token-DOGF0mBG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content.server-Bh19StYR.js
/** Public client: published documents only, uncached, and no token. */
function createPublishedClient(env) {
	return createClient({
		projectId: env.projectId,
		dataset: env.dataset,
		apiVersion: env.apiVersion,
		useCdn: false,
		perspective: "published"
	});
}
/**
* Authenticated preview client: includes drafts. Server-only — uses the
* viewer token. Only call after the preview cookie has been verified.
*/
function createPreviewClient(env) {
	if (!env.readToken) throw new Error("SANITY_API_READ_TOKEN is required for preview");
	return createClient({
		projectId: env.projectId,
		dataset: env.dataset,
		apiVersion: env.apiVersion,
		useCdn: false,
		token: env.readToken,
		perspective: "drafts"
	});
}
/** Builds a sized CDN URL for a Sanity image, or undefined if no asset is set. */
function imageUrl(env, img, width = 1400) {
	if (!img?.asset?._ref) return void 0;
	try {
		return createImageUrlBuilder({
			projectId: env.projectId,
			dataset: env.dataset
		}).image({ asset: { _ref: img.asset._ref } }).width(width).fit("max").auto("format").url();
	} catch {
		return;
	}
}
/** Pure mapping from raw CMS documents to view models. Enforces consent rules. */
var s = (v) => v && v.trim() ? v.trim() : void 0;
function safeMediaUrl(value) {
	const url = s(value);
	if (!url) return void 0;
	try {
		const parsed = new URL(url);
		return parsed.protocol === "http:" || parsed.protocol === "https:" ? parsed.toString() : void 0;
	} catch {
		return;
	}
}
function safeLink(value, allowMailto = false) {
	const href = s(value);
	if (!href) return void 0;
	if (href.startsWith("#")) return href.length > 1 ? href : void 0;
	if (href.startsWith("/") && !href.startsWith("//")) return href;
	try {
		const parsed = new URL(href);
		if (parsed.protocol === "https:" || parsed.protocol === "http:" || allowMailto && parsed.protocol === "mailto:") return parsed.toString();
	} catch {
		return;
	}
}
function mapImage(img, urlFor, fallbackAlt, width) {
	if (!img) return void 0;
	const src = urlFor(img, width);
	if (!src) return void 0;
	return {
		src,
		alt: s(img.alt) ?? fallbackAlt,
		caption: s(img.caption),
		credit: s(img.credit)
	};
}
/** Only explicitly published, consented profiles and separately consented quotes are shown. */
function mapArtisanPortrait(a, urlFor, preview = false) {
	if (!a || a.publicationStatus !== "published" && !preview || a.publicationStatus === "withdrawn" || a.consentStatus !== "granted") return void 0;
	const img = mapImage(a.portrait, urlFor, `Portrait of ${s(a.displayName) ?? "an artisan"}`, 600);
	const name = s(a.displayName);
	const role = [name, s(a.role)].filter(Boolean).join(" — ") || "Artisan";
	return {
		src: img?.src,
		alt: img?.alt ?? `Portrait of ${name ?? "an artisan"}`,
		role,
		voice: a.quoteConsent === true ? s(a.quote) : void 0,
		credit: img?.credit ?? s(a.credit)
	};
}
var isFileVideo = (url) => /\.(mp4|webm|mov|m4v)(\?|$)/i.test(url);
function mapChapter(c, urlFor, preview = false) {
	const n = c.stepNumber;
	if (!n || n < 1 || n > 8 || !s(c.title)) return null;
	if (!preview && (c.publicationStatus !== "published" || c.artisanReviewStatus !== "verified")) return null;
	const fallback = chapters[n - 1];
	const hero = mapImage(c.heroImage, urlFor, `${c.title} — documentary image`);
	const video = c.documentaryVideo;
	const videoUrl = safeMediaUrl(video?.fileUrl) ?? safeMediaUrl(video?.externalUrl);
	const media = videoUrl ? {
		kind: "video",
		src: video?.fileUrl || isFileVideo(videoUrl) ? videoUrl : void 0,
		externalUrl: video?.fileUrl || isFileVideo(videoUrl) ? void 0 : videoUrl,
		alt: s(video?.transcript) ? `Documentary clip: ${c.title}` : `Documentary clip: ${c.title}`,
		credit: s(video?.credit),
		poster: hero?.src
	} : {
		kind: hero || preview ? "image" : fallback.media.kind,
		src: hero?.src,
		alt: hero?.alt ?? (preview ? `No documentary image provided in this draft for ${c.title}` : fallback.media.alt),
		credit: hero?.credit
	};
	const portrait = (c.artisans ?? []).map((a) => mapArtisanPortrait(a, urlFor, preview)).find(Boolean);
	const audioUrl = safeMediaUrl(c.audio?.fileUrl) ?? safeMediaUrl(c.audio?.externalUrl);
	return {
		id: s(c.slug) ?? fallback.id,
		number: n,
		zone: c.phase === "onLoom" ? "at" : c.phase === "preLoom" ? "before" : n <= 5 ? "before" : "at",
		title: c.title.trim(),
		kicker: s(c.shortLabel) ?? s(c.eyebrow) ?? (preview ? "Label not provided in this draft." : fallback.kicker),
		story: s(c.intro) ?? (preview ? "Story not provided in this draft." : fallback.story),
		body: c.body && c.body.length ? c.body : void 0,
		caption: s(video?.caption) ?? hero?.caption ?? (preview ? "Documentary caption not provided in this draft." : fallback.caption),
		media,
		portrait,
		audio: audioUrl ? {
			src: audioUrl,
			label: s(c.audio?.caption) ?? "Field recording"
		} : void 0,
		toolsAndMaterials: c.toolsAndMaterials?.filter(Boolean) ?? void 0,
		locationLabel: s(c.locationLabel),
		verified: c.artisanReviewStatus === "verified"
	};
}
/** Public content requires eight verified steps; editorial preview can inspect a partial set. */
function mapChapters(raw, urlFor, preview = false) {
	const sorted = [...(raw ?? []).map((c) => mapChapter(c, urlFor, preview)).filter((c) => c !== null)].sort((a, b) => a.number - b.number);
	const unique = sorted.filter((chapter, index) => index === 0 || sorted[index - 1]?.number !== chapter.number);
	if (preview) return unique;
	return unique.length === 8 && unique.every((c, i) => c.number === i + 1) ? unique : null;
}
function mapSettings(raw, urlFor) {
	if (!raw) return demoSettings;
	const d = demoSettings;
	const email = s(raw.contact?.email);
	const cta = raw.preservationCta;
	const href = safeLink(cta?.buttonHref, true) ?? (email ? `mailto:${email}?subject=Becoming%20a%20Patron%20of%20the%20Craft` : d.cta.buttonHref);
	const nav = (raw.navigation ?? []).flatMap((n) => s(n.label) && safeLink(n.href) ? [{
		label: s(n.label),
		href: safeLink(n.href)
	}] : []);
	return {
		brandName: s(raw.brandName) ?? d.brandName,
		tagline: s(raw.tagline) ?? d.tagline,
		hero: {
			eyebrow: s(raw.hero?.eyebrow) ?? d.hero.eyebrow,
			title: s(raw.hero?.title) ?? d.hero.title,
			titleEmphasis: raw.hero?.title ? s(raw.hero?.titleEmphasis) ?? "" : d.hero.titleEmphasis,
			intro: s(raw.hero?.intro) ?? d.hero.intro,
			ctaLabel: s(raw.hero?.ctaLabel) ?? d.hero.ctaLabel,
			image: mapImage(raw.hero?.image, urlFor, "Landscape of the Changthang plateau", 2200)
		},
		navigation: nav.length ? nav : d.navigation,
		cta: {
			eyebrow: s(cta?.eyebrow) ?? d.cta.eyebrow,
			heading: s(cta?.heading) ?? d.cta.heading,
			body: s(cta?.body) ?? d.cta.body,
			statement: s(cta?.statement) ?? d.cta.statement,
			buttonLabel: s(cta?.buttonLabel) ?? d.cta.buttonLabel,
			buttonHref: href,
			impactNote: s(cta?.impactNote) ?? d.cta.impactNote,
			isPlaceholderContact: href.includes(PLACEHOLDER_CONTACT)
		},
		footerText: s(raw.footer?.text) ?? d.footerText,
		contactEmail: email,
		socialLinks: (raw.socialLinks ?? []).flatMap((l) => s(l.platform) && safeLink(l.url) ? [{
			label: s(l.platform),
			href: safeLink(l.url)
		}] : [])
	};
}
function mapShawl(raw, urlFor) {
	if (!raw || !s(raw.title)) return null;
	return {
		title: raw.title.trim(),
		description: s(raw.description),
		mainImage: mapImage(raw.mainImage, urlFor, `${raw.title} — full drape`, 1800),
		gallery: (raw.gallery ?? []).map((g) => mapImage(g, urlFor, `${raw.title} — detail`, 800)).filter((g) => !!g),
		materials: raw.materials?.filter(Boolean) ?? [],
		dimensions: s(raw.dimensions),
		provenance: s(raw.provenance),
		provenanceVerified: raw.provenanceVerified === true
	};
}
/** GROQ queries. Image projections keep `asset` (for the URL builder) plus alt/caption/credit. */
var IMAGE = `{ asset, alt, caption, credit }`;
var MEDIA = `{ mediaType, externalUrl, caption, credit, transcript, "fileUrl": file.asset->url }`;
var HOMEPAGE_QUERY = `{
  "chapters": ${`*[_type == "journeyChapter" && defined(stepNumber) && ($preview == true || (publicationStatus == "published" && artisanReviewStatus == "verified"))] | order(stepNumber asc)[0...8]{
  _id, title, "slug": slug.current, stepNumber, phase, shortLabel, eyebrow, intro,
  body[]{ ..., _type == "accessibleImage" => { "url": asset->url } },
  heroImage${IMAGE},
  documentaryVideo${MEDIA},
  audio${MEDIA},
  toolsAndMaterials, locationLabel, artisanReviewStatus, publicationStatus,
  "artisans": artisans[]->[_type == "artisanProfile" && consentStatus == "granted" && ($preview == true || publicationStatus == "published")]{
    _id, displayName, role, portrait${IMAGE},
    "quote": select(quoteConsent == true => quote),
    quoteConsent, consentStatus, publicationStatus, credit
  }
}`},
  "settings": ${`*[_type == "siteSettings" && _id in ["siteSettings", "drafts.siteSettings"]] | order(_updatedAt desc)[0]{
  brandName, tagline,
  hero{ eyebrow, title, titleEmphasis, intro, ctaLabel, image${IMAGE} },
  navigation[]{ label, href },
  preservationCta, footer, contact, socialLinks[]{ platform, url },
  seo{ title, description, defaultShareImage${IMAGE} }
}`},
  "shawl": ${`*[_type == "shawl" && ($preview == true || publicationStatus == "published") && defined(slug.current)] | order(_createdAt asc)[0]{
  title, description, mainImage${IMAGE}, gallery[]${IMAGE}, materials, dimensions, provenance, provenanceVerified
}`}
}`;
var content_server_exports = /* @__PURE__ */ __exportAll({
	CMS_FETCH_TIMEOUT_MS: () => CMS_FETCH_TIMEOUT_MS,
	createDemoContent: () => createDemoContent,
	fetchHomepageFromSanity: () => fetchHomepageFromSanity,
	hasValidPreviewSession: () => hasValidPreviewSession,
	loadSiteContent: () => loadSiteContent
});
/** Keep a failed CMS request from delaying the local experience indefinitely. */
var CMS_FETCH_TIMEOUT_MS = 5e3;
function setupNotice(env) {
	return `Demo content — the CMS is not configured (${[...env.missing, ...env.invalid].join(", ") || "a valid SANITY_PROJECT_ID"}).`;
}
function createDemoContent(notice, preview = false) {
	return {
		source: "demo",
		preview,
		notice,
		chapters,
		settings: demoSettings,
		shawl: null
	};
}
function createUnavailablePreview(notice) {
	return {
		...createDemoContent(notice, true),
		chapters: []
	};
}
async function withTimeout(operation, timeoutMs = CMS_FETCH_TIMEOUT_MS) {
	let timeout;
	const timeoutPromise = new Promise((_, reject) => {
		timeout = setTimeout(() => reject(/* @__PURE__ */ new Error(`Sanity request timed out after ${timeoutMs}ms`)), timeoutMs);
	});
	try {
		return await Promise.race([operation, timeoutPromise]);
	} finally {
		if (timeout) clearTimeout(timeout);
	}
}
/** Fetches Sanity on the server only. Preview clients are selected only after cookie verification. */
var fetchHomepageFromSanity = async (env, preview) => {
	return withTimeout((preview ? createPreviewClient(env) : createPublishedClient(env)).fetch(HOMEPAGE_QUERY, { preview }));
};
async function hasValidPreviewSession(env, cookieHeader) {
	if (!env.readToken || !env.previewSecret) return false;
	const token = readCookie(cookieHeader ?? null, PREVIEW_COOKIE);
	if (!token) return false;
	try {
		return await verifyPreviewToken(env.previewSecret, token);
	} catch {
		return false;
	}
}
/**
* Builds the view model shared by the existing homepage components.
* Content is deliberately all-or-nothing: incomplete CMS chapters never
* displace the authored eight-chapter demo journey.
*/
async function loadSiteContent(options = {}) {
	const env = options.env ?? readSanityEnv();
	if (!env.configured) return createDemoContent(setupNotice(env));
	const preview = options.allowPreview === false ? false : await hasValidPreviewSession(env, options.cookieHeader);
	const fetchHomepage = options.fetchHomepage ?? fetchHomepageFromSanity;
	try {
		const raw = await fetchHomepage(env, preview);
		const urlFor = (img, width) => imageUrl(env, img, width);
		const chapters = mapChapters(raw.chapters, urlFor, preview);
		if (preview && chapters) {
			const available = new Set(chapters.map((chapter) => chapter.number));
			const missing = Array.from({ length: 8 }, (_, index) => index + 1).filter((number) => !available.has(number));
			const notices = [];
			if (missing.length) notices.push(`Draft preview: ${chapters.length} of 8 chapters are available. Missing or incomplete chapter numbers: ${missing.join(", ")}.`);
			if (!raw.settings) notices.push("Website settings are missing; local demo settings fill the page framing.");
			return {
				source: "sanity",
				preview: true,
				notice: notices.length ? notices.join(" ") : null,
				chapters,
				settings: mapSettings(raw.settings, urlFor),
				shawl: mapShawl(raw.shawl, urlFor)
			};
		}
		if (!chapters) return createDemoContent(`Showing demo content — the CMS returned ${raw.chapters?.length ?? 0} chapter records, but eight unique, verified published journey chapters are required.`);
		return {
			source: "sanity",
			preview,
			notice: null,
			chapters,
			settings: mapSettings(raw.settings, urlFor),
			shawl: mapShawl(raw.shawl, urlFor)
		};
	} catch (error) {
		console.error("[sanity] content fetch failed", error);
		return preview ? createUnavailablePreview("Draft preview is unavailable because the CMS could not be reached. No draft chapters are shown.") : createDemoContent("Demo content — the CMS could not be reached. Check the server-side Sanity configuration.");
	}
}
//#endregion
export { imageUrl as a, mapShawl as i, hasValidPreviewSession as n, createPreviewClient as o, loadSiteContent as r, createPublishedClient as s, content_server_exports as t };
