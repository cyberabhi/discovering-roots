import { describe, expect, it, vi } from "vitest";
import { chapters as demoChapters } from "@/data/chapters";
import { demoSettings } from "@/data/demo-content";
import { loadSiteContent } from "./content.server";
import { signPreviewToken } from "./preview-token";
import { mapArtisanPortrait } from "./map";
import type { CmsArtisan, CmsChapter, CmsHomepage } from "./types";

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
  it("falls back to demo content when Sanity configuration is missing", async () => {
    const content = await loadSiteContent({
      env: {
        ...configuredEnv,
        configured: false,
        missing: ["SANITY_PROJECT_ID", "SANITY_DATASET"],
      },
    });

    expect(content.source).toBe("demo");
    expect(content.chapters).toBe(demoChapters);
    expect(content.notice).toContain("SANITY_PROJECT_ID");
  });

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

  it("uses only the published fetch path without a valid signed preview cookie", async () => {
    let previewRequest: boolean | undefined;
    const content = await loadSiteContent({
      env: {
        ...configuredEnv,
        readToken: "server-only-token",
        previewSecret: "server-only-secret",
      },
      cookieHeader: "dr_preview=forged",
      fetchHomepage: async (_env, preview) => {
        previewRequest = preview;
        const chapters = completeChapters();
        chapters[0] = {
          ...chapters[0]!,
          title: preview ? "Preview-only draft" : "Published chapter",
        };
        return { chapters, settings: null, shawl: null };
      },
    });

    expect(content.source).toBe("sanity");
    expect(content.preview).toBe(false);
    expect(previewRequest).toBe(false);
    expect(content.chapters[0]?.title).toBe("Published chapter");
    expect(content.chapters[0]?.title).not.toBe("Preview-only draft");
  });

  it("enables the preview fetch path only for a valid signed preview cookie", async () => {
    const previewSecret = "server-only-secret";
    const cookie = await signPreviewToken(previewSecret, Date.now() + 60_000);
    let previewRequest: boolean | undefined;
    const content = await loadSiteContent({
      env: { ...configuredEnv, readToken: "server-only-token", previewSecret },
      cookieHeader: `dr_preview=${cookie}`,
      fetchHomepage: async (_env, preview) => {
        previewRequest = preview;
        const chapters = completeChapters();
        chapters[0] = {
          ...chapters[0]!,
          title: preview ? "Preview-only draft" : "Published chapter",
        };
        return { chapters, settings: null, shawl: null };
      },
    });

    expect(content.preview).toBe(true);
    expect(previewRequest).toBe(true);
    expect(content.chapters[0]?.title).toBe("Preview-only draft");
  });

  it("rejects expired preview cookies and keeps using published content", async () => {
    const previewSecret = "server-only-secret";
    const expiredCookie = await signPreviewToken(previewSecret, Date.now() - 1);
    let previewRequest: boolean | undefined;
    const content = await loadSiteContent({
      env: { ...configuredEnv, readToken: "server-only-token", previewSecret },
      cookieHeader: `dr_preview=${expiredCookie}`,
      fetchHomepage: async (_env, preview) => {
        previewRequest = preview;
        return { chapters: completeChapters(), settings: null, shawl: null };
      },
    });

    expect(content.preview).toBe(false);
    expect(previewRequest).toBe(false);
  });

  it("keeps identity and quotation consent separate in preview", () => {
    const urlFor = () => undefined;
    const artisan: CmsArtisan = {
      _id: "draft-artisan",
      displayName: "Draft artisan",
      role: "Weaver",
      consentStatus: "granted",
      quoteConsent: false,
      quote: "Not approved for publication",
    };
    const withdrawn: CmsArtisan = {
      ...artisan,
      _id: "withdrawn-artisan",
      consentStatus: "withdrawn",
      quoteConsent: true,
    };

    expect(mapArtisanPortrait(artisan, urlFor, true)?.voice).toBeUndefined();
    expect(mapArtisanPortrait(withdrawn, urlFor, true)).toBeUndefined();
    expect(
      mapArtisanPortrait({ ...artisan, consentStatus: "pending" }, urlFor, true),
    ).toBeUndefined();
  });
});
