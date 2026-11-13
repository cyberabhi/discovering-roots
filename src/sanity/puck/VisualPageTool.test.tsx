import { render, screen } from "@testing-library/react";
import type { Tool } from "sanity";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  user: null as { roles: { name: string; title: string }[] } | null,
  fetch: vi.fn(),
  getSiteContent: vi.fn(),
}));

vi.mock("sanity", () => ({
  useClient: () => ({ withConfig: () => ({ fetch: mocks.fetch }) }),
  useCurrentUser: () => mocks.user,
}));

vi.mock("@puckeditor/core", () => ({ Puck: () => null }));
vi.mock("@/lib/content.functions", () => ({ getSiteContent: mocks.getSiteContent }));

import { VisualPageTool } from "./VisualPageTool";

const testTool = {
  name: "test",
  title: "Test",
  component: () => null,
} satisfies Tool;

describe("Visual Page Editor role access", () => {
  beforeEach(() => {
    mocks.user = { roles: [{ name: "viewer", title: "Viewer" }] };
    mocks.fetch.mockReset();
    mocks.getSiteContent.mockReset();
  });

  it("does not load page data or expose editing controls to a Viewer", () => {
    render(<VisualPageTool tool={testTool} />);

    expect(
      screen.getByRole("heading", { name: "Visual page editor access required" }),
    ).toBeVisible();
    expect(screen.queryByRole("button", { name: "Create page" })).not.toBeInTheDocument();
    expect(mocks.fetch).not.toHaveBeenCalled();
    expect(mocks.getSiteContent).not.toHaveBeenCalled();
  });

  it("allows an Editor to enter the page management interface", async () => {
    mocks.user = { roles: [{ name: "editor", title: "Editor" }] };
    mocks.fetch.mockResolvedValue([]);
    mocks.getSiteContent.mockResolvedValue(JSON.stringify({ chapters: [] }));

    render(<VisualPageTool tool={testTool} />);

    expect(await screen.findByRole("button", { name: "Create page" })).toBeVisible();
    expect(mocks.fetch).toHaveBeenCalled();
    expect(mocks.getSiteContent).toHaveBeenCalledOnce();
  });
});
