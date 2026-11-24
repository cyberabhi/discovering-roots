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
    artisanReviewStatus: "verified",
    publicationStatus: "published",
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
          publicationStatus: "draft",
          title: preview ? "Preview-only draft" : "Published chapter",
        };
        return { chapters, settings: null, shawl: null };
      },
    });

    expect(content.preview).toBe(true);
    expect(previewRequest).toBe(true);
    expect(content.chapters[0]?.title).toBe("Preview-only draft");
  });

  it("allows incomplete draft chapters in preview while public content stays all-or-nothing", async () => {
    const previewSecret = "server-only-secret";
    const cookie = await signPreviewToken(previewSecret, Date.now() + 60_000);
    const partial = completeChapters().filter((chapter) => chapter.stepNumber !== 3);
    partial[0] = { ...partial[0]!, shortLabel: "Edited label", intro: null };
    const options = {
      env: { ...configuredEnv, readToken: "server-only-token", previewSecret },
      cookieHeader: `dr_preview=${cookie}`,
      fetchHomepage: async () => ({ chapters: partial, settings: null, shawl: null }),
    };

    const preview = await loadSiteContent(options);
    const publicContent = await loadSiteContent({
      ...options,
      cookieHeader: null,
      env: configuredEnv,
    });

    expect(preview.source).toBe("sanity");
    expect(preview.preview).toBe(true);
    expect(preview.chapters).toHaveLength(7);
    expect(preview.chapters.map(({ number }) => number)).toEqual([1, 2, 4, 5, 6, 7, 8]);
    expect(preview.chapters[0]?.kicker).toBe("Edited label");
    expect(preview.chapters[0]?.story).toBe("Story not provided in this draft.");
    expect(preview.notice).toContain("Missing or incomplete chapter numbers: 3");
    expect(publicContent.source).toBe("demo");
    expect(publicContent.preview).toBe(false);
    expect(publicContent.chapters).toBe(demoChapters);
  });

  it("does not display demo chapter stories when a valid preview fetch fails", async () => {
    const previewSecret = "server-only-secret";
    const cookie = await signPreviewToken(previewSecret, Date.now() + 60_000);
    const error = vi.spyOn(console, "error").mockImplementation(() => undefined);
    const content = await loadSiteContent({
      env: { ...configuredEnv, readToken: "server-only-token", previewSecret },
      cookieHeader: `dr_preview=${cookie}`,
      fetchHomepage: async () => Promise.reject(new Error("network unavailable")),
    });
    error.mockRestore();

    expect(content.preview).toBe(true);
    expect(content.source).toBe("demo");
    expect(content.chapters).toEqual([]);
    expect(content.notice).toContain("No draft chapters are shown");
  });

  it("does not enable preview when a valid cookie lacks a server read token", async () => {
    const previewSecret = "server-only-secret";
    const cookie = await signPreviewToken(previewSecret, Date.now() + 60_000);
    let previewRequest: boolean | undefined;
    const content = await loadSiteContent({
      env: { ...configuredEnv, previewSecret },
      cookieHeader: `dr_preview=${cookie}`,
      fetchHomepage: async (_env, preview) => {
        previewRequest = preview;
        return { chapters: completeChapters(), settings: null, shawl: null };
      },
    });

    expect(content.preview).toBe(false);
    expect(previewRequest).toBe(false);
  });

  it("does not enable preview without the server signing secret", async () => {
    const cookie = await signPreviewToken("server-only-secret", Date.now() + 60_000);
    let previewRequest: boolean | undefined;
    const content = await loadSiteContent({
      env: { ...configuredEnv, readToken: "server-only-token" },
      cookieHeader: `dr_preview=${cookie}`,
      fetchHomepage: async (_env, preview) => {
        previewRequest = preview;
        return { chapters: completeChapters(), settings: null, shawl: null };
      },
    });

    expect(content.preview).toBe(false);
    expect(previewRequest).toBe(false);
  });

  it("keeps a published cache request published even if its browser has a valid preview cookie", async () => {
    const previewSecret = "server-only-secret";
    const cookie = await signPreviewToken(previewSecret, Date.now() + 60_000);
    let previewRequest: boolean | undefined;
    const content = await loadSiteContent({
      env: { ...configuredEnv, readToken: "server-only-token", previewSecret },
      cookieHeader: `dr_preview=${cookie}`,
      allowPreview: false,
      fetchHomepage: async (_env, preview) => {
        previewRequest = preview;
        return { chapters: completeChapters(), settings: null, shawl: null };
      },
    });

    expect(content.preview).toBe(false);
    expect(previewRequest).toBe(false);
  });

  it("falls back to the public eight-chapter demo if a chapter is not verified", async () => {
    const chapters = completeChapters();
    chapters[0] = { ...chapters[0]!, artisanReviewStatus: "needsReview" };
    const content = await loadSiteContent({
      env: configuredEnv,
      fetchHomepage: async () => ({ chapters, settings: null, shawl: null }),
    });

    expect(content.source).toBe("demo");
    expect(content.chapters).toBe(demoChapters);
    expect(content.preview).toBe(false);
  });

  it("falls back if a chapter is not published even when it is verified", async () => {
    const chapters = completeChapters();
    chapters[0] = { ...chapters[0]!, publicationStatus: "draft" };
    const content = await loadSiteContent({
      env: configuredEnv,
      fetchHomepage: async () => ({ chapters, settings: null, shawl: null }),
    });

    expect(content.source).toBe("demo");
    expect(content.chapters).toBe(demoChapters);
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
