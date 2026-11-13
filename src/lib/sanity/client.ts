import { createClient, type SanityClient } from "@sanity/client";
import type { SanityEnv } from "./env";

/** Public client: published documents only, uncached, and no token. */
export function createPublishedClient(env: SanityEnv): SanityClient {
  return createClient({
    projectId: env.projectId,
    dataset: env.dataset,
    apiVersion: env.apiVersion,
    useCdn: false,
    perspective: "published",
  });
}

/**
 * Authenticated preview client: includes drafts. Server-only — uses the
 * viewer token. Only call after the preview cookie has been verified.
 */
export function createPreviewClient(env: SanityEnv): SanityClient {
  if (!env.readToken) throw new Error("SANITY_API_READ_TOKEN is required for preview");
  return createClient({
    projectId: env.projectId,
    dataset: env.dataset,
    apiVersion: env.apiVersion,
    useCdn: false,
    token: env.readToken,
    perspective: "drafts",
  });
}
