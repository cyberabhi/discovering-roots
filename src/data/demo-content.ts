/**
 * LOCAL DEMO FALLBACK — shown only when Sanity is not configured, unreachable,
 * or has fewer than eight published chapters. Editorial placeholders, not
 * verified facts. Real content lives in Sanity.
 */
import type { SiteSettingsView } from "@/lib/sanity/types";

export const PLACEHOLDER_CONTACT = "hello@example.com";

export const demoSettings: SiteSettingsView = {
  brandName: "Discovering Roots",
  tagline: "A heritage storytelling initiative documenting authentic handmade Pashmina.",
  hero: {
    eyebrow: "Discovering Roots · A heritage archive of handmade Pashmina",
    title: "A thread that carries",
    titleEmphasis: "generations",
    intro: "Documenting, with consent and care, the people and hand processes behind authentic Pashmina — from high pasture to finished cloth.",
    ctaLabel: "Follow the thread",
  },
  storySection: {
    eyebrow: "The Story",
    heading: "The shawl is a map of its own making.",
    body: "Its embroidery depicts landscape, goats, people, hand processes and the loom. We follow that thread, chapter by chapter, through the hands that make it.",
  },
  originSection: {
    eyebrow: "Where the story begins",
    heading: "A rare softness, shaped by life on the high plateau.",
    paragraphOne:
      "Long before a Pashmina rests on your shoulders, its story begins on the Changthang plateau. In the high-altitude cold, Changthangi goats grow a fine undercoat, carefully combed by pastoral communities during the seasonal moult.",
    paragraphTwo:
      "That delicate fibre is the first chapter of a shawl to be treasured—and a way to feel closer to the place and people behind it.",
  },
  navigation: [
    { label: "The Story", href: "#story" },
    { label: "The Origin", href: "#origin" },
    { label: "The Craft", href: "#craft" },
    { label: "The Artisans", href: "#artisans" },
    { label: "Authenticity", href: "#authenticity" },
    { label: "Support", href: "#support" },
  ],
  cta: {
    eyebrow: "Preservation · Patronage",
    heading: "Knowledge held in hands is easily lost.",
    body: "Each step of handmade Pashmina carries skills passed between generations. Documenting them honestly — and connecting them with people who value the work — helps keep that knowledge alive.",
    statement: "Every spinning wheel turning today exists because someone chose slow craft over synthetic speed.",
    buttonLabel: "Become a Patron of the Craft",
    buttonHref: `mailto:${PLACEHOLDER_CONTACT}?subject=Becoming%20a%20Patron%20of%20the%20Craft`,
    impactNote: "Directly sustains fair living wages for spinners, weavers and needlework masters in the valley.",
    isPlaceholderContact: true,
  },
  footerText: "A heritage storytelling initiative documenting authentic handmade Pashmina. All imagery and stories shared with consent.",
  socialLinks: [],
};
