"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

export default function Testimonials() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="testimonials" className="relative min-h-screen bg-brand-bg-secondary flex flex-col items-center justify-center py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">Don't Take Our Word For It</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20">
          {[1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <GlowCard
                customSize={true}
                glowColor="theme"
                className="relative aspect-[9/16] md:aspect-[4/5] bg-brand-bg rounded-2xl overflow-hidden group cursor-none interactive border-glow !p-0"
              >
                <div 
                  className="absolute inset-0 cursor-pointer w-full h-full"
                  onClick={() => setIsPlaying(true)}
                >
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2459&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg-secondary via-brand-bg-secondary/40 to-transparent opacity-80" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-brand-glow/20 flex items-center justify-center backdrop-blur-sm border border-brand-glow/30 group-hover:bg-brand-glow/40 transition-colors">
                      <Play className="w-6 h-6 text-brand-glow fill-brand-glow ml-1" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 pointer-events-none">
                    <p className="font-bold text-lg">Creator {i}</p>
                    <p className="text-brand-text-muted text-sm uppercase tracking-wider">2M+ Subs</p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cinematic Blur Overlay when playing */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#01142A]/80"
          >
            <div className="absolute top-8 right-8 cursor-pointer text-white/50 hover:text-white transition-colors" onClick={() => setIsPlaying(false)}>
              <X className="w-10 h-10" />
            </div>
            <div className="w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl glow-shadow-lg border border-brand-glow/30">
              {/* Actual Video would go here */}
              <div className="w-full h-full flex items-center justify-center text-brand-text-muted">
                Video Player (Auto-playing)
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
