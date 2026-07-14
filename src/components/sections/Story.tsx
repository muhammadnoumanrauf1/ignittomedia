"use client";

import { motion } from "framer-motion";
import SplitText from "../ui/SplitText";

export default function Story() {
  const pillars = [
    { title: "Attention", desc: "Capturing the eye before the swipe." },
    { title: "Rhythm", desc: "Pacing that dictates the heartbeat." },
    { title: "Emotion", desc: "Connecting the viewer to the message." },
    { title: "Story", desc: "The invisible thread that holds it all." }
  ];

  return (
    <section className="relative min-h-[120vh] bg-brand-bg py-32 px-6 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-glow/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* Left Column: Sticky Editorial Heading */}
        <div className="md:w-1/2 md:sticky top-32 h-fit">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex items-center space-x-3 mb-8"
          >
            <span className="h-px w-12 bg-brand-glow block" />
            <span className="text-brand-glow text-sm font-semibold tracking-widest uppercase">Our Philosophy</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            <span className="text-white block mb-2">We Became</span>
            <span className="text-brand-text-secondary block mb-2">Editors Because</span>
            <span className="text-brand-text-muted block mb-4">We Were</span>
            <span className="text-brand-glow inline-block" style={{ textShadow: "0 0 30px rgba(1, 195, 255, 0.4)" }}>
              Students of Attention.
            </span>
          </h2>
        </div>

        {/* Right Column: Flowing Content */}
        <div className="md:w-1/2 space-y-16 pt-8 md:pt-32">
          
          {/* Intro Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl text-brand-text-secondary font-light leading-relaxed border-l-2 border-white/10 pl-6 md:pl-10"
          >
            <p className="mb-6">
              People don't remember videos because they have amazing transitions. They remember videos because they're <span className="text-white font-medium">impossible to stop watching</span>.
            </p>
            <p className="text-brand-text-muted">That's what we study.</p>
          </motion.div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => (
              <motion.div 
                key={pillar.title}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-brand-glow/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-glow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{pillar.title}.</h3>
                <p className="text-brand-text-muted text-sm relative z-10">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Width Closing Manifesto */}
      <div className="max-w-7xl mx-auto w-full relative z-10 mt-24 md:mt-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative p-10 md:p-16 rounded-3xl bg-brand-bg-secondary border border-brand-glow/20 overflow-hidden text-center flex flex-col items-center justify-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-glow/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-glow/10 blur-3xl rounded-full" />
          
          <div className="space-y-4 text-xl md:text-3xl relative z-10 font-medium max-w-4xl mx-auto">
            <p className="text-brand-text-secondary">Every frame has a purpose.</p>
            <p className="text-brand-text-secondary">Every cut has intent.</p>
            <p className="text-white text-3xl md:text-5xl font-bold mt-8 pt-8 border-t border-white/10">
              Every second <span className="text-brand-glow">earns the next.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
