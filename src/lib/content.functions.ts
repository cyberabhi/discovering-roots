import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { queryOptions } from "@tanstack/react-query";
import { chapters as demoChapters } from "@/data/chapters";
import { demoSettings } from "@/data/demo-content";
import type { CmsHomepage, SiteContent } from "@/lib/sanity/types";

/**
 * Loads homepage content. Published documents for everyone; drafts only when
 * the request carries a valid signed preview cookie AND a server read token exists.
 * Falls back to the local demo content with a clear notice on any setup gap.
 */
export const getSiteContent = createServerFn({ method: "GET" }).handler(async () => {
  // Portable Text permits arbitrary JSON fields typed as `unknown`. Carry the
  // CMS payload as JSON so RPC serialization never receives those SDK types.
  const loadContent = async (): Promise<SiteContent> => {
    const { readSanityEnv } = await import("@/lib/sanity/env");
    const env = readSanityEnv();
    const demo = (notice: string, preview = false): SiteContent => ({
      source: "demo",
      preview,
      notice,
      chapters: demoChapters,
      settings: demoSettings,
      shawl: null,
    });

    if (!env.configured) {
      return demo(
        `Demo content — the CMS is not configured (missing ${env.missing.join(", ") || "a valid SANITY_PROJECT_ID"}).`,
      );
    }

    const { PREVIEW_COOKIE, readCookie, verifyPreviewToken } =
      await import("@/lib/sanity/preview-token");
    const cookie = readCookie(getRequest().headers.get("cookie"), PREVIEW_COOKIE);
    const preview = !!env.readToken && (await verifyPreviewToken(env.previewSecret, cookie));

    try {
      const { createPreviewClient, createPublishedClient } = await import("@/lib/sanity/client");
      const { HOMEPAGE_QUERY } = await import("@/lib/sanity/queries");
      const { imageUrl } = await import("@/lib/sanity/image");
      const { mapChapters, mapSettings, mapShawl } = await import("@/lib/sanity/map");
      const client = preview ? createPreviewClient(env) : createPublishedClient(env);
      const raw = await client.fetch<CmsHomepage>(HOMEPAGE_QUERY);
      const urlFor = (img: Parameters<typeof imageUrl>[1], w?: number) => imageUrl(env, img, w);
      const chapters = mapChapters(raw.chapters, urlFor);
      const found = raw.chapters?.length ?? 0;
      return {
        source: chapters ? "sanity" : "demo",
        preview,
        notice: chapters
          ? null
          : `Showing demo chapters — the CMS has ${found} of 8 ${preview ? "" : "published "}journey chapters (steps 1–8 are all required).`,
        chapters: chapters ?? demoChapters,
        settings: mapSettings(raw.settings, urlFor),
        shawl: mapShawl(raw.shawl, urlFor),
      };
    } catch (err) {
      console.error("[sanity] content fetch failed", err);
      return demo(
        "Demo content — the CMS could not be reached. Check SANITY_PROJECT_ID / SANITY_DATASET.",
        preview,
      );
    }
  };
  return JSON.stringify(await loadContent());
});

export const siteContentQuery = queryOptions({
  queryKey: ["site-content"],
  queryFn: async (): Promise<SiteContent> => JSON.parse(await getSiteContent()),
  staleTime: 60_000,
});
