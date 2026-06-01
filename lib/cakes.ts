/**
 * Cake photo library. All real photos live in `public/cakes/cakeN.jpeg`.
 * Helpers below give curated subsets for the different sections so we don't
 * repeat the same cake twice on a page.
 */
const TOTAL = 47;

export const allCakes: string[] = Array.from(
  { length: TOTAL },
  (_, i) => `/cakes/cake${i + 1}.jpeg`
);

const pick = (...nums: number[]) => nums.map((n) => `/cakes/cake${n}.jpeg`);

/** Scrolling marquee under the hero. */
export const heroCakes = pick(1, 5, 9, 12, 18, 22, 30, 33, 40, 45, 7, 25);

/** Single feature photo for the home "about" blob. */
export const featureCake = "/cakes/cake1.jpeg";

/** Photo for the About page story section. */
export const storyCake = "/cakes/cake30.jpeg";

/** Photo for the Products custom-cakes category card. */
export const customCakeCover = "/cakes/cake22.jpeg";

/** Home "customer favourites" gallery. */
export const favouriteCakes = pick(12, 5, 33, 18, 40, 9);

/** Big gallery on the Products page. */
export const galleryCakes = pick(
  2, 11, 8, 19, 34, 4, 27, 45, 6, 31, 15, 38, 13, 41, 24, 47
);
