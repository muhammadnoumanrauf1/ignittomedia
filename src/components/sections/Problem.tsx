"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SplitText from "../ui/SplitText";
import ScrollReveal from "../ui/ScrollReveal";

export default function Problem() {
  const badTimeline = ["Idea", "Camera", "Editing Bottleneck", "Never Published"];
  const goodTimeline = ["Idea", "IgnittoMedia", "Story", "Audience", "Growth"];

  const TimelineItem = ({ text, isLast, isGood, delay }: { text: string, isLast: boolean, isGood: boolean, delay: number }) => (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center"
    >
      <div className={`px-6 py-3 rounded-full border ${isGood ? (text === 'IgnittoMedia' ? 'bg-brand-glow/20 border-brand-glow text-white' : 'border-brand-glow/30 text-brand-text') : (text === 'Editing Bottleneck' || text === 'Never Published' ? 'border-red-500/30 text-red-400' : 'border-white/10 text-brand-text-muted')}`}>
        {text}
      </div>
      {!isLast && (
        <div className="my-3">
          <ArrowDown className={`w-5 h-5 ${isGood ? 'text-brand-glow' : 'text-white/20'}`} />
        </div>
      )}
    </motion.div>
  );

  return (
    <section className="relative min-h-screen bg-brand-bg-secondary flex flex-col items-center justify-center py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto w-full text-center mb-16 md:mb-24">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
          <SplitText text="Great Ideas" type="words" delay={0.1} className="justify-center" />
          <SplitText text="Die in Bad Editing." type="words" delay={0.3} className="justify-center text-brand-text-muted mt-2" />
        </h2>
      </div>

      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20 md:mb-32 relative">
        {/* VS Divider */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-bg border border-white/10 items-center justify-center text-sm font-bold text-white/30 z-10">
          VS
        </div>

        {/* Bad Timeline */}
        <div className="flex flex-col items-center bg-brand-bg/50 p-12 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-red-500/30 transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-500/5 pointer-events-none" />
          {badTimeline.map((item, i) => (
            <TimelineItem key={item} text={item} isLast={i === badTimeline.length - 1} isGood={false} delay={0.2 + (i * 0.15)} />
          ))}
        </div>

        {/* Good Timeline */}
        <div className="flex flex-col items-center bg-brand-glow/5 p-12 rounded-3xl border border-brand-glow/20 relative overflow-hidden glow-shadow group hover:border-brand-glow/50 transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-glow/10 pointer-events-none" />
          {goodTimeline.map((item, i) => (
            <TimelineItem key={item} text={item} isLast={i === goodTimeline.length - 1} isGood={true} delay={0.4 + (i * 0.15)} />
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center mt-12 mb-16 md:mb-32">
        <style dangerouslySetInnerHTML={{__html: `
          .highlight-earned .word:nth-of-type(4),
          .highlight-earned .word:nth-of-type(5) {
            color: #00DFA2;
            text-shadow: 0 0 20px rgba(0, 223, 162, 0.4);
          }
          .highlight-earned .scroll-reveal-text {
            font-size: inherit;
            line-height: inherit;
            font-weight: inherit;
            margin: 0;
          }
        `}} />
        <div className="highlight-earned text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-glow text-white">
          <ScrollReveal 
            baseOpacity={0} 
            enableBlur={true} 
            baseRotation={3} 
            blurStrength={2}
            scrollContainerRef={null as any}
          >
            {"Attention isn't captured.\nIt's earned."}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
