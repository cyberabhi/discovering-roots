import { QueryClient } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";
import { chapters as demoChapters } from "@/data/chapters";
import { demoSettings } from "@/data/demo-content";
import { MediaSlot } from "@/components/site/MediaSlot";
import { loadSiteContent, createDemoContent } from "@/lib/sanity/content.server";
import type { CmsChapter, SiteContent } from "@/lib/sanity/types";
import { routeTree } from "@/routeTree.gen";

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
  }));
}

async function renderHomepage(content: SiteContent) {
  const queryClient = new QueryClient();
  queryClient.setQueryData(["site-content"], content);
  const router = createRouter({ routeTree, context: { queryClient } });
  await router.navigate({ to: "/" });
  return render(<RouterProvider router={router} />);
}

describe("homepage content integration", () => {
  it("renders the demo content with all eight chapters and working navigation", async () => {
    const content = createDemoContent("Demo content");
    await renderHomepage(content);

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
