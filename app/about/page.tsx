import type { Metadata } from "next";
import { Leaf, Users, BadgeCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, Floaty, Croissant, Cherry, Whisk } from "@/components/Decor";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Alliance Bakery blends traditional baking techniques with modern flavours to elevate Kigali's baking scene. Quality ingredients, community first, consistent taste.",
};

const commitments = [
  {
    icon: Leaf,
    title: "Quality Ingredients",
    body: "We source the finest local and imported ingredients to guarantee rich flavour and texture in every bake.",
    tint: "bg-pista-400/25 text-pista-500",
  },
  {
    icon: Users,
    title: "Community First",
    body: "Proudly rooted in Rwanda — supporting local staff and feeding our neighbourhood, every single day.",
    tint: "bg-berry-400/20 text-berry-500",
  },
  {
    icon: BadgeCheck,
    title: "Consistency",
    body: "The same great taste, every time you visit. Reliability you can count on, batch after batch.",
    tint: "bg-caramel-400/20 text-caramel-600",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero />
      <Story />
      <Commitments />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 to-cream-50 pt-36 pb-16 sm:pt-44">
      <div className="sprinkle-dots pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute -right-16 top-24 h-72 w-72 rounded-full bg-berry-400/20 blur-3xl" />
      <Floaty className="left-[8%] top-28 w-16 [animation-delay:0.4s]">
        <Whisk className="h-full w-full drop-shadow" />
      </Floaty>
      <Floaty className="right-[10%] bottom-8 hidden w-14 [animation-delay:1.2s] sm:block">
        <Cherry className="h-full w-full drop-shadow" />
      </Floaty>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal delay={80}>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-choco-800 sm:text-6xl">
            Our Story
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-choco-500">
            A warm, welcoming home for fresh bakes in Kigali — built on craft,
            community, and a genuine love for what we do.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div
              className="absolute inset-0 bg-gradient-to-br from-choco-500 to-caramel-500"
              style={{ borderRadius: "var(--radius-blob)" }}
            />
            <div className="absolute inset-0 grid place-items-center p-10 text-center">
              <div>
                <Croissant className="mx-auto w-28 animate-float drop-shadow-xl" />
                <p className="mt-6 font-display text-2xl font-semibold text-cream-50">
                  “Baked fresh, served with heart.”
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-caramel-300">
                  Alliance Bakery
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Eyebrow>How it began</Eyebrow>
          <p className="mt-6 text-lg leading-relaxed text-choco-600">
            Alliance Bakery was founded with a simple mission: to elevate the local
            baking scene in Kigali by blending{" "}
            <strong className="text-choco-800">traditional baking techniques</strong>{" "}
            with modern flavour profiles. We are proud to be a staple in the
            community, providing a warm, welcoming environment for locals, expats,
            and visitors alike.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-choco-600">
            Whether you're stopping by for a quick breakfast pastry, grabbing a loaf
            of bread for the family, or collaborating with us on a milestone event
            cake, we treat <strong className="text-choco-800">every order with absolute care</strong>.
          </p>
          <div className="mt-8">
            <Button href="/products" variant="primary">
              Explore what we bake <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Commitments() {
  return (
    <section className="bg-cream-100 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-bold text-choco-800 sm:text-5xl">
            Our commitments to you.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {commitments.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <article className="group h-full rounded-[2rem] bg-cream-50 p-8 shadow-sm ring-1 ring-cream-200 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className={`grid h-14 w-14 place-items-center rounded-2xl ${c.tint} transition-transform duration-300 group-hover:animate-wiggle`}>
                  <c.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-choco-800">
                  {c.title}
                </h3>
                <p className="mt-3 leading-relaxed text-choco-500">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
