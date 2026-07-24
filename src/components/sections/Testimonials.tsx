"use client";

import TestimonialCards from "@/components/ui/TestimonialCards";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative min-h-screen bg-brand-bg-secondary flex flex-col items-center justify-center py-24 md:py-36 px-4 md:px-8 overflow-hidden">
      <ProgressiveBlur position="top" backgroundColor="#006b75" height="120px" />
      <ProgressiveBlur position="bottom" backgroundColor="#006b75" height="120px" />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-glow/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full z-10 relative flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(0,223,162,0.15)]"
        >
          <Sparkles size={14} className="text-brand-accent animate-pulse" />
          <span className="text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">
            Social Proof & Wall of Love
          </span>
        </motion.div>
        <div className="text-center mb-8 md:mb-12">

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wider text-center text-white mb-4">
            Don't Take Our Word For It
          </h2>
          <p className="text-white text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Real feedback from founders, creators, and brands scaling attention with Ignitto.
          </p>
        </div>

        {/* Movable Testimonial Slider */}
        <div className="w-full flex items-center justify-center">
          <TestimonialCards />
        </div>
      </div>

    </section>
  );
}
