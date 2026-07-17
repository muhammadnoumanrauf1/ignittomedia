"use client";

import { motion } from "framer-motion";
import SplitText from "../ui/SplitText";
import MagneticButton from "../ui/MagneticButton";
import { Boxes } from "../ui/background-boxes";

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
          <span className="text-brand-glow text-sm font-semibold tracking-[0.2em] uppercase border border-brand-glow/30 px-4 py-1.5 rounded-full bg-brand-glow/5 inline-block">
            Content that people remember
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-glow leading-tight">
          <span className="block">
            <SplitText text="Every Second" type="words" delay={0.4} className="justify-center" />
          </span>
          <span className="block">
            <SplitText text="Earns Attention." type="words" delay={0.6} className="justify-center text-brand-text-secondary" />
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="text-xl md:text-2xl text-brand-text-muted mb-4 font-light">
            Not every video deserves to be watched. <br className="hidden md:block" />
            <span className="text-brand-text">We make sure yours does.</span>
          </p>
          <p className="text-base md:text-lg text-brand-text-muted">
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
          className="text-brand-text-muted/60 text-sm tracking-wide"
        >
          Trusted by creators, founders and growing brands.
        </motion.div>
      </div>
    </section>
  );
}
