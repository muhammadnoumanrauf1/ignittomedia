"use client";

import { motion } from "framer-motion";
import { Play, Scissors, MessageSquareCheck, Rocket, Sparkles } from "lucide-react";
import { useState } from "react";
import { GlowCard } from "@/components/ui/spotlight-card";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const steps = [
  {
    id: "01",
    title: "Upload & Ideation",
    icon: Play,
    phase: "PHASE 1",
    desc: "You drop your raw footage into our portal. We review the material and strategize the optimal narrative hook and pacing.",
    color: "#00DFA2", // brand-glow
    position: "left-[5%] bottom-[20%]"
  },
  {
    id: "02",
    title: "Editorial Engineering",
    icon: Scissors,
    phase: "PHASE 2",
    desc: "We don't just edit; we engineer attention. We cut the fluff, add dynamic b-roll, motion graphics, and perfect the pacing.",
    color: "#01C3FF", // cyan accent
    position: "left-[25%] top-[15%]"
  },
  {
    id: "03",
    title: "Review & Refine",
    icon: MessageSquareCheck,
    phase: "PHASE 3",
    desc: "You receive the first cut in our seamless review platform. Add frame-accurate comments, and we implement revisions fast.",
    color: "#FFFFFF",
    position: "right-[20%] bottom-[25%]"
  },
  {
    id: "04",
    title: "Publish & Scale",
    icon: Rocket,
    phase: "PHASE 4",
    desc: "Get the final exported files optimized for every platform. Post your content and watch your audience engagement soar.",
    color: "#FFFFFF",
    position: "right-[5%] top-[10%]"
  }
];

export default function ProcessMap() {
  const [activeStep, setActiveStep] = useState<string | null>("02");

  return (
    <section id="process" className="bg-brand-bg-secondary min-h-screen md:min-h-[120vh] relative overflow-hidden flex flex-col items-center py-20 md:py-32 px-4 md:px-6">
      <ProgressiveBlur position="top" backgroundColor="#006b75" height="120px" />
      <ProgressiveBlur position="bottom" backgroundColor="#006b75" height="120px" />

      {/* Top Header */}
      <div className="flex flex-col items-center text-center z-10 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(0,223,162,0.15)]">
          <Sparkles size={14} className="text-brand-accent animate-pulse" />
          <span className="text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">
            How It Works
          </span>
        </div>
        <h2 className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-wide leading-[1.1] max-w-4xl mx-auto">
          From raw footage to content that scales in four steps.
        </h2>
        <p className="mt-6 text-white text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          How does IgnittoMedia&apos;s video editing process work? You upload your raw footage, we engineer the narrative, refine with your feedback, and deliver platform-ready exports — all within 48 hours average turnaround.
        </p>
      </div>

      {/* Interactive Map Area (Desktop) */}
      <div className="hidden md:flex relative w-full max-w-5xl mt-24 h-[600px] items-center justify-center">

        {/* Placeholder for Map / Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-[600px] h-[400px] bg-gradient-to-br from-brand-glow/5 to-transparent border border-white/5 rounded-3xl flex items-center justify-center overflow-hidden"
        >
          {/* We use a cinematic editing bay or abstract graphic here */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg-secondary via-transparent to-transparent" />
        </motion.div>

        {/* Floating Steps */}
        {steps.map((step) => {
          const isActive = activeStep === step.id;
          const Icon = step.icon;

          return (
            <div
              key={step.id}
              className={`absolute ${step.position} z-20 flex flex-col items-start`}
              onMouseEnter={() => setActiveStep(step.id)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Pill */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`flex items-center space-x-3 px-5 py-3 rounded-full cursor-pointer transition-all duration-300 backdrop-blur-md ${isActive ? 'bg-white/10 border-white/20' : 'bg-brand-bg/80 border-white/5 hover:border-white/20'
                  } border`}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-current/20"
                  style={{ color: step.color, backgroundColor: `${step.color}10` }}
                >
                  <Icon size={14} />
                </div>
                <span className="font-semibold text-white text-sm whitespace-nowrap">
                  {step.id}. {step.title}
                </span>
              </motion.div>

              {/* Expanded Card */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 10,
                  scale: isActive ? 1 : 0.95,
                  pointerEvents: isActive ? "auto" : "none"
                }}
                transition={{ duration: 0.3 }}
                className="absolute top-full mt-4 left-0 w-80 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl"
              >
                <GlowCard
                  customSize={true}
                  glowColor="theme"
                  className="w-full h-full p-6 rounded-3xl"
                  style={{
                    background: "linear-gradient(145deg, rgba(30,30,30,0.4) 0%, rgba(10,10,10,0.8) 100%)",
                  }}
                >
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-2" style={{ color: step.color }}>
                    {step.phase}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white">
                    {step.desc}
                  </p>
                </GlowCard>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden flex flex-col w-full mt-16 space-y-6 relative">
        {/* Vertical line connecting steps */}
        <div className="absolute left-[27px] top-4 bottom-4 w-px bg-white/10" />

        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="relative pl-16 pr-2 py-2"
            >
              {/* Icon / Node */}
              <div
                className="absolute left-2 top-4 w-10 h-10 rounded-full flex items-center justify-center border border-current/20 z-10 bg-brand-bg"
                style={{ color: step.color }}
              >
                <Icon size={18} />
              </div>

              {/* Card */}
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 shadow-lg relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 w-1 h-full"
                  style={{ backgroundColor: step.color }}
                />
                <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-1" style={{ color: step.color }}>
                  {step.id}. {step.phase}
                </p>
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-white">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
