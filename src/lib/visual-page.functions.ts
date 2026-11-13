import { createServerFn } from "@tanstack/react-start";
import { getRequest, setResponseHeader } from "@tanstack/react-start/server";
import { z } from "zod";
import { loadVisualPage } from "@/lib/sanity/visual-page.server";

export const getVisualPage = createServerFn({ method: "GET" })
  .validator(z.object({ slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/) }))
  .handler(async ({ data }): Promise<string> => {
    setResponseHeader("Cache-Control", "private, no-store, max-age=0");
    setResponseHeader("Pragma", "no-cache");
    setResponseHeader("Vary", "Cookie");
    const page = await loadVisualPage({
      slug: data.slug,
      cookieHeader: getRequest().headers.get("cookie"),
    });
    return JSON.stringify(page);
  });
