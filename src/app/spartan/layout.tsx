import type { Metadata } from "next";
import { Oswald, Inter, JetBrains_Mono } from "next/font/google";
import { Navbar, Footer } from "./components";

const display = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-spartan-head",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spartan-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-spartan-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Spartan Moving and Transport Inc · Murrieta Moving Company · Licensed & Insured Local Movers",
  description:
    "Spartan Moving and Transport Inc is a licensed and insured Murrieta moving company providing residential and commercial moving, loading and unloading, and moving labor across Murrieta, Temecula, Riverside County, Orange County, San Diego County, and Southern California. DOT #3480106 · MC #0602297 · CAL T0192705.",
  keywords: [
    "Murrieta moving company",
    "movers in Murrieta CA",
    "local movers Murrieta",
    "residential movers Murrieta",
    "commercial movers Murrieta",
    "moving company Riverside County",
    "movers Temecula CA",
    "movers Riverside CA",
    "movers Corona CA",
    "moving labor Murrieta",
    "loading and unloading help Murrieta",
    "Southern California movers",
    "licensed moving company Murrieta",
    "San Diego County movers",
    "Orange County movers",
  ],
  openGraph: {
    title: "Spartan Moving and Transport Inc · Murrieta, CA",
    description:
      "Licensed and insured residential and commercial movers serving Murrieta, Temecula, Riverside County, Orange County, San Diego County, and Southern California.",
    type: "website",
  },
};

export default function SpartanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${display.variable} ${sans.variable} ${mono.variable} min-h-screen bg-[#F4EFE3] text-[#1B2A38] [font-family:var(--font-spartan-sans)] antialiased selection:bg-[#C9A24B]/30`}
    >
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
