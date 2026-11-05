import { chapters } from "@/data/chapters";
import { MediaSlot } from "./MediaSlot";

export function OriginSection() {
  return (
    <section id="origin" aria-labelledby="origin-title" className="weave border-t border-border">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <div className="md:col-span-5">
          <p className="eyebrow">The Origin</p>
          <h2 id="origin-title" className="mt-4 text-4xl leading-tight md:text-5xl">High pasture, long winters, a fibre shaped by place.</h2>
        </div>
        <div className="space-y-5 leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
          <p>Pashmina begins with the fine undercoat of Changthangi goats, raised by pastoral communities on the high Changthang plateau. The cold produces the soft down that is combed during the seasonal moult.</p>
          <p className="eyebrow !text-sky">Editorial note · geography and community details to be confirmed before publication.</p>
        </div>
      </div>
    </section>
  );
}

export function ArtisansSection() {
  const people = chapters.filter((c) => c.portrait);
  return (
    <section id="artisans" aria-labelledby="artisans-title" className="border-t border-border">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <p className="eyebrow">The Artisans</p>
        <h2 id="artisans-title" className="mt-4 max-w-2xl text-4xl leading-tight md:text-5xl">Every chapter has hands, and every pair of hands a name.</h2>
        <p className="mt-5 max-w-xl text-muted-foreground">Names, portraits and stories appear only with each person's informed consent.</p>
        <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {people.map((c) => (
            <li key={c.id}>
              <MediaSlot kind="portrait" src={c.portrait!.src} alt={c.portrait!.alt} label="Portrait" className="aspect-[3/4] w-full" />
              <p className="mt-3 eyebrow">Ch. {String(c.number).padStart(2, "0")} · {c.kicker}</p>
              <p className="mt-1 font-display text-xl">{c.portrait!.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ShawlDetailGallery() {
  return (
    <section id="authenticity" aria-labelledby="shawl-title" className="border-t border-border bg-cashmere/40">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Authenticity · The finished shawl</p>
            <h2 id="shawl-title" className="mt-4 text-4xl leading-tight md:text-5xl">The cloth, complete.</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Provenance note (draft): each piece documented here will be accompanied by the chapters and people behind it. Verified details to be added per piece.
            </p>
          </div>
          <figure className="md:col-span-8 md:row-span-2">
            <MediaSlot kind="shawl" label="Full drape photograph" alt="Placeholder for the finished shawl in full-length drape" className="aspect-[3/4] w-full md:aspect-[4/5]" />
            <figcaption className="mt-2 eyebrow">Plate III — Full drape</figcaption>
          </figure>
          <div className="grid grid-cols-3 gap-3 md:col-span-4 md:grid-cols-1 md:self-end">
            {([
              ["Fringe detail", "Placeholder for macro of hand-finished fringe"],
              ["Embroidery macro", "Placeholder for macro of hand embroidery"],
              ["Weave texture", "Placeholder for tactile weave texture crop"],
            ] as const).map(([l, a]) => (
              <figure key={l}>
                <MediaSlot label={l} alt={a} className="aspect-square w-full md:aspect-[16/9] [&>span]:max-md:hidden" />
                <figcaption className="mt-1 eyebrow !text-[0.6rem]">{l}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PreservationSection() {
  return (
    <section id="support" aria-labelledby="support-title" className="border-t border-border">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <div className="md:col-span-6">
          <p className="eyebrow">Why this craft matters</p>
          <h2 id="support-title" className="mt-4 text-4xl leading-tight md:text-5xl">Knowledge held in hands is easily lost.</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Each step of handmade Pashmina carries skills passed between generations. Documenting them honestly — and connecting them with people who value the work — helps keep that knowledge alive.
          </p>
        </div>
        <div className="border-t border-foreground/30 pt-8 md:col-span-5 md:col-start-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          <p className="eyebrow">Support · Private enquiry</p>
          <p className="mt-4 font-display text-3xl leading-snug">For collectors, institutions and supporters of the craft.</p>
          <a href="mailto:hello@example.com?subject=Discovering%20Roots%20enquiry" className="mt-8 inline-flex items-center gap-3 bg-slate px-6 py-3 eyebrow !text-paper transition-opacity hover:opacity-90">
            Make a private enquiry <span aria-hidden>→</span>
          </a>
          <p className="mt-3 text-xs text-muted-foreground">Placeholder contact address — to be replaced.</p>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-slate text-paper">
      <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 px-5 py-12 md:flex-row md:px-10">
        <p className="font-display text-2xl">Discovering Roots</p>
        <p className="max-w-md text-sm text-paper/70">A heritage storytelling initiative documenting authentic handmade Pashmina. All imagery and stories shared with consent.</p>
      </div>
    </footer>
  );
}
