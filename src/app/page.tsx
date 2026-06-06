import { Nav } from "@/components/Nav";
import { HeroStage } from "@/components/HeroStage";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Services } from "@/components/Services";
import { Templates } from "@/components/Templates";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { WarpIn } from "@/components/ui/WarpIn";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <main className="relative">
        <div className="noise" aria-hidden />
        <HeroStage />
        <WarpIn>
          <LogoMarquee />
          <Services />
        </WarpIn>
        <Templates />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
