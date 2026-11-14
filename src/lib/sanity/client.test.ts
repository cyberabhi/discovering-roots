import { beforeEach, describe, expect, it, vi } from "vitest";
import { createClient } from "@sanity/client";
import { createPreviewClient, createPublishedClient } from "./client";
import type { SanityEnv } from "./env";

vi.mock("@sanity/client", () => ({
  createClient: vi.fn(() => ({})),
}));

const env: SanityEnv = {
  configured: true,
  projectId: "project-id",
  dataset: "production",
  apiVersion: "2025-02-19",
  readToken: "server-only-viewer-token",
  previewSecret: "server-only-signing-secret",
  missing: [],
  invalid: [],
};

describe("Sanity clients", () => {
  beforeEach(() => vi.mocked(createClient).mockClear());

  it("uses the unauthenticated published perspective for public content", () => {
    createPublishedClient(env);

    expect(vi.mocked(createClient).mock.lastCall?.[0]).toMatchObject({
      perspective: "published",
      useCdn: false,
    });
    expect(vi.mocked(createClient).mock.lastCall?.[0]).not.toHaveProperty("token");
  });

  it("uses the drafts perspective and server token only for preview", () => {
    createPreviewClient(env);

    expect(vi.mocked(createClient).mock.lastCall?.[0]).toMatchObject({
      perspective: "drafts",
      token: "server-only-viewer-token",
      useCdn: false,
    });
  });

  it("refuses to create a draft client without the viewer token", () => {
    expect(() => createPreviewClient({ ...env, readToken: undefined })).toThrow(
      "SANITY_API_READ_TOKEN is required for preview",
    );
    expect(createClient).not.toHaveBeenCalled();
  });
});
