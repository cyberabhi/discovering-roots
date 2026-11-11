import { describe, expect, it } from "vitest";
import { signPreviewToken, verifyPreviewToken } from "./preview-token";

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
});
