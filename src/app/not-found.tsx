import Link from "next/link";
import { Sparkles, ArrowLeft, Play, PhoneCall, Layers, Video } from "lucide-react";
import Metadata from "next";

export const metadata = {
  title: "404 | Page Off-Script | IgnittoMedia",
  description: "The page you are looking for was cut in post-production. Explore IgnittoMedia's video production and attention engineering services.",
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[#040D1A] text-white flex flex-col items-center justify-center px-4 pt-36 sm:pt-40 md:pt-44 pb-20 overflow-hidden select-none">
      {/* Ambient Radial Atmosphere Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00DFA2]/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#00b3dd]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center">
        {/* Glowing Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00DFA2]/40 text-xs font-mono font-bold text-[#00DFA2] tracking-wider uppercase mb-6 ">
          {/* <Sparkles size={14} className="animate-pulse" /> */}
          <span>404 • Page Off-Script</span>
        </div>

        {/* Big 404 Headline */}
        <h1 className="text-9xl sm:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-[#00DFA2]/50 mb-4">
          404
        </h1>

        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
          This Page Was Cut in Post-Production
        </h2>

        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-8 font-light">
          The link you followed doesn't exist, but attention engineering never stops. Let's get you back to the main stage where high-retention video content is engineered.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#00DFA2] text-[#040D1A] font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(0,223,162,0.4)] hover:scale-105 active:scale-95 transition-all"
          >
            <ArrowLeft size={18} />
            <span>Return to Main Stage</span>
          </Link>
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm sm:text-base backdrop-blur-md hover:bg-white/20 hover:border-[#00DFA2]/50 hover:text-[#00DFA2] active:scale-95 transition-all"
          >
            <Play size={18} />
            <span>Explore 3D Portfolio</span>
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#00b3dd]/15 border border-[#00b3dd]/40 text-[#00b3dd] font-bold text-sm sm:text-base backdrop-blur-md hover:bg-[#00b3dd] hover:text-black active:scale-95 transition-all shadow-[0_0_20px_rgba(0,179,221,0.25)]"
          >
            <PhoneCall size={18} />
            <span>Book a Discovery Call</span>
          </Link>
        </div>

        {/* Agency Quick Feature Highlights */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10 text-left">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#00DFA2]/40 transition-colors">
            <Video className="text-[#00DFA2] mb-2" size={24} />
            <h3 className="font-medium tracking-[0.09em] text-white text-sm mb-1">Short Form Retention</h3>
            <p className="text-xs text-slate-400">Reels, Shorts & TikTok edits with cold open hooks.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#00DFA2]/40 transition-colors">
            <Layers className="text-[#00b3dd] mb-2" size={24} />
            <h3 className="font-medium tracking-[0.09em] text-white text-sm mb-1">Long Form Mastery</h3>
            <p className="text-xs text-slate-400">Documentaries and YouTube essays engineered for 20M+ views.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#00DFA2]/40 transition-colors">
            <Sparkles className="text-[#00DFA2] mb-2" size={24} />
            <h3 className="font-medium tracking-[0.09em] text-white text-sm mb-1">Motion Graphics</h3>
            <p className="text-xs text-slate-400">Custom kinetic typography, UI mockups, and visual assets.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
