"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck, Zap, Clock, HelpCircle } from "lucide-react";
import { PricingSection, type PricingCategoryGroup } from "@/components/ui/pricing";
import { CinematicFooter } from "@/components/ui/motion-footer";

const GUARANTEES = [
  {
    icon: Clock,
    title: "Guaranteed Turnaround SLAs",
    description: "Predictable delivery timelines backed by contract. Never miss a scheduled upload or marketing launch.",
  },
  {
    icon: Zap,
    title: "2 Revision Rounds Included",
    description: "Every video includes up to 2 rounds of frame-accurate revisions via Frame.io to dial in every cut.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Scope Policy",
    description: "Clear expectations agreed before work begins. No hidden charges or unexpected invoice surprises.",
  },
];

const FAQS = [
  {
    question: "What is included in the real estate video editing packages?",
    answer:
      "All packages include professional cutting, pacing optimization, color grading, audio leveling, dynamic captions (for short-form), and up to 2 revision rounds delivered through our Frame.io platform.",
  },
  {
    question: "How long does each edit take to deliver?",
    answer:
      "Short-form videos are typically delivered within 24 to 48 hours. Long-form real estate edits under 10 minutes are delivered within 48 to 72 hours.",
  },
  {
    question: "How do revision rounds work?",
    answer:
      "You receive access to your private Frame.io portal where you can click anywhere on the video frame, pause, and leave exact timestamped comments. We execute your feedback within 24 hours.",
  },
  {
    question: "How does the Custom Quote strategy session work?",
    answer:
      "Clicking 'Get a Custom Quote' opens our calendar booking widget. You can select a convenient 30-minute slot with our senior creative lead to discuss your footage style, custom volume requirements, and project scope.",
  },
  {
    question: "What if I need videos over 10 minutes or custom drone pacing?",
    answer:
      "Simply choose the Custom Quote option or schedule a call. We will review your raw footage specifications and provide a tailored quotation within 2 to 4 hours.",
  },
];

const PACKAGE_NOTE =
  "Pricing covers the editing scope agreed upon before work begins. Substantial restructuring, advanced animation, replacement footage, additional versions, unusually large raw-footage files, rush delivery, or requirements outside the original brief may be quoted separately.";

export default function PricingClientView() {
  const openCustomQuote = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-custom-quote"));
    }
  };

  const VIDEO_PACKAGES: PricingCategoryGroup[] = [
    {
      id: "short-form",
      label: "Short-Form Videos",
      plans: [
        {
          name: "1 Short-Form Video",
          price: 100,
          info: "Professional editing for one real estate Reel, TikTok, or Short.",
          features: [
            {
              text: "Up to 2 revision rounds",
              tooltip: "Frame-accurate notes on Frame.io",
            },
            {
              text: "Professional editing optimized for social media",
              tooltip: "Engineered for maximum retention and algorithmic reach",
            },
            {
              text: "Cold-open hook and pattern interrupt cuts",
            },
            {
              text: "Dynamic typography and sound design",
            },
            {
              text: "48-Hour delivery turnaround SLA",
            },
          ],
          btn: {
            text: "Order 1 Video",
            href: "/book-a-call",
          },
        },
        {
          name: "5 Short-Form Videos",
          price: 397,
          badge: "MOST POPULAR",
          highlighted: true,
          info: "Ideal for agents, teams, and agencies building a consistent social media presence.",
          features: [
            {
              text: "Up to 2 revision rounds per video",
              tooltip: "Two comprehensive feedback cycles for every clip",
            },
            {
              text: "Consistent editing across your content",
              tooltip: "Unified visual branding, color tones, and caption styles",
            },
            {
              text: "Optimized for short-form social media",
            },
            {
              text: "Beat-synced sound design and Foley accents",
            },
            {
              text: "Dedicated editor workflow on Frame.io",
            },
          ],
          btn: {
            text: "Order 5 Videos Package",
            href: "/book-a-call",
          },
        },
        {
          name: "Custom Quote",
          price: "Custom Quote",
          info: "Video editing tailored to your project.",
          features: [
            {
              text: "Tell us your video style, quantity, and goals.",
              tooltip: "Walk through your creative vision with our lead",
            },
            {
              text: "Receive pricing based on your needs.",
              tooltip: "Custom proposal aligned with your exact volume",
            },
            {
              text: "Walk us through your ideas and ask questions.",
            },
            {
              text: "Get clear updates and easily share feedback throughout your project.",
            },
          ],
          btn: {
            text: "Get a Custom Quote",
            onClick: openCustomQuote,
          },
        },
      ],
    },
    {
      id: "long-form",
      label: "Long-Form Videos",
      subheading: "For Videos Under 10 Minutes",
      description:
        "These packages are exclusively for international clients and are designed for long-form real estate content.",
      plans: [
        {
          name: "1 Long-Form Video",
          price: 250,
          info: "Professional editing for one real estate video under 10 minutes.",
          features: [
            {
              text: "Up to 2 revision rounds",
              tooltip: "Two detailed revision passes included",
            },
            {
              text: "Professional long-form editing",
              tooltip: "Full property walkthroughs, listing tours, or community highlights",
            },
            {
              text: "Narrative pacing and viewer retention arcs",
            },
            {
              text: "Color grading and studio audio mastering",
            },
            {
              text: "Delivered via Frame.io for timestamped feedback",
            },
          ],
          btn: {
            text: "Order 1 Long-Form Video",
            href: "/book-a-call",
          },
        },
        {
          name: "5 Long-Form Videos",
          price: 1197,
          badge: "BEST VALUE",
          highlighted: true,
          info: "Ideal for agents, teams, developers, and agencies producing long-form content consistently.",
          features: [
            {
              text: "Up to 2 revision rounds per video",
              tooltip: "Two dedicated revision cycles for each video",
            },
            {
              text: "Consistent editing across your content",
              tooltip: "Cohesive aesthetic, typography, and color grading across the series",
            },
            {
              text: "Optimized for long-form real estate content",
            },
            {
              text: "Custom motion titles, lower thirds, and callouts",
            },
            {
              text: "Dedicated senior lead editor",
            },
          ],
          btn: {
            text: "Order 5 Videos Package",
            href: "/book-a-call",
          },
        },
        {
          name: "Custom Quote",
          price: "Custom Quote",
          info: "Video editing tailored to your project.",
          features: [
            {
              text: "Tell us your video style, quantity, and goals.",
              tooltip: "Walk through your creative vision with our lead",
            },
            {
              text: "Receive pricing based on your needs.",
              tooltip: "Custom proposal aligned with your exact volume",
            },
            {
              text: "Walk us through your ideas and ask questions.",
            },
            {
              text: "Get clear updates and easily share feedback throughout your project.",
            },
          ],
          btn: {
            text: "Get a Custom Quote",
            onClick: openCustomQuote,
          },
        },
      ],
    },
  ];

  return (
    <>
      <main className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full z-10 flex-1">
        {/* Navigation Back Link */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400 hover:text-brand-glow transition-colors px-4 py-2 rounded-full border border-white/10 bg-black/30 backdrop-blur-md shadow-sm"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
        </div>

        {/* Pricing Category Section */}
        <PricingSection
          categories={VIDEO_PACKAGES}
          heading="Transparent Video Editing Packages"
          description="Select between short-form social reels and long-form video packages engineered for high retention and authority."
          packageNote={PACKAGE_NOTE}
        />

        {/* Value Guarantees Grid */}
        <section className="mt-28 pt-16 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-brand-accent uppercase mb-3 block">
              The Ignitto Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Engineered for Quality, Speed, and Attention
            </h2>
            <p className="text-brand-text-secondary text-sm sm:text-base leading-relaxed font-light">
              Every package is handled by dedicated video editors using a streamlined Frame.io review workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {GUARANTEES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-white/10 bg-[#040D1A]/70 backdrop-blur-xl p-8 hover:border-brand-glow/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-glow/10 border border-brand-glow/30 flex items-center justify-center text-brand-glow mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-glow transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-brand-text-secondary text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="mt-28 pt-16 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-brand-glow uppercase mb-3 block">
              Common Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-brand-text-secondary text-sm sm:text-base leading-relaxed font-light">
              Everything you need to know about our editing scopes and delivery workflow.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-[#040D1A]/80 backdrop-blur-xl p-6 hover:border-white/20 transition-all"
              >
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-3">
                  <HelpCircle size={18} className="text-brand-accent shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-brand-text-secondary text-sm leading-relaxed font-light pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Fast-Track Consultation Banner */}
        <section className="mt-28 rounded-3xl border border-brand-accent/30 bg-gradient-to-br from-brand-accent/10 via-[#040D1A] to-brand-glow/10 p-8 md:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Need a Custom Volume or Specific Project Scope?
            </h2>
            <p className="text-brand-text-secondary text-sm md:text-base leading-relaxed mb-8 font-light">
              Tell us your requirements and we will provide a custom quotation tailored to your video goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={openCustomQuote}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-accent text-[#031e41] font-bold text-sm uppercase tracking-wider hover:bg-brand-glow hover:text-white transition-all shadow-[0_0_30px_rgba(0,223,162,0.3)] cursor-pointer"
              >
                Get a Custom Quote
              </button>
              <Link
                href="/book-a-call"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/15 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/30 transition-all"
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </section>
      </main>

      <CinematicFooter />
    </>
  );
}
