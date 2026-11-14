import { describe, expect, it } from "vitest";
import { demoSettings } from "@/data/demo-content";
import { mapArtisanPortrait, mapChapters, mapSettings } from "./map";
import type { CmsChapter, CmsSettings } from "./types";

const urlFor = () => "https://cdn.sanity.io/images/example.jpg";

function completeChapters(): CmsChapter[] {
  return Array.from({ length: 8 }, (_, index) => ({
    _id: `chapter-${index + 1}`,
    title: `Chapter ${index + 1}`,
    slug: `chapter-${index + 1}`,
    stepNumber: index + 1,
    phase: index < 5 ? "preLoom" : "onLoom",
    intro: `Story ${index + 1}`,
    artisanReviewStatus: "verified",
    publicationStatus: "published",
  }));
}

describe("Sanity chapter mapping", () => {
  it("requires every unique step in the eight-chapter journey", () => {
    expect(mapChapters(completeChapters().slice(0, 7), urlFor)).toBeNull();

    const duplicate = completeChapters();
    duplicate[7] = { ...duplicate[7]!, stepNumber: 7 };
    expect(mapChapters(duplicate, urlFor)).toBeNull();
  });

  it("filters artisan identity and quotes unless their consent is granted", () => {
    const draftArtisan = {
      _id: "draft",
      displayName: "Draft artisan",
      consentStatus: "granted" as const,
      publicationStatus: "draft" as const,
    };
    expect(mapArtisanPortrait(draftArtisan, urlFor)).toBeUndefined();
    expect(mapArtisanPortrait(draftArtisan, urlFor, true)).toMatchObject({
      role: "Draft artisan",
    });

    const raw = completeChapters();
    raw[0] = {
      ...raw[0]!,
      artisans: [
        {
          _id: "withdrawn",
          displayName: "Do not show",
          consentStatus: "withdrawn",
          quoteConsent: true,
          quote: "Do not show this quote",
        },
        {
          _id: "granted",
          displayName: "Tsering",
          role: "Spinner",
          consentStatus: "granted",
          publicationStatus: "published",
          quoteConsent: false,
          quote: "This quote still needs consent",
          portrait: { asset: { _ref: "image-asset" }, alt: "Portrait of Tsering" },
        },
      ],
    };

    const mapped = mapChapters(raw, urlFor);
    expect(mapped?.[0]?.portrait).toMatchObject({
      role: "Tsering — Spinner",
      alt: "Portrait of Tsering",
    });
    expect(mapped?.[0]?.portrait?.voice).toBeUndefined();
  });

  it("uses demo story and captions when optional chapter copy is missing", () => {
    const raw = completeChapters();
    raw[0] = { ...raw[0]!, intro: null };

    const mapped = mapChapters(raw, urlFor);

    expect(mapped?.[0]?.story).toBeTruthy();
    expect(mapped?.[0]?.caption).toBeTruthy();
  });

  it("uses the draft short label and marks missing editorial copy as missing", () => {
    const raw = completeChapters();
    raw[0] = {
      ...raw[0]!,
      shortLabel: "A visibly edited label",
      eyebrow: "Old eyebrow",
      intro: null,
      documentaryVideo: null,
      heroImage: null,
    };

    const mapped = mapChapters(raw, urlFor, true);

    expect(mapped?.[0]?.kicker).toBe("A visibly edited label");
    expect(mapped?.[0]?.story).toBe("Story not provided in this draft.");
    expect(mapped?.[0]?.caption).toBe("Documentary caption not provided in this draft.");
  });

  it("keeps partial preview chapters ordered, but rejects unpublished or unverified public chapters", () => {
    const raw = completeChapters().filter((chapter) => chapter.stepNumber !== 4);
    const unpublished = [...raw];
    unpublished[0] = { ...unpublished[0]!, publicationStatus: "draft" };
    const unverified = [...raw];
    unverified[0] = { ...unverified[0]!, artisanReviewStatus: "needsReview" };

    expect(mapChapters(raw, urlFor, true)?.map(({ number }) => number)).toEqual([
      1, 2, 3, 5, 6, 7, 8,
    ]);
    expect(mapChapters(unpublished, urlFor)).toBeNull();
    expect(mapChapters(unverified, urlFor)).toBeNull();
  });

  it("rejects unsafe external media URLs", () => {
    const raw = completeChapters();
    raw[0] = {
      ...raw[0]!,
      documentaryVideo: { externalUrl: "javascript:alert(1)" },
    };

    const mapped = mapChapters(raw, urlFor);

    expect(mapped?.[0]?.media.externalUrl).toBeUndefined();
  });

  it("uses safe links only for CMS navigation and calls to action", () => {
    const settings: CmsSettings = {
      navigation: [
        { label: "Craft", href: "#craft" },
        { label: "Unsafe", href: "javascript:alert(1)" },
        { label: "Protocol-relative", href: "//example.com" },
      ],
      preservationCta: { buttonHref: "javascript:alert(1)" },
    };

    const mapped = mapSettings(settings, urlFor);

    expect(mapped.navigation).toEqual([{ label: "Craft", href: "#craft" }]);
    expect(mapped.cta.buttonHref).toBe(demoSettings.cta.buttonHref);
  });
});
