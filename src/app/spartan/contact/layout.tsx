import type { Metadata } from "next";

// page.tsx is a client component, so per-page metadata lives in this layout.
export const metadata: Metadata = {
  title:
    "Contact & Free Moving Quote · Spartan Moving and Transport · Murrieta, CA",
  description:
    "Request a free moving quote from Spartan Moving and Transport Inc. Licensed and insured movers in Murrieta, CA serving Temecula, Riverside County, and Southern California. Call (951) 326-5763.",
  alternates: { canonical: "/spartan/contact" },
  openGraph: {
    title: "Contact & Free Moving Quote · Spartan Moving and Transport",
    description:
      "Request a free quote from licensed, insured movers in Murrieta, CA serving Southern California.",
    url: "/spartan/contact",
    type: "website",
  },
};

export default function SpartanContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
