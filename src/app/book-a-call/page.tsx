"use client";

import Script from "next/script";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import { CinematicFooter as Footer } from "@/components/ui/motion-footer";
import {
  Sparkles,
  Calendar,
  ArrowLeft,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Target,
  Zap,
  Layers,
  TrendingUp,
  Video,
  FileText,
  Rocket,
  Award
} from "lucide-react";
import { motion } from "framer-motion";

export default function BookACallPage() {
  const callTopics = [
    {
      icon: Target,
      number: "01",
      title: "Hook & Retention Audit",
      description: "We deconstruct your current video analytics, identify exact viewer drop-off points, and engineer cold-open hooks that stop the scroll within 2 seconds."
    },
    {
      icon: Zap,
      number: "02",
      title: "Attention Architecture & Motion Graphics",
      description: "We define your custom visual language — 2D/3D kinetic typography, dynamic sound design, pattern interrupts, and brand-tailored lower thirds."
    },
    {
      icon: Layers,
      number: "03",
      title: "Scalable Content Pipeline",
      description: "We establish a seamless Google Drive/Frame.io raw footage upload workflow with dedicated senior editors and guaranteed 24-48h turnarounds."
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Pricing & ROI Roadmap",
      description: "Transparent fixed monthly retainer or per-video pricing structured around your monthly volume, ROI goals, and audience growth targets."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Book Your 30-Min Slot",
      description: "Select a date and time on our calendar that fits your schedule."
    },
    {
      step: "02",
      title: "Strategy & Audience Deep Dive",
      description: "We review your brand goals, raw footage style, and niche competitors."
    },
    {
      step: "03",
      title: "Receive Custom Proposal & Trial Edit",
      description: "Get a clear scope of work along with a custom hook concept for your channel."
    },
    {
      step: "04",
      title: "Hands-Off Content Scaling",
      description: "Upload raw footage — we deliver polished, high-retention video assets on schedule."
    }
  ];

  const stats = [
    { label: "Organic Views", value: "20M+" },
    { label: "Projects Delivered", value: "100+" },
    { label: "Client Retention", value: "96%" }
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-white flex flex-col justify-between selection:bg-brand-glow selection:text-black">
      <Navbar />

      <main className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full z-10">
        <Script src="https://link.ignitto.com/js/form_embed.js" strategy="afterInteractive" />

        {/* Ambient Background Glowing Orbs */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-glow/10 rounded-full blur-[150px] pointer-events-none -z-10" />
        <div className="absolute top-[600px] right-0 w-[450px] h-[450px] bg-brand-accent/5 rounded-full blur-[130px] pointer-events-none -z-10" />

        {/* Navigation Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400 hover:text-brand-glow transition-colors px-3.5 py-1.5 rounded-full border border-white/10 bg-black/30 backdrop-blur-md shadow-sm"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-glow/10 border border-brand-glow/30 text-brand-glow backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(0,179,221,0.2)]"
          >
            <Sparkles size={14} className="text-brand-glow animate-pulse" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-glow">
              Schedule Your Discovery Session
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Book a <span className="text-brand-glow">Strategy Call</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Choose a date & time on our live calendar below to discuss your video goals, audit your hook retention, and build a high-converting content machine.
          </motion.p>
        </div>

        {/* Top Grid: Trust Overview Card + Calendar Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">

          {/* Left Side: Session Guarantee & Trust Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="rounded-3xl border border-white/10 bg-[#040D1A]/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-brand-glow/10 border border-brand-glow/30 flex items-center justify-center text-brand-glow shrink-0">
                  <Calendar size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">1-on-1 Strategy Call</h3>
                  <p className="text-xs text-slate-400 font-mono flex items-center gap-1.5 mt-0.5">
                    <Clock size={12} className="text-brand-glow" /> 30 Minutes • Live Google Meet
                  </p>
                </div>
              </div>

              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-accent mb-4">
                What You Get From This Session:
              </h4>

              <ul className="space-y-3.5 mb-8">
                <li className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 size={18} className="text-brand-glow shrink-0 mt-0.5" />
                  <span>Custom cold-open hook analysis for your niche</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 size={18} className="text-brand-glow shrink-0 mt-0.5" />
                  <span>2D/3D motion graphics & pattern interrupt recommendations</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 size={18} className="text-brand-glow shrink-0 mt-0.5" />
                  <span>Turnaround SLAs & fixed monthly volume pricing</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 size={18} className="text-brand-glow shrink-0 mt-0.5" />
                  <span>Direct Q&A with our senior creative lead</span>
                </li>
              </ul>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10 text-center">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                    <div className="text-base sm:text-lg font-bold text-brand-glow">{stat.value}</div>
                    <div className="text-[10px] text-slate-400 font-mono leading-tight mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Zero-Sales-Pressure Guarantee Box */}
            <div className="rounded-2xl border border-brand-accent/20 bg-brand-accent/5 p-5 flex items-start gap-4 backdrop-blur-md">
              <ShieldCheck size={28} className="text-brand-accent shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">100% Free Strategy Session</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  No pushy sales reps. Even if we don't work together, you will walk away with actionable hook strategies for your next campaign.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Interactive LeadConnector Calendar Widget */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-8 w-full rounded-3xl border border-white/15 bg-[#040D1A]/90 backdrop-blur-xl relative overflow-hidden shadow-[0_0_60px_rgba(0,179,221,0.15)] min-h-[750px] p-2 sm:p-4"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-glow/10 via-transparent to-transparent opacity-60 pointer-events-none" />

            <div className="relative w-full h-full min-h-[720px] z-10 rounded-2xl overflow-hidden">
              <iframe
                src="https://link.ignitto.com/widget/booking/PHPo59XlXcILHazsNUNp"
                style={{ width: '100%', height: '100%', minHeight: '720px', border: 'none', overflow: 'hidden' }}
                scrolling="no"
                id="DogUPsjbSk7gsEqnoDqm_1784107343568"
                title="Ignitto Media Booking Calendar"
              />
            </div>
          </motion.div>

        </div>

        {/* SECTION: What Will Be Discussed On The Call */}
        <section className="mb-24 pt-12 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-brand-accent uppercase mb-3 block">
              Call Agenda & Breakdown
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What We Will Discuss On Your Call
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Every 30-minute session is structured to give you maximum clarity and immediate actionable value for your video content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {callTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-3xl border border-white/10 bg-[#040D1A]/70 p-6 sm:p-8 hover:border-brand-glow/40 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="absolute top-0 right-0 p-6 text-3xl font-mono font-bold text-white/5 group-hover:text-brand-glow/10 transition-colors">
                    {topic.number}
                  </div>

                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-brand-glow/10 border border-brand-glow/30 flex items-center justify-center text-brand-glow mb-6 group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-glow transition-colors">
                      {topic.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* SECTION: Our 4-Step Partnership Process */}
        <section className="mb-16 pt-12 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-brand-glow uppercase mb-3 block">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Simple 4-Step Process
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              From your initial call to seamless hands-off video delivery — built for speed, quality, and retention.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl border border-white/10 bg-[#040D1A]/60 p-6 flex flex-col justify-between relative"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full border border-brand-accent/20 inline-block mb-4">
                    STEP {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
