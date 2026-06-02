"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

/**
 * Image with a shimmer skeleton while loading, then a clean fade-in.
 * Handles cached images (already decoded before React attaches onLoad).
 * `priority` → eager-loads (use for above-the-fold photos).
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
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Cached images finish loading before React attaches onLoad — catch them here.
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  return (
    <span
      className={cn("block overflow-hidden", className)}
      style={
        !loaded
          ? {
              background:
                "linear-gradient(90deg,#ffe8a0 25%,#fff4cc 50%,#ffe8a0 75%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.4s ease-in-out infinite",
            }
          : undefined
      }
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-500 ease-out",
          loaded ? "opacity-100" : "opacity-0",
          imgClassName
        )}
      />
    </span>
  );
}
