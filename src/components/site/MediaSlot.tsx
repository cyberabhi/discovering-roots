import { cn } from "@/lib/utils";

interface MediaSlotProps {
  label: string;
  alt: string;
  kind?: "image" | "video" | "portrait" | "shawl";
  src?: string;
  className?: string;
}

/** Clearly-marked placeholder for real photography/video. Renders the asset once `src` is provided. */
export function MediaSlot({ label, alt, kind = "image", src, className }: MediaSlotProps) {
  if (src) {
    return kind === "video" ? (
      <video className={cn("h-full w-full object-cover", className)} src={src} controls muted playsInline aria-label={alt} />
    ) : (
      <img className={cn("h-full w-full object-cover", className)} src={src} alt={alt} loading="lazy" />
    );
  }
  return (
    <div role="img" aria-label={alt} className={cn("placeholder-slot flex items-end p-3", className)}>
      {kind === "video" && (
        <span aria-hidden className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full border border-foreground/30 text-foreground/50">
          ▶
        </span>
      )}
      <span className="eyebrow bg-paper/80 px-2 py-1 !text-[0.6rem]">Replace · {label}</span>
    </div>
  );
}
