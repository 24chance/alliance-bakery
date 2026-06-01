"use client";

import { useEffect, useState } from "react";

/**
 * Cute "we're baking your page" intro loader.
 * Shows on first paint, then fades away once the window has loaded
 * (with a short minimum so it doesn't just flash).
 */
export function Loader() {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const minMs = 1400;

    const finish = () => {
      const wait = Math.max(0, minMs - (Date.now() - start));
      window.setTimeout(() => setHidden(true), wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
      return () => window.removeEventListener("load", finish);
    }
  }, []);

  useEffect(() => {
    if (!hidden) return;
    const t = window.setTimeout(() => setGone(true), 650);
    return () => window.clearTimeout(t);
  }, [hidden]);

  if (gone) return null;

  return (
    <div
      aria-hidden={hidden}
      className={`fixed inset-0 z-[100] grid place-items-center bg-cream-100 transition-opacity duration-[600ms] ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="sprinkle-dots pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative flex flex-col items-center gap-6">
        {/* Oven-fresh cupcake */}
        <div className="relative h-28 w-28">
          {/* rising steam */}
          <span className="absolute left-1/2 top-1 h-6 w-1.5 -translate-x-6 rounded-full bg-choco-300/50 animate-rise [animation-duration:1.6s] [animation-iteration-count:infinite]" />
          <span className="absolute left-1/2 top-0 h-7 w-1.5 -translate-x-1/2 rounded-full bg-choco-300/50 animate-rise [animation-duration:1.9s] [animation-delay:0.3s] [animation-iteration-count:infinite]" />
          <span className="absolute left-1/2 top-1 h-6 w-1.5 translate-x-4 rounded-full bg-choco-300/50 animate-rise [animation-duration:1.7s] [animation-delay:0.6s] [animation-iteration-count:infinite]" />

          <div className="animate-float">
            <Cupcake />
          </div>
        </div>

        <div className="text-center">
          <p className="font-display text-2xl font-semibold text-choco-700">
            Alliance Bakery
          </p>
          <p className="mt-1 text-sm text-choco-500">Warming up the oven…</p>
        </div>

        {/* progress bar that fills like batter */}
        <div className="h-2 w-44 overflow-hidden rounded-full bg-cream-300">
          <div className="h-full w-full origin-left animate-[fill_1.3s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-caramel-400 to-berry-400" />
        </div>
      </div>

      <style>{`
        @keyframes fill {
          0% { transform: scaleX(0.05); }
          50% { transform: scaleX(1); }
          100% { transform: scaleX(0.05); }
        }
      `}</style>
    </div>
  );
}

function Cupcake() {
  return (
    <svg viewBox="0 0 96 96" className="h-28 w-28 drop-shadow-md" aria-hidden="true">
      {/* frosting */}
      <path
        d="M24 44c-2-12 8-22 24-22s26 10 24 22c5 1 8 5 8 9 0 6-6 9-14 9H30c-8 0-14-3-14-9 0-4 3-8 8-9Z"
        fill="#f2b3bf"
      />
      <path
        d="M30 40c0-7 8-12 18-12s18 5 18 12"
        stroke="#d96a7e"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* cherry */}
      <circle cx="48" cy="20" r="6" fill="#d96a7e" />
      <path d="M48 14c2-3 5-4 8-3" stroke="#8aa867" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* wrapper */}
      <path d="M30 62h36l-5 22a4 4 0 0 1-4 3H39a4 4 0 0 1-4-3l-5-22Z" fill="#d9913f" />
      <path d="M38 62l3 25M48 62v25M58 62l-3 25" stroke="#c2792b" strokeWidth="2.4" strokeLinecap="round" />
      {/* sprinkles */}
      <rect x="40" y="44" width="6" height="2.6" rx="1.3" fill="#fffaf2" transform="rotate(28 43 45)" />
      <rect x="52" y="40" width="6" height="2.6" rx="1.3" fill="#a9c08a" transform="rotate(-22 55 41)" />
      <rect x="34" y="50" width="6" height="2.6" rx="1.3" fill="#6f4226" transform="rotate(12 37 51)" />
    </svg>
  );
}
