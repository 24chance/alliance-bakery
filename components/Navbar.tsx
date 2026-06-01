"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full border p-2 transition-all duration-300 sm:px-6",
          scrolled
            ? "border-cream-200 bg-cream-50/90 shadow-lg shadow-choco-900/5 backdrop-blur-md"
            : "border-transparent bg-cream-50/60 backdrop-blur-sm"
        )}
      >
        <Link href="/" aria-label="Alliance Bakery — home" className="shrink-0">
          <img
            src="/logo-tp.png"
            alt="Alliance Bakery"
            className="w-15"
          />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    active
                      ? "text-choco-800"
                      : "text-choco-500 hover:text-choco-800"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-1 rounded-full bg-caramel-400 transition-transform duration-300",
                      active ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-full bg-choco-700 px-5 py-2.5 text-sm font-bold text-cream-50 shadow-md transition-all hover:-translate-y-0.5 hover:bg-choco-800 hover:shadow-lg sm:inline-flex"
          >
            Talk to us
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full bg-choco-700 text-cream-50 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-cream-200 bg-cream-50/95 shadow-xl backdrop-blur-md transition-all duration-300 md:hidden",
          open ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col gap-1 p-3">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-2xl px-4 py-3 text-base font-semibold transition-colors",
                    active
                      ? "bg-caramel-400/20 text-choco-800"
                      : "text-choco-600 hover:bg-cream-100"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/contact"
              className="mt-1 block rounded-2xl bg-choco-700 px-4 py-3 text-center text-base font-bold text-cream-50"
            >
              Talk to us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
