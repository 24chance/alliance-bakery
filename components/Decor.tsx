import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/** A small "eyebrow" label that sits above section headings. */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-caramel-400/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-caramel-600",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-berry-400" />
      {children}
    </span>
  );
}

/** Wraps a doodle and gently floats it. Position with className. */
export function Floaty({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      aria-hidden="true"
      style={style}
      className={cn("pointer-events-none absolute animate-float select-none", className)}
    >
      {children}
    </span>
  );
}

/**
 * Scattered "cake sprinkles" — little coloured bars + dots that gently float.
 * Positions are fixed (deterministic) so server/client markup matches, and they
 * sit clear of the centre so headline text stays readable.
 */
const SPRINKLES: Array<{
  top: string;
  left: string;
  rot: number;
  cls: string;
  dot?: boolean;
}> = [
  { top: "12%", left: "6%", rot: -25, cls: "bg-berry-400" },
  { top: "22%", left: "14%", rot: 15, cls: "bg-caramel-500", dot: true },
  { top: "40%", left: "5%", rot: 40, cls: "bg-pista-400" },
  { top: "58%", left: "11%", rot: -15, cls: "bg-berry-300" },
  { top: "74%", left: "7%", rot: 25, cls: "bg-caramel-400", dot: true },
  { top: "16%", left: "26%", rot: -40, cls: "bg-pista-500", dot: true },
  { top: "8%", left: "44%", rot: 20, cls: "bg-berry-400" },
  { top: "18%", left: "62%", rot: -10, cls: "bg-caramel-400", dot: true },
  { top: "10%", left: "78%", rot: 35, cls: "bg-pista-400" },
  { top: "24%", left: "88%", rot: -30, cls: "bg-berry-400", dot: true },
  { top: "40%", left: "94%", rot: 15, cls: "bg-caramel-500" },
  { top: "57%", left: "90%", rot: -20, cls: "bg-pista-500", dot: true },
  { top: "72%", left: "85%", rot: 30, cls: "bg-berry-300" },
  { top: "82%", left: "72%", rot: -35, cls: "bg-caramel-400", dot: true },
  { top: "86%", left: "40%", rot: 18, cls: "bg-pista-400" },
  { top: "80%", left: "24%", rot: -22, cls: "bg-berry-400", dot: true },
];

export function Sprinkles({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0", className)}>
      {SPRINKLES.map((s, i) => (
        <span
          key={i}
          className="absolute animate-float"
          style={{ top: s.top, left: s.left, animationDelay: `${(i % 6) * 0.45}s` }}
        >
          <span
            className={cn(
              "block opacity-70",
              s.dot ? "h-2 w-2 rounded-full" : "h-1.5 w-5 rounded-full",
              s.cls
            )}
            style={{ transform: `rotate(${s.rot}deg)` }}
          />
        </span>
      ))}
    </div>
  );
}

export function Croissant({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M8 40c4-14 18-22 24-22s20 8 24 22c1 3-1 5-4 4-6-2-12-3-20-3s-14 1-20 3c-3 1-5-1-4-4Z"
        fill="#e8b06a"
        stroke="#c2792b"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M20 36c2-4 4-6 6-7M30 32c2-3 4-4 6-4M40 33c2-3 4-3 6-2" stroke="#c2792b" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function Cookie({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="24" fill="#d9913f" stroke="#a8641f" strokeWidth="2.5" />
      <circle cx="24" cy="26" r="3.2" fill="#46260f" />
      <circle cx="40" cy="24" r="2.6" fill="#46260f" />
      <circle cx="38" cy="40" r="3" fill="#46260f" />
      <circle cx="24" cy="42" r="2.4" fill="#46260f" />
      <circle cx="31" cy="33" r="2" fill="#46260f" />
    </svg>
  );
}

export function Donut({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="24" fill="#f1d9b6" />
      <path d="M32 8a24 24 0 0 1 0 48 24 24 0 0 1 0-48Zm0 6a18 18 0 1 0 0 36 18 18 0 0 0 0-36Z" fill="#e58b9a" />
      <circle cx="22" cy="20" r="1.6" fill="#a9c08a" />
      <circle cx="44" cy="22" r="1.6" fill="#fffaf2" />
      <circle cx="46" cy="40" r="1.6" fill="#6f4226" />
      <circle cx="20" cy="42" r="1.6" fill="#fffaf2" />
    </svg>
  );
}

export function Cherry({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M30 18c6-8 16-10 24-7" stroke="#8aa867" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="24" cy="44" r="11" fill="#d96a7e" />
      <circle cx="44" cy="40" r="9" fill="#d96a7e" />
      <circle cx="21" cy="40" r="3" fill="#f2b3bf" />
    </svg>
  );
}

export function Whisk({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect x="29" y="6" width="6" height="20" rx="3" fill="#8a5638" />
      <path d="M22 26c0 14 4 26 10 30 6-4 10-16 10-30Z" fill="none" stroke="#6f4226" strokeWidth="2.5" />
      <path d="M28 26v30M36 26v30M22 30c4 2 16 2 20 0M23 40c3 1.5 15 1.5 18 0" stroke="#6f4226" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}
