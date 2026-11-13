import { useEffect, useRef, useState } from "react";
import type { Chapter } from "@/data/chapters";
import { BoatMarker } from "./BoatMarker";

// Serpentine embroidered route across the shawl canvas (viewBox 600x800).
const ROUTE =
  "M90 80 C 260 40, 470 90, 500 170 S 330 280, 180 300 S 60 400, 170 450 C 300 500, 520 440, 510 540 S 300 640, 170 650 S 120 740, 300 750 S 500 730, 520 720";

interface Props {
  chapters: Chapter[];
  active: number;
  onSelect: (i: number) => void;
}

export function ShawlCanvas({ chapters, active, onSelect }: Props) {
  const pathRef = useRef<SVGPathElement>(null);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
  const [total, setTotal] = useState(0);
  const [pos, setPos] = useState({ x: 90, y: 80, angle: 0, len: 0 });
  const lenRef = useRef(0);

  useEffect(() => {
    const p = pathRef.current;
    if (!p) return;
    const L = p.getTotalLength();
    setTotal(L);
    setPoints(chapters.map((_, i) => p.getPointAtLength((L * i) / (chapters.length - 1))));
  }, [chapters]);

  useEffect(() => {
    const p = pathRef.current;
    if (!p || !total) return;
    const target = (total * active) / (chapters.length - 1);
    const from = lenRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dur = reduce ? 0 : 900;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = dur ? Math.min(1, (now - start) / dur) : 1;
      const e = 1 - Math.pow(1 - t, 3);
      const len = from + (target - from) * e;
      const a = p.getPointAtLength(len);
      const b = p.getPointAtLength(Math.min(total, len + 2));
      lenRef.current = len;
      setPos({ x: a.x, y: a.y, len, angle: (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI });
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, total, chapters.length]);

  return (
    <figure className="relative flex h-full flex-col">
      <div className="weave relative flex-1 overflow-hidden border border-border">
        {/* Real shawl photograph replaces this weave placeholder */}
        <span className="eyebrow absolute left-4 top-4 bg-paper/80 px-2 py-1 !text-[0.6rem]">
          Replace · Shawl canvas photograph
        </span>
        <span aria-hidden className="eyebrow absolute right-4 top-4">
          Before the Loom · 1–5
        </span>
        <div aria-hidden className="seam absolute inset-x-0 top-[70%]" />
        <span aria-hidden className="eyebrow absolute right-4 top-[calc(70%+1.25rem)]">
          At the Loom · 6–8
        </span>
        <svg
          viewBox="0 0 600 800"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
          role="group"
          aria-label="Embroidered journey map with eight chapters"
        >
          <path
            d={ROUTE}
            fill="none"
            stroke="var(--color-foreground)"
            strokeOpacity="0.15"
            strokeWidth="1.5"
            strokeDasharray="7 6"
            ref={pathRef}
          />
          {total > 0 && (
            <path
              d={ROUTE}
              fill="none"
              stroke="var(--color-thread)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeDasharray={`7 6`}
              style={{ clipPath: "none" }}
              mask="url(#progress)"
            />
          )}
          <defs>
            <mask id="progress">
              <path
                d={ROUTE}
                fill="none"
                stroke="white"
                strokeWidth="8"
                strokeDasharray={`${pos.len} ${total}`}
              />
            </mask>
          </defs>
          {points.map((pt, i) => {
            const c = chapters[i]!;
            const isActive = i === active;
            const done = i <= active;
            return (
              <g key={c.id} transform={`translate(${pt.x} ${pt.y})`}>
                <a
                  href={`#${c.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelect(i);
                  }}
                  aria-label={`Chapter ${c.number}: ${c.title}`}
                  aria-current={isActive ? "step" : undefined}
                  className="cursor-pointer outline-none [&:focus-visible>circle:first-child]:stroke-sky"
                >
                  <circle r="22" fill="transparent" stroke="transparent" strokeWidth="3" />
                  <circle
                    r={isActive ? 15 : 11}
                    fill={done ? "var(--color-paper)" : "var(--color-cashmere)"}
                    stroke={done ? "var(--color-thread)" : "var(--color-earth)"}
                    strokeWidth="1.5"
                    className="transition-all duration-500"
                  />
                  <text
                    textAnchor="middle"
                    dy="4"
                    fontSize="11"
                    fontFamily="var(--font-sans)"
                    fill="var(--color-foreground)"
                  >
                    {c.number}
                  </text>
                  <text
                    x={pt.x > 300 ? -26 : 26}
                    dy="4"
                    textAnchor={pt.x > 300 ? "end" : "start"}
                    fontSize="15"
                    fontFamily="var(--font-display)"
                    fontStyle="italic"
                    fill="var(--color-foreground)"
                    opacity={isActive ? 1 : 0.55}
                  >
                    {c.title}
                  </text>
                </a>
              </g>
            );
          })}
          {total > 0 && <BoatMarker x={pos.x} y={pos.y} angle={pos.angle} />}
        </svg>
      </div>
      <figcaption className="mt-3 eyebrow">
        Plate II — The thread as map. Select a waypoint to open its chapter.
      </figcaption>
    </figure>
  );
}
