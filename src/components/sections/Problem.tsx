"use client";

import { motion } from "framer-motion";
import { 
  XCircle, 
  CheckCircle2, 
  TrendingDown, 
  TrendingUp, 
  Clock, 
  AlertTriangle, 
  Zap, 
  Sparkles,
  Flame,
  ArrowRight
} from "lucide-react";
import SplitText from "../ui/SplitText";
import ScrollReveal from "../ui/ScrollReveal";

export default function Problem() {
  const badPipeline = [
    { title: "Raw Footage Idle", desc: "Hours of recorded content sitting unused on hard drives while market momentum fades.", icon: Clock },
    { title: "Production Friction", desc: "Slow turnarounds, misaligned cuts, and frustrating, endless revision cycles.", icon: AlertTriangle },
    { title: "The 3-Second Retention Cliff", desc: "80%+ of viewers swipe away before ever reaching your main offer or message.", icon: TrendingDown },
    { title: "Subpar Brand Authority", desc: "Amateur cuts, flat audio, and generic templates lower trust and perceived value.", icon: XCircle },
  ];

  const goodPipeline = [
    { title: "Zero-Friction Ingestion", desc: "Instant handoff directly to dedicated post-production attention engineers.", icon: Zap },
    { title: "Psychological Pacing", desc: "Scientific hook design, kinetic typography, and immersive soundscapes.", icon: Flame },
    { title: "High Completion Rates", desc: "Sustaining viewer attention for 70%+ of total video duration.", icon: TrendingUp },
    { title: "Compounding Growth", desc: "Consistent organic reach, brand authority, and automated audience conversion.", icon: CheckCircle2 },
  ];

  const painCards = [
    {
      badge: "The Retention Cliff",
      title: "The 3-Second Drop",
      desc: "Without an engineered opening hook and dynamic visual pacing, 80% of potential buyers swipe away before ever hearing your message.",
      stat: "80% Drop-Off Rate"
    },
    {
      badge: "Time Drain",
      title: "The Founder Bottleneck",
      desc: "Founders waste 15+ hours every week struggling in timeline editors instead of focusing on sales, leadership, and product scale.",
      stat: "15+ Hours Wasted/Wk"
    },
    {
      badge: "Perceived Value",
      title: "Brand Authority Dilution",
      desc: "Amateur cuts, sloppy audio, and uninspired templates project low quality—costing trust and suppressing premium pricing power.",
      stat: "Subpar Trust Signal"
    }
  ];

  return (
    <section className="relative min-h-screen bg-brand-bg-secondary flex flex-col items-center justify-center py-24 md:py-36 px-4 md:px-8 overflow-hidden">
      
      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-glow/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full z-10">

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">
              The Content Bottleneck
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            <SplitText text="Great Ideas" type="words" delay={0.1} className="justify-center font-extrabold tracking-wide text-white" />
            <SplitText text="Die in Bad Editing." type="words" delay={0.3} className="justify-center font-light tracking-widest text-brand-text-muted mt-2" />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-brand-text-secondary max-w-2xl mx-auto font-light leading-relaxed px-4"
          >
            The gap between raw recording and compounding attention is engineered in post-production.
          </motion.p>
        </div>

        {/* Comparison Engine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 relative">
          
          {/* LEFT: Legacy Workflow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl border border-red-500/20 bg-brand-bg/70 p-6 md:p-10 backdrop-blur-xl overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-red-500/40 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-red-400 text-xs font-bold uppercase tracking-[0.18em]">
                      Legacy Post-Production
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-wide text-white">The Broken Pipeline</h3>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold flex items-center gap-1.5">
                  <TrendingDown size={14} />
                  <span className="tracking-wide">&lt; 18% Retention</span>
                </div>
              </div>

              {/* Steps List */}
              <div className="space-y-4">
                {badPipeline.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div 
                      key={step.title} 
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-all duration-300 flex items-start gap-4 group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-400 group-hover/item:scale-110 transition-transform">
                        <Icon size={16} />
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-base tracking-wide mb-0.5">{step.title}</h4>
                        <p className="text-brand-text-muted text-xs leading-relaxed font-light">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-red-400/80 font-medium tracking-wide">
              Result: Low views, wasted ad spend, zero authority.
            </div>
          </motion.div>

          {/* RIGHT: Engineered Attention */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl border border-brand-glow/30 bg-brand-bg/80 p-6 md:p-10 backdrop-blur-xl overflow-hidden shadow-[0_0_50px_rgba(0,179,221,0.15)] flex flex-col justify-between group hover:border-brand-glow/60 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-glow/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10 relative z-10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
                    <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.18em]">
                      Ignitto Attention System
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-wider text-white">The Ignitto Engine</h3>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent text-xs font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,223,162,0.2)]">
                  <TrendingUp size={14} />
                  <span>72%+ Retention</span>
                </div>
              </div>

              {/* Steps List */}
              <div className="space-y-4 relative z-10">
                {goodPipeline.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div 
                      key={step.title} 
                      className="p-4 rounded-xl bg-brand-glow/5 border border-brand-glow/20 hover:border-brand-glow/50 transition-all duration-300 flex items-start gap-4 group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-brand-glow/20 border border-brand-glow/40 flex items-center justify-center shrink-0 text-brand-accent shadow-[0_0_15px_rgba(1,195,255,0.2)] group-hover/item:scale-110 transition-transform">
                        <Icon size={16} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-base mb-0.5">
                          {step.title}
                        </h4>
                        <p className="text-brand-text-secondary text-xs leading-relaxed font-light">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-brand-accent font-semibold tracking-wide flex items-center justify-center gap-2 relative z-10">
              <span>Result: Algorithmic distribution, high retention, compound ROI.</span>
              <ArrowRight size={14} />
            </div>
          </motion.div>

        </div>

        {/* 3 Executive Pain-Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {painCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 rounded-2xl bg-brand-bg/50 border border-white/10 border-t-2 border-t-brand-glow/40 backdrop-blur-xl hover:border-brand-glow/50 hover:bg-brand-bg/70 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-glow block mb-3">
                  {card.badge}
                </span>
                <h4 className="text-xl font-bold text-white mb-3">{card.title}</h4>
                <p className="text-brand-text-secondary text-sm leading-relaxed mb-6 font-light">
                  {card.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-brand-text-muted font-medium">Impact</span>
                <span className="font-bold text-brand-glow">{card.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Manifesto Transition Banner */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 md:p-16 rounded-3xl bg-brand-bg/90 border border-brand-glow/30 backdrop-blur-xl glow-shadow relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-glow/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />

            <style dangerouslySetInnerHTML={{__html: `
              .highlight-earned .word:nth-of-type(4),
              .highlight-earned .word:nth-of-type(5) {
                color: #00DFA2;
                text-shadow: 0 0 20px rgba(0, 223, 162, 0.5);
              }
              .highlight-earned .scroll-reveal-text {
                font-size: inherit;
                line-height: inherit;
                font-weight: inherit;
                margin: 0;
              }
            `}} />
            <div className="highlight-earned text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white relative z-10 leading-tight">
              <ScrollReveal 
                baseOpacity={0.2} 
                enableBlur={true} 
                baseRotation={0} 
                blurStrength={4}
                scrollContainerRef={null as any}
              >
                {"Attention isn't captured.\nIt's earned."}
              </ScrollReveal>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
