import "@tanstack/react-start/server-only";

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
  invalid: string[];
}

const projectIdPattern = /^[a-z0-9][a-z0-9-]{0,63}$/;
const datasetPattern = /^[a-z0-9][a-z0-9_-]{0,63}$/;
const apiVersionPattern = /^\d{4}-\d{2}-\d{2}$/;

function runtimeEnv(): Record<string, string | undefined> {
  return typeof process === "undefined" ? {} : process.env;
}

export function readSanityEnv(
  source: Record<string, string | undefined> = runtimeEnv(),
): SanityEnv {
  const projectId = (source["SANITY_PROJECT_ID"] ?? "").trim();
  const dataset = (source["SANITY_DATASET"] ?? "").trim();
  const configuredApiVersion = (source["SANITY_API_VERSION"] ?? "").trim();
  const apiVersion = configuredApiVersion || DEFAULT_SANITY_API_VERSION;
  const missing: string[] = [];
  const invalid: string[] = [];
  if (!projectId) missing.push("SANITY_PROJECT_ID");
  if (!dataset) missing.push("SANITY_DATASET");
  if (projectId && !projectIdPattern.test(projectId)) invalid.push("SANITY_PROJECT_ID");
  if (dataset && !datasetPattern.test(dataset)) invalid.push("SANITY_DATASET");
  if (configuredApiVersion && !apiVersionPattern.test(configuredApiVersion))
    invalid.push("SANITY_API_VERSION");
  return {
    configured: missing.length === 0 && invalid.length === 0,
    projectId,
    dataset,
    apiVersion,
    readToken: source["SANITY_API_READ_TOKEN"]?.trim() || undefined,
    previewSecret: source["SANITY_PREVIEW_SECRET"]?.trim() || undefined,
    missing,
    invalid,
  };
}
