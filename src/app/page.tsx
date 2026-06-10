import { Nav } from "@/components/Nav";
import { HeroReveal } from "@/components/HeroReveal";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Services } from "@/components/Services";
import { Templates } from "@/components/Templates";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { Starfield } from "@/components/Starfield";
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
    <>
      <JsonLd data={studioSchema} />
      <Starfield />
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <main className="relative">
        <div className="noise" aria-hidden />
        <HeroReveal>
          <LogoMarquee />
          <Services />
          <Templates />
          <Process />
          <Pricing />
          <Contact />
        </HeroReveal>
      </main>
      <Footer />
    </>
  );
}
