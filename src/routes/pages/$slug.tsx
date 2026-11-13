import { createFileRoute, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getVisualPage } from "@/lib/visual-page.functions";
import type { VisualPageView } from "@/lib/sanity/visual-page.server";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/Sections";
import { createVisualPageConfig } from "@/sanity/puck/components";

const publicConfig = createVisualPageConfig([], [], [], []);
type PuckRenderer = typeof import("@puckeditor/core").Render;

export const Route = createFileRoute("/pages/$slug")({
  loader: async ({ params }) => {
    const serialized = await getVisualPage({ data: { slug: params.slug } });
    const page = JSON.parse(serialized) as VisualPageView | null;
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData }) => {
    const title = loaderData?.seo.title || loaderData?.title || "Discovering Roots";
    const description = loaderData?.seo.description;
    const shareImageUrl = loaderData?.seo.shareImage?.url;
    const safeShareImage =
      shareImageUrl && /^https:\/\//i.test(shareImageUrl) ? shareImageUrl : undefined;
    return {
      meta: [
        { title },
        ...(description ? [{ name: "description", content: description }] : []),
        { name: "robots", content: loaderData?.preview ? "noindex, nofollow" : "index, follow" },
        { property: "og:title", content: title },
        ...(description ? [{ property: "og:description", content: description }] : []),
        ...(safeShareImage
          ? [
              { property: "og:image", content: safeShareImage },
              { name: "twitter:image", content: safeShareImage },
            ]
          : []),
      ],
    };
  },
  component: VisualPage,
});

function VisualPage() {
  const page = Route.useLoaderData();
  const [Renderer, setRenderer] = useState<PuckRenderer>();
  const [renderError, setRenderError] = useState(false);
  const hasFooter = page.data.content.some((block) => block.type === "Footer");
  const startsWithHero = page.data.content[0]?.type === "Hero";
  const navigation = page.settings.navigation.map((item) => ({
    ...item,
    href: item.href.startsWith("#") ? `/${item.href}` : item.href,
  }));
  const mainClass = startsWithHero ? "" : page.preview ? "pt-[6.5rem]" : "pt-16";

  useEffect(() => {
    let active = true;
    void import("@puckeditor/core")
      .then(({ Render }) => {
        if (active) setRenderer(() => Render);
      })
      .catch((cause: unknown) => {
        console.error("[visual pages] renderer failed to load", cause);
        if (active) setRenderError(true);
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      <SiteHeader
        brandName={page.settings.brandName}
        navigation={navigation}
        previewMode={page.preview}
      />
      <main id="top" className={`min-h-screen ${mainClass}`}>
        {Renderer ? (
          <Renderer config={publicConfig} data={page.data} metadata={page.metadata} />
        ) : (
          <p className="p-8 text-sm text-muted-foreground" role={renderError ? "alert" : "status"}>
            {renderError ? "The page layout could not be loaded." : "Loading page layout…"}
          </p>
        )}
      </main>
      {!hasFooter && (
        <SiteFooter brandName={page.settings.brandName} footerText={page.settings.footerText} />
      )}
    </>
  );
}
