import { forwardRef } from "react";
import type { Chapter } from "@/data/chapters";
import { MediaSlot } from "./MediaSlot";
import { ArtisanStory } from "./ArtisanStory";

interface Props {
  chapter: Chapter;
  active: boolean;
  index: number;
}

export const ProcessChapter = forwardRef<HTMLElement, Props>(function ProcessChapter({ chapter: c, active, index }, ref) {
  return (
    <article
      id={c.id}
      ref={ref}
      data-index={index}
      tabIndex={-1}
      aria-labelledby={`${c.id}-title`}
      className={`scroll-mt-32 border-l py-12 pl-6 transition-colors duration-500 md:pl-8 ${active ? "border-thread" : "border-border"}`}
    >
      <p className="eyebrow">
        <span className="text-brass">{String(c.number).padStart(2, "0")}</span> · {c.kicker}
      </p>
      <h4 id={`${c.id}-title`} className="mt-3 text-3xl leading-tight md:text-4xl">{c.title}</h4>
      <p className="mt-5 leading-relaxed text-muted-foreground">{c.story}</p>
      {!c.verified && <p className="mt-3 eyebrow !text-sky">Draft · to be verified with artisans</p>}

      <figure className="mt-7">
        <MediaSlot kind={c.media.kind} src={c.media.src} alt={c.media.alt} label={c.media.kind === "video" ? "Documentary clip" : "Documentary image"} className="aspect-[4/3] w-full" />
        <figcaption className="mt-2 text-sm text-muted-foreground">{c.caption}</figcaption>
      </figure>

      {c.portrait && <ArtisanStory portrait={c.portrait} />}

      {c.audio && (
        <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
          {c.audio.src ? (
            <audio controls src={c.audio.src} className="w-full" aria-label={c.audio.label} />
          ) : (
            <p className="eyebrow">♪ {c.audio.label} · Replace with recording</p>
          )}
        </div>
      )}
    </article>
  );
});
