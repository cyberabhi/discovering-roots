import "@tanstack/react-start/server-only";

import { chapters as demoChapters } from "@/data/chapters";
import { demoSettings } from "@/data/demo-content";
import { createPreviewClient, createPublishedClient } from "./client";
import { readSanityEnv, type SanityEnv } from "./env";
import { imageUrl } from "./image";
import { mapChapters, mapSettings, mapShawl } from "./map";
import { PREVIEW_COOKIE, readCookie, verifyPreviewToken } from "./preview-token";
import { HOMEPAGE_QUERY } from "./queries";
import type { CmsHomepage, SiteContent } from "./types";

/** Keep a failed CMS request from delaying the local experience indefinitely. */
export const CMS_FETCH_TIMEOUT_MS = 5_000;

export type HomepageFetcher = (env: SanityEnv, preview: boolean) => Promise<CmsHomepage>;

export interface LoadSiteContentOptions {
  cookieHeader?: string | null;
  env?: SanityEnv;
  fetchHomepage?: HomepageFetcher;
}

function setupNotice(env: SanityEnv): string {
  const issues = [...env.missing, ...env.invalid];
  return `Demo content — the CMS is not configured (${issues.join(", ") || "a valid SANITY_PROJECT_ID"}).`;
}

export function createDemoContent(notice: string, preview = false): SiteContent {
  return {
    source: "demo",
    preview,
    notice,
    chapters: demoChapters,
    settings: demoSettings,
    shawl: null,
  };
}

async function withTimeout<T>(operation: Promise<T>, timeoutMs = CMS_FETCH_TIMEOUT_MS): Promise<T> {
  let timeout: ReturnType<typeof setTimeout> | undefined;
  const timeoutPromise = new Promise<never>((_, reject) => {
    timeout = setTimeout(
      () => reject(new Error(`Sanity request timed out after ${timeoutMs}ms`)),
      timeoutMs,
    );
  });

  try {
    return await Promise.race([operation, timeoutPromise]);
  } finally {
    if (timeout) clearTimeout(timeout);
  }
}

/** Fetches Sanity on the server only. Preview clients are selected only after cookie verification. */
export const fetchHomepageFromSanity: HomepageFetcher = async (env, preview) => {
  const client = preview ? createPreviewClient(env) : createPublishedClient(env);
  return withTimeout(client.fetch<CmsHomepage>(HOMEPAGE_QUERY));
};

async function hasValidPreviewSession(
  env: SanityEnv,
  cookieHeader?: string | null,
): Promise<boolean> {
  if (!env.readToken || !env.previewSecret) return false;
  try {
    return await verifyPreviewToken(
      env.previewSecret,
      readCookie(cookieHeader ?? null, PREVIEW_COOKIE),
    );
  } catch {
    return false;
  }
}

/**
 * Builds the view model shared by the existing homepage components.
 * Content is deliberately all-or-nothing: incomplete CMS chapters never
 * displace the authored eight-chapter demo journey.
 */
export async function loadSiteContent(options: LoadSiteContentOptions = {}): Promise<SiteContent> {
  const env = options.env ?? readSanityEnv();
  if (!env.configured) return createDemoContent(setupNotice(env));

  const preview = await hasValidPreviewSession(env, options.cookieHeader);
  const fetchHomepage = options.fetchHomepage ?? fetchHomepageFromSanity;

  try {
    const raw = await fetchHomepage(env, preview);
    const urlFor = (img: Parameters<typeof imageUrl>[1], width?: number) =>
      imageUrl(env, img, width);
    const chapters = mapChapters(raw.chapters, urlFor);

    if (!chapters) {
      const found = raw.chapters?.length ?? 0;
      return createDemoContent(
        `Showing demo content — the CMS has ${found} of 8 ${preview ? "" : "published "}journey chapters (steps 1–8 are all required).`,
        preview,
      );
    }

    return {
      source: "sanity",
      preview,
      notice: null,
      chapters,
      settings: mapSettings(raw.settings, urlFor),
      shawl: mapShawl(raw.shawl, urlFor),
    };
  } catch (error) {
    // Do not surface backend details or environment values to visitors.
    console.error("[sanity] content fetch failed", error);
    return createDemoContent(
      "Demo content — the CMS could not be reached. Check the server-side Sanity configuration.",
      preview,
    );
  }
}
