"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/spotlight-card";

const steps = [
  {
    number: "01",
    title: "Upload & Ideation",
    body: "You drop your raw footage into our dedicated portal. We review the material and strategize the optimal narrative hook and pacing.",
    tags: ["Raw Footage", "Content Strategy"]
  },
  {
    number: "02",
    title: "Editorial Engineering",
    body: "We don't just edit; we engineer attention. We cut the fluff, add dynamic b-roll, motion graphics, and perfect the pacing.",
    tags: ["Video Editing", "Motion Graphics"]
  },
  {
    number: "03",
    title: "Review & Refine",
    body: "You receive the first cut in our seamless review platform. Add frame-accurate comments, and we implement revisions lightning-fast.",
    tags: ["Frame.io", "Rapid Revisions"]
  },
  {
    number: "04",
    title: "Publish & Scale",
    body: "Get the final exported files optimized for every platform. Post your content and watch your audience engagement soar.",
    tags: ["Multi-Platform", "Audience Growth"]
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Process() {
  return (
    <section id="process" className="relative bg-brand-bg py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp} 
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4 text-brand-glow">
            Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">
            How It Works
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-brand-text-muted">
            A structured 4-step framework engineered to scale your content pipeline effortlessly.
          </p>
        </motion.div>

        {/* Grid of Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="h-full"
            >
              <GlowCard customSize={true} glowColor="theme" className="h-full flex flex-col justify-between p-8 border-white/5">
                <div>
                  <div
                    className="font-bold mb-4 leading-none text-4xl text-brand-glow tracking-tighter"
                  >
                    {step.number}
                  </div>

                  <h3 className="font-semibold text-lg mb-3 text-white">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-relaxed mb-6 text-brand-text-muted">
                    {step.body}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md text-[10px] font-medium border bg-white/[0.02] border-white/5 text-brand-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
