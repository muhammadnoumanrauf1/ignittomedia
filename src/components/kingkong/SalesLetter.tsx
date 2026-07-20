"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SalesLetter() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    setCurrentDate(new Date().toLocaleDateString("en-US", options));
  }, []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const checklistItems = [
    {
      title: "Engineered Hook Frameworks",
      desc: "We analyze the first 3 seconds to maximize scroll-stop rates. No more high bounce rates.",
    },
    {
      title: "Retention-Led Flow & Cuts",
      desc: "Every edit, zoom, and sound effect is placed based on viewer retention metrics, keeping eyes glued.",
    },
    {
      title: "Authority Positioning Strategy",
      desc: "We extract the genius from your raw transcripts, scripting clips that make you look like a market leader.",
    },
    {
      title: "Omnichannel Distribution Engine",
      desc: "One source file engineered into TikToks, Shorts, Reels, and YouTube deep-dives with unique format modifications.",
    },
  ];

  return (
    <section className="bg-brand-bg text-white py-24 px-6 relative overflow-hidden">
      {/* Decorative radial gradients for premium look */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-brand-glow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Dynamic Current Date */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-neutral-800/80 pb-4 mb-12 text-sm text-brand-text-muted font-mono"
        >
          <span>LOCATION: GLOBAL HEADQUARTERS</span>
          <span>UPDATED: {currentDate || "TODAY"}</span>
        </motion.div>

        {/* Warning Alert Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeUpVariants}
          className="border border-red-500/30 bg-red-950/20 text-red-400 p-4 rounded-xl mb-12 text-center text-sm md:text-base font-semibold"
        >
          ⚠️ WARNING: Read this before spending another dollar on typical video editors or outsourcing agencies.
        </motion.div>

        {/* Sales Letter Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeUpVariants}
          className="space-y-6"
        >
          <h2 className="text-xl md:text-2xl font-bold font-mono text-brand-accent tracking-widest uppercase">
            Dear Business Builder,
          </h2>
          <p className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-white">
            We get it. Growing a business is hard. <br className="hidden md:inline" />
            <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
              Really f*cking hard.
            </span>
          </p>
        </motion.div>

        {/* Sales Copy Body */}
        <div className="mt-8 space-y-6 text-brand-text-secondary text-base md:text-lg leading-relaxed font-light">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            You’re probably stressed out, working 80 hours a week, chasing clients, dealing with editors who don't understand your business, and constantly worrying about where your next customer is going to come from.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            Or maybe you're stuck on the hamster wheel of organic content, pumping out hours of video only to get double-digit views and crickets in your DM box.
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-white font-semibold text-lg md:text-xl border-l-4 border-brand-accent pl-6 my-10 italic"
          >
            "Why is the teenager dancing on TikTok getting millions of views, while my deep industry expertise gets completely ignored by the algorithm?"
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            It’s because of one simple fact: <strong className="text-white">You aren't editing for attention.</strong>
          </motion.p>
        </div>

        {/* The Old Way vs The Attention Way Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Old Way Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="p-8 rounded-2xl bg-neutral-900/20 border border-neutral-800/80 hover:border-red-500/20 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-full bg-red-950/50 flex items-center justify-center text-red-500 font-bold">
                ✕
              </span>
              <h3 className="text-lg font-black uppercase tracking-wider text-red-500">
                The Typical Agency Way
              </h3>
            </div>
            <ul className="space-y-4 text-sm text-brand-text-muted">
              <li>• Charge $3k/mo retainer upfront with 6-month contract lock-in.</li>
              <li>• Deliver generic auto-caption templates used by thousands of others.</li>
              <li>• No hook testing or strategy planning (you script everything yourself).</li>
              <li>• Slow turnaround times and editors who don't understand business.</li>
            </ul>
          </motion.div>

          {/* New Way Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="p-8 rounded-2xl bg-brand-accent/5 border border-brand-accent/20 shadow-[0_0_30px_rgba(0,223,162,0.05)] hover:border-brand-accent/40 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent font-bold">
                ✓
              </span>
              <h3 className="text-lg font-black uppercase tracking-wider text-brand-accent">
                Attention Engineering System
              </h3>
            </div>
            <ul className="space-y-4 text-sm text-white">
              <li>• Custom hook copywriting that hooks target buyers instantly.</li>
              <li>• Metric-backed rhythm editing designed to keep retention above 65%.</li>
              <li>• Clear call-to-actions that transform views into actual inbound leads.</li>
              <li>• Rapid 24-48h sprint cycles and dedicated content strategist.</li>
            </ul>
          </motion.div>
        </div>

        {/* Benefits Accordion/Checklist */}
        <div className="mt-24 space-y-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center"
          >
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight">
              Our Core <span className="text-brand-accent">Attention Systems</span>
            </h3>
            <p className="text-brand-text-muted text-sm mt-2">
              Engineered mechanics designed for compound organic reach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {checklistItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariants}
                className="p-6 border border-neutral-900 bg-neutral-950/40 rounded-xl flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-accent/10 text-brand-accent flex items-center justify-center flex-shrink-0 font-bold mt-1">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="font-bold text-white text-base md:text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-brand-text-secondary text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final Letter CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="mt-28 border border-neutral-800 bg-neutral-900/20 p-8 md:p-12 rounded-3xl text-center space-y-6"
        >
          <h3 className="text-2xl md:text-4xl font-black tracking-tight uppercase">
            Let Us Engineer Your Attention
          </h3>
          <p className="text-brand-text-secondary max-w-xl mx-auto text-sm md:text-base font-light">
            Skip the guesswork. Get a custom, 10-point retention audit of your current channels, outlining exactly how to scale your brand and increase trust.
          </p>
          <div>
            <button
              onClick={() => {
                const el = document.getElementById("hero-zoom-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-brand-accent text-black font-black uppercase text-sm tracking-widest rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-[0_0_30px_rgba(0,223,162,0.2)]"
            >
              Claim Your Free Audit
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
