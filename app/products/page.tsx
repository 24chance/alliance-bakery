import type { Metadata } from "next";
import { ArrowRight, PencilRuler, ChefHat, PackageCheck } from "lucide-react";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, Floaty, Donut, Cookie } from "@/components/Decor";

export const metadata: Metadata = {
  title: "Products & Services",
  description:
    "Signature pastries, artisanal breads, and custom celebratory cakes from Alliance Bakery, Kigali. Plus our simple 3-step custom cake process.",
};

const categories = [
  {
    tag: "A",
    emoji: "🥐",
    title: "Signature Pastries",
    body: "Golden, flaky croissants, rich tarts, danishes, and sweet treats — perfect for pairing with your morning coffee.",
    items: ["Butter croissants", "Fruit danishes", "Chocolate tarts", "Cinnamon rolls"],
    tint: "from-caramel-300 to-caramel-500",
  },
  {
    tag: "B",
    emoji: "🍞",
    title: "Artisanal Breads",
    body: "Soft sandwich breads, crusty loaves, and specialty local breads — baked fresh, every single day.",
    items: ["Crusty sourdough", "Soft sandwich loaf", "Whole-wheat bread", "Local specialty breads"],
    tint: "from-choco-400 to-choco-600",
  },
  {
    tag: "C",
    emoji: "🎂",
    title: "Custom & Celebratory Cakes",
    body: "Tiered wedding cakes, themed birthday cakes, and elegant cupcakes — customised to your flavour, size, and design.",
    items: ["Tiered wedding cakes", "Themed birthday cakes", "Elegant cupcakes", "Anniversary cakes"],
    tint: "from-berry-300 to-berry-500",
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
      <PageHero />
      <Categories />
      <CakeProcess />
      <Cta />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 to-cream-50 pt-36 pb-16 sm:pt-44">
      <div className="sprinkle-dots pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute -left-16 top-24 h-72 w-72 rounded-full bg-caramel-400/25 blur-3xl" />
      <Floaty className="right-[8%] top-28 w-16 [animation-delay:0.5s]">
        <Donut className="h-full w-full drop-shadow" />
      </Floaty>
      <Floaty className="left-[10%] bottom-8 hidden w-14 [animation-delay:1.3s] sm:block">
        <Cookie className="h-full w-full drop-shadow" />
      </Floaty>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal delay={80}>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-choco-800 sm:text-6xl">
            Made fresh, made for you.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-choco-500">
            From morning pastries to milestone cakes — here's a taste of everything
            that comes out of our Kigali kitchen.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-7 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 120}>
            <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-cream-200 bg-cream-50 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${cat.tint}`}>
                <div className="sprinkle-dots pointer-events-none absolute inset-0 opacity-30" />
                <span className="relative text-7xl transition-transform duration-300 group-hover:scale-110">
                  {cat.emoji}
                </span>
                <span className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-cream-50/90 font-display text-sm font-bold text-choco-700">
                  {cat.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h2 className="font-display text-2xl font-semibold text-choco-800">
                  {cat.title}
                </h2>
                <p className="mt-3 leading-relaxed text-choco-500">{cat.body}</p>
                <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
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

function CakeProcess() {
  return (
    <section className="relative overflow-hidden bg-choco-700 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-bold text-cream-50 sm:text-5xl">
            Your dream cake, in three steps.
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* connecting dotted line on desktop */}
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
