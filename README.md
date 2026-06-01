# Alliance Bakery 🤎

A playful, cake-ish frontend website for **Alliance Bakery** — Kigali, Rwanda.
Built with **Next.js (App Router)** + **Tailwind CSS v4**.

## Pages
- `/` — Home (hero, about snippet, highlights, popular picks, CTA)
- `/about` — Our story & commitments
- `/products` — Pastries, breads, custom cakes + the 3-step cake process
- `/contact` — Contact info, hours, map, and a message form

## Getting started
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing content
- **Contact details, hours, socials, address** → all live in [`lib/site.ts`](lib/site.ts).
  The values there are **placeholders** — swap in the real phone / email / address
  / Google Maps location and the whole site updates.
- **Brand colours & fonts** → defined as design tokens in [`app/globals.css`](app/globals.css)
  (`@theme` block). Palette: chocolate-brown + cream, with caramel & berry accents.
- **Logo** → currently a styled SVG mark in [`components/Logo.tsx`](components/Logo.tsx).
  To use the real logo image, drop it in `public/logo.png` and follow the swap note
  in that file.

## To do later
- **Contact form** is layout-only right now (shows a friendly confirmation on submit).
  Wire it to an email/form service (e.g. Formspree, Resend, or a Next route handler)
  when ready — see the note in [`components/ContactForm.tsx`](components/ContactForm.tsx).
