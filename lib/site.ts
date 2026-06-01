/**
 * Central site configuration — everything across the site reads from here.
 */
export const site = {
  name: "Alliance Bakery",
  tagline: "Freshly Baked, Every Single Day.",
  city: "Kigali, Rwanda",

  // --- Contact ---
  phones: [
    { display: "0789 804 691", href: "tel:+250789804691" },
    { display: "0788 485 356", href: "tel:+250788485356" },
  ],
  email: "alliancebakery250@gmail.com",
  address: "Kinyinya, Nyacyonga",

  // Other neighbourhoods we serve.
  locations: ["Kinyinya", "Gikondo", "Kimisagara", "Nyacyonga", "Gasanze"],

  // Resolved from the shared Google Maps pin (ALLIANCE BAKERY KIGALI).
  mapsQuery: "-1.915096,30.108915",
  mapsLink: "https://maps.app.goo.gl/ZTekw13VsFgn2aQGA",

  // Open around the clock, every day of the week.
  hours: [{ days: "Every day", time: "Open 24 Hours" }],

  socials: {
    instagram: "https://instagram.com/alliance_bakery_kigali",
    facebook: "https://facebook.com/alliance_bakery_kigali",
    handle: "@alliance_bakery_kigali",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/about" },
  { label: "Products", href: "/products" },
] as const;
