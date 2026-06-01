import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader";
import { site } from "@/lib/site";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alliancebakery.rw"),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Alliance Bakery in Kigali, Rwanda — authentic pastries, custom celebratory cakes, and freshly baked bread every single day. Open 24 hours on weekdays.",
  keywords: [
    "bakery Kigali",
    "Alliance Bakery",
    "custom cakes Rwanda",
    "fresh bread Kigali",
    "pastries Rwanda",
  ],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description:
      "Authentic pastries, custom cakes, and daily bread in the heart of Kigali, Rwanda.",
    type: "website",
    locale: "en_RW",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <body className="min-h-screen">
        <Loader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
