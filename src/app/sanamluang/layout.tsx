import type { Metadata } from "next";
import { Cormorant_Garamond, Marcellus, Inter } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl } from "@/lib/seo";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-slc-display",
  display: "swap",
});

const serifCaps = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-slc-caps",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-slc-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Sanamluang Thai Cuisine · Claremont, CA · Best Thai Noodle · Open Daily",
  description:
    "Sanamluang Thai Cuisine in Claremont, California. Noodles are the specialty — Sanamluang Noodle, Pad Thai, Rahd Nah, Pad See Ewe and authentic Thai dishes. 710 South Indian Hill Blvd., Claremont, CA 91711. Open daily. (909) 621-0904.",
  keywords: [
    "Sanamluang",
    "Thai food Claremont",
    "Thai restaurant Claremont CA",
    "best Thai noodle",
    "Sanamluang Noodle",
    "Pad Thai Claremont",
    "Thai cuisine Inland Empire",
    "noodles Claremont",
  ],
  alternates: { canonical: "/sanamluang" },
  openGraph: {
    title: "Sanamluang Thai Cuisine · Claremont, CA",
    description:
      "Noodles are the specialty. Authentic Thai cooking in the heart of Claremont — open daily until late.",
    url: "/sanamluang",
    siteName: "Sanamluang Thai Cuisine",
    type: "website",
    images: [{ url: "/sanamluang-assets/slides/slide_1.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanamluang Thai Cuisine · Claremont, CA",
    description:
      "Noodles are the specialty. Authentic Thai cooking in the heart of Claremont — open daily until late.",
    images: ["/sanamluang-assets/slides/slide_1.jpg"],
  },
};

// Restaurant schema — full NAP, cuisine, price, and daily hours.
const sanamluangSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": absoluteUrl("/sanamluang#restaurant"),
  name: "Sanamluang Thai Cuisine",
  description:
    "Authentic Thai cooking in Claremont, California. Noodles are the specialty — Sanamluang Noodle, Pad Thai, Rahd Nah, and Pad See Ewe.",
  url: absoluteUrl("/sanamluang"),
  image: absoluteUrl("/sanamluang-assets/slides/slide_1.jpg"),
  telephone: "+1-909-621-0904",
  servesCuisine: "Thai",
  priceRange: "$$",
  menu: absoluteUrl("/sanamluang#menu"),
  address: {
    "@type": "PostalAddress",
    streetAddress: "710 South Indian Hill Blvd.",
    addressLocality: "Claremont",
    addressRegion: "CA",
    postalCode: "91711",
    addressCountry: "US",
  },
  hasMap:
    "https://www.google.com/maps/search/?api=1&query=Sanamluang+Thai+Cuisine+710+South+Indian+Hill+Blvd+Claremont+CA+91711",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "11:00",
      closes: "22:00",
    },
  ],
};

export default function SanamluangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${display.variable} ${serifCaps.variable} ${sans.variable} min-h-screen bg-[#14100B] text-[#EFE6D4] [font-family:var(--font-slc-sans)] antialiased selection:bg-[#C8A24C]/30`}
    >
      <JsonLd data={sanamluangSchema} />
      {children}
    </div>
  );
}
