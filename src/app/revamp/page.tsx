import type { Metadata } from "next";
import { Nav } from "@/components/home/Nav";
import { Hero } from "@/components/home/Hero";
import { Ticker } from "@/components/home/Ticker";
import { Lab } from "@/components/home/Lab";
import { Services } from "@/components/home/Services";
import { Skills } from "@/components/home/Skills";
import { Process } from "@/components/home/Process";
import { Pricing } from "@/components/home/Pricing";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/home/Footer";
import { CookieConsent } from "@/components/home/CookieConsent";

// The "Studio Dossier" revamp lives here as a preview/staging route. It is
// noindex so it can't compete with the live homepage at "/" for rankings, and
// it carries no Organization JSON-LD — the canonical entity lives on "/".
export const metadata: Metadata = {
  title: "RM Works · Studio Dossier (revamp preview)",
  description:
    "Preview of the RM Works studio site revamp — an editorial 'Studio Dossier' design.",
  alternates: { canonical: "/revamp" },
  robots: { index: false, follow: true },
};

export default function Revamp() {
  return (
    <div className="rm-home min-h-dvh">
      {/* Per-document overrides: with output:"export" every route is its own
          HTML file, so this style only ships with /revamp. It repaints the
          body canvas + scrollbar to paper without touching the dark site at
          "/" or the client sites, which keep the dark defaults. */}
      <style>{`
        body { background: #f6f2e9 !important; }
        ::-webkit-scrollbar-track { background: #efe9da !important; }
        ::-webkit-scrollbar-thumb { background: #d9d0bc !important; }
        ::-webkit-scrollbar-thumb:hover { background: #c8bda4 !important; }
      `}</style>
      <div className="rm-grain" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <Ticker
          items={[
            "Strategy",
            "Art Direction",
            "Design",
            "Motion",
            "Engineering",
            "Brand",
            "SEO",
            "Launch",
          ]}
        />
        <Lab />
        <Services />
        <Ticker
          tone="accent"
          reverse
          items={[
            "Next.js",
            "React 19",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "CSS 3D",
            "WebGL",
            "Schema.org",
          ]}
        />
        <Skills />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
