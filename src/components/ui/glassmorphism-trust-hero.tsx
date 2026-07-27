"use client";

import React from "react";
import {
  ArrowRight,
  Play,
  Target,
  Crown,
  Star,
  Sparkles,
  Hexagon,
  Triangle,
  Command,
  Ghost,
  Gem,
  Cpu,
  TrendingUp,
  Video,
  ShieldCheck,
  Zap
} from "lucide-react";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

// --- CLIENT CREATORS & BRANDS ---
const CLIENTS = [
  { name: "SaaS Founders", icon: Hexagon },
  { name: "YouTube Creators", icon: Triangle },
  { name: "Personal Brands", icon: Command },
  { name: "Digital Agencies", icon: Ghost },
  { name: "E-Commerce", icon: Gem },
  { name: "Media Networks", icon: Cpu },
];

// --- SUB-COMPONENTS ---
const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-xl font-bold text-white sm:text-2xl">{value}</span>
    <span className="text-xs uppercase tracking-wider text-white/80 font-semibold">{label}</span>
  </div>
);

// --- MAIN COMPONENT ---
export default function HeroSection() {
  return (
    <div className="relative w-full bg-brand-bg text-white overflow-hidden font-sans py-12 md:py-20">
      <ProgressiveBlur position="top" backgroundColor="#031e41" height="100px" />
      <ProgressiveBlur position="bottom" backgroundColor="#031e41" height="100px" />

      {/* SCOPED ANIMATIONS */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-fade-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Background Image with Ambient Glow Mask */}
      <div
        className="absolute inset-0 z-0 bg-[url(https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2000&auto=format&fit=crop)] bg-cover bg-center opacity-10 pointer-events-none"
        style={{
          maskImage: "linear-gradient(180deg, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage: "linear-gradient(180deg, transparent, black 20%, black 80%, transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 md:pt-24 md:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">

          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">

            {/* Badge */}
            <div className="animate-fade-in delay-100">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-1.5 backdrop-blur-md shadow-[0_0_15px_rgba(0,223,162,0.15)]">
                <Sparkles size={14} className="text-brand-accent animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
                  Post-Production Attention Engineers
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="animate-fade-in delay-200 text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
              We Don't Edit Videos.<br />
              <span className="bg-gradient-to-r from-[#00b3dd] via-[#00DFA2] to-[#00b3dd] bg-clip-text text-transparent font-black">
                We Engineer Attention.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="animate-fade-in delay-300 max-w-xl text-base sm:text-lg text-white leading-relaxed font-light">
              IgnittoMedia helps founders, creators, and brands transform raw recordings into high-retention content that builds authority, earns trust, and drives measurable growth.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in delay-400 flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(new CustomEvent("open-booking-calendar"));
                  }
                  setTimeout(() => {
                    const el = document.getElementById("booking-calendar-wrapper") || document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }, 50);
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#00b3dd] px-8 py-4 text-sm font-bold text-black transition-all hover:bg-[#00DFA2] hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_25px_rgba(0,179,221,0.35)]"
              >
                Book a Strategy Call
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => {
                  window.scrollTo({
                    top: window.innerHeight * 0.9,
                    behavior: "smooth"
                  });
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-brand-glow/40"
              >
                <Play className="w-4 h-4 fill-current text-brand-glow" />
                Explore Our Work
              </button>
            </div>
          </div>

          {/* --- RIGHT COLUMN: BENTO GLASS CARD --- */}
          <div className="lg:col-span-5 space-y-6">

            {/* Stats Card */}
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-brand-glow/30 bg-[#031e41]/80 p-8 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,179,221,0.15)]">
              {/* Radial Glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-brand-glow/15 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-glow/20 border border-brand-glow/40 text-brand-accent shadow-[0_0_20px_rgba(0,179,221,0.25)]">
                    <Video className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold tracking-tight text-white">100+</div>
                    <div className="text-sm font-medium text-white/90">Projects Delivered</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-white font-medium">Client Retention</span>
                    <span className="text-brand-accent font-bold">96%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-[#00b3dd] to-[#00DFA2]" />
                  </div>
                </div>

                <div className="h-px w-full bg-white/10 mb-6" />

                {/* Mini Stats Grid */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <StatItem value="20M+" label="Views" />
                  <div className="w-px h-full bg-white/10 mx-auto" />
                  <StatItem value="48H" label="Turnaround" />
                  <div className="w-px h-full bg-white/10 mx-auto" />
                  <StatItem value="100%" label="On-Time" />
                </div>

                {/* Tag Pills */}
                <div className="mt-8 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-1 text-[10px] font-bold tracking-wide text-brand-accent">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00DFA2] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00DFA2]"></span>
                    </span>
                    PIPELINE ACTIVE
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-glow/30 bg-brand-glow/10 px-3 py-1 text-[10px] font-bold tracking-wide text-brand-glow">
                    <Crown className="w-3 h-3 text-amber-400" />
                    PREMIUM QUALITY
                  </div>
                </div>
              </div>
            </div>

            {/* Marquee Card */}
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/10 bg-[#031e41]/60 py-6 backdrop-blur-xl">
              <h3 className="mb-4 px-8 text-xs font-bold uppercase tracking-wider text-brand-accent">Trusted by High-Performing Partners</h3>

              <div
                className="relative flex overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
                }}
              >
                <div className="animate-marquee flex gap-10 whitespace-nowrap px-4">
                  {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-white/90 hover:text-brand-glow transition-all cursor-default"
                    >
                      <client.icon className="h-5 w-5 text-brand-glow" />
                      <span className="text-sm font-bold tracking-wide">
                        {client.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
