import type { Metadata } from "next";

// page.tsx is a client component, so per-page metadata lives in this layout.
export const metadata: Metadata = {
  title:
    "Moving Services · Residential, Commercial & Labor · Spartan Moving and Transport",
  description:
    "Spartan Moving and Transport's services: residential and commercial moving, loading and unloading, and moving labor across Murrieta, Temecula, and Southern California. Licensed and insured.",
  alternates: { canonical: "/spartan/services" },
  openGraph: {
    title: "Moving Services · Spartan Moving and Transport Inc",
    description:
      "Residential and commercial moving, loading and unloading, and moving labor across Murrieta, Temecula, and Southern California.",
    url: "/spartan/services",
    type: "website",
  },
};

export default function SpartanServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
