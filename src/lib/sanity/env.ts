/**
 * Sanity environment configuration (server-side only).
 * Call `readSanityEnv()` inside a server function / server route handler —
 * never at module scope — so values are read at request time on any host.
 */
export const DEFAULT_SANITY_API_VERSION = "2025-02-19";

export interface SanityEnv {
  configured: boolean;
  projectId: string;
  dataset: string;
  apiVersion: string;
  /** Viewer-role token, server-only. Required only for draft preview. */
  readToken: string | undefined;
  /** Secret used to sign the preview cookie. Required only for draft preview. */
  previewSecret: string | undefined;
  missing: string[];
}

export function readSanityEnv(source: Record<string, string | undefined> = process.env): SanityEnv {
  const projectId = (source["SANITY_PROJECT_ID"] ?? "").trim();
  const dataset = (source["SANITY_DATASET"] ?? "").trim();
  const apiVersion = (source["SANITY_API_VERSION"] ?? "").trim() || DEFAULT_SANITY_API_VERSION;
  const missing: string[] = [];
  if (!projectId) missing.push("SANITY_PROJECT_ID");
  if (!dataset) missing.push("SANITY_DATASET");
  return {
    configured: missing.length === 0 && /^[a-z0-9-]+$/.test(projectId),
    projectId,
    dataset,
    apiVersion,
    readToken: source["SANITY_API_READ_TOKEN"]?.trim() || undefined,
    previewSecret: source["SANITY_PREVIEW_SECRET"]?.trim() || undefined,
    missing,
  };
}
