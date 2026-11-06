import { createFileRoute } from "@tanstack/react-router";
import { previewCookieHeader } from "@/lib/sanity/preview-token";

/** "Return to published site" — clears the preview cookie. */
export const Route = createFileRoute("/api/preview/disable")({
  server: {
    handlers: {
      GET: () =>
        new Response(null, {
          status: 307,
          headers: { Location: "/", "Set-Cookie": previewCookieHeader("", 0), "Cache-Control": "no-store" },
        }),
    },
  },
});
