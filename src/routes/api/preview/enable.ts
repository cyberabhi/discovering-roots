import { createFileRoute } from "@tanstack/react-router";

function invalidPreviewResponse(): Response {
  return new Response("Invalid or expired preview link.", {
    status: 401,
    headers: { "Cache-Control": "no-store", "Referrer-Policy": "no-referrer" },
  });
}

function redirectToPreviewFailure(requestUrl: URL): Response {
  const destination = new URL("/", requestUrl.origin);
  destination.searchParams.set("previewError", "unavailable");
  return new Response(null, {
    status: 303,
    headers: {
      Location: `${destination.pathname}${destination.search}`,
      "Cache-Control": "no-store",
      "Referrer-Policy": "no-referrer",
    },
  });
}

export async function handlePreviewEnableRequest(request: Request): Promise<Response> {
  const requestUrl = new URL(request.url);
  const hasHandshakeSecret = requestUrl.searchParams.has("sanity-preview-secret");
  const { readSanityEnv } = await import("@/lib/sanity/env");
  const env = readSanityEnv();
  if (!env.configured || !env.readToken || !env.previewSecret) {
    if (hasHandshakeSecret) return redirectToPreviewFailure(requestUrl);
    return new Response("Draft preview is not configured on this deployment.", {
      status: 501,
      headers: { "Cache-Control": "no-store", "Referrer-Policy": "no-referrer" },
    });
  }

  if (!hasHandshakeSecret) return invalidPreviewResponse();
  const previewPathname = requestUrl.searchParams.get("sanity-preview-pathname");
  if (previewPathname) {
    try {
      new URL(previewPathname, "http://localhost");
    } catch {
      return redirectToPreviewFailure(requestUrl);
    }
  }

  const { validatePreviewUrl } = await import("@sanity/preview-url-secret");
  const { withoutSecretSearchParams } =
    await import("@sanity/preview-url-secret/without-secret-search-params");
  const { createClient } = await import("@sanity/client");
  const client = createClient({
    projectId: env.projectId,
    dataset: env.dataset,
    apiVersion: env.apiVersion,
    useCdn: false,
    token: env.readToken,
  });
  let validation: Awaited<ReturnType<typeof validatePreviewUrl>>;
  try {
    validation = await validatePreviewUrl(client, request.url);
  } catch {
    return redirectToPreviewFailure(requestUrl);
  }
  const { isValid, redirectTo = "/" } = validation;
  if (!isValid) return redirectToPreviewFailure(requestUrl);

  const { signPreviewToken, previewCookieHeader, PREVIEW_MAX_AGE_SECONDS } =
    await import("@/lib/sanity/preview-token");
  const token = await signPreviewToken(
    env.previewSecret,
    Date.now() + PREVIEW_MAX_AGE_SECONDS * 1000,
  );
  const redirectUrl = new URL(redirectTo, requestUrl);
  const safeRedirect =
    redirectUrl.origin === requestUrl.origin
      ? withoutSecretSearchParams(redirectUrl)
      : new URL("/", requestUrl);

  return new Response(null, {
    status: 307,
    headers: {
      Location: `${safeRedirect.pathname}${safeRedirect.search}${safeRedirect.hash}`,
      "Set-Cookie": previewCookieHeader(token, PREVIEW_MAX_AGE_SECONDS),
      "Cache-Control": "no-store",
      "Referrer-Policy": "no-referrer",
    },
  });
}

/**
 * Entry point for Sanity Studio's Presentation tool ("Preview draft").
 * Studio appends a short-lived `sanity-preview-secret`, which we validate
 * against the dataset with the server-only viewer token. Only then is a
 * signed, httpOnly preview cookie issued. Anonymous visitors cannot forge it.
 */
export const Route = createFileRoute("/api/preview/enable")({
  server: {
    handlers: {
      GET: ({ request }) => handlePreviewEnableRequest(request),
    },
  },
});
