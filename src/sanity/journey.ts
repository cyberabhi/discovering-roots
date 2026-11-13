export const JOURNEY_STEPS = [
  {
    number: 1,
    title: "Fibre Collection",
    kicker: "Combing the undercoat",
    slug: "fibre-collection",
    phase: "preLoom",
  },
  {
    number: 2,
    title: "Journey and Gathering",
    kicker: "The journey down",
    slug: "journey-gathering",
    phase: "preLoom",
  },
  {
    number: 3,
    title: "Sorting and Dehairing",
    kicker: "Sorting by hand",
    slug: "sorting-dehairing",
    phase: "preLoom",
  },
  {
    number: 4,
    title: "Carding and Combing",
    kicker: "Carding the cloud",
    slug: "carding-combing",
    phase: "preLoom",
  },
  {
    number: 5,
    title: "Hand Spinning and Doubling",
    kicker: "Spinning on the wheel",
    slug: "hand-spinning",
    phase: "preLoom",
  },
  {
    number: 6,
    title: "Starching and Warping",
    kicker: "Preparing the warp",
    slug: "warping",
    phase: "onLoom",
  },
  {
    number: 7,
    title: "Handloom Weaving",
    kicker: "At the handloom",
    slug: "weaving",
    phase: "onLoom",
  },
  {
    number: 8,
    title: "Finishing",
    kicker: "The final touch",
    slug: "finishing",
    phase: "onLoom",
  },
] as const;

export function journeyChapterId(stepNumber: number): string {
  return `journeyChapter-${String(stepNumber).padStart(2, "0")}`;
}

export function validateJourneyStepNumber(value: unknown): true | string {
  return typeof value === "number" &&
    Number.isInteger(value) &&
    value >= 1 &&
    value <= JOURNEY_STEPS.length
    ? true
    : "Choose one of the eight fixed journey steps.";
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

export function validateArtisanConsent(value: unknown): true | string {
  if (!isRecord(value)) return true;
  const document = value;
  const identityFields = ["displayName", "portrait", "biography", "personalStory", "location"];
  const hasIdentity = identityFields.some((field) => {
    const value = document[field];
    return typeof value === "string" ? value.trim().length > 0 : value != null;
  });
  if (hasIdentity && document["consentStatus"] !== "granted") {
    return "Identity consent must be granted before adding identifying information or publishing.";
  }
  if (document["quote"] && document["quoteConsent"] !== true) {
    return "Separate quote consent must be granted before adding or publishing a quotation.";
  }
  return true;
}

export function validateMediaPublication(value: unknown): true | string {
  if (!isRecord(value) || value["publicationStatus"] !== "published") return true;
  if (value["consentStatus"] !== "granted" && value["consentStatus"] !== "notApplicable") {
    return "Media consent must be granted before publication.";
  }
  if (!value["credit"] || typeof value["credit"] !== "string") {
    return "Add an image or media credit before publication.";
  }
  return true;
}
