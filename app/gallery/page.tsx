import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Decor";
import {
  weddingCakes,
  birthdayCakes,
  graduationCakes,
  classicCakes,
} from "@/lib/cakes";

export const metadata: Metadata = {
  title: "Cake Gallery",
  description:
    "Browse our full collection of custom cakes - wedding, birthday, graduation and more - all crafted by Alliance Bakery in Kigali.",
};

const categories = [
  {
    eyebrow: "Love & Celebration",
    title: "Wedding & Anniversary",
    body: "Elegant tiered cakes, long-table showstoppers, and anniversary creations built for your biggest day.",
    cakes: weddingCakes,
    accent: "bg-cream-100",
  },
  {
    eyebrow: "Happy Birthday",
    title: "Birthday Cakes",
    body: "Colourful, fun, and completely unforgettable - every birthday deserves a cake this good.",
    cakes: birthdayCakes,
    accent: "bg-berry-50",
  },
  {
    eyebrow: "Special Occasions",
    title: "Graduation & Themed Cakes",
    body: "Custom-themed cakes designed around milestones, careers, and one-of-a-kind moments.",
    cakes: graduationCakes,
    accent: "bg-caramel-50",
  },
  {
    eyebrow: "Always in Stock",
    title: "Classic Everyday Cakes",
    body: "Simple, elegant cakes ready to pick up any day - perfect for impromptu celebrations.",
    cakes: classicCakes,
    accent: "bg-cream-50",
  },
];

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      {categories.map((cat) => (
        <CategorySection key={cat.title} category={cat} />
      ))}
      <Cta />
    </>
  );
}

function GalleryHero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-32 pb-12 text-center sm:pt-40">
      <Reveal>
        <h1 className="mt-5 font-display text-5xl font-bold text-choco-800 sm:text-6xl">
          The cake gallery.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-choco-500">
          Every cake here was made to order - grouped by occasion so you can
          find inspiration for yours.
        </p>
      </Reveal>
    </section>
  );
}

function CategorySection({
  category,
}: {
  category: (typeof categories)[number];
}) {
  const cols =
    category.cakes.length <= 4
      ? "grid-cols-2 sm:grid-cols-4"
      : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4";

  return (
    <section className={`${category.accent} py-16`}>
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-10">
          <h2 className="mt-4 font-display text-3xl font-bold text-choco-800 sm:text-4xl">
            {category.title}
          </h2>
          <p className="mt-3 max-w-lg text-choco-500">{category.body}</p>
        </Reveal>

        <div className={`grid gap-3 ${cols}`}>
          {category.cakes.map((src, i) => (
            <Reveal key={src} delay={i * 60}>
              <figure className="group relative overflow-hidden rounded-2xl shadow-md ring-1 ring-cream-200">
                {/* Fixed aspect ratio container - ensures all images share the same height */}
                <div className="aspect-[3/4] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`${category.title} cake by Alliance Bakery`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-choco-900/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl" />
              </figure>
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
          See something you love?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-choco-500">
          Tell us your vision and we'll bake it into reality - any flavour, any
          size, any occasion.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/contact" variant="primary">
            Order a custom cake <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/products" variant="ghost">
            See our products
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
