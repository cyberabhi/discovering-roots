import { describe, expect, it, vi } from "vitest";
import { chapters as demoChapters } from "@/data/chapters";
import { demoSettings } from "@/data/demo-content";
import { loadSiteContent } from "./content.server";
import type { CmsChapter, CmsHomepage } from "./types";

const configuredEnv = {
  configured: true,
  projectId: "discovering-roots",
  dataset: "production",
  apiVersion: "2025-02-19",
  readToken: undefined,
  previewSecret: undefined,
  missing: [],
  invalid: [],
};

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

describe("loadSiteContent", () => {
  it("returns the complete local demo model when Sanity has incomplete chapters", async () => {
    const partial: CmsHomepage = {
      chapters: completeChapters().slice(0, 7),
      settings: null,
      shawl: null,
    };
    const content = await loadSiteContent({
      env: configuredEnv,
      fetchHomepage: async () => partial,
    });

    expect(content.source).toBe("demo");
    expect(content.chapters).toBe(demoChapters);
    expect(content.settings).toBe(demoSettings);
    expect(content.shawl).toBeNull();
    expect(content.notice).toContain("7 of 8");
  });

  it("falls back safely when the CMS fetch fails", async () => {
    const error = vi.spyOn(console, "error").mockImplementation(() => undefined);
    const content = await loadSiteContent({
      env: configuredEnv,
      fetchHomepage: async () => Promise.reject(new Error("network unavailable")),
    });
    error.mockRestore();

    expect(content.source).toBe("demo");
    expect(content.chapters).toBe(demoChapters);
    expect(content.notice).toContain("could not be reached");
  });

  it("uses CMS content only after all eight journey steps are valid", async () => {
    const complete: CmsHomepage = { chapters: completeChapters(), settings: null, shawl: null };
    const content = await loadSiteContent({
      env: configuredEnv,
      fetchHomepage: async () => complete,
    });

    expect(content.source).toBe("sanity");
    expect(content.chapters).toHaveLength(8);
    expect(content.notice).toBeNull();
  });
});
