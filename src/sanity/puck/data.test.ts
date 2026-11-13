import { describe, expect, it } from "vitest";
import {
  emptyVisualPageData,
  isValidVisualPageSlug,
  normalizeVisualPageSlug,
  parseVisualPageData,
  validateVisualPageData,
} from "./data";
import { createVisualPageConfig } from "./components";

const hero = {
  type: "Hero",
  id: "hero-1",
  props: {
    eyebrow: "Discovering Roots",
    title: "A thread that carries generations",
    emphasis: "generations",
    body: "A documented journey through the craft.",
    imageId: "",
    imageAlt: "Documentary landscape",
    ctaLabel: "Follow the thread",
    ctaHref: "#craft",
  },
};

describe("Puck visual-page data", () => {
  it("accepts a valid allowlisted page and normalizes its root props", () => {
    const result = validateVisualPageData({
      ...emptyVisualPageData,
      content: [hero],
    });

    expect(result.success).toBe(true);
    if (!result.success) throw new Error("Valid fixture was rejected.");
    expect(result.data.content).toEqual([hero]);
    expect(result.data.root.props?.title).toBe("");
  });

  it("rejects unsafe links, unapproved components, and duplicate section ids", () => {
    expect(
      validateVisualPageData({
        ...emptyVisualPageData,
        content: [{ ...hero, props: { ...hero.props, ctaHref: "javascript:alert(1)" } }],
      }).success,
    ).toBe(false);
    expect(
      validateVisualPageData({
        ...emptyVisualPageData,
        content: [{ ...hero, type: "ArbitraryHtml" }],
      }).success,
    ).toBe(false);
    expect(
      validateVisualPageData({
        ...emptyVisualPageData,
        content: [hero, { ...hero }],
      }).issues.join(" "),
    ).toContain("unique identifier");
  });

  it("rejects oversized or malformed stored data without throwing", () => {
    expect(parseVisualPageData("{not-json")).toBeUndefined();
    expect(
      validateVisualPageData({
        ...emptyVisualPageData,
        content: [{ ...hero, props: { ...hero.props, body: "x".repeat(10_001) } }],
      }).success,
    ).toBe(false);
  });

  it("normalizes editor-entered paths and rejects reserved or malformed paths", () => {
    expect(normalizeVisualPageSlug("A New Page!")).toBe("a-new-page");
    expect(isValidVisualPageSlug("a-new-page")).toBe(true);
    expect(isValidVisualPageSlug("studio")).toBe(false);
    expect(isValidVisualPageSlug("two words")).toBe(false);
  });

  it("defines only controlled content blocks and keeps all journey steps selectable", () => {
    const config = createVisualPageConfig(
      [],
      [],
      [],
      [],
      [
        ...Array.from({ length: 8 }, (_, index) => ({
          label: `${index + 1}. Chapter ${index + 1}`,
          value: String(index + 1),
        })),
      ],
    );

    expect(Object.keys(config.components)).toEqual([
      "Hero",
      "TextImage",
      "EditorialGallery",
      "DocumentaryVideo",
      "ArtisanProfile",
      "Quote",
      "Journey",
      "ChapterContent",
      "ShawlCollection",
      "Preservation",
      "CallToAction",
      "Footer",
    ]);
    expect(config.components.ChapterContent.defaultProps).toMatchObject({ chapterId: "1" });
    expect(config.components.ChapterContent.fields?.chapterId).toMatchObject({
      type: "select",
      options: expect.arrayContaining([
        { label: "1. Chapter 1", value: "1" },
        { label: "8. Chapter 8", value: "8" },
      ]),
    });
  });
});
