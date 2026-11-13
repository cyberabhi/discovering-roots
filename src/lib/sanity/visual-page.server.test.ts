import { beforeEach, describe, expect, it, vi } from "vitest";
import type { SanityEnv } from "./env";
import { loadVisualPage } from "./visual-page.server";

const mocks = vi.hoisted(() => ({
  fetch: vi.fn(),
  createPreviewClient: vi.fn(),
  createPublishedClient: vi.fn(),
  hasValidPreviewSession: vi.fn(),
  loadSiteContent: vi.fn(),
}));

vi.mock("./client", () => ({
  createPreviewClient: mocks.createPreviewClient,
  createPublishedClient: mocks.createPublishedClient,
}));

vi.mock("./content.server", () => ({
  hasValidPreviewSession: mocks.hasValidPreviewSession,
  loadSiteContent: mocks.loadSiteContent,
}));

const env: SanityEnv = {
  configured: true,
  projectId: "project-id",
  dataset: "production",
  apiVersion: "2025-02-19",
  readToken: "server-only-token",
  previewSecret: "server-only-secret",
  missing: [],
  invalid: [],
};

const data = {
  root: { props: { title: "" } },
  content: [
    {
      type: "TextImage",
      id: "text-image-1",
      props: {
        heading: "The story",
        body: "A verified documentary account.",
        imageId: "media-1",
        imageAlt: "A documented image",
        caption: "Image caption",
        imageSide: "right",
      },
    },
    { type: "ArtisanProfile", id: "artisan-1", props: { artisanId: "artisan-1" } },
    { type: "Quote", id: "quote-1", props: { artisanId: "artisan-1" } },
  ],
};

function createSanityClient() {
  return { fetch: mocks.fetch };
}

describe("loadVisualPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mocks.createPreviewClient.mockReturnValue(createSanityClient());
    mocks.createPublishedClient.mockReturnValue(createSanityClient());
    mocks.hasValidPreviewSession.mockResolvedValue(false);
    mocks.loadSiteContent.mockResolvedValue({
      settings: { brandName: "Discovering Roots", navigation: [], footerText: "" },
      chapters: [],
    });
    mocks.fetch.mockImplementation(async (query: string) => {
      if (query.includes('_type == "visualPage"')) {
        return { title: "A page", slug: "a-page", pageConfig: JSON.stringify(data) };
      }
      if (query.includes('_type == "documentaryMedia"')) {
        return [
          {
            _id: "media-1",
            kind: "image",
            imageUrl: "https://cdn.sanity.io/images/project/production/image.jpg",
            imageAssetId: "image-asset-1",
            imageAlt: "A documented image",
          },
        ];
      }
      if (query.includes('_type == "artisanProfile"')) {
        return [
          {
            _id: "artisan-1",
            displayName: "Consented artisan",
            quote: "A quotation without separate consent",
            quoteConsent: false,
            consentStatus: "granted",
            publicationStatus: "published",
          },
        ];
      }
      return [];
    });
  });

  it("loads published content publicly and excludes unapproved quotations", async () => {
    const page = await loadVisualPage({ slug: "a-page", env });

    expect(mocks.createPublishedClient).toHaveBeenCalledWith(env);
    expect(mocks.createPreviewClient).not.toHaveBeenCalled();
    expect(page?.preview).toBe(false);
    expect(page?.metadata.assets["media-1"]?.assetRef).toBe("image-asset-1");
    expect(page?.metadata.artisans["artisan-1"]?.quote).toBeUndefined();
    expect(page?.metadata.artisans["artisan-1"]?.quoteConsent).toBe(false);
    expect(mocks.fetch).toHaveBeenCalledWith(
      expect.stringContaining('publicationStatus == "published"'),
      expect.objectContaining({ slug: "a-page", preview: false }),
    );
  });

  it("uses the draft client only after preview authorization and preserves consent checks", async () => {
    mocks.hasValidPreviewSession.mockResolvedValue(true);
    const page = await loadVisualPage({
      slug: "a-page",
      cookieHeader: "dr_preview=valid-cookie",
      env,
    });

    expect(mocks.createPreviewClient).toHaveBeenCalledWith(env);
    expect(mocks.createPublishedClient).not.toHaveBeenCalled();
    expect(page?.preview).toBe(true);
    expect(mocks.fetch).toHaveBeenCalledWith(
      expect.stringContaining('consentStatus == "granted"'),
      expect.objectContaining({ preview: true }),
    );
    expect(page?.metadata.artisans["artisan-1"]?.quote).toBeUndefined();
  });

  it("keeps unauthorized and expired sessions on the published client", async () => {
    mocks.hasValidPreviewSession.mockResolvedValue(false);
    const page = await loadVisualPage({
      slug: "a-page",
      cookieHeader: "dr_preview=expired-cookie",
      env,
    });

    expect(page?.preview).toBe(false);
    expect(mocks.createPublishedClient).toHaveBeenCalledWith(env);
    expect(mocks.createPreviewClient).not.toHaveBeenCalled();
  });

  it("returns no page when Sanity is unconfigured or the stored data is invalid", async () => {
    await expect(
      loadVisualPage({ slug: "a-page", env: { ...env, configured: false } }),
    ).resolves.toBeNull();

    mocks.fetch.mockImplementation(async (query: string) => {
      if (query.includes('_type == "visualPage"')) {
        return { title: "Broken", slug: "a-page", pageConfig: "{invalid" };
      }
      return [];
    });
    const error = vi.spyOn(console, "error").mockImplementation(() => undefined);
    await expect(loadVisualPage({ slug: "a-page", env })).resolves.toBeNull();
    error.mockRestore();
  });
});
