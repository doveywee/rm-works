import type { Metadata } from "next";
import { Oswald, Inter, JetBrains_Mono } from "next/font/google";
import { Navbar, Footer } from "./components";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, LAST_UPDATED, DATE_PUBLISHED } from "@/lib/seo";

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
  alternates: { canonical: "/spartan" },
  openGraph: {
    title: "Spartan Moving and Transport Inc · Murrieta, CA",
    description:
      "Licensed and insured residential and commercial movers serving Murrieta, Temecula, Riverside County, Orange County, San Diego County, and Southern California.",
    url: "/spartan",
    siteName: "Spartan Moving and Transport Inc",
    type: "website",
    images: [{ url: "/spartan-assets/logo.png" }],
  },
  twitter: {
    card: "summary",
    title: "Spartan Moving and Transport Inc · Murrieta, CA",
    description:
      "Licensed and insured local & commercial movers serving Murrieta, Temecula, and Southern California.",
    images: ["/spartan-assets/logo.png"],
  },
};

// MovingCompany schema — NAP, service area, and carrier license identifiers.
const spartanSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "@id": absoluteUrl("/spartan#business"),
  name: "Spartan Moving and Transport Inc",
  description:
    "Licensed and insured Murrieta moving company providing residential and commercial moving, loading and unloading, and moving labor across Southern California.",
  url: absoluteUrl("/spartan"),
  image: absoluteUrl("/spartan-assets/logo.png"),
  telephone: "+1-951-326-5763",
  email: "angelatsambasis@yahoo.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "29577 Hubble Way",
    addressLocality: "Murrieta",
    addressRegion: "CA",
    postalCode: "92563",
    addressCountry: "US",
  },
  areaServed: [
    "Murrieta",
    "Temecula",
    "Riverside County",
    "Orange County",
    "San Diego County",
    "Southern California",
  ].map((name) => ({ "@type": "AdministrativeArea", name })),
  identifier: [
    { "@type": "PropertyValue", propertyID: "USDOT", value: "3480106" },
    { "@type": "PropertyValue", propertyID: "MC", value: "0602297" },
    { "@type": "PropertyValue", propertyID: "CAL-T", value: "0192705" },
  ],
  datePublished: DATE_PUBLISHED,
  dateModified: LAST_UPDATED,
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
      <JsonLd data={spartanSchema} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
