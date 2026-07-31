import Link from "next/link";
import { CheckCircle2, Calendar, ArrowLeft, Video, Sparkles, Clock, MessageSquare } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Confirmed | IgnittoMedia",
  description: "Your strategy call with IgnittoMedia is confirmed. We look forward to helping you transform your raw footage into high-retention video assets.",
};

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen bg-[#031e41] text-white flex flex-col items-center justify-center px-4 pt-36 sm:pt-40 md:pt-44 pb-20 overflow-hidden select-none">
      {/* Ambient Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00DFA2]/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00b3dd]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center">
        {/* Success Icon Emblem */}
        <div className="w-20 h-20 rounded-full bg-[#00DFA2]/10 border border-[#00DFA2]/40 flex items-center justify-center text-[#00DFA2] mb-6 shadow-[0_0_30px_rgba(0,223,162,0.3)] animate-pulse">
          <CheckCircle2 size={42} />
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00DFA2]/40 bg-[#00DFA2]/10 text-xs font-mono font-bold text-[#00DFA2] tracking-wider uppercase mb-4 shadow-[0_0_20px_rgba(0,223,162,0.2)]">
          <Sparkles size={14} />
          <span>Strategy Call Locked In</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
          You're All Set! <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b3dd] to-[#00DFA2]">Session Confirmed.</span>
        </h1>

        <p className="text-brand-text-secondary text-base sm:text-lg max-w-xl leading-relaxed mb-8 font-light">
          We've received your booking and sent a calendar invite directly to your inbox. Get ready to turn your content pipeline into an authority machine.
        </p>

        {/* What Happens Next Card Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <Calendar className="text-[#00DFA2] mb-3" size={24} />
            <h3 className="font-bold text-white text-sm mb-1">1. Calendar Invite</h3>
            <p className="text-xs text-brand-text-secondary leading-relaxed">Check your email for the Google Meet / Zoom link and calendar event.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <Clock className="text-[#00b3dd] mb-3" size={24} />
            <h3 className="font-bold text-white text-sm mb-1">2. Audit & Strategy</h3>
            <p className="text-xs text-brand-text-secondary leading-relaxed">Our team will review your channel and existing video content before the call.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <MessageSquare className="text-[#00DFA2] mb-3" size={24} />
            <h3 className="font-bold text-white text-sm mb-1">3. Game Plan</h3>
            <p className="text-xs text-brand-text-secondary leading-relaxed">We'll map out your customized high-retention editing & production workflow.</p>
          </div>
        </div>

        {/* Primary Action Button */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#00DFA2] text-[#031e41] font-bold text-sm sm:text-base shadow-[0_0_30px_rgba(0,223,162,0.4)] hover:scale-105 active:scale-95 transition-all"
          >
            <ArrowLeft size={18} />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm sm:text-base backdrop-blur-md hover:bg-white/20 hover:border-[#00b3dd]/50 hover:text-[#00b3dd] active:scale-95 transition-all"
          >
            <Video size={18} />
            <span>Explore Portfolio Vault</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
