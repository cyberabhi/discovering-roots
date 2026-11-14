import { QueryClient } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";
import { chapters as demoChapters } from "@/data/chapters";
import { demoSettings } from "@/data/demo-content";
import { MediaSlot } from "@/components/site/MediaSlot";
import { loadSiteContent, createDemoContent } from "@/lib/sanity/content.server";
import { signPreviewToken } from "@/lib/sanity/preview-token";
import type { CmsChapter, SiteContent } from "@/lib/sanity/types";
import { routeTree } from "@/routeTree.gen";

const { serializedContent, siteContentQueryCalls } = vi.hoisted(() => ({
  serializedContent: { value: "" },
  siteContentQueryCalls: [] as Array<{
    scope: "published" | "preview";
  }>,
}));

vi.mock("@/lib/content.functions", async () => {
  const { queryOptions } = await import("@tanstack/react-query");
  return {
    getSiteContent: vi.fn(async () => serializedContent.value),
    siteContentQuery: (scope: "published" | "preview" = "published") => {
      siteContentQueryCalls.push({ scope });
      return queryOptions({
        queryKey: ["site-content", scope],
        queryFn: async () => JSON.parse(serializedContent.value) as SiteContent,
        staleTime: 0,
      });
    },
  };
});

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

beforeAll(() => {
  class TestIntersectionObserver {
    constructor(_callback: IntersectionObserverCallback) {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  }

  Object.defineProperty(globalThis, "IntersectionObserver", {
    configurable: true,
    value: TestIntersectionObserver,
  });
  Object.defineProperty(SVGElement.prototype, "getTotalLength", {
    configurable: true,
    value: () => 800,
  });
  Object.defineProperty(SVGElement.prototype, "getPointAtLength", {
    configurable: true,
    value: (length: number) => ({ x: length, y: length }),
  });
  Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
    configurable: true,
    value: () => {},
  });
});

function completeChapters(): CmsChapter[] {
  return Array.from({ length: 8 }, (_, index) => ({
    _id: `chapter-${index + 1}`,
    title: `CMS Chapter ${index + 1}`,
    slug: `cms-chapter-${index + 1}`,
    stepNumber: index + 1,
    phase: index < 5 ? "preLoom" : "onLoom",
    intro: `CMS story ${index + 1}`,
    artisanReviewStatus: "verified",
    publicationStatus: "published",
  }));
}

async function renderHomepage(
  content: SiteContent,
  search: { preview?: 1; previewError?: "unavailable" } = {},
) {
  serializedContent.value = JSON.stringify(content);
  siteContentQueryCalls.length = 0;
  const queryClient = new QueryClient();
  const router = createRouter({ routeTree, context: { queryClient } });
  await router.navigate({
    to: "/",
    search: { ...(content.preview ? { preview: 1 as const } : {}), ...search },
  });
  return render(<RouterProvider router={router} />);
}

describe("homepage content integration", () => {
  it("renders the demo content with all eight chapters and working navigation", async () => {
    const content = createDemoContent("Demo content");
    await renderHomepage(content);

    expect(siteContentQueryCalls).toContainEqual({ scope: "published" });
    expect(
      screen.getByRole("heading", { name: /A thread that carries generations/ }),
    ).toBeVisible();
    expect(screen.getAllByRole("article")).toHaveLength(8);
    expect(
      Array.from(document.querySelectorAll("#craft article"), (article) => article.id),
    ).toEqual(content.chapters.map((chapter) => chapter.id));
    const navigation = screen.getByRole("navigation", { name: "Primary" });
    expect(within(navigation).getByRole("link", { name: "The Craft" })).toHaveAttribute(
      "href",
      "#craft",
    );
    expect(document.getElementById("craft")).toBeInTheDocument();
    expect(screen.queryByText(/Draft preview/)).not.toBeInTheDocument();
  });

  it("shows a clear exit action when the homepage is loaded in draft preview", async () => {
    await renderHomepage(createDemoContent("Draft preview fallback", true));

    expect(siteContentQueryCalls).toContainEqual({ scope: "preview" });
    expect(screen.getByRole("status")).toHaveTextContent("Draft preview");
    expect(screen.getByRole("link", { name: "Return to published site" })).toHaveAttribute(
      "href",
      "/api/preview/disable",
    );
  });

  it("explains when a failed draft preview has returned to published content", async () => {
    await renderHomepage(createDemoContent("Preview activation unavailable"), {
      previewError: "unavailable",
    });

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Draft preview could not be activated. The published site is shown instead.",
    );
    expect(screen.getByRole("link", { name: "Continue without preview" })).toHaveAttribute(
      "href",
      "/",
    );
  });

  it("renders mapped Sanity content in the existing homepage sections", async () => {
    const content = await loadSiteContent({
      env: configuredEnv,
      fetchHomepage: async () => {
        const cmsChapters = completeChapters();
        cmsChapters[0] = {
          ...cmsChapters[0]!,
          artisans: [
            {
              _id: "artisan-1",
              displayName: "CMS Artisan",
              role: "Weaver",
              consentStatus: "granted",
              publicationStatus: "published",
              portrait: {
                asset: { _ref: "image-abc123-600x800-jpg" },
                alt: "Portrait of CMS Artisan",
              },
            },
          ],
        };
        return {
          chapters: cmsChapters,
          settings: {
            brandName: "CMS Roots",
            hero: {
              eyebrow: "CMS archive",
              title: "A CMS thread",
              titleEmphasis: "together",
              intro: "Mapped homepage introduction",
              ctaLabel: "Explore the craft",
              image: {
                asset: { _ref: "image-landscape-2200x1200-jpg" },
                alt: "CMS landscape",
              },
            },
            navigation: [{ label: "The Craft", href: "#craft" }],
            preservationCta: {
              eyebrow: "CMS preservation",
              heading: "Keep the craft alive",
              body: "CMS preservation description",
              statement: "CMS preservation statement",
              buttonLabel: "Support artisans",
              buttonHref: "https://example.com/support",
              impactNote: "CMS impact note",
            },
            footer: { text: "CMS footer text" },
          },
          shawl: {
            title: "Featured shawl",
            description: "CMS shawl description",
            mainImage: {
              asset: { _ref: "image-shawl-1800x1200-jpg" },
              alt: "CMS shawl",
              caption: "CMS shawl caption",
            },
            gallery: [
              {
                asset: { _ref: "image-detail-800x800-jpg" },
                alt: "CMS shawl detail",
                caption: "CMS detail caption",
              },
            ],
            materials: ["Pashmina"],
            dimensions: "200 × 70 cm",
            provenance: "Ladakh",
            provenanceVerified: true,
          },
        };
      },
    });

    expect(content.source).toBe("sanity");
    await renderHomepage(content);

    expect(screen.getByRole("heading", { name: "A CMS thread together" })).toBeVisible();
    expect(screen.getByText("CMS story 1")).toBeVisible();
    expect(screen.getByText("CMS shawl description")).toBeVisible();
    expect(screen.getByRole("heading", { name: "Featured shawl" })).toBeVisible();
    expect(screen.getAllByRole("img", { name: "CMS shawl" })).toHaveLength(2);
    expect(screen.getByRole("img", { name: "CMS landscape" })).toBeVisible();
    expect(screen.getAllByRole("img", { name: "Portrait of CMS Artisan" })).toHaveLength(2);
    expect(screen.getAllByText("CMS Artisan — Weaver")).toHaveLength(2);
    expect(screen.getByText("CMS detail caption")).toBeVisible();
    expect(screen.getByText("CMS preservation statement")).toBeVisible();
    expect(screen.getByText("CMS footer text")).toBeVisible();
    expect(screen.getByRole("link", { name: "Support artisans" })).toHaveAttribute(
      "href",
      "https://example.com/support",
    );
    expect(screen.getAllByRole("article")).toHaveLength(8);
    expect(
      Array.from(document.querySelectorAll("#craft article"), (article) => article.id),
    ).toEqual(content.chapters.map((chapter) => chapter.id));
    expect(document.querySelector('a[href=""]')).not.toBeInTheDocument();
  });

  it("keeps all eight journey positions and placeholders when optional CMS fields are missing", async () => {
    const incomplete: CmsChapter[] = demoChapters.map((chapter, index) => ({
      _id: `incomplete-${index + 1}`,
      title: chapter.title,
      stepNumber: index + 1,
    }));
    const content = await loadSiteContent({
      env: configuredEnv,
      fetchHomepage: async () => ({ chapters: incomplete, settings: null, shawl: null }),
    });

    await renderHomepage(content);

    expect(screen.getAllByRole("article")).toHaveLength(8);
    expect(screen.getByText(demoSettings.hero.intro)).toBeVisible();
    expect(screen.getAllByText("Replace · Documentary image")).toHaveLength(5);
  });

  it("renders partial draft chapters with their true numbers and missing-copy labels", async () => {
    const previewSecret = "server-only-secret";
    const cookie = await signPreviewToken(previewSecret, Date.now() + 60_000);
    const draftChapters = completeChapters().filter((chapter) => chapter.stepNumber !== 3);
    draftChapters[0] = { ...draftChapters[0]!, shortLabel: "Edited preview label", intro: null };
    const content = await loadSiteContent({
      env: { ...configuredEnv, readToken: "server-only-token", previewSecret },
      cookieHeader: `dr_preview=${cookie}`,
      fetchHomepage: async () => ({ chapters: draftChapters, settings: null, shawl: null }),
    });

    await renderHomepage(content);

    expect(content.preview).toBe(true);
    expect(screen.getAllByRole("article")).toHaveLength(7);
    expect(screen.getByText(/Edited preview label/)).toBeVisible();
    expect(screen.getByText("Story not provided in this draft.")).toBeVisible();
    expect(screen.getByText(/Missing or incomplete chapter numbers: 3/)).toBeVisible();
    expect(screen.queryByText(demoChapters[0]!.story)).not.toBeInTheDocument();
    expect(
      screen.getByText("No consented artisan profiles are included in these drafts."),
    ).toBeVisible();
    expect(screen.queryByText("Herder — name to be confirmed")).not.toBeInTheDocument();
  });

  it("shows an explicit empty preview state instead of the demo journey when no drafts are reviewable", async () => {
    const unavailable = {
      ...createDemoContent("Draft preview unavailable", true),
      chapters: [],
    };

    await renderHomepage(unavailable);

    expect(
      screen.getByRole("heading", { name: "No reviewable chapter drafts are available." }),
    ).toBeVisible();
    expect(screen.queryAllByRole("article")).toHaveLength(0);
    expect(screen.getByRole("link", { name: "Return to published site" })).toBeVisible();
  });

  it("keeps the existing chapter waypoints interactive", async () => {
    await renderHomepage(createDemoContent("Demo content"));

    const chapterEight = screen.getByRole("link", { name: "Chapter 8: The Final Touch" });
    expect(chapterEight).toHaveAttribute("href", "#finishing");
    fireEvent.click(chapterEight);
    expect(chapterEight).toHaveAttribute("aria-current", "step");
  });

  it("falls back to the existing media placeholder when an image fails to load", () => {
    render(
      <MediaSlot src="https://cdn.example.com/missing.jpg" alt="Unavailable image" label="Image" />,
    );

    fireEvent.error(screen.getByRole("img", { name: "Unavailable image" }));

    expect(screen.getByText("Replace · Image")).toBeInTheDocument();
  });
});
