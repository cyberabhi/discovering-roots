import type { Chapter } from "@/data/chapters";
import { MediaSlot } from "./MediaSlot";

export function ArtisanStory({ portrait }: { portrait: NonNullable<Chapter["portrait"]> }) {
  return (
    <aside aria-label="Artisan story" className="mt-8 grid grid-cols-[88px_1fr] gap-5 bg-cashmere/60 p-5">
      <MediaSlot kind="portrait" src={portrait.src} alt={portrait.alt} label="Portrait" className="aspect-[3/4] w-full !p-1 [&>span]:hidden" />
      <div>
        {portrait.voice && <blockquote className="font-display text-xl italic leading-snug">“{portrait.voice}”</blockquote>}
        <p className="mt-3 eyebrow">{portrait.role}</p>
      </div>
    </aside>
  );
}
