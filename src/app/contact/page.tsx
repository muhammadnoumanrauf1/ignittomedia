import Metadata from "next";
import Script from "next/script";
import Link from "next/link";
import { Mail, MapPin, Sparkles, ArrowLeft, Calendar, PhoneCall } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";

export const metadata = {
  title: "Contact Us | IgnittoMedia",
  description: "Get in touch with IgnittoMedia. Submit a inquiry or book a strategy call with our video attention engineering team.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#040D1A] text-white flex flex-col justify-between select-none">
      <Script src="https://link.ignitto.com/js/form_embed.js" strategy="afterInteractive" />

      {/* Ambient Atmospheric Radial Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00DFA2]/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#00b3dd]/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Top Navbar space */}
      <div className="pt-24 md:pt-32 px-4 max-w-7xl mx-auto w-full z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white hover:border-[#00DFA2]/40 hover:bg-[#00DFA2]/10 transition-all mb-8"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00DFA2]/10 border border-[#00DFA2]/30 text-[#00DFA2] backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(0,223,162,0.15)]">
            <Sparkles size={14} className="animate-pulse" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase">Get In Touch</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-4 text-white">
            Contact <span className="text-[#00DFA2] font-black">IgnittoMedia</span>
          </h1>

          <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed">
            Have a project in mind or want to discuss a custom video retention workflow? Fill out the form below or book a discovery call.
          </p>
        </div>

        {/* Grid: Direct Info + Embedded Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Left Column: Direct Info & Strategy Call Banner */}
          <div className="lg:col-span-5 flex flex-col gap-6 p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <div>
              <h2 className="text-2xl font-extrabold text-white mb-3">Direct Channels</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                Our creative strategy team typically responds within 2-4 business hours.
              </p>
            </div>

            <div className="space-y-5 pt-4 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#00DFA2]/10 border border-[#00DFA2]/30 flex items-center justify-center text-[#00DFA2]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono uppercase tracking-wider">Email Us</p>
                  <a href="mailto:info@ignittomedia.com" className="text-white hover:text-[#00DFA2] transition-colors font-bold text-sm">
                    info@ignittomedia.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#00b3dd]/10 border border-[#00b3dd]/30 flex items-center justify-center text-[#00b3dd]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono uppercase tracking-wider">Location</p>
                  <p className="text-white font-bold text-sm">Worldwide / Remote Studio</p>
                </div>
              </div>
            </div>

            {/* Callout Box to Strategy Call */}
            <div className="mt-4 p-6 rounded-2xl bg-gradient-to-br from-[#00DFA2]/15 to-[#00b3dd]/10 border border-[#00DFA2]/30 text-left">
              <div className="flex items-center gap-2 text-[#00DFA2] text-xs font-bold uppercase tracking-wider mb-2">
                <PhoneCall size={16} />
                <span>Fast Track</span>
              </div>
              <h3 className="text-lg font-extrabold text-white mb-2">Want Instant Scheduling?</h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed font-light">
                Skip the back-and-forth email and book a 1-on-1 discovery call directly on our calendar.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#00DFA2] text-[#040D1A] font-extrabold text-xs uppercase tracking-wider hover:bg-[#00b3dd] hover:text-white transition-all shadow-[0_0_20px_rgba(0,223,162,0.3)]"
              >
                <Calendar size={15} />
                <span>Book Strategy Call</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Contact Form Widget */}
          <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-brand-bg/60 backdrop-blur-xl p-4 overflow-hidden shadow-2xl">
            <iframe
              src="https://link.ignitto.com/widget/form/MKvVn4aJDIVwZBSgx0Ei"
              style={{ width: '100%', height: '100%', minHeight: '650px', border: 'none', borderRadius: '16px' }}
              id="inline-MKvVn4aJDIVwZBSgx0Ei"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Ignitto Media Contact form"
              data-height="650"
              data-layout-iframe-id="inline-MKvVn4aJDIVwZBSgx0Ei"
              data-form-id="MKvVn4aJDIVwZBSgx0Ei"
              title="Ignitto Media Contact Form"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
