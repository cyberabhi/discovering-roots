import { useEffect, useRef, useState } from "react";
import { zones, type Chapter } from "@/data/chapters";
import { ProcessChapter } from "./ProcessChapter";
import { ShawlCanvas } from "./ShawlCanvas";

interface EmbroideredJourneyProps {
  chapters: Chapter[];
}

/** Main interactive journey: sticky shawl map (desktop) + chronological chapters. */
export function EmbroideredJourney({ chapters }: EmbroideredJourneyProps) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset["index"]));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const select = (i: number) => {
    setActive(i);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    refs.current[i]?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    refs.current[i]?.focus({ preventScroll: true });
  };

  return (
    <section id="craft" aria-labelledby="craft-title" className="relative border-t border-border">
      <div className="mx-auto max-w-[1440px] px-5 pt-20 md:px-10 md:pt-28">
        <p className="eyebrow">The Craft · Eight chapters</p>
        <h2 id="craft-title" className="mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">
          Follow the embroidered thread, from pasture to loom.
        </h2>
      </div>

      {/* Mobile compact progress */}
      <div
        className="sticky top-16 z-30 mt-10 border-y border-border bg-paper/95 px-5 py-3 backdrop-blur lg:hidden"
        aria-live="polite"
      >
        <div className="flex items-center justify-between eyebrow">
          <span>{zones[chapters[active]!.zone].label}</span>
          <span>{String(active + 1).padStart(2, "0")} / 08</span>
        </div>
        <div className="mt-2 flex gap-1">
          {chapters.map((c, i) => (
            <button
              key={c.id}
              onClick={() => select(i)}
              aria-label={`Go to chapter ${c.number}: ${c.title}`}
              className={`h-1 flex-1 transition-colors ${i <= active ? "bg-thread" : "bg-foreground/15"} ${i === 5 ? "ml-2" : ""}`}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 pb-24 md:px-10 lg:mt-14 lg:grid-cols-12">
        <div className="hidden lg:col-span-7 lg:block">
          <div className="sticky top-20 h-[calc(100vh-6rem)]">
            <ShawlCanvas chapters={chapters} active={active} onSelect={select} />
          </div>
        </div>
        <ol className="lg:col-span-5">
          {chapters.map((c, i) => {
            const zoneStart = i === 0 || chapters[i - 1]!.zone !== c.zone;
            return (
              <li key={c.id}>
                {zoneStart && (
                  <div className={i > 0 ? "mt-20" : "mt-4"}>
                    {i > 0 && <div className="seam mb-8" aria-hidden />}
                    <p className="eyebrow !text-earth">{zones[c.zone].range}</p>
                    <h3 className="mt-2 text-3xl italic">{zones[c.zone].label}</h3>
                  </div>
                )}
                <ProcessChapter
                  chapter={c}
                  active={i === active}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  index={i}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
