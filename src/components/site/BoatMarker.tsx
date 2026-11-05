/** Subtle stitched boat used as the wayfinding marker on the thread. */
export function BoatMarker({ x, y, angle }: { x: number; y: number; angle: number }) {
  const flip = Math.abs(angle) > 90;
  return (
    <g transform={`translate(${x} ${y - 26}) scale(${flip ? -1 : 1} 1)`} aria-hidden pointerEvents="none">
      <path d="M-14 4 L14 4 L9 10 L-9 10 Z" fill="var(--color-slate)" />
      <path d="M0 4 L0 -14" stroke="var(--color-slate)" strokeWidth="1.2" />
      <path d="M1 -13 L10 2 L1 2 Z" fill="var(--color-paper)" stroke="var(--color-brass)" strokeWidth="1" />
    </g>
  );
}
