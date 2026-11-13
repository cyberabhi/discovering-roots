/** Pure mapping from raw CMS documents to view models. Enforces consent rules. */
import { chapters as demoChapters, type Chapter } from "@/data/chapters";
import { demoSettings, PLACEHOLDER_CONTACT } from "@/data/demo-content";
import type {
  CmsArtisan,
  CmsChapter,
  CmsImage,
  CmsSettings,
  CmsShawl,
  ShawlView,
  SiteSettingsView,
  ViewImage,
} from "./types";

export type UrlFor = (img: CmsImage | null | undefined, width?: number) => string | undefined;

const s = (v: string | null | undefined) => (v && v.trim() ? v.trim() : undefined);

function safeMediaUrl(value: string | null | undefined): string | undefined {
  const url = s(value);
  if (!url) return undefined;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:"
      ? parsed.toString()
      : undefined;
  } catch {
    return undefined;
  }
}

function safeLink(value: string | null | undefined, allowMailto = false): string | undefined {
  const href = s(value);
  if (!href) return undefined;
  if (href.startsWith("#")) return href.length > 1 ? href : undefined;
  if (href.startsWith("/") && !href.startsWith("//")) return href;
  try {
    const parsed = new URL(href);
    if (
      parsed.protocol === "https:" ||
      parsed.protocol === "http:" ||
      (allowMailto && parsed.protocol === "mailto:")
    ) {
      return parsed.toString();
    }
  } catch {
    return undefined;
  }
  return undefined;
}

export function mapImage(
  img: CmsImage | null | undefined,
  urlFor: UrlFor,
  fallbackAlt: string,
  width?: number,
): ViewImage | undefined {
  if (!img) return undefined;
  const src = urlFor(img, width);
  if (!src) return undefined;
  return { src, alt: s(img.alt) ?? fallbackAlt, caption: s(img.caption), credit: s(img.credit) };
}

/** An artisan is shown only with granted consent; a quote additionally needs quote consent. */
export function mapArtisanPortrait(
  a: CmsArtisan | null | undefined,
  urlFor: UrlFor,
): Chapter["portrait"] | undefined {
  if (!a || a.consentStatus !== "granted") return undefined;
  const img = mapImage(a.portrait, urlFor, `Portrait of ${s(a.displayName) ?? "an artisan"}`, 600);
  const name = s(a.displayName);
  const role = [name, s(a.role)].filter(Boolean).join(" — ") || "Artisan";
  return {
    src: img?.src,
    alt: img?.alt ?? `Portrait of ${name ?? "an artisan"}`,
    role,
    voice: a.quoteConsent === true ? s(a.quote) : undefined,
    credit: img?.credit ?? s(a.credit),
  };
}

const isFileVideo = (url: string) => /\.(mp4|webm|mov|m4v)(\?|$)/i.test(url);

export function mapChapter(c: CmsChapter, urlFor: UrlFor): Chapter | null {
  const n = c.stepNumber;
  if (!n || n < 1 || n > 8 || !s(c.title)) return null;
  const fallback = demoChapters[n - 1]!;
  const hero = mapImage(c.heroImage, urlFor, `${c.title} — documentary image`);
  const video = c.documentaryVideo;
  const videoUrl = safeMediaUrl(video?.fileUrl) ?? safeMediaUrl(video?.externalUrl);
  const media: Chapter["media"] = videoUrl
    ? {
        kind: "video",
        src: video?.fileUrl || isFileVideo(videoUrl) ? videoUrl : undefined,
        externalUrl: video?.fileUrl || isFileVideo(videoUrl) ? undefined : videoUrl,
        alt: s(video?.transcript) ? `Documentary clip: ${c.title}` : `Documentary clip: ${c.title}`,
        credit: s(video?.credit),
        poster: hero?.src,
      }
    : {
        kind: hero ? "image" : fallback.media.kind,
        src: hero?.src,
        alt: hero?.alt ?? fallback.media.alt,
        credit: hero?.credit,
      };
  const portrait = (c.artisans ?? []).map((a) => mapArtisanPortrait(a, urlFor)).find(Boolean);
  const audioUrl = safeMediaUrl(c.audio?.fileUrl) ?? safeMediaUrl(c.audio?.externalUrl);
  return {
    id: s(c.slug) ?? fallback.id,
    number: n,
    zone: c.phase === "onLoom" ? "at" : c.phase === "preLoom" ? "before" : n <= 5 ? "before" : "at",
    title: c.title!.trim(),
    kicker: s(c.eyebrow) ?? s(c.shortLabel) ?? fallback.kicker,
    story: s(c.intro) ?? fallback.story,
    body: c.body && c.body.length ? c.body : undefined,
    caption: s(video?.caption) ?? hero?.caption ?? fallback.caption,
    media,
    portrait,
    audio: audioUrl
      ? { src: audioUrl, label: s(c.audio?.caption) ?? "Field recording" }
      : undefined,
    toolsAndMaterials: c.toolsAndMaterials?.filter(Boolean) ?? undefined,
    locationLabel: s(c.locationLabel),
    verified: c.artisanReviewStatus === "verified",
  };
}

/** Returns eight ordered chapters, or null if the CMS doesn't hold a complete set. */
export function mapChapters(
  raw: CmsChapter[] | null | undefined,
  urlFor: UrlFor,
): Chapter[] | null {
  const mapped = (raw ?? [])
    .map((c) => mapChapter(c, urlFor))
    .filter((c): c is Chapter => c !== null);
  const sorted = [...mapped].sort((a, b) => a.number - b.number);
  const complete = sorted.length === 8 && sorted.every((c, i) => c.number === i + 1);
  return complete ? sorted : null;
}

export function mapSettings(raw: CmsSettings | null | undefined, urlFor: UrlFor): SiteSettingsView {
  if (!raw) return demoSettings;
  const d = demoSettings;
  const email = s(raw.contact?.email);
  const cta = raw.preservationCta;
  const href =
    safeLink(cta?.buttonHref, true) ??
    (email ? `mailto:${email}?subject=Becoming%20a%20Patron%20of%20the%20Craft` : d.cta.buttonHref);
  const nav = (raw.navigation ?? []).flatMap((n) =>
    s(n.label) && safeLink(n.href) ? [{ label: s(n.label)!, href: safeLink(n.href)! }] : [],
  );
  return {
    brandName: s(raw.brandName) ?? d.brandName,
    tagline: s(raw.tagline) ?? d.tagline,
    hero: {
      eyebrow: s(raw.hero?.eyebrow) ?? d.hero.eyebrow,
      title: s(raw.hero?.title) ?? d.hero.title,
      titleEmphasis: raw.hero?.title ? (s(raw.hero?.titleEmphasis) ?? "") : d.hero.titleEmphasis,
      intro: s(raw.hero?.intro) ?? d.hero.intro,
      ctaLabel: s(raw.hero?.ctaLabel) ?? d.hero.ctaLabel,
      image: mapImage(raw.hero?.image, urlFor, "Landscape of the Changthang plateau", 2200),
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
      isPlaceholderContact: href.includes(PLACEHOLDER_CONTACT),
    },
    footerText: s(raw.footer?.text) ?? d.footerText,
    contactEmail: email,
    socialLinks: (raw.socialLinks ?? []).flatMap((l) =>
      s(l.platform) && safeLink(l.url) ? [{ label: s(l.platform)!, href: safeLink(l.url)! }] : [],
    ),
  };
}

export function mapShawl(raw: CmsShawl | null | undefined, urlFor: UrlFor): ShawlView | null {
  if (!raw || !s(raw.title)) return null;
  return {
    title: raw.title!.trim(),
    description: s(raw.description),
    mainImage: mapImage(raw.mainImage, urlFor, `${raw.title} — full drape`, 1800),
    gallery: (raw.gallery ?? [])
      .map((g) => mapImage(g, urlFor, `${raw.title} — detail`, 800))
      .filter((g): g is ViewImage => !!g),
    materials: raw.materials?.filter(Boolean) ?? [],
    dimensions: s(raw.dimensions),
    provenance: s(raw.provenance),
    provenanceVerified: raw.provenanceVerified === true,
  };
}
