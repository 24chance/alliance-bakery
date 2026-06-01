import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Decor";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Visit Us",
  description:
    "Come visit Alliance Bakery in Kinyinya, Kigali. Open 24/7. Call, email, or send us a message to place an order.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero />
      <ContactBody />
      <MapStrip />
    </>
  );
}

function PageHero() {
  return (
    <section
      className="relative overflow-hidden bg-choco-800 pt-32 sm:pt-36"
      style={{ borderRadius: "0 0 100px 0 / 0 0 80px 0" }}
    >
      {/* warm amber ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[52rem] -translate-x-1/2 rounded-full bg-caramel-500/12 blur-3xl" />
      {/* subtle cross-hatch lines texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-16">
        {/* top row: location badge */}
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-cream-50/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-caramel-300 ring-1 ring-cream-50/15">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-caramel-400" />
            Kinyinya, Nyacyonga · Kigali, Rwanda
          </span>
        </Reveal>

        {/* two-column layout on desktop */}
        <div className="mt-8 grid items-end gap-10 lg:grid-cols-2">
          {/* left: headline */}
          <Reveal delay={80}>
            <h1 className="font-display text-5xl font-bold leading-[1.05] text-cream-50 sm:text-6xl lg:text-7xl">
              We&apos;re here
              <br />
              whenever
              <br />
              <span className="text-caramel-300">you need us.</span>
            </h1>
          </Reveal>

          {/* right: key stats */}
          <Reveal delay={180}>
            <div className="grid gap-4 sm:grid-cols-2">
              <StatCard
                label="Hours"
                value="Open 24 / 7"
                sub="Every single day"
                accent="border-caramel-400/40"
              />
              <StatCard
                label="Location"
                value="Kinyinya"
                sub="Nyacyonga, Kigali"
                accent="border-berry-400/40"
              />
              <StatCard
                label="Phone"
                value="0789 804 691"
                sub="0788 485 356"
                accent="border-pista-400/40"
              />
              <StatCard
                label="Email"
                value="alliancebakery250"
                sub="@gmail.com"
                accent="border-caramel-400/40"
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* bottom padding so content clears the elliptical curve */}
      <div className="pb-16" />
    </section>
  );
}

function StatCard({
  label,
  value,
  sub,
  accent,
}: {
  label: string;
  value: string;
  sub: string;
  accent: string;
}) {
  return (
    <div
      className={`rounded-[1.25rem] border bg-cream-50/8 px-5 py-4 backdrop-blur-sm ${accent}`}
    >
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-caramel-400">{label}</p>
      <p className="mt-1 font-display text-xl font-semibold text-cream-50">{value}</p>
      <p className="text-sm text-cream-200/70">{sub}</p>
    </div>
  );
}

function ContactBody() {
  return (
    <section className="bg-cream-50 mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        {/* Info column */}
        <Reveal className="space-y-4">
          <InfoCard icon={MapPin} title="Find us" tint="bg-caramel-400/20 text-caramel-600">
            <p>{site.address}</p>
            <p className="text-choco-400">{site.city}</p>
            <p className="mt-2 text-sm text-choco-400">
              Also available in {site.locations.join(", ")}.
            </p>
          </InfoCard>

          <InfoCard icon={Phone} title="Call us" tint="bg-pista-400/25 text-pista-500">
            <div className="flex flex-col gap-0.5">
              {site.phones.map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  className="transition-colors hover:text-caramel-600"
                >
                  {p.display}
                </a>
              ))}
            </div>
          </InfoCard>

          <InfoCard icon={Mail} title="Email us" tint="bg-berry-400/20 text-berry-500">
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-caramel-600">
              {site.email}
            </a>
          </InfoCard>

          <InfoCard icon={Clock} title="Opening hours" tint="bg-caramel-400/20 text-caramel-600">
            <ul className="space-y-1">
              {site.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4">
                  <span className="font-semibold text-choco-700">{h.days}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </InfoCard>

          <div className="flex items-center gap-3 rounded-[2rem] border border-cream-200 bg-cream-50 p-6 shadow-sm">
            <span className="text-sm font-semibold text-choco-700">Follow along</span>
            <span className="text-sm text-choco-400">{site.socials.handle}</span>
            <div className="ml-auto flex gap-2">
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full bg-cream-100 text-choco-600 transition-colors hover:bg-berry-500 hover:text-cream-50"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full bg-cream-100 text-choco-600 transition-colors hover:bg-caramel-500 hover:text-cream-50"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Form column */}
        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  tint,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  tint: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-[2rem] border border-cream-200 bg-cream-50 p-6 shadow-sm">
      <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${tint}`}>
        <Icon className="h-6 w-6" />
      </div>
      <div className="min-w-0">
        <h3 className="font-display text-lg font-semibold text-choco-800">{title}</h3>
        <div className="mt-1 text-choco-500">{children}</div>
      </div>
    </div>
  );
}

function MapStrip() {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&z=15&output=embed`;
  return (
    <section className="mx-auto max-w-6xl px-6 pb-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-cream-200 shadow-sm">
          <iframe
            title="Alliance Bakery location in Kinyinya, Kigali"
            src={src}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[360px] w-full grayscale-[0.15]"
          />
          <a
            href={site.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-choco-700 px-5 py-2.5 text-sm font-bold text-cream-50 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-choco-800"
          >
            <MapPin className="h-4 w-4" /> Get directions
          </a>
        </div>
      </Reveal>
    </section>
  );
}
