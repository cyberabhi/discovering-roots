import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Component,
  type ErrorInfo,
  type ReactNode,
  lazy,
  Suspense,
  useEffect,
  useState,
} from "react";

const StudioGuidanceList = [
  "The deployment is serving the public site, but the Studio is not connected to a Sanity project yet.",
  "Invite an authorized Sanity editor to the project and confirm the dataset role before trying to sign in.",
  "Add the exact deployment origins to Sanity Manage → CORS, with credentialed requests enabled.",
  "Keep this route private; do not disable authentication, bypass CORS, or expose browser write credentials.",
];

function StudioNotConfigured() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-50 px-6 py-12 text-slate-900">
      <div className="max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
          Editorial studio
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950">
          Studio configuration pending
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-700">
          This deployment is ready to serve the public website, but the private Studio is not yet
          connected to a configured Sanity project.
        </p>
        <ul className="mt-5 list-disc space-y-2 pl-6 text-sm leading-6 text-slate-700">
          {StudioGuidanceList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          <p className="font-medium text-slate-900">Exact setup required</p>
          <p className="mt-2">
            Add the live deployment origin and the local development origin to the project’s CORS
            list. Use exact origins, not wildcards, and enable credentialed requests for the Studio.
          </p>
        </div>
        <p className="mt-6 text-sm text-slate-600">
          Once authorized project membership and exact CORS configuration are in place, the Studio
          can be opened normally here.
        </p>
      </div>
    </div>
  );
}

class StudioConfigurationBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn("[studio] Sanity Studio could not initialize; configuration is pending.", {
      error,
      errorInfo,
    });
  }

  override render() {
    if (this.state.hasError) {
      return <StudioNotConfigured />;
    }

    return this.props.children;
  }
}

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
      <StudioConfigurationBoundary>
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
      </StudioConfigurationBoundary>
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
