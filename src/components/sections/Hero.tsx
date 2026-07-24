"use client";

import { motion } from "framer-motion";
import SplitText from "../ui/SplitText";
import MagneticButton from "../ui/MagneticButton";
import { Boxes } from "../ui/background-boxes";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden px-6">
      <div className="absolute inset-0 w-full h-full bg-brand-bg z-0 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      
      <div className="z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 backdrop-blur-md shadow-[0_0_15px_rgba(0,223,162,0.15)]">
            <Sparkles size={14} className="text-brand-accent animate-pulse" />
            <span className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase">
              Content that people remember
            </span>
          </div>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-glow leading-tight">
          <span className="block">
            <SplitText text="Every Second" type="words" delay={0.4} className="justify-center text-white" />
          </span>
          <span className="block">
            <SplitText text="Earns Attention." type="words" delay={0.6} className="justify-center text-white" />
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="text-xl md:text-2xl text-white mb-4 font-light">
            Not every video deserves to be watched. <br className="hidden md:block" />
            <span className="text-white font-medium">We make sure yours does.</span>
          </p>
          <p className="text-base md:text-lg text-white">
            IgnittoMedia helps founders, creators, and businesses transform raw footage into content that builds authority, earns trust, and drives measurable growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <MagneticButton 
            variant="primary" 
            onClick={() => window.open("https://calendly.com/ahmar-nawab/new-meeting", "_blank")}
          >
            Book a Strategy Call
          </MagneticButton>
          <MagneticButton 
            variant="secondary"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight * 1.5,
                behavior: "smooth"
              });
            }}
          >
            Watch Our Manifesto
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="text-white/80 text-sm tracking-wide"
        >
          Trusted by creators, founders and growing brands.
        </motion.div>
      </div>
    </section>
  );
}
