import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Services } from "@/components/Services";
import { Templates } from "@/components/Templates";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CursorGlow } from "@/components/ui/CursorGlow";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <main className="relative">
        <div className="noise" aria-hidden />
        <Hero />
        <LogoMarquee />
        <Services />
        <Templates />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
