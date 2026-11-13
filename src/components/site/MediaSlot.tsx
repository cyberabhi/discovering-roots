import { useState } from "react";
import { cn } from "@/lib/utils";

interface MediaSlotProps {
  label: string;
  alt: string;
  kind?: "image" | "video" | "portrait" | "shawl";
  src?: string | undefined;
  externalUrl?: string | undefined;
  className?: string;
}

/** Clearly-marked placeholder for real photography/video. Renders the asset once `src` is provided. */
export function MediaSlot({
  label,
  alt,
  kind = "image",
  src,
  externalUrl,
  className,
}: MediaSlotProps) {
  const [failedSrc, setFailedSrc] = useState<string>();
  const hasWorkingSrc = !!src && failedSrc !== src;

  if (hasWorkingSrc) {
    return kind === "video" ? (
      <video
        onError={() => setFailedSrc(src)}
        className={cn("h-full w-full object-cover", className)}
        src={src}
        controls
        muted
        playsInline
        aria-label={alt}
      />
    ) : (
      <img
        onError={() => setFailedSrc(src)}
        className={cn("h-full w-full object-cover", className)}
        src={src}
        alt={alt}
        loading="lazy"
      />
    );
  }
  if (kind === "video" && externalUrl) {
    return (
      <div
        role="group"
        aria-label={alt}
        className={cn("placeholder-slot flex items-end p-3", className)}
      >
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow bg-paper/80 px-2 py-1 !text-[0.6rem] underline"
        >
          Open documentary clip ↗
        </a>
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn("placeholder-slot flex items-end p-3", className)}
    >
      {kind === "video" && (
        <span
          aria-hidden
          className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full border border-foreground/30 text-foreground/50"
        >
          ▶
        </span>
      )}
      <span className="eyebrow bg-paper/80 px-2 py-1 !text-[0.6rem]">Replace · {label}</span>
    </div>
  );
}
