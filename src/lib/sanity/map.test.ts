import { describe, expect, it } from "vitest";
import { mapChapters } from "./map";
import type { CmsChapter } from "./types";

const urlFor = () => "https://cdn.sanity.io/images/example.jpg";

function completeChapters(): CmsChapter[] {
  return Array.from({ length: 8 }, (_, index) => ({
    _id: `chapter-${index + 1}`,
    title: `Chapter ${index + 1}`,
    slug: `chapter-${index + 1}`,
    stepNumber: index + 1,
    phase: index < 5 ? "preLoom" : "onLoom",
    intro: `Story ${index + 1}`,
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
});
