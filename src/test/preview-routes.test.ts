import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import * as previewSecret from "@sanity/preview-url-secret";
import { handlePreviewDisableRequest } from "@/routes/api/preview/disable";
import { handlePreviewEnableRequest } from "@/routes/api/preview/enable";
import { PREVIEW_COOKIE, verifyPreviewToken } from "@/lib/sanity/preview-token";

vi.mock("@sanity/client", () => ({
  createClient: vi.fn(() => ({})),
}));

vi.mock("@sanity/preview-url-secret", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@sanity/preview-url-secret")>();
  return { ...actual, validatePreviewUrl: vi.fn() };
});

const validatePreviewUrl = vi.mocked(previewSecret.validatePreviewUrl);

describe("preview API route handlers", () => {
  beforeEach(() => {
    vi.stubEnv("SANITY_PROJECT_ID", "project-id");
    vi.stubEnv("SANITY_DATASET", "production");
    vi.stubEnv("SANITY_API_READ_TOKEN", "server-only-viewer-token");
    vi.stubEnv("SANITY_PREVIEW_SECRET", "server-only-signing-secret");
    validatePreviewUrl.mockReset();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("issues a secure preview cookie only after validating the Studio secret", async () => {
    validatePreviewUrl.mockResolvedValue({
      isValid: true,
      redirectTo: "/?sanity-preview-secret=remove-me&sanity-preview-pathname=%2F&section=journey",
    });

    const response = await handlePreviewEnableRequest(
      new Request(
        "https://discovering-roots.example/api/preview/enable?sanity-preview-secret=incoming-secret",
      ),
    );
    const cookie = response.headers.get("set-cookie") ?? "";
    const token = cookie.match(new RegExp(`${PREVIEW_COOKIE}=([^;]+)`))?.[1];

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe("/?section=journey");
    expect(response.headers.get("cache-control")).toBe("no-store");
    expect(cookie).toContain("HttpOnly");
    expect(cookie).toContain("Secure");
    expect(cookie).toContain("SameSite=None");
    expect(cookie).toContain("Partitioned");
    expect(cookie).toContain("Max-Age=3600");
    expect(token).toBeTruthy();
    await expect(
      verifyPreviewToken("server-only-signing-secret", decodeURIComponent(token ?? "")),
    ).resolves.toBe(true);
    expect(response.headers.get("location")).not.toContain("secret");
  });

  it("rejects invalid Studio preview links without setting a cookie", async () => {
    validatePreviewUrl.mockResolvedValue({ isValid: false });

    const response = await handlePreviewEnableRequest(
      new Request("https://discovering-roots.example/api/preview/enable?sanity-preview-secret=bad"),
    );

    expect(response.status).toBe(401);
    expect(response.headers.get("set-cookie")).toBeNull();
    expect(response.headers.get("cache-control")).toBe("no-store");
  });

  it("rejects external redirect targets after a valid secret", async () => {
    validatePreviewUrl.mockResolvedValue({
      isValid: true,
      redirectTo: "https://attacker.example/",
    });

    const response = await handlePreviewEnableRequest(
      new Request("https://discovering-roots.example/api/preview/enable"),
    );

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe("/");
  });

  it("returns an explicit setup error when preview credentials are absent", async () => {
    vi.stubEnv("SANITY_API_READ_TOKEN", "");

    const response = await handlePreviewEnableRequest(
      new Request("https://discovering-roots.example/api/preview/enable"),
    );

    expect(response.status).toBe(501);
    expect(response.headers.get("set-cookie")).toBeNull();
    expect(validatePreviewUrl).not.toHaveBeenCalled();
  });

  it("disables preview with an expired cookie and a published-site redirect", () => {
    const response = handlePreviewDisableRequest();

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe("/");
    expect(response.headers.get("cache-control")).toBe("no-store");
    expect(response.headers.get("set-cookie")).toContain(`${PREVIEW_COOKIE}=`);
    expect(response.headers.get("set-cookie")).toContain("Max-Age=0");
    expect(response.headers.get("set-cookie")).toContain("Partitioned");
  });
});
