import type { Metadata } from "next";
import { ArrowRight, PencilRuler, ChefHat, PackageCheck } from "lucide-react";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { Eyebrow } from "@/components/Decor";
import { customCakeCover, galleryCakes } from "@/lib/cakes";

export const metadata: Metadata = {
  title: "Products & Services",
  description:
    "Fresh bread, croissants, sambusa, sandwiches, pizza, juices and milk — plus custom celebratory cakes from Alliance Bakery, Kigali.",
};

const categories = [
  {
    tag: "A",
    title: "Fresh from the Oven",
    body: "Golden, flaky pastries and breads baked fresh throughout the day — perfect with your morning coffee.",
    items: ["Fresh daily bread", "Croissant", "Sambusa"],
    // three images shown as a small collage in the card header
    imgs: ["/others/croissant.jpeg", "/others/bread.jpeg", "/others/sambusa.jpg"],
  },
  {
    tag: "B",
    title: "Savoury Bites",
    body: "Warm, satisfying snacks and quick meals made fresh to order whenever the craving hits.",
    items: ["Pizza", "Sausage", "Sandwich"],
    imgs: ["/others/pizza.jpeg", "/others/sausage.jpeg", "/cakes/cake44.jpeg"],
  },
  {
    tag: "C",
    title: "Drinks & Refreshments",
    body: "Cool down with refreshing juices and farm-fresh milk to pair perfectly with your treat.",
    items: ["Inyange juice", "Milinda juice", "Fresh milk"],
    imgs: ["/others/inyange.jpeg", "/others/milk.webp", "/others/inyange.jpeg"],
  },
];

const steps = [
  {
    icon: PencilRuler,
    n: "01",
    title: "Consult & Design",
    body: "Tell us your theme, flavour preferences, and guest count. We'll shape the vision together.",
  },
  {
    icon: ChefHat,
    n: "02",
    title: "Baking & Crafting",
    body: "Our master bakers hand-sculpt and decorate your cake to perfection, using premium ingredients.",
  },
  {
    icon: PackageCheck,
    n: "03",
    title: "Pickup or Delivery",
    body: "Safely collect your cake from our bakery, or arrange a delivery anywhere within Kigali.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Categories />
      <CakesFeature />
      <CakeGallery />
      <CakeProcess />
      <Cta />
    </>
  );
}

function Categories() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-32 pb-8 sm:pt-40">
      <Reveal className="mb-12">
        <Eyebrow>What we bake</Eyebrow>
        <h1 className="mt-4 font-display text-4xl font-bold text-choco-800 sm:text-5xl">
          Made fresh, made for you.
        </h1>
        <p className="mt-3 max-w-xl text-lg text-choco-500">
          From morning pastries to milestone cakes — everything out of our Kigali kitchen.
        </p>
      </Reveal>
      <div className="grid gap-7 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 120}>
            <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-cream-200 bg-cream-50 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              {/* 3-image collage header: one tall left + two stacked right */}
              <div className="relative flex h-44 overflow-hidden">
                <div className="w-1/2 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={cat.imgs[0]} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex w-1/2 flex-col">
                  <div className="h-1/2 overflow-hidden border-l-2 border-b border-cream-50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={cat.imgs[1]} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="h-1/2 overflow-hidden border-l-2 border-t border-cream-50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={cat.imgs[2]} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                </div>
                {/* tag badge */}
                <span className="absolute left-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-choco-800/80 font-display text-sm font-bold text-cream-50 backdrop-blur-sm">
                  {cat.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h2 className="font-display text-2xl font-semibold text-choco-800">
                  {cat.title}
                </h2>
                <p className="mt-3 leading-relaxed text-choco-500">{cat.body}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-choco-600">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-caramel-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Custom cakes feature                                                       */
/* -------------------------------------------------------------------------- */
function CakesFeature() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-4">
      <Reveal>
        <div className="grid items-center gap-10 overflow-hidden rounded-[2.5rem] bg-choco-700 p-6 shadow-xl sm:p-10 lg:grid-cols-2">
          <div className="relative">
            <Photo
              src={customCakeCover}
              alt="A custom celebratory cake from Alliance Bakery"
              className="aspect-[4/3] w-full rounded-[1.75rem] shadow-lg ring-4 ring-cream-50/10"
            />
            <span className="absolute -bottom-3 -right-3 rotate-3 rounded-2xl bg-berry-400 px-4 py-2 font-display text-sm font-bold text-cream-50 shadow-lg">
              Your design, our craft
            </span>
          </div>

          <div className="text-cream-50">
            <span className="inline-flex items-center gap-2 rounded-full bg-caramel-400/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-caramel-300">
              <span className="h-1.5 w-1.5 rounded-full bg-berry-400" /> Signature service
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
              Custom & Celebratory Cakes
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-cream-200/85">
              Tiered wedding cakes, themed birthday cakes, and elegant cupcakes —
              customised to your preferred flavour, size, and design. Whatever the
              occasion, we'll bake something unforgettable.
            </p>
            <div className="mt-7">
              <Button href="/contact" variant="secondary">
                Order a custom cake <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Cake gallery (masonry of real photos)                                      */
/* -------------------------------------------------------------------------- */
function CakeGallery() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="text-center">
        <h2 className="font-display text-4xl font-bold text-choco-800 sm:text-5xl">
          A peek at our cake gallery.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-choco-500">
          A few of the cakes we've crafted for birthdays, weddings, and every
          celebration in between.
        </p>
      </Reveal>

      <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
        {galleryCakes.map((src, i) => (
          <figure
            key={src}
            className="group relative overflow-hidden rounded-[1.5rem] shadow-md ring-1 ring-cream-200 break-inside-avoid"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt="A cake crafted at Alliance Bakery"
              loading="lazy"
              decoding="async"
              className="w-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-choco-900/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </figure>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <Button href="/contact" variant="primary">
          Request your own design <ArrowRight className="h-4 w-4" />
        </Button>
      </Reveal>
    </section>
  );
}

function CakeProcess() {
  return (
    <section className="relative overflow-hidden bg-choco-700 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold text-cream-50 sm:text-5xl">
            Your dream cake, in three steps.
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-9 hidden border-t-2 border-dashed border-cream-50/25 md:block" />

          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 140} className="relative text-center">
              <div className="mx-auto grid h-18 w-18 place-items-center rounded-full bg-cream-50 p-5 shadow-lg ring-4 ring-choco-700">
                <s.icon className="h-7 w-7 text-choco-700" />
              </div>
              <span className="mt-4 block font-display text-sm font-bold tracking-widest text-caramel-300">
                STEP {s.n}
              </span>
              <h3 className="mt-1 font-display text-2xl font-semibold text-cream-50">
                {s.title}
              </h3>
              <p className="mx-auto mt-3 max-w-xs leading-relaxed text-cream-200/80">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-center">
      <Reveal>
        <h2 className="font-display text-4xl font-bold text-choco-800 sm:text-5xl">
          Ready to place an order?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-choco-500">
          Reach out and let's get baking — whether it's a single loaf or a five-tier
          showstopper.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/contact" variant="primary">
            Order a custom cake <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/contact" variant="ghost">
            Visit our bakery
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
