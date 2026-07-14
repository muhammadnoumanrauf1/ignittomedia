import CustomCursor from "@/components/ui/CustomCursor";
import BackgroundAtmosphere from "@/components/ui/BackgroundAtmosphere";
import CinematicHeroDemo from "@/components/demo-cinematic";
import Story from "@/components/sections/Story";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import FolderSection from "@/components/sections/FolderSection";
import Metrics from "@/components/sections/Metrics";
import Process from "@/components/sections/Process";
import ProcessMap from "@/components/sections/ProcessMap";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative w-full">
      <CustomCursor />
      <BackgroundAtmosphere />

      <CinematicHeroDemo />
      <Story />
      <Problem />
      <Metrics />
      <Services />
      <Portfolio />
      <FolderSection />
      <ProcessMap />
      <Process />
      <Testimonials />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  );
}
