import { cn } from "@/lib/utils";

/**
 * Text + wheat-emblem logo, styled to echo the chunky rounded letterforms of
 * the Alliance Bakery brand mark.
 *
 * Got the real logo file? Drop it in `public/logo.png` and replace the markup
 * below with:
 *   <img src="/logo.png" alt="Alliance Bakery" className={cn("h-12 w-auto", className)} />
 */
export function Logo({
  className,
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="grid h-11 w-11 place-items-center rounded-full bg-choco-700 text-cream-100 shadow-md ring-2 ring-caramel-400/60">
        <WheatMark className="h-6 w-6" />
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-xl font-semibold tracking-tight text-choco-700">
            Alliance
          </span>
          <span className="font-display text-[0.7rem] font-medium uppercase tracking-[0.28em] text-caramel-600">
            Bakery
          </span>
        </span>
      )}
    </span>
  );
}

function WheatMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {/* steam */}
      <path
        d="M9.5 3c.6.7.6 1.5 0 2.2M12 2.4c.6.7.6 1.5 0 2.2M14.5 3c.6.7.6 1.5 0 2.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* loaf */}
      <path
        d="M5 13c0-2.5 3.1-4.5 7-4.5s7 2 7 4.5c0 .7-.3 1.2-.8 1.5.5.4.8 1 .8 1.7 0 2.2-3.1 3.8-7 3.8s-7-1.6-7-3.8c0-.7.3-1.3.8-1.7C5.3 14.2 5 13.7 5 13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 12.5h6M9 16h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
