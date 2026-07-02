 import Link from "next/link";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-choco-800 text-cream-100">
      {/* scalloped pie-crust top edge */}
      <FooterScallop />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-10 pt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          {/* The brand mark is chocolate-brown on transparent, so it would vanish
              on the dark footer - we sit it on a cream "paper" badge instead,
              which is exactly how the logo reads on its original background. */}
          <span className="inline-flex rounded-3xl bg-cream-50 p-3 shadow-md ring-1 ring-cream-200/50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-tp.png" alt="Alliance Bakery" className="h-20 w-auto" />
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-200/80">
            Authentic pastries, custom cakes, and daily bread crafted with love
            in the heart of {site.city}.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-cream-50">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-cream-200/80 transition-colors hover:text-caramel-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-cream-50">Visit & Hours</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream-200/80">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-caramel-400" />
              <span>{site.address}</span>
            </li>
            {site.hours.map((h) => (
              <li key={h.days} className="flex flex-col">
                <span className="font-semibold text-cream-100">{h.days}</span>
                <span>{h.time}</span>
              </li>
            ))}
            <li className="pt-1">
              <span className="font-semibold text-cream-100">Also available in</span>
              <span className="block">{site.locations.join(" · ")}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-cream-50">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {site.phones.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  className="flex items-center gap-2.5 text-cream-200/80 transition-colors hover:text-caramel-300"
                >
                  <Phone className="h-4 w-4 shrink-0 text-caramel-400" />
                  {p.display}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2.5 text-cream-200/80 transition-colors hover:text-caramel-300"
              >
                <Mail className="h-4 w-4 shrink-0 text-caramel-400" />
                {site.email}
              </a>
            </li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full bg-choco-700 transition-colors hover:bg-berry-500"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full bg-choco-700 transition-colors hover:bg-caramel-500"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-choco-700">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-center text-xs text-cream-200/70 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Alliance Bakery Kigali. All Rights Reserved.</p>
          <p>Crafted with love in Rwanda 🤎</p>
        </div>
      </div>
    </footer>
  );
}

function FooterScallop() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-5 text-cream-50"
      style={{
        background:
          "radial-gradient(circle at 12px -2px, currentColor 11px, transparent 12px) 0 0 / 24px 20px repeat-x",
      }}
    />
  );
}
