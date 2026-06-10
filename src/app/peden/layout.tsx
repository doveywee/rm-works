import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Navbar, Footer } from "./components";
import { FAQS } from "./faq";
import { JsonLd } from "@/components/JsonLd";
import {
  absoluteUrl,
  faqPageSchema,
  LAST_UPDATED,
  DATE_PUBLISHED,
} from "@/lib/seo";

const serif = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif-p",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans-p",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "New York Life · Chantelle Peden Hunt, MBA — Life Insurance & Financial Strategies in Corona, Riverside & the Inland Empire",
  description:
    "Chantelle Peden Hunt, MBA, Licensed Agent with New York Life, provides personalized life insurance, retirement planning, and financial strategies for families, professionals, and business owners across Corona, Riverside, and the Inland Empire, CA. Request a quote or schedule a consultation.",
  keywords: [
    "life insurance agent in Corona CA",
    "life insurance in Riverside CA",
    "New York Life agent Inland Empire",
    "retirement planning Corona Riverside",
    "small business insurance Riverside County",
    "financial strategies Southern California",
  ],
  alternates: { canonical: "/peden" },
  openGraph: {
    title:
      "New York Life · Chantelle Peden Hunt, MBA, Agent",
    description:
      "Personalized insurance and financial strategies for families, professionals, and business owners across Corona, Riverside, and the Inland Empire.",
    url: "/peden",
    siteName: "Chantelle Peden Hunt · New York Life",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "New York Life · Chantelle Peden Hunt, MBA, Agent",
    description:
      "Personalized insurance and financial strategies across Corona, Riverside, and the Inland Empire, CA.",
  },
};

// LocalBusiness (InsuranceAgency) + the agent as a Person, cross-linked.
const areaServed = ["Corona", "Riverside", "Inland Empire", "Riverside County"].map(
  (name) => ({ "@type": "City", name }),
);

const pedenSchema = [
  {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "@id": absoluteUrl("/peden#business"),
    name: "Chantelle Peden Hunt, MBA — New York Life",
    description:
      "Personalized life insurance, retirement planning, and financial strategies for families, professionals, and business owners across Corona, Riverside, and the Inland Empire, CA.",
    url: absoluteUrl("/peden"),
    areaServed,
    parentOrganization: {
      "@type": "Organization",
      name: "New York Life Insurance Company",
    },
    employee: { "@id": absoluteUrl("/peden#agent") },
    knowsAbout: [
      "Life insurance",
      "Retirement planning",
      "Financial strategies",
      "Small business insurance",
    ],
    datePublished: DATE_PUBLISHED,
    dateModified: LAST_UPDATED,
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/peden#agent"),
    name: "Chantelle Peden Hunt",
    honorificSuffix: "MBA",
    jobTitle: "Licensed Agent",
    worksFor: { "@id": absoluteUrl("/peden#business") },
    areaServed,
    url: absoluteUrl("/peden"),
  },
  faqPageSchema("/peden", FAQS),
];

export default function PedenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${serif.variable} ${sans.variable} min-h-screen bg-white text-[#16202B] [font-family:var(--font-sans-p)] antialiased selection:bg-[#2E86C1]/25`}
    >
      <JsonLd data={pedenSchema} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
