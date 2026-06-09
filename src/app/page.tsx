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

export default function Home() {
  return (
    <>
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
