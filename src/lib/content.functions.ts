import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { queryOptions } from "@tanstack/react-query";
import type { SiteContent } from "@/lib/sanity/types";

/**
 * Loads homepage content. Published documents for everyone; drafts only when
 * the request carries a valid signed preview cookie AND a server read token exists.
 * Falls back to the local demo content with a clear notice on any setup gap.
 */
export const getSiteContent = createServerFn({ method: "GET" }).handler(
  async (): Promise<SiteContent> => {
    const { loadSiteContent } = await import("@/lib/sanity/content.server");
    return loadSiteContent({ cookieHeader: getRequest().headers.get("cookie") });
  },
);

export const siteContentQuery = queryOptions({
  queryKey: ["site-content"],
  queryFn: () => getSiteContent(),
  staleTime: 60_000,
});
