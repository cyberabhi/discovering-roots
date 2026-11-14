import { describe, expect, it } from "vitest";
import {
  PREVIEW_MAX_AGE_SECONDS,
  readCookie,
  signPreviewToken,
  verifyPreviewToken,
} from "./preview-token";

describe("preview session tokens", () => {
  it("accepts a correctly signed, unexpired token", async () => {
    const now = 1_700_000_000_000;
    const token = await signPreviewToken("test-preview-secret", now + 60_000);

    await expect(verifyPreviewToken("test-preview-secret", token, now)).resolves.toBe(true);
  });

  it("rejects expired tokens and tokens signed with another secret", async () => {
    const now = 1_700_000_000_000;
    const expired = await signPreviewToken("test-preview-secret", now - 1);
    const valid = await signPreviewToken("test-preview-secret", now + 60_000);

    await expect(verifyPreviewToken("test-preview-secret", expired, now)).resolves.toBe(false);
    await expect(verifyPreviewToken("another-secret", valid, now)).resolves.toBe(false);
  });

  it("rejects tokens with extra segments or expirations beyond the cookie lifetime", async () => {
    const now = 1_700_000_000_000;
    const valid = await signPreviewToken("test-preview-secret", now + 60_000);
    const tooLong = await signPreviewToken(
      "test-preview-secret",
      now + (PREVIEW_MAX_AGE_SECONDS + 1) * 1000,
    );

    await expect(verifyPreviewToken("test-preview-secret", `${valid}.extra`, now)).resolves.toBe(
      false,
    );
    await expect(verifyPreviewToken("test-preview-secret", tooLong, now)).resolves.toBe(false);
  });
});

describe("preview cookie parsing", () => {
  it("returns no token for malformed percent-encoding", () => {
    expect(readCookie("dr_preview=%E0%A4%A", "dr_preview")).toBeUndefined();
  });
});
