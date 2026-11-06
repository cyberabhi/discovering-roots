import { createFileRoute } from "@tanstack/react-router";

/**
 * Entry point for Sanity Studio's Presentation tool ("Preview draft").
 * Studio appends a short-lived `sanity-preview-secret`, which we validate
 * against the dataset with the server-only viewer token. Only then is a
 * signed, httpOnly preview cookie issued. Anonymous visitors cannot forge it.
 */
export const Route = createFileRoute("/api/preview/enable")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const { readSanityEnv } = await import("@/lib/sanity/env");
        const env = readSanityEnv();
        if (!env.configured || !env.readToken || !env.previewSecret) {
          return new Response("Draft preview is not configured on this deployment.", { status: 501 });
        }
        const { validatePreviewUrl } = await import("@sanity/preview-url-secret");
        const { createClient } = await import("@sanity/client");
        const client = createClient({
          projectId: env.projectId,
          dataset: env.dataset,
          apiVersion: env.apiVersion,
          useCdn: false,
          token: env.readToken,
        });
        const { isValid, redirectTo = "/" } = await validatePreviewUrl(client, request.url);
        if (!isValid) return new Response("Invalid or expired preview link.", { status: 401 });

        const { signPreviewToken, previewCookieHeader, PREVIEW_MAX_AGE_SECONDS } = await import("@/lib/sanity/preview-token");
        const token = await signPreviewToken(env.previewSecret, Date.now() + PREVIEW_MAX_AGE_SECONDS * 1000);
        const safeRedirect = redirectTo.startsWith("/") && !redirectTo.startsWith("//") ? redirectTo : "/";
        return new Response(null, {
          status: 307,
          headers: {
            Location: safeRedirect,
            "Set-Cookie": previewCookieHeader(token, PREVIEW_MAX_AGE_SECONDS),
            "Cache-Control": "no-store",
          },
        });
      },
    },
  },
});
