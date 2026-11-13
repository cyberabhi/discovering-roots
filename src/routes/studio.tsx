import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";

const SanityStudio = lazy(async () => {
  const [{ Studio }, { studioConfig }] = await Promise.all([
    import("sanity"),
    import("@/sanity/config"),
  ]);
  return { default: () => <Studio config={studioConfig} /> };
});

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Editorial Studio — Discovering Roots" },
      {
        name: "description",
        content:
          "Private editorial studio for Discovering Roots editors. Sign-in with an invited Sanity account is required.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Editorial Studio — Discovering Roots" },
      { property: "og:description", content: "Private editorial studio for invited editors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: StudioPage,
});

function StudioPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return (
    <main className="h-dvh min-h-[480px] w-screen overflow-hidden bg-white text-slate-950">
      {isMounted ? (
        <Suspense
          fallback={
            <p className="p-6 text-sm" role="status">
              Loading the private editorial studio…
            </p>
          }
        >
          <SanityStudio />
        </Suspense>
      ) : (
        <p className="p-6 text-sm" role="status">
          Loading the private editorial studio…
        </p>
      )}
      <Link
        to="/"
        aria-label="Return to Discovering Roots"
        className="sr-only focus:not-sr-only focus:fixed focus:bottom-4 focus:left-4 focus:z-[100] focus:bg-white focus:p-3 focus:text-slate-950"
      >
        Return to website
      </Link>
    </main>
  );
}
