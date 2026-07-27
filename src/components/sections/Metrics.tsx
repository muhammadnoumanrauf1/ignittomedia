"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Video, Eye, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const metrics = [
  {
    value: 100,
    suffix: "+",
    label: "Projects Delivered",
    detail: "High-retention social reels & long-form YouTube essays.",
    tag: "100% On-Time",
    icon: Video,
    ssrValue: "100+"
  },
  {
    value: 20,
    suffix: "M+",
    label: "Views Generated",
    detail: "Organic algorithmic impressions across TikTok, Reels, & Shorts.",
    tag: "Organic Growth",
    icon: Eye,
    ssrValue: "20M+"
  },
  {
    value: 96,
    suffix: "%",
    label: "Client Retention",
    detail: "Founders & brands retaining us long-term as core partners.",
    tag: "Top Tier Trust",
    icon: ShieldCheck,
    ssrValue: "96%"
  },
  {
    value: 48,
    suffix: "H",
    label: "Average Turnaround",
    detail: "Rapid iteration pipeline without sacrificing visual quality.",
    tag: "Speed Guarantee",
    icon: Zap,
    ssrValue: "48H"
  },
];

function CountUp({ to, suffix, ssrValue }: { to: number; suffix: string; ssrValue: string }) {
  const count = useMotionValue(to); // Start at real value for SSR — avoids 0+ showing before JS
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      count.set(0);
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [count, to, isInView]);

  return (
    <motion.span ref={ref} aria-label={ssrValue}>
      {rounded}
    </motion.span>
  );
}

export default function Metrics() {
  return (
    <section className="relative bg-brand-bg-secondary py-28 md:py-36 px-4 md:px-8 border-y border-white/5 overflow-hidden" aria-label="Key metrics">
      <ProgressiveBlur position="top" backgroundColor="#006b75" height="120px" />
      <ProgressiveBlur position="bottom" backgroundColor="#006b75" height="120px" />

      {/* Ambient background glow elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-glow/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-brand-accent uppercase">
              Proven Track Record
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-white leading-tight"
          >
            Engineering Attention at Scale
          </motion.h2>
        </div>

        {/* Bento Metrics Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group relative rounded-3xl bg-brand-bg/60 border border-white/10 border-t-2 border-t-brand-glow/40 p-8 backdrop-blur-2xl hover:border-brand-glow/50 hover:bg-brand-bg/90 hover:-translate-y-1.5 transition-all duration-500 shadow-xl overflow-hidden flex flex-col justify-between"
              >
                {/* Hover Radial Spotlight Background */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-glow/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top Card Bar: Icon + Tag */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-brand-glow/10 border border-brand-glow/30 flex items-center justify-center text-brand-glow group-hover:scale-110 group-hover:bg-brand-glow/20 transition-all duration-300 shadow-[0_0_20px_rgba(0,179,221,0.25)]">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent px-2.5 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20">
                      {metric.tag}
                    </span>
                  </div>

                  {/* Big Counter Number */}
                  <h3 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2  group-hover:text-brand-glow transition-colors duration-300">
                    <CountUp to={metric.value} suffix={metric.suffix} ssrValue={metric.ssrValue} />
                  </h3>

                  {/* Label */}
                  <h4 className="text-lg font-bold text-white tracking-wide mb-2">
                    {metric.label}
                  </h4>

                  {/* Description Detail */}
                  <p className="text-xs text-white font-light leading-relaxed">
                    {metric.detail}
                  </p>
                </div>

                {/* Bottom Interactive Accent Bar */}
                {/* <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-brand-glow to-brand-accent transition-all duration-500 mt-6 rounded-full" /> */}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
