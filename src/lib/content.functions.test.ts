import { QueryClient } from "@tanstack/react-query";
import { describe, expect, it, vi } from "vitest";
import { siteContentQuery } from "./content.functions";

const { getSiteContentMock } = vi.hoisted(() => ({
  getSiteContentMock: vi.fn(async () => JSON.stringify({ source: "demo" })),
}));

vi.mock("@tanstack/react-start", () => ({
  createServerFn: () => ({
    validator: () => ({
      handler: () => getSiteContentMock,
    }),
  }),
}));

vi.mock("@tanstack/react-start/server", () => ({
  getRequest: vi.fn(),
  setResponseHeader: vi.fn(),
}));

describe("homepage content query cache", () => {
  it("passes the requested scope to the server function", async () => {
    const queryClient = new QueryClient();

    await queryClient.fetchQuery(siteContentQuery("preview"));

    expect(getSiteContentMock).toHaveBeenCalledWith({
      data: { scope: "preview" },
    });
  });

  it("keeps published and preview entries in separate caches", () => {
    expect(siteContentQuery("published").queryKey).toEqual(["site-content", "published"]);
    expect(siteContentQuery("preview").queryKey).toEqual(["site-content", "preview"]);
    expect(siteContentQuery("preview").staleTime).toBe(0);
  });
});
