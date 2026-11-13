import { lazy, Suspense } from "react";
import type { Tool } from "sanity";

const VisualPageEditor = lazy(() =>
  import("./VisualPageTool").then(({ VisualPageTool }) => ({ default: VisualPageTool })),
);

export function VisualPageToolEntry(props: { tool: Tool }) {
  return (
    <Suspense fallback={<p role="status">Loading the visual page editor…</p>}>
      <VisualPageEditor {...props} />
    </Suspense>
  );
}
