/**
 * Central site configuration.
 *
 * 👉 Swap the PLACEHOLDER contact details below for the real ones when ready —
 *    everything across the site reads from here, so one edit updates it all.
 */
export const site = {
  name: "Alliance Bakery",
  tagline: "Freshly Baked, Every Single Day.",
  city: "Kigali, Rwanda",

  // --- Contact (PLACEHOLDERS — replace with the real values) ---
  phone: "+250 7XX XXX XXX",
  phoneHref: "tel:+2507XXXXXXXX",
  email: "hello@alliancebakery.rw",
  address: "KN 0 St, Kigali, Rwanda",
  mapsQuery: "Kigali, Rwanda",

  hours: [
    { days: "Monday – Friday", time: "Open 24 Hours" },
    { days: "Saturday – Sunday", time: "7:00 AM – 11:30 PM" },
  ],

  socials: {
    instagram: "https://instagram.com/AllianceBakeryKigali",
    facebook: "https://facebook.com/AllianceBakeryKigali",
    handle: "@AllianceBakeryKigali",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/about" },
  { label: "Products", href: "/products" },
] as const;
