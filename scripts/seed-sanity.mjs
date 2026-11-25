/**
 * Idempotent Sanity seed script.
 * Populates missing siteSettings fields and any uncreated journeyChapter-01..08
 * documents as drafts without overwriting existing user edits.
 *
 * Usage:
 *   SANITY_API_WRITE_TOKEN=<editor-token> node scripts/seed-sanity.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { createClient } from "@sanity/client";

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  for (const line of fs.readFileSync(filePath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const val = trimmed.slice(eq + 1).trim().replace(/^['"]|['"]$/g, "");
    if (!process.env[key]) process.env[key] = val;
  }
}

loadEnvFile(path.resolve(process.cwd(), ".env"));

const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || "production";
const apiVersion = process.env.SANITY_API_VERSION || "2025-02-19";
const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_AUTH_TOKEN;

if (!projectId) {
  console.error("Missing SANITY_PROJECT_ID in environment or .env");
  process.exit(1);
}
if (!token) {
  console.error(
    "Missing SANITY_API_WRITE_TOKEN. Create an Editor token at https://sanity.io/manage (API -> Tokens) and run:\n" +
      '  $env:SANITY_API_WRITE_TOKEN="<your-token>"; node scripts/seed-sanity.mjs',
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const JOURNEY_SEED = [
  {
    number: 1,
    title: "Fibre Collection",
    kicker: "Combing the undercoat",
    slug: "fibre-collection",
    phase: "preLoom",
    intro:
      "As the high-altitude winter loosens, the fine undercoat of Changthangi goats is gently combed by hand during the natural spring moult. The fibre is gathered, not shorn — a seasonal rhythm shaped by the animals and the herders who live alongside them.",
  },
  {
    number: 2,
    title: "Journey and Gathering",
    kicker: "The journey down",
    slug: "journey-gathering",
    phase: "preLoom",
    intro:
      "Raw fibre travels from the pastoral highlands to the community where it will be processed. [Draft — exact route and geography to be confirmed in final editorial content.]",
  },
  {
    number: 3,
    title: "Sorting and Dehairing",
    kicker: "Sorting by hand",
    slug: "sorting-dehairing",
    phase: "preLoom",
    intro:
      "Coarse guard hairs are separated from the soft down, strand by strand. It is slow, attentive work that relies on touch and long practice.",
  },
  {
    number: 4,
    title: "Carding and Combing",
    kicker: "Carding the cloud",
    slug: "carding-combing",
    phase: "preLoom",
    intro:
      "The cleaned fibre is opened and aligned by hand, turning tangled down into a soft, even cloud ready for the wheel.",
  },
  {
    number: 5,
    title: "Hand Spinning and Doubling",
    kicker: "Spinning on the wheel",
    slug: "hand-spinning",
    phase: "preLoom",
    intro:
      "On a traditional spinning wheel, fibre becomes yarn — fine, then doubled for strength. The sound of the wheel is part of the household.",
  },
  {
    number: 6,
    title: "Starching and Warping",
    kicker: "Preparing the warp",
    slug: "warping",
    phase: "onLoom",
    intro:
      "Yarn is starched and measured into the warp, then threaded onto the loom — careful preparation on which the whole weave depends.",
  },
  {
    number: 7,
    title: "Handloom Weaving",
    kicker: "At the handloom",
    slug: "weaving",
    phase: "onLoom",
    intro:
      "Pass by pass, the weaver builds the cloth on a handloom. Rhythm, tension and patience give the fabric its quiet, tactile character.",
  },
  {
    number: 8,
    title: "Finishing",
    kicker: "The final touch",
    slug: "finishing",
    phase: "onLoom",
    intro:
      "The woven shawl is cleaned and washed, pressed, and finished by hand — including plucking loose fibres where applicable — before it is ready to be worn. [Exact finishing sequence to be verified with artisans.]",
  },
];

const SETTINGS_DEFAULTS = {
  brandName: "Discovering Roots",
  tagline: "A heritage storytelling initiative documenting authentic handmade Pashmina.",
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
    { _key: "nav-story", label: "The Story", href: "#story" },
    { _key: "nav-origin", label: "The Origin", href: "#origin" },
    { _key: "nav-craft", label: "The Craft", href: "#craft" },
    { _key: "nav-artisans", label: "The Artisans", href: "#artisans" },
    { _key: "nav-authenticity", label: "Authenticity", href: "#authenticity" },
    { _key: "nav-support", label: "Support", href: "#support" },
  ],
  preservationCta: {
    eyebrow: "Preservation · Patronage",
    heading: "Knowledge held in hands is easily lost.",
    body: "Each step of handmade Pashmina carries skills passed between generations. Documenting them honestly — and connecting them with people who value the work — helps keep that knowledge alive.",
    statement:
      "Every spinning wheel turning today exists because someone chose slow craft over synthetic speed.",
    buttonLabel: "Become a Patron of the Craft",
    impactNote:
      "Directly sustains fair living wages for spinners, weavers and needlework masters in the valley.",
  },
  footerText:
    "A heritage storytelling initiative documenting authentic handmade Pashmina. All imagery and stories shared with consent.",
};

async function main() {
  // 1. Fill missing fields on siteSettings without overwriting existing values
  const existingSettings = await client.fetch(
    `*[_id in ["siteSettings", "drafts.siteSettings"]]{ _id }`,
  );
  if (existingSettings.length === 0) {
    await client.createIfNotExists({
      _id: "drafts.siteSettings",
      _type: "siteSettings",
      ...SETTINGS_DEFAULTS,
    });
    console.log("Created drafts.siteSettings with defaults.");
  } else {
    for (const doc of existingSettings) {
      await client.patch(doc._id).setIfMissing(SETTINGS_DEFAULTS).commit();
      console.log(`Patched missing fields on ${doc._id} (existing edits preserved).`);
    }
  }

  // 2. Create or fill missing fields on journeyChapter-01..08 (as drafts)
  for (const step of JOURNEY_SEED) {
    const publishedId = `journeyChapter-${String(step.number).padStart(2, "0")}`;
    const draftId = `drafts.${publishedId}`;
    const existing = await client.fetch(
      `*[_id in [$publishedId, $draftId]][0]{ _id }`,
      { publishedId, draftId },
    );

    const chapterDefaults = {
      stepNumber: step.number,
      title: step.title,
      slug: { _type: "slug", current: step.slug },
      shortLabel: step.kicker,
      phase: step.phase,
      intro: step.intro,
      artisanReviewStatus: "needsReview",
      publicationStatus: "draft",
    };

    if (!existing) {
      await client.createIfNotExists({
        _id: draftId,
        _type: "journeyChapter",
        ...chapterDefaults,
      });
      console.log(`Created ${draftId} (${step.title})`);
    } else {
      await client.patch(existing._id).setIfMissing(chapterDefaults).commit();
      console.log(`Patched missing fields on ${existing._id}`);
    }
  }

  console.log("Done! Open /studio to review and publish your chapters and settings.");
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
