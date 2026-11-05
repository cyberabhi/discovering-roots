import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { HeroSection } from "@/components/site/HeroSection";
import { EmbroideredJourney } from "@/components/site/EmbroideredJourney";
import { OriginSection, ArtisansSection, ShawlDetailGallery, PreservationSection, SiteFooter } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Discovering Roots — The Making of Handmade Pashmina" },
      { name: "description", content: "A heritage archive following the thread of authentic handmade Pashmina through eight hand processes, from Changthang pasture to the loom." },
      { property: "og:title", content: "Discovering Roots — A thread that carries generations" },
      { property: "og:description", content: "Follow the embroidered thread through the eight chapters of handmade Pashmina." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-paper focus:p-3">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <OriginSection />
        <EmbroideredJourney />
        <ArtisansSection />
        <ShawlDetailGallery />
        <PreservationSection />
      </main>
      <SiteFooter />
    </>
  );
}
