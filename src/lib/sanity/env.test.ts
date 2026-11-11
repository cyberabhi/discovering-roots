import { describe, expect, it } from "vitest";
import { DEFAULT_SANITY_API_VERSION, readSanityEnv } from "./env";

describe("readSanityEnv", () => {
  it("accepts the required published-content configuration and trims optional secrets", () => {
    const env = readSanityEnv({
      SANITY_PROJECT_ID: "discovering-roots",
      SANITY_DATASET: "production",
      SANITY_API_READ_TOKEN: " viewer-token ",
      SANITY_PREVIEW_SECRET: " preview-secret ",
    });

    expect(env.configured).toBe(true);
    expect(env.apiVersion).toBe(DEFAULT_SANITY_API_VERSION);
    expect(env.readToken).toBe("viewer-token");
    expect(env.previewSecret).toBe("preview-secret");
    expect(env.missing).toEqual([]);
    expect(env.invalid).toEqual([]);
  });

  it("reports missing required settings without requiring preview-only secrets", () => {
    const env = readSanityEnv({});

    expect(env.configured).toBe(false);
    expect(env.missing).toEqual(["SANITY_PROJECT_ID", "SANITY_DATASET"]);
    expect(env.invalid).toEqual([]);
  });

  it("rejects malformed identifiers and API versions", () => {
    const env = readSanityEnv({
      SANITY_PROJECT_ID: "not valid",
      SANITY_DATASET: "production!",
      SANITY_API_VERSION: "latest",
    });

    expect(env.configured).toBe(false);
    expect(env.invalid).toEqual(["SANITY_PROJECT_ID", "SANITY_DATASET", "SANITY_API_VERSION"]);
  });
});
