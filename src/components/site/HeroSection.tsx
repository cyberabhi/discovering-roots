import landscape from "@/assets/changthang-landscape.jpg";
import { MediaSlot } from "./MediaSlot";

export function HeroSection() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative">
      <div className="relative flex min-h-[92vh] items-end overflow-hidden pt-16">
        <img src={landscape} alt="Muted dawn over the high Changthang plateau, with a distant herd" className="absolute inset-0 h-full w-full object-cover" />
        <div aria-hidden className="absolute inset-0" style={{ background: "var(--hero-veil)" }} />
        <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-16 md:px-10 md:pb-24">
          <p className="eyebrow !text-paper/80">Discovering Roots · A heritage archive of handmade Pashmina</p>
          <h1 id="hero-title" className="mt-5 max-w-4xl text-5xl leading-[0.95] text-paper sm:text-6xl md:text-8xl">
            A thread that carries <em className="italic">generations</em>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/85 md:text-lg">
            Documenting, with consent and care, the people and hand processes behind authentic Pashmina — from high pasture to finished cloth.
          </p>
          <a href="#craft" className="mt-9 inline-flex items-center gap-3 border border-paper/60 px-6 py-3 eyebrow !text-paper transition-colors hover:bg-paper hover:!text-slate">
            Follow the thread <span aria-hidden>↓</span>
          </a>
        </div>
      </div>

      <div id="story" className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <div className="md:col-span-4 md:pt-10">
          <p className="eyebrow">The Story</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">The shawl is a map of its own making.</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Its embroidery depicts landscape, goats, people, hand processes and the loom. We follow that thread, chapter by chapter, through the hands that make it.
          </p>
        </div>
        <figure className="md:col-span-8">
          <MediaSlot kind="shawl" label="Full shawl photograph (supplied reference)" alt="Placeholder for the full embroidered Pashmina shawl laid flat" className="aspect-[4/5] w-full md:aspect-[16/11]" />
          <figcaption className="mt-3 eyebrow">Plate I — The complete shawl. Real photograph to be placed here.</figcaption>
        </figure>
      </div>
    </section>
  );
}
