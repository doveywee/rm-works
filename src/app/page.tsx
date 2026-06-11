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
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, LAST_UPDATED, DATE_PUBLISHED } from "@/lib/seo";

// Organization schema for the studio. Lives on the homepage (not the root
// layout) so it does NOT leak onto the client sites nested under this layout.
const studioSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": absoluteUrl("/#studio"),
  name: "RM Works",
  alternateName: "RM Works Studio",
  description:
    "RM Works is a premium web design studio engineering immersive, high-converting websites with motion, 3D, and obsessive craft.",
  url: absoluteUrl("/"),
  email: "ruijli@icloud.com",
  knowsAbout: [
    "Web design",
    "Web development",
    "Next.js",
    "Conversion-focused marketing websites",
    "Motion and interaction design",
    "Local business SEO",
  ],
  areaServed: { "@type": "Place", name: "United States" },
  datePublished: DATE_PUBLISHED,
  dateModified: LAST_UPDATED,
  sameAs: ["https://nextjs.org", "https://vercel.com"],
};

export default function Home() {
  return (
    <div className="rm-home min-h-dvh">
      {/* Per-document overrides: with output:"export" every route is its own
          HTML file, so this style only ships with the homepage. It repaints
          the body canvas + scrollbar to paper without touching the client
          sites, which keep the dark defaults from globals.css. */}
      <style>{`
        body { background: #f6f2e9 !important; }
        ::-webkit-scrollbar-track { background: #efe9da !important; }
        ::-webkit-scrollbar-thumb { background: #d9d0bc !important; }
        ::-webkit-scrollbar-thumb:hover { background: #c8bda4 !important; }
      `}</style>
      <JsonLd data={studioSchema} />
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
    </div>
  );
}
