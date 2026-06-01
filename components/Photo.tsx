"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * A cover image that gently fades + un-blurs once it loads.
 * Wrap it in a sized, positioned parent (or pass sizing via `className`).
 */
export function Photo({
  src,
  alt,
  className,
  imgClassName,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span className={cn("block overflow-hidden bg-cream-200", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          "h-full w-full object-cover transition-all duration-700 ease-out",
          loaded ? "scale-100 opacity-100 blur-0" : "scale-105 opacity-0 blur-md",
          imgClassName
        )}
      />
    </span>
  );
}
