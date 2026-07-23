"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import SplitText from "../ui/SplitText";

export default function Manifesto() {
  return (
    <section className="relative min-h-screen bg-[#020D1A] flex flex-col items-center justify-center py-32 px-6 overflow-hidden">
      {/* Subtle top gradient to transition from Hero */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-bg to-transparent" />
      
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center z-10">
        <h2 className="text-4xl md:text-6xl mb-16 leading-tight">
          <SplitText text="Don't Hire Us Yet." type="words" delay={0.1} className="justify-center font-extrabold tracking-wide text-brand-text" />
          <SplitText text="Watch This First." type="words" delay={0.3} className="justify-center font-light tracking-widest text-brand-glow mt-2" />
        </h2>

        {/* Video Player Placeholder - Auto Lightbox Concept */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full aspect-video rounded-xl overflow-hidden bg-brand-bg-secondary border-glow shadow-2xl mb-24 group cursor-none interactive"
        >
          {/* Subtle Video Glow */}
          <div className="absolute inset-0 bg-brand-glow/5 group-hover:bg-brand-glow/10 transition-colors duration-700" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 rounded-full bg-brand-glow/20 flex items-center justify-center backdrop-blur-sm border border-brand-glow/30"
            >
              <Play className="w-8 h-8 text-brand-glow fill-brand-glow ml-1" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <blockquote className="text-3xl md:text-5xl font-medium text-brand-text-secondary leading-snug mb-16">
            "If we can't keep your attention...<br/>
            <span className="text-brand-text">We shouldn't be editing your content.</span>"
          </blockquote>
          
          <div className="flex items-center justify-center space-x-2 text-brand-glow text-sm tracking-[0.2em] uppercase cursor-pointer interactive">
            <span className="animate-pulse">↓</span>
            <span>Continue</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
