// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";
import { chapters } from "@/data/chapters";
import { ShawlCanvas } from "./ShawlCanvas";

beforeAll(() => {
  Object.defineProperty(SVGElement.prototype, "getTotalLength", {
    configurable: true,
    value: () => 800,
  });
  Object.defineProperty(SVGElement.prototype, "getPointAtLength", {
    configurable: true,
    value: (length: number) => ({ x: length, y: length }),
  });
  vi.stubGlobal("requestAnimationFrame", () => 1);
  vi.stubGlobal("cancelAnimationFrame", () => {});
  vi.stubGlobal("matchMedia", () => ({ matches: false }));
});

describe("ShawlCanvas background", () => {
  it("renders the uploaded image behind the SVG route", () => {
    const imageSrc = "https://cdn.example.com/journey-background.jpg";
    const { container } = render(
      <ShawlCanvas
        chapters={chapters}
        active={0}
        onSelect={() => {}}
        journeyCanvasBackground={{ src: imageSrc, alt: "Woven Pashmina textile" }}
      />,
    );

    const background = container.querySelector("img[aria-hidden='true']");
    const svg = container.querySelector("svg");

    if (!background || !svg) throw new Error("Journey canvas image or SVG was not rendered.");
    expect(background.getAttribute("src")).toBe(imageSrc);
    expect(background.classList.contains("object-cover")).toBe(true);
    expect(background.compareDocumentPosition(svg) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(svg.querySelector("path[d^='M90 80']")).not.toBeNull();
    expect(svg.querySelector("g[aria-hidden='true']")).not.toBeNull();
    expect(screen.queryByText("Replace · Shawl canvas photograph")).toBeNull();
  });

  it("keeps the existing weave and placeholder when no image is provided", () => {
    const { container } = render(
      <ShawlCanvas chapters={chapters} active={0} onSelect={() => {}} />,
    );

    expect(container.querySelector("img[aria-hidden='true']")).toBeNull();
    expect(screen.getByText("Replace · Shawl canvas photograph")).toBeTruthy();
    expect(container.querySelector(".weave")).not.toBeNull();
  });
});
