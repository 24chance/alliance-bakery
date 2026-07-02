import type { Metadata } from "next";
import { Leaf, Users, BadgeCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Photo } from "@/components/Photo";
import { Eyebrow } from "@/components/Decor";
import { storyCake } from "@/lib/cakes";

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
    body: "Proudly rooted in Rwanda, supporting local staff and feeding our neighbourhood, every single day.",
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
      <BrandStatement />
      <Story />
      <Commitments />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero - real photo background                                               */
/* -------------------------------------------------------------------------- */
function PageHero() {
  return (
    <section className="relative flex min-h-[80vh] items-end overflow-hidden">
      {/* background photo (real bakery/cake shot) */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/cakes/cake44.jpeg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
        {/* layered gradient: keep top readable for navbar, deepen bottom for text */}
        <div className="absolute inset-0 bg-gradient-to-b from-choco-900/55 via-choco-900/25 to-choco-900/80" />
        {/* warm amber tint to match the site's night-light feel */}
        <div className="absolute inset-0 bg-caramel-600/10 mix-blend-multiply" />
      </div>

      {/* content anchored to the bottom of the hero */}
      <div className="relative w-full px-6 pb-14 pt-36 sm:pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-cream-50/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-cream-200 backdrop-blur-sm ring-1 ring-cream-50/20">
              Alliance Bakery · Kigali - Rwanda
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.08] text-cream-50 drop-shadow-lg sm:text-6xl md:text-7xl">
              Made with love,<br />
              <span className="text-caramel-300">shared with Kigali.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream-50/85">
              A warm, welcoming home for fresh bakes, built on craft,
              community, and a genuine love for what we do.
            </p>
          </Reveal>
        </div>
      </div>

      {/* SVG wave curve - cream fill eats into the bottom of the hero photo */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 leading-none">
        <svg
          viewBox="0 0 1440 72"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: "72px" }}
        >
          <path
            d="M0,40 C240,80 480,10 720,45 C960,80 1200,15 1440,50 L1440,72 L0,72 Z"
            fill="#fffce8"
          />
        </svg>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Brand statement quote                                                       */
/* -------------------------------------------------------------------------- */
function BrandStatement() {
  return (
    <section className="py-16">
      <Reveal className="mx-auto max-w-3xl px-6 text-center">
        <div className="relative rounded-[2rem] border border-caramel-300/50 bg-cream-50/70 px-8 py-10 shadow-sm backdrop-blur-sm sm:px-12">
          {/* decorative open-quote mark */}
          <span
            aria-hidden="true"
            className="absolute -top-5 left-8 font-display text-8xl leading-none text-caramel-400/50 select-none"
          >
            &ldquo;
          </span>
          <p className="relative font-display text-xl font-medium leading-relaxed text-choco-700 sm:text-2xl">
            Experience the art of baking at Alliance Bakery Kigali, where every
            creation is a testament to quality and taste. Our bakery offers a
            delightful selection of freshly baked bread, exquisite cakes,
            artisanal pastries, and savory snacks. Each item is crafted daily
            with the finest ingredients to bring you a truly delicious
            experience, perfect for celebrating special occasions or simply
            enjoying a sweet moment.
          </p>
          <span
            aria-hidden="true"
            className="absolute -bottom-7 right-8 font-display text-8xl leading-none text-caramel-400/50 select-none"
          >
            &rdquo;
          </span>
        </div>
      </Reveal>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Story                                                                      */
/* -------------------------------------------------------------------------- */
function Story() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div
              className="absolute -inset-3 bg-linear-to-br from-choco-500 to-caramel-500"
              style={{ borderRadius: "var(--radius-blob)" }}
            />
            <Photo
              src={storyCake}
              alt="A beautifully crafted cake from Alliance Bakery"
              priority
              className="absolute inset-0 rounded-blob shadow-xl"
            />
            <span className="absolute -bottom-4 left-4 -rotate-3 max-w-48 rounded-2xl bg-cream-50 px-4 py-3 shadow-lg ring-1 ring-cream-200">
              <span className="font-display text-base font-semibold text-choco-800">
                "Baked fresh, served with heart."
              </span>
            </span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-6 text-lg leading-relaxed text-choco-600">
            Alliance Bakery was founded with a simple mission: to elevate the
            local baking scene in Kigali by blending{" "}
            <strong className="text-choco-800">traditional baking techniques</strong>{" "}
            with modern flavour profiles. We are proud to be a staple in the
            community, providing a warm, welcoming environment for locals, expats,
            and visitors alike.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-choco-600">
            Whether you&apos;re stopping by for a quick breakfast pastry, grabbing a
            loaf of bread for the family, or collaborating with us on a milestone
            event cake, we treat{" "}
            <strong className="text-choco-800">every order with absolute care</strong>.
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

/* -------------------------------------------------------------------------- */
/*  Commitments                                                                */
/* -------------------------------------------------------------------------- */
function Commitments() {
  return (
    <section className="candlelight py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold text-choco-800 sm:text-5xl">
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
