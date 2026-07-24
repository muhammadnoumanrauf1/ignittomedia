import CustomCursor from "@/components/ui/CustomCursor";
import BackgroundAtmosphere from "@/components/ui/BackgroundAtmosphere";
import CinematicHeroDemo from "@/components/demo-cinematic";
import Story from "@/components/sections/Story";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import FolderSection from "@/components/sections/FolderSection";
import Metrics from "@/components/sections/Metrics";
import ProcessMap from "@/components/sections/ProcessMap";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import FinalCTA from "@/components/sections/FinalCTA";
import { CinematicFooter } from "@/components/ui/motion-footer";
import ScrollZoomHero from "@/components/kingkong/ScrollZoomHero";
import HeroSection from "@/components/ui/glassmorphism-trust-hero";

export default function Home() {
  return (
    <div className="relative w-full bg-brand-bg min-h-screen font-sans selection:bg-white/20 overflow-x-clip">
      <CustomCursor />
      <BackgroundAtmosphere />

      <main className="relative z-10 w-full bg-brand-bg text-white border-b border-white/10 shadow-2xl rounded-b-[40px] md:rounded-b-[80px]">
        {/* <CinematicHeroDemo /> */}
        <ScrollZoomHero />
        <HeroSection />
        <Story />
        {/* <Problem /> */}
        <Metrics />
        <Services />
        <div className="hidden md:block">
          <Portfolio />
        </div>
        <div className="md:hidden block">
          <FolderSection />
        </div>
        <ProcessMap />
        <Testimonials />
        <Contact />
        <FinalCTA />
      </main>

      <CinematicFooter />
    </div>
  );
}
