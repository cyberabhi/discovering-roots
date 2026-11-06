import { createFileRoute, Link } from "@tanstack/react-router";

const STUDIO_URL = import.meta.env.VITE_SANITY_STUDIO_URL as string | undefined;

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Editorial Studio — Discovering Roots" },
      { name: "description", content: "Private editorial studio for Discovering Roots editors. Sign-in with an invited Sanity account is required." },
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
  return (
    <main className="weave flex min-h-screen items-center justify-center px-5 py-20">
      <div className="max-w-xl">
        <p className="eyebrow">Private · Editors only</p>
        <h1 className="mt-4 text-4xl leading-tight md:text-5xl">Editorial Studio</h1>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Chapters, artisans, shawls, documentary media and site settings are edited in Sanity Studio. Access requires signing in with a Sanity account that has been invited to this project — there is no public login or shared password.
        </p>
        {STUDIO_URL ? (
          <a href={STUDIO_URL} rel="noopener" className="mt-8 inline-flex items-center gap-3 bg-slate px-6 py-3 eyebrow !text-paper transition-opacity hover:opacity-90">
            Open Studio (sign-in required) <span aria-hidden>→</span>
          </a>
        ) : (
          <p className="mt-8 border-l-2 border-thread pl-4 text-sm text-muted-foreground">
            Setup required: the Studio address is not configured yet. Deploy the Studio (see README → “Sanity Studio”) and set <code>VITE_SANITY_STUDIO_URL</code>.
          </p>
        )}
        <p className="mt-10">
          <Link to="/" className="eyebrow underline underline-offset-4">← Back to the site</Link>
        </p>
      </div>
    </main>
  );
}
