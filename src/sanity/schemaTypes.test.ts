import { describe, expect, it } from "vitest";
import { CHAPTERS_QUERY, FEATURED_SHAWL_QUERY } from "@/lib/sanity/queries";
import {
  JOURNEY_STEPS,
  journeyChapterId,
  validateArtisanConsent,
  validateJourneyStepNumber,
  validateMediaPublication,
} from "./journey";
import { chapterInitialValueTemplates, filterNewDocumentOptions } from "./config";
import {
  artisanProfileSchema,
  documentaryMediaSchema,
  journeyChapterSchema,
  siteSettingsSchema,
  shawlSchema,
  studioSchemaNames,
  visualPageSchema,
} from "./schemaTypes";

describe("Sanity Studio schemas", () => {
  it("registers the content types required by the Studio", () => {
    expect(studioSchemaNames).toEqual([
      "documentaryImage",
      "mediaEmbed",
      "chapterBody",
      "siteSettings",
      "journeyChapter",
      "artisanProfile",
      "shawl",
      "documentaryMedia",
      "visualPage",
    ]);
  });

  it("includes the expected editorial fields and media replacement options", () => {
    const journeyFields = journeyChapterSchema.fields.map(({ name }) => name);
    const artisanFields = artisanProfileSchema.fields.map(({ name }) => name);
    const mediaFields = documentaryMediaSchema.fields.map(({ name }) => name);
    const settingsFields = siteSettingsSchema.fields.map(({ name }) => name);
    const shawlFields = shawlSchema.fields.map(({ name }) => name);
    const pageFields = visualPageSchema.fields.map(({ name }) => name);

    expect(journeyFields).toEqual(
      expect.arrayContaining([
        "stepNumber",
        "artisans",
        "publicationStatus",
        "artisanReviewStatus",
      ]),
    );
    expect(artisanFields).toEqual(
      expect.arrayContaining([
        "consentStatus",
        "quoteConsent",
        "publicationStatus",
        "relatedChapters",
      ]),
    );
    expect(mediaFields).toEqual(
      expect.arrayContaining(["image", "file", "externalUrl", "credit", "usageRights"]),
    );
    expect(settingsFields).toEqual(
      expect.arrayContaining([
        "brandName",
        "hero",
        "navigation",
        "preservationCta",
        "footer",
        "seo",
      ]),
    );
    expect(shawlFields).toEqual(
      expect.arrayContaining(["materials", "provenance", "artisans", "publicationStatus"]),
    );
    expect(pageFields).toEqual(expect.arrayContaining(["slug", "pageConfig", "seo"]));
  });

  it("defines exactly eight fixed, stable journey slots in process order", () => {
    expect(JOURNEY_STEPS).toHaveLength(8);
    expect(JOURNEY_STEPS.map(({ number }) => number)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(new Set(JOURNEY_STEPS.map(({ slug }) => slug)).size).toBe(8);
    expect(JOURNEY_STEPS.slice(0, 5).every(({ phase }) => phase === "preLoom")).toBe(true);
    expect(JOURNEY_STEPS.slice(5).every(({ phase }) => phase === "onLoom")).toBe(true);
    expect(JOURNEY_STEPS[1]?.title).toBe("Journey and Gathering");
    expect(JOURNEY_STEPS[7]?.title).toBe("Finishing");
    expect(JOURNEY_STEPS.map(({ number }) => journeyChapterId(number))).toEqual([
      "journeyChapter-01",
      "journeyChapter-02",
      "journeyChapter-03",
      "journeyChapter-04",
      "journeyChapter-05",
      "journeyChapter-06",
      "journeyChapter-07",
      "journeyChapter-08",
    ]);
    expect(chapterInitialValueTemplates.map(({ id }) => id)).toHaveLength(8);
  });

  it("keeps fixed chapter and singleton records out of generic create menus", () => {
    const options = [
      { templateId: "journeyChapter-1" },
      { templateId: "journeyChapter-2" },
      { templateId: "siteSettings" },
      { templateId: "artisanProfile" },
    ];
    expect(
      filterNewDocumentOptions(options, {
        creationContext: { type: "global" },
      } as const),
    ).toEqual([{ templateId: "artisanProfile" }]);
    expect(
      filterNewDocumentOptions(options, {
        creationContext: { type: "structure", schemaType: "journeyChapter" },
      } as const),
    ).toEqual([]);
  });

  it("rejects invalid chapter numbers", () => {
    expect(validateJourneyStepNumber(1)).toBe(true);
    expect(validateJourneyStepNumber(8)).toBe(true);
    expect(validateJourneyStepNumber(0)).toBeTruthy();
    expect(validateJourneyStepNumber(9)).toBeTruthy();
    expect(validateJourneyStepNumber(1.5)).toBeTruthy();
    expect(validateJourneyStepNumber("1")).toBeTruthy();
  });

  it("requires identity and separate quote consent for artisan content", () => {
    expect(validateArtisanConsent({ displayName: "Editorial placeholder" })).toContain(
      "Identity consent",
    );
    expect(
      validateArtisanConsent({
        displayName: "Consented name",
        consentStatus: "granted",
        quote: "Unapproved quote",
        quoteConsent: false,
      }),
    ).toContain("Separate quote consent");
    expect(
      validateArtisanConsent({
        displayName: "Consented name",
        consentStatus: "granted",
        quote: "Approved quote",
        quoteConsent: true,
      }),
    ).toBe(true);
  });

  it("requires rights, credit and consent before media publication", () => {
    expect(
      validateMediaPublication({
        publicationStatus: "published",
        consentStatus: "pending",
        credit: "Photographer",
      }),
    ).toContain("consent");
    expect(
      validateMediaPublication({
        publicationStatus: "published",
        consentStatus: "granted",
      }),
    ).toContain("credit");
    expect(
      validateMediaPublication({
        publicationStatus: "published",
        consentStatus: "notApplicable",
        credit: "Photographer",
      }),
    ).toBe(true);
  });

  it("keeps unverified chapters and unpublished collections off the public homepage query", () => {
    expect(CHAPTERS_QUERY).toContain('publicationStatus == "published"');
    expect(CHAPTERS_QUERY).toContain('artisanReviewStatus == "verified"');
    expect(CHAPTERS_QUERY).toContain('$preview == true || publicationStatus == "published"');
    expect(CHAPTERS_QUERY).toContain('"quote": select(quoteConsent == true => quote)');
    expect(FEATURED_SHAWL_QUERY).toContain('publicationStatus == "published"');
    expect(FEATURED_SHAWL_QUERY).toContain("$preview == true");
  });
});
