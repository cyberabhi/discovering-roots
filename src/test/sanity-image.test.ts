import { describe, expect, it } from "vitest";
import { imageUrl } from "@/lib/sanity/image";
import { readSanityEnv } from "@/lib/sanity/env";

const env = readSanityEnv({ SANITY_PROJECT_ID: "example", SANITY_DATASET: "production" });

describe("Sanity image normalization", () => {
  it("builds an asset URL even when optional CMS URL metadata is null", () => {
    const url = imageUrl(env, {
      asset: { _ref: "image-abc123-800x600-jpg" },
      url: null,
      alt: null,
    }, 800);
    expect(url).toBe("https://cdn.sanity.io/images/example/production/abc123-800x600.jpg?w=800&fit=max&auto=format");
  });

  it("returns undefined for an image without an asset", () => {
    expect(imageUrl(env, { asset: null, url: null })).toBeUndefined();
  });
});