import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityEnv } from "./env";
import type { CmsImage } from "./types";

/** Builds a sized CDN URL for a Sanity image, or undefined if no asset is set. */
export function imageUrl(env: SanityEnv, img: CmsImage | null | undefined, width = 1400): string | undefined {
  if (!img?.asset?._ref) return undefined;
  try {
    return createImageUrlBuilder({ projectId: env.projectId, dataset: env.dataset })
      .image(img)
      .width(width)
      .fit("max")
      .auto("format")
      .url();
  } catch {
    return undefined;
  }
}
