import { createServerFn } from "@tanstack/react-start";
import { getRequest, setResponseHeader } from "@tanstack/react-start/server";
import { queryOptions } from "@tanstack/react-query";
import { z } from "zod";
import type { SiteContent } from "@/lib/sanity/types";

/**
 * Loads homepage content. Published documents for everyone; drafts only when
 * the request carries a valid signed preview cookie AND a server read token exists.
 * Falls back to the local demo content with a clear notice on any setup gap.
 */
export const getSiteContent = createServerFn({ method: "GET" })
  .validator(
    z.object({
      scope: z.enum(["published", "preview"]),
    }),
  )
  .handler(async ({ data }): Promise<string> => {
    setResponseHeader("Cache-Control", "private, no-store, max-age=0");
    setResponseHeader("Pragma", "no-cache");
    setResponseHeader("Vary", "Cookie");
    const { loadSiteContent } = await import("@/lib/sanity/content.server");
    const request = getRequest();
    const cookieHeader = request.headers.get("cookie");
    const allowPreview = data.scope === "preview";
    const content = await loadSiteContent({
      cookieHeader,
      allowPreview,
    });
    return JSON.stringify(content);
  });

export function siteContentQuery(scope: "published" | "preview" = "published") {
  return queryOptions({
    queryKey: ["site-content", scope],
    queryFn: async (): Promise<SiteContent> =>
      JSON.parse(await getSiteContent({ data: { scope } })),
    staleTime: 0,
  });
}
