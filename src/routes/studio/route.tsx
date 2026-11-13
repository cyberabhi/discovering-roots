import { createFileRoute, Outlet } from "@tanstack/react-router";

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
  component: StudioLayout,
});

function StudioLayout() {
  return <Outlet />;
}
