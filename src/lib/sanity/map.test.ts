import { describe, expect, it } from "vitest";
import { demoSettings } from "@/data/demo-content";
import { mapChapters, mapSettings } from "./map";
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

  it("uses demo story and captions when optional chapter copy is missing", () => {
    const raw = completeChapters();
    raw[0] = { ...raw[0]!, intro: null };

    const mapped = mapChapters(raw, urlFor);

    expect(mapped?.[0]?.story).toBeTruthy();
    expect(mapped?.[0]?.caption).toBeTruthy();
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
