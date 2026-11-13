/** GROQ queries. Image projections keep `asset` (for the URL builder) plus alt/caption/credit. */
const IMAGE = `{ asset, alt, caption, credit }`;
const MEDIA = `{ mediaType, externalUrl, caption, credit, transcript, "fileUrl": file.asset->url }`;

export const CHAPTERS_QUERY = `*[_type == "journeyChapter" && defined(stepNumber) && ($preview == true || (publicationStatus == "published" && artisanReviewStatus == "verified"))] | order(stepNumber asc)[0...8]{
  _id, title, "slug": slug.current, stepNumber, phase, shortLabel, eyebrow, intro,
  body[]{ ..., _type == "accessibleImage" => { "url": asset->url } },
  heroImage${IMAGE},
  documentaryVideo${MEDIA},
  audio${MEDIA},
  toolsAndMaterials, locationLabel, artisanReviewStatus,
  "artisans": artisans[]->[_type == "artisanProfile" && consentStatus == "granted" && ($preview == true || publicationStatus == "published")]{
    _id, displayName, role, portrait${IMAGE},
    "quote": select(quoteConsent == true => quote),
    quoteConsent, consentStatus, publicationStatus, credit
  }
}`;

export const SETTINGS_QUERY = `*[_type == "siteSettings" && _id in ["siteSettings", "drafts.siteSettings"]] | order(_updatedAt desc)[0]{
  brandName, tagline,
  hero{ eyebrow, title, titleEmphasis, intro, ctaLabel, image${IMAGE} },
  navigation[]{ label, href },
  preservationCta, footer, contact, socialLinks[]{ platform, url },
  seo{ title, description, defaultShareImage${IMAGE} }
}`;

export const FEATURED_SHAWL_QUERY = `*[_type == "shawl" && ($preview == true || publicationStatus == "published") && defined(slug.current)] | order(_createdAt asc)[0]{
  title, description, mainImage${IMAGE}, gallery[]${IMAGE}, materials, dimensions, provenance, provenanceVerified
}`;

export const HOMEPAGE_QUERY = `{
  "chapters": ${CHAPTERS_QUERY},
  "settings": ${SETTINGS_QUERY},
  "shawl": ${FEATURED_SHAWL_QUERY}
}`;
