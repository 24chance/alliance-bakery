import { ArrowRight, Cake, Croissant as CroissantIcon, Clock, Heart, Sparkles, Wheat } from "lucide-react";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Floaty, Croissant, Cookie, Donut, Cherry } from "@/components/Decor";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSnippet />
      <Highlights />
      <PopularPicks />
      <CtaBand />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 to-cream-50 pt-32 pb-20 sm:pt-40">
      <div className="sprinkle-dots pointer-events-none absolute inset-0 opacity-50" />
      {/* warm glow blobs */}
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-caramel-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-berry-400/20 blur-3xl" />

      {/* floating doodles */}
      <Floaty className="left-[6%] top-32 w-14 [animation-delay:0.2s] sm:w-20">
        <Croissant className="h-full w-full drop-shadow" />
      </Floaty>
      <Floaty className="right-[8%] top-28 w-12 [animation-delay:1.1s] sm:w-16">
        <Cookie className="h-full w-full drop-shadow" />
      </Floaty>
      <Floaty className="bottom-16 left-[12%] hidden w-12 [animation-delay:0.6s] sm:block sm:w-14">
        <Donut className="h-full w-full drop-shadow" />
      </Floaty>
      <Floaty className="bottom-24 right-[14%] hidden w-12 [animation-delay:1.6s] md:block">
        <Cherry className="h-full w-full drop-shadow" />
      </Floaty>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal delay={80}>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-choco-800 sm:text-6xl md:text-7xl">
            Freshly Baked,
            <br />
            <span className="relative inline-block text-caramel-500">
              Every Single Day.
              <Swoosh />
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-choco-500">
            Welcome to <strong className="text-choco-700">Alliance Bakery</strong> — your
            home for authentic pastries, custom cakes, and daily bread right in the
            heart of Kigali.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/products" variant="primary">
              View Our Menu <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="secondary">
              <Cake className="h-4 w-4" /> Order a Custom Cake
            </Button>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-choco-500">
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-caramel-500" /> Small-batch fresh
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-caramel-500" /> Open 24h on weekdays
            </span>
            <span className="inline-flex items-center gap-2">
              <Heart className="h-4 w-4 text-berry-500" /> Made with love
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Swoosh() {
  return (
    <svg
      viewBox="0 0 200 12"
      className="absolute -bottom-2 left-0 h-3 w-full text-berry-400"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2 8c40-6 90-6 196-3"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  About snippet                                                              */
/* -------------------------------------------------------------------------- */
function AboutSnippet() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-choco-800 sm:text-5xl">
            Great baking brings people together.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-choco-500">
            At Alliance Bakery, everything we create is crafted with premium
            ingredients and a love for the art of baking. From early-morning
            croissants to stunning, custom-designed celebratory cakes, we are
            dedicated to serving our Kigali community with treats made fresh,
            every day.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="ghost">
              Read our story <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div
              className="absolute inset-0 bg-gradient-to-br from-caramel-300 to-berry-300"
              style={{ borderRadius: "var(--radius-blob)" }}
            />
            <div
              className="absolute inset-3 bg-cream-100 sprinkle-dots"
              style={{ borderRadius: "var(--radius-blob)" }}
            />
            <div className="absolute inset-0 grid place-items-center">
              <BigCake className="w-3/5 animate-float-slow drop-shadow-xl" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Highlights / feature grid                                                  */
/* -------------------------------------------------------------------------- */
const features = [
  {
    icon: Wheat,
    title: "Daily Freshness",
    body: "We bake in small batches throughout the day to ensure every single bite is perfectly fresh.",
    tint: "bg-caramel-400/20 text-caramel-600",
  },
  {
    icon: Cake,
    title: "Custom Cakes",
    body: "From weddings to birthdays, we bring your dream cake designs to delicious, edible life.",
    tint: "bg-berry-400/20 text-berry-500",
  },
  {
    icon: Clock,
    title: "24/5 Service",
    body: "Craving a late-night treat or an early breakfast? We're open 24 hours a day on weekdays.",
    tint: "bg-pista-400/25 text-pista-500",
  },
];

function Highlights() {
  return (
    <section className="relative bg-choco-700 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-bold text-cream-50 sm:text-5xl">
            A few reasons to swing by.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 120}>
              <article className="group h-full rounded-[2rem] bg-cream-50 p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <div className={`grid h-14 w-14 place-items-center rounded-2xl ${f.tint} transition-transform duration-300 group-hover:animate-wiggle`}>
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-choco-800">
                  {f.title}
                </h3>
                <p className="mt-3 leading-relaxed text-choco-500">{f.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Popular picks                                                              */
/* -------------------------------------------------------------------------- */
const picks = [
  { emoji: "🥐", name: "Butter Croissants", note: "Golden & flaky", icon: CroissantIcon },
  { emoji: "🍰", name: "Celebration Cakes", note: "Made to order", icon: Cake },
  { emoji: "🍞", name: "Artisan Bread", note: "Baked daily", icon: Wheat },
  { emoji: "🧁", name: "Sweet Cupcakes", note: "Little treats", icon: Heart },
];

function PopularPicks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="mt-5 font-display text-4xl font-bold text-choco-800 sm:text-5xl">
            Our crowd favourites.
          </h2>
        </div>
        <Button href="/products" variant="ghost" className="shrink-0">
          See full menu <ArrowRight className="h-4 w-4" />
        </Button>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
        {picks.map((p, i) => (
          <Reveal key={p.name} delay={i * 90}>
            <article className="group relative overflow-hidden rounded-[1.75rem] border border-cream-200 bg-cream-50 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-caramel-400/15 transition-transform duration-500 group-hover:scale-150" />
              <span className="relative text-5xl transition-transform duration-300 group-hover:scale-110">
                {p.emoji}
              </span>
              <h3 className="relative mt-4 font-display text-lg font-semibold text-choco-800">
                {p.name}
              </h3>
              <p className="relative mt-1 text-sm font-medium text-caramel-600">{p.note}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CTA band                                                                   */
/* -------------------------------------------------------------------------- */
function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-berry-400 to-caramel-500 px-8 py-14 text-center shadow-xl sm:px-16 sm:py-20">
          <div className="sprinkle-dots pointer-events-none absolute inset-0 opacity-30" />
          <Floaty className="left-8 top-8 w-14 opacity-80">
            <Cookie className="h-full w-full" />
          </Floaty>
          <Floaty className="bottom-8 right-10 w-16 opacity-80 [animation-delay:1s]">
            <Croissant className="h-full w-full" />
          </Floaty>
          <h2 className="relative mx-auto max-w-2xl font-display text-4xl font-bold text-cream-50 sm:text-5xl">
            Planning something sweet?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-cream-50/90">
            Tell us about your dream cake or place an order — we'd love to bake for you.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" className="bg-choco-800 hover:bg-choco-900">
              Get in touch <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/products" variant="ghost" className="text-cream-50 ring-cream-50/70 hover:bg-cream-50 hover:text-choco-800 hover:ring-cream-50">
              Browse products
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero centerpiece illustration                                              */
/* -------------------------------------------------------------------------- */
function BigCake({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      {/* plate */}
      <ellipse cx="100" cy="168" rx="78" ry="14" fill="#f1d9b6" />
      <ellipse cx="100" cy="164" rx="64" ry="10" fill="#f8e8d0" />
      {/* bottom tier */}
      <rect x="46" y="118" width="108" height="46" rx="12" fill="#6f4226" />
      <path d="M46 130c10 8 22 8 30 0s22-8 30 0 22 8 30 0 18-6 18-6v-6H46Z" fill="#fdf3e4" />
      {/* middle tier */}
      <rect x="62" y="84" width="76" height="40" rx="11" fill="#8a5638" />
      <path d="M62 96c8 7 16 7 22 0s16-7 22 0 16 7 22 0 10-5 10-5v-7H62Z" fill="#f2b3bf" />
      {/* top tier */}
      <rect x="78" y="56" width="44" height="32" rx="10" fill="#d9913f" />
      <path d="M78 66c6 6 10 6 14 0s12-6 16 0 10 5 14 1v-6H78Z" fill="#fdf3e4" />
      {/* candle + flame */}
      <rect x="97" y="36" width="6" height="20" rx="3" fill="#e58b9a" />
      <path d="M100 24c4 4 4 9 0 12-4-3-4-8 0-12Z" fill="#e8b06a" />
      {/* cherries */}
      <circle cx="70" cy="80" r="4" fill="#d96a7e" />
      <circle cx="130" cy="80" r="4" fill="#d96a7e" />
      <circle cx="100" cy="52" r="4" fill="#d96a7e" />
    </svg>
  );
}
