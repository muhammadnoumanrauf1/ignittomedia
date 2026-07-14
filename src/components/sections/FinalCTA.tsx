"use client";

import { motion } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";
import SplitText from "../ui/SplitText";

export default function FinalCTA() {
  return (
    <section className="relative min-h-screen bg-[#010B14] flex flex-col items-center justify-center py-32 px-6 overflow-hidden">
      {/* Background becomes darker, only blue glows remain */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-brand-glow/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto w-full text-center z-10">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-12 leading-tight">
          <SplitText text="Imagine Never" type="words" delay={0.1} className="justify-center" />
          <SplitText text="Opening Your Editing Software Again." type="words" delay={0.3} className="justify-center text-brand-glow mt-2 text-glow" />
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-2xl text-brand-text-muted mb-16 font-light max-w-2xl mx-auto"
        >
          Imagine ending your workday knowing tomorrow's content is already finished.<br/>
          <span className="text-white font-medium">That's the freedom we build.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center"
        >
          <MagneticButton 
            variant="primary"
            onClick={() => window.open("https://calendly.com/ahmar-nawab/new-meeting", "_blank")}
          >
            Book a Strategy Call
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
