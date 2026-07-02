import { ArrowRight, Cake, CakeIcon, CakeSlice, Clock, Heart, Sparkles, Wheat } from "lucide-react";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { Floaty, Sprinkles, Croissant, Cookie, Donut, Cherry } from "@/components/Decor";
import { heroCakes, featureCake, favouriteCakes } from "@/lib/cakes";
import { menu } from "@/lib/menu";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSnippet />
      <Highlights />
      <FavouriteCakes />
      <MenuSection />
      <CtaBand />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      {/* layered, warm bakery backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-200 via-cream-100 to-cream-50" />
        {/* soft colour blobs (a gentle "mesh") */}
        <div className="absolute -left-28 top-8 h-80 w-80 rounded-full bg-caramel-400/35 blur-3xl animate-float-slow" />
        <div className="absolute -right-24 top-24 h-96 w-96 rounded-full bg-berry-400/30 blur-3xl animate-float" />
        <div className="absolute left-1/3 -top-16 h-72 w-72 rounded-full bg-pista-400/25 blur-3xl" />
        {/* glowing spotlight behind the headline, like a cake stand under a light */}
        <div
          className="absolute left-1/2 top-20 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full opacity-80"
          style={{
            background:
              "radial-gradient(closest-side, var(--color-cream-50), transparent 72%)",
          }}
        />
        <Sprinkles />
      </div>

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
            Welcome to <strong className="text-choco-700">Alliance Bakery</strong>, your
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
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-choco-500">
            <span className="inline-flex items-center gap-2">
              <CakeSlice className="h-4 w-4 text-caramel-500" /> Small-batch fresh
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-caramel-500" /> Open 24/7
            </span>
            <span className="inline-flex items-center gap-2">
              <Heart className="h-4 w-4 text-berry-500" /> Made with love
            </span>
          </div>
        </Reveal>
      </div>

      {/* Auto-scrolling showcase of real cakes */}
      <Reveal delay={380} className="relative mt-14">
        <div className="marquee-pause relative overflow-hidden py-2">
          <div className="marquee-track gap-4 px-2">
            {[...heroCakes, ...heroCakes].map((src, i) => (
              <Photo
                key={i}
                src={src}
                alt="A freshly made Alliance Bakery cake"
                priority // all marquee photos are above the fold - eager-load every one
                className={`h-44 w-36 shrink-0 rounded-[1.6rem] shadow-lg ring-4 ring-cream-50 sm:h-52 sm:w-44 ${
                  i % 2 ? "rotate-2" : "-rotate-2"
                }`}
              />
            ))}
          </div>
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream-50 to-transparent sm:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cream-50 to-transparent sm:w-28" />
        </div>
      </Reveal>
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
          <h2 className="font-display text-4xl font-bold leading-tight text-choco-800 sm:text-5xl">
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
            {/* playful blob frame behind the photo */}
            <div
              className="absolute -inset-3 bg-gradient-to-br from-caramel-300 to-berry-300"
              style={{ borderRadius: "var(--radius-blob)" }}
            />
            <Photo
              src={featureCake}
              alt="An elegant cake made at Alliance Bakery"
              className="absolute inset-0 animate-float-slow rounded-blob shadow-xl"
            />
            <span className="absolute -bottom-4 -left-4 rounded-2xl bg-cream-50 px-4 py-2 text-sm font-bold text-choco-700 shadow-lg ring-1 ring-cream-200">
              Made to order
            </span>
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
    headerBg: "bg-caramel-500",
    drip: "#d48c1a",     // caramel-500 for the drip drops
  },
  {
    icon: Cake,
    title: "Custom Cakes",
    body: "From weddings to birthdays, we bring your dream cake designs to delicious, edible life.",
    headerBg: "bg-berry-500",
    drip: "#d96a7e",     // berry-500
  },
  {
    icon: Clock,
    title: "24/7 Service",
    body: "Craving a late-night treat or an early breakfast? We're open around the clock, every single day.",
    headerBg: "bg-pista-500",
    drip: "#8aa867",     // pista-500
  },
];

function Highlights() {
  return (
    <section className="relative bg-choco-700 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold text-cream-50 sm:text-5xl">
            A few reasons to swing by.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 120}>
              <article className="group h-full overflow-hidden rounded-[2rem] bg-cream-50 shadow-lg transition-transform duration-300 hover:-translate-y-2">

                {/* ── Coloured header ── */}
                <div className={`flex items-center justify-center px-6 pt-8 pb-4 ${f.headerBg}`}>
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-cream-50/25 ring-2 ring-cream-50/40 transition-transform duration-300 group-hover:animate-wiggle">
                    <f.icon className="h-8 w-8 text-cream-50" />
                  </div>
                </div>

                {/*
                  ── Drip zone ──
                  Sits in normal document flow between header and body - NOT absolute.
                  The SVG has a cream base rect so the whole block is cream-coloured,
                  then three coloured drops start from y=0 (flush with the header above)
                  and drip downward. overflow-hidden on the article never clips these
                  because they're fully inside the article's height.
                */}
                <svg
                  viewBox="0 0 300 50"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="block w-full"
                  style={{ height: "30px", marginTop: "-1px" }}
                >
                  <rect x="0" y="0" width="300" height="50" fill="#fffce8" />
                  {/* left drop */}
                  <path d="M40 0 H78 V28 Q78 40 59 40 Q40 40 40 28 Z" fill={f.drip} />
                  {/* centre drop - tallest */}
                  <path d="M131 0 H169 V34 Q169 50 150 50 Q131 50 131 34 Z" fill={f.drip} />
                  {/* right drop */}
                  <path d="M222 0 H260 V24 Q260 36 241 36 Q222 36 222 24 Z" fill={f.drip} />
                </svg>

                {/* ── Content ── */}
                <div className="px-7 pb-8 pt-2">
                  <h3 className="font-display text-2xl font-semibold text-choco-800">
                    {f.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-choco-500">{f.body}</p>
                </div>

              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Customer-favourite cakes (real photos)                                     */
/* -------------------------------------------------------------------------- */
function FavouriteCakes() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="mt-4 font-display text-4xl font-bold text-choco-800 sm:text-5xl">
            Cakes our customers love.
          </h2>
        </div>
        <Button href="/products" variant="ghost" className="shrink-0">
          See the full gallery <ArrowRight className="h-4 w-4" />
        </Button>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
        {favouriteCakes.map((src, i) => (
          <Reveal key={src} delay={(i % 3) * 90}>
            <figure className="group relative overflow-hidden rounded-[1.75rem] shadow-md ring-1 ring-cream-200">
              <Photo
                src={src}
                alt="A custom cake from Alliance Bakery"
                className="aspect-[4/5] w-full"
                imgClassName="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-choco-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Everyday menu (real products)                                              */
/* -------------------------------------------------------------------------- */
function MenuSection() {
  return (
    <section className="relative overflow-hidden bg-cream-100 py-20">
      <div className="sprinkle-dots pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <h2 className="font-display text-4xl font-bold text-choco-800 sm:text-5xl">
            On the shelf, fresh today.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-choco-500">
            Pop in for the everyday favourites our neighbours keep coming back for.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {menu.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 80}>
              <article className="group flex h-full items-center gap-4 rounded-[1.5rem] border border-cream-200 bg-cream-50 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold leading-tight text-choco-800">
                    {item.name}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-caramel-600">{item.note}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <p className="text-sm text-choco-400">
            …plus custom celebratory cakes made just for your occasion.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CTA band                                                                   */
/* -------------------------------------------------------------------------- */
function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-berry-400 to-caramel-500 px-8 py-14 text-center shadow-xl sm:px-16 sm:py-20">
          <div className="sprinkle-dots pointer-events-none absolute inset-0 opacity-30" />
          <h2 className="relative mx-auto max-w-2xl font-display text-4xl font-bold text-cream-50 sm:text-5xl">
            Planning something sweet?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-cream-50/90">
            Tell us about your dream cake or place an order, we'd love to bake for you.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" className="bg-choco-800 hover:bg-choco-900">
              Get in touch <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/products" variant="ghost" className="text-cream-50 ring-cream-50/70 hover:bg-cream-50  hover:ring-cream-50 hover:text-cream-50">
              Browse products
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
