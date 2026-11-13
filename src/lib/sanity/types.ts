import type { PortableTextBlock } from "@portabletext/react";
import type { Chapter } from "@/data/chapters";

/* ---------- Raw CMS shapes returned by GROQ (see queries.ts) ---------- */
export interface CmsImage {
  asset?: { _ref: string } | null;
  alt?: string | null;
  caption?: string | null;
  credit?: string | null;
  url?: string | null;
}

export interface CmsMediaEmbed {
  mediaType?: "video" | "audio" | null;
  externalUrl?: string | null;
  fileUrl?: string | null;
  caption?: string | null;
  credit?: string | null;
  transcript?: string | null;
}

export interface CmsArtisan {
  _id: string;
  displayName?: string | null;
  role?: string | null;
  portrait?: CmsImage | null;
  quote?: string | null;
  quoteConsent?: boolean | null;
  consentStatus?: "pending" | "granted" | "withdrawn" | null;
  publicationStatus?: "draft" | "published" | "withdrawn" | null;
  credit?: string | null;
}

export interface CmsChapter {
  _id: string;
  title?: string | null;
  slug?: string | null;
  stepNumber?: number | null;
  phase?: "preLoom" | "onLoom" | null;
  shortLabel?: string | null;
  eyebrow?: string | null;
  intro?: string | null;
  body?: PortableTextBlock[] | null;
  heroImage?: CmsImage | null;
  documentaryVideo?: CmsMediaEmbed | null;
  audio?: CmsMediaEmbed | null;
  toolsAndMaterials?: string[] | null;
  locationLabel?: string | null;
  artisanReviewStatus?: "needsReview" | "verified" | null;
  artisans?: (CmsArtisan | null)[] | null;
}

export interface CmsSettings {
  brandName?: string | null;
  tagline?: string | null;
  hero?: {
    eyebrow?: string | null;
    title?: string | null;
    titleEmphasis?: string | null;
    intro?: string | null;
    ctaLabel?: string | null;
    image?: CmsImage | null;
  } | null;
  navigation?: { label?: string | null; href?: string | null }[] | null;
  preservationCta?: {
    eyebrow?: string | null;
    heading?: string | null;
    body?: string | null;
    statement?: string | null;
    buttonLabel?: string | null;
    buttonHref?: string | null;
    impactNote?: string | null;
  } | null;
  footer?: { text?: string | null } | null;
  contact?: { email?: string | null; phone?: string | null } | null;
  socialLinks?: { platform?: string | null; url?: string | null }[] | null;
  seo?: {
    title?: string | null;
    description?: string | null;
    defaultShareImage?: CmsImage | null;
  } | null;
}

export interface CmsShawl {
  title?: string | null;
  description?: string | null;
  mainImage?: CmsImage | null;
  gallery?: (CmsImage | null)[] | null;
  materials?: string[] | null;
  dimensions?: string | null;
  provenance?: string | null;
  provenanceVerified?: boolean | null;
}

export interface CmsHomepage {
  chapters: CmsChapter[] | null;
  settings: CmsSettings | null;
  shawl: CmsShawl | null;
}

/* ---------- View models consumed by the components ---------- */
export interface ViewImage {
  src?: string | undefined;
  alt: string;
  caption?: string | undefined;
  credit?: string | undefined;
}

export interface SiteSettingsView {
  brandName: string;
  tagline: string;
  hero: {
    eyebrow: string;
    title: string;
    titleEmphasis: string;
    intro: string;
    ctaLabel: string;
    image?: ViewImage | undefined;
  };
  navigation: { label: string; href: string }[];
  cta: {
    eyebrow: string;
    heading: string;
    body: string;
    statement: string;
    buttonLabel: string;
    buttonHref: string;
    impactNote: string;
    isPlaceholderContact: boolean;
  };
  footerText: string;
  contactEmail?: string | undefined;
  socialLinks: { label: string; href: string }[];
}

export interface ShawlView {
  title: string;
  description?: string | undefined;
  mainImage?: ViewImage | undefined;
  gallery: ViewImage[];
  materials: string[];
  dimensions?: string | undefined;
  provenance?: string | undefined;
  provenanceVerified: boolean;
}

export type ContentSource = "sanity" | "demo";

export interface SiteContent {
  source: ContentSource;
  preview: boolean;
  /** Human-readable setup/fallback notice, or null when live CMS content is shown. */
  notice: string | null;
  chapters: Chapter[];
  settings: SiteSettingsView;
  shawl: ShawlView | null;
}
