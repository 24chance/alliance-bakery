import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, Floaty, Cherry, Cookie } from "@/components/Decor";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Visit Us",
  description:
    "Come visit Alliance Bakery in Kigali, Rwanda. Open 24 hours on weekdays. Call, email, or send us a message to place an order.",
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
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 to-cream-50 pt-36 pb-16 sm:pt-44">
      <div className="sprinkle-dots pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute -right-16 top-24 h-72 w-72 rounded-full bg-berry-400/20 blur-3xl" />
      <Floaty className="left-[8%] top-28 w-14 [animation-delay:0.4s]">
        <Cherry className="h-full w-full drop-shadow" />
      </Floaty>
      <Floaty className="right-[10%] bottom-8 hidden w-14 [animation-delay:1.2s] sm:block">
        <Cookie className="h-full w-full drop-shadow" />
      </Floaty>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal delay={80}>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-choco-800 sm:text-6xl">
            Come Visit Us
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-choco-500">
            Pop in for a fresh bake, give us a call, or send a message below — we'd
            love to hear from you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ContactBody() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        {/* Info column */}
        <Reveal className="space-y-4">
          <InfoCard icon={MapPin} title="Find us" tint="bg-caramel-400/20 text-caramel-600">
            <p>{site.address}</p>
            <p className="text-choco-400">{site.city}</p>
          </InfoCard>

          <InfoCard icon={Phone} title="Call us" tint="bg-pista-400/25 text-pista-500">
            <a href={site.phoneHref} className="transition-colors hover:text-caramel-600">
              {site.phone}
            </a>
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
  const src = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;
  return (
    <section className="mx-auto max-w-6xl px-6 pb-8">
      <Reveal>
        <div className="overflow-hidden rounded-[2.5rem] border border-cream-200 shadow-sm">
          <iframe
            title="Alliance Bakery location in Kigali"
            src={src}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[360px] w-full grayscale-[0.15]"
          />
        </div>
      </Reveal>
    </section>
  );
}
