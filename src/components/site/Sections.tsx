import { chapters, type Chapter } from "@/data/chapters";
import type { ShawlView, SiteSettingsView } from "@/lib/sanity/types";
import { MediaSlot } from "./MediaSlot";

export function OriginSection() {
  return (
    <section id="origin" aria-labelledby="origin-title" className="weave border-t border-border">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <div className="md:col-span-5">
          <p className="eyebrow">Where the story begins</p>
          <h2 id="origin-title" className="mt-4 text-4xl leading-tight md:text-5xl">
            A rare softness, shaped by life on the high plateau.
          </h2>
        </div>
        <div className="space-y-5 leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
          <p>
            Long before a Pashmina rests on your shoulders, its story begins on the Changthang
            plateau. In the high-altitude cold, Changthangi goats grow a fine undercoat, carefully
            combed by pastoral communities during the seasonal moult.
          </p>
          <p>
            That delicate fibre is the first chapter of a shawl to be treasured—and a way to feel
            closer to the place and people behind it.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ArtisansSection({ chapters: contentChapters }: { chapters: Chapter[] }) {
  const people = contentChapters.some((chapter) => chapter.portrait)
    ? contentChapters.filter((chapter) => chapter.portrait)
    : chapters.filter((chapter) => chapter.portrait);
  return (
    <section id="artisans" aria-labelledby="artisans-title" className="border-t border-border">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <p className="eyebrow">The Artisans</p>
        <h2 id="artisans-title" className="mt-4 max-w-2xl text-4xl leading-tight md:text-5xl">
          Every chapter has hands, and every pair of hands a name.
        </h2>
        <p className="mt-5 max-w-xl text-muted-foreground">
          Names, portraits and stories appear only with each person's informed consent.
        </p>
        <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {people.map((c) => (
            <li key={c.id}>
              <MediaSlot
                kind="portrait"
                src={c.portrait!.src}
                alt={c.portrait!.alt}
                label="Portrait"
                className="aspect-[3/4] w-full"
              />
              <p className="mt-3 eyebrow">
                Ch. {String(c.number).padStart(2, "0")} · {c.kicker}
              </p>
              <p className="mt-1 font-display text-xl">{c.portrait!.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ShawlDetailGallery({ shawl }: { shawl: ShawlView | null }) {
  const detailLabels = [
    ["Fringe detail", "Placeholder for macro of hand-finished fringe"],
    ["Embroidery macro", "Placeholder for macro of hand embroidery"],
    ["Weave texture", "Placeholder for tactile weave texture crop"],
  ] as const;

  return (
    <section
      id="authenticity"
      aria-labelledby="shawl-title"
      className="border-t border-border bg-cashmere/40"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Authenticity · The finished shawl</p>
            <h2 id="shawl-title" className="mt-4 text-4xl leading-tight md:text-5xl">
              {shawl?.title ?? "The cloth, complete."}
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {shawl?.description ??
                shawl?.provenance ??
                "Provenance note (draft): each piece documented here will be accompanied by the chapters and people behind it. Verified details to be added per piece."}
            </p>
            {shawl && (shawl.materials.length > 0 || shawl.dimensions || shawl.provenance) && (
              <dl className="mt-5 space-y-2 text-sm text-muted-foreground">
                {shawl.materials.length > 0 && (
                  <div>
                    <dt className="inline font-medium text-foreground">Materials: </dt>
                    <dd className="inline">{shawl.materials.join(", ")}</dd>
                  </div>
                )}
                {shawl.dimensions && (
                  <div>
                    <dt className="inline font-medium text-foreground">Dimensions: </dt>
                    <dd className="inline">{shawl.dimensions}</dd>
                  </div>
                )}
                {shawl.provenance && (
                  <div>
                    <dt className="inline font-medium text-foreground">
                      Provenance{shawl.provenanceVerified ? " · verified" : ""}:{" "}
                    </dt>
                    <dd className="inline">{shawl.provenance}</dd>
                  </div>
                )}
              </dl>
            )}
          </div>
          <figure className="md:col-span-8 md:row-span-2">
            <MediaSlot
              kind="shawl"
              src={shawl?.mainImage?.src}
              label="Full drape photograph"
              alt={
                shawl?.mainImage?.alt ?? "Placeholder for the finished shawl in full-length drape"
              }
              className="aspect-[3/4] w-full md:aspect-[4/5]"
            />
            <figcaption className="mt-2 eyebrow">
              {shawl?.mainImage?.caption ?? "Plate III — Full drape"}
            </figcaption>
          </figure>
          <div className="grid grid-cols-3 gap-3 md:col-span-4 md:grid-cols-1 md:self-end">
            {detailLabels.map(([l, a], index) => {
              const image = shawl?.gallery[index];
              return (
                <figure key={l}>
                  <MediaSlot
                    src={image?.src}
                    label={l}
                    alt={image?.alt ?? a}
                    className="aspect-square w-full md:aspect-[16/9] [&>span]:max-md:hidden"
                  />
                  <figcaption className="mt-1 eyebrow !text-[0.6rem]">
                    {image?.caption ?? l}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PreservationSection({ cta }: { cta: SiteSettingsView["cta"] }) {
  return (
    <section id="support" aria-labelledby="support-title" className="border-t border-border">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <div className="md:col-span-6">
          <p className="eyebrow">Why this craft matters</p>
          <h2 id="support-title" className="mt-4 text-4xl leading-tight md:text-5xl">
            {cta.heading}
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">{cta.body}</p>
        </div>
        <div className="border-t border-foreground/30 pt-8 md:col-span-5 md:col-start-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          <p className="eyebrow">{cta.eyebrow}</p>
          <p className="mt-4 font-display text-3xl leading-snug">{cta.statement}</p>
          <a
            href={cta.buttonHref}
            className="mt-8 inline-flex items-center gap-3 bg-slate px-6 py-3 eyebrow !text-paper transition-opacity hover:opacity-90"
          >
            {cta.buttonLabel} <span aria-hidden>→</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{cta.impactNote}</p>
          {cta.isPlaceholderContact && (
            <p className="mt-3 text-xs text-muted-foreground">
              Placeholder contact address — to be replaced.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export function SiteFooter({
  brandName,
  footerText,
}: Pick<SiteSettingsView, "brandName" | "footerText">) {
  return (
    <footer className="border-t border-border bg-slate text-paper">
      <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 px-5 py-12 md:flex-row md:px-10">
        <p className="font-display text-2xl">{brandName}</p>
        <p className="max-w-md text-sm text-paper/70">{footerText}</p>
      </div>
    </footer>
  );
}
