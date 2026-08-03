"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, MapPin, Sparkles, Calendar, MessageSquare, PhoneCall } from "lucide-react";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    // Listen for appointment booking events from LeadConnector / GoHighLevel widgets
    const handleWidgetMessage = (e: MessageEvent) => {
      try {
        const dataStr = typeof e.data === "string" ? e.data : JSON.stringify(e.data || {});

        // Booking confirmed -> redirect to /thank-you page
        const isBookingComplete =
          dataStr.includes("appointment-booked") ||
          dataStr.includes("appointment_booked") ||
          dataStr.includes("appointmentBooked") ||
          dataStr.includes("booking_successful") ||
          dataStr.includes("bookingSuccessful") ||
          dataStr.includes("PHPo59XlXcILHazsNUNp");

        if (isBookingComplete) {
          window.location.href = "/thank-you";
        }
      } catch {
        // Safe fallback
      }
    };

    window.addEventListener("message", handleWidgetMessage);
    return () => window.removeEventListener("message", handleWidgetMessage);
  }, []);

  return (
    <section id="contact" className="relative min-h-screen bg-brand-bg-secondary flex flex-col items-center justify-center py-20 md:py-32 px-4 md:px-6 overflow-hidden border-t border-white/5">
      {/* Background Gradient & Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg-secondary to-brand-bg pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-glow/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full z-10 relative flex flex-col items-center text-center">
        {/* Section Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(0,223,162,0.15)]"
        >
          <PhoneCall size={14} className="text-brand-accent animate-pulse" />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-accent">
            Book a Call
          </span>
        </motion.div>

        {/* Section Headline & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide mb-6 text-white">
            Book Your <span className="text-brand-glow font-black tracking-wider">Strategy Call</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
            Select a date and time directly on our interactive calendar below to discuss transforming your raw footage into high-retention video assets.
          </p>
        </motion.div>

        {/* Prominent Booking Calendar Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          id="booking-calendar-wrapper"
          className="w-full rounded-3xl border border-white/10 bg-brand-bg/60 backdrop-blur-xl relative overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.6)] mb-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/10 via-transparent to-transparent opacity-40 pointer-events-none" />
          <div className="relative w-full h-full z-10 p-3 sm:p-6 overflow-hidden flex flex-col items-center">
            <iframe
              src="https://link.ignitto.com/widget/booking/PHPo59XlXcILHazsNUNp"
              style={{ width: '100%', minHeight: '750px', border: 'none', overflow: 'hidden' }}
              scrolling="no"
              id="DogUPsjbSk7gsEqnoDqm_1784107343568"
              title="Ignitto Media Strategy Call Booking"
            />
          </div>
        </motion.div>

        {/* Secondary Contact Link Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-glow/15 border border-brand-glow/40 flex items-center justify-center text-brand-glow shrink-0">
              <MessageSquare size={22} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Prefer to send a direct message?</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light">
                Submit an inquiry on our dedicated Contact Us page or email info@ignittomedia.com.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-bold text-xs sm:text-sm whitespace-nowrap hover:bg-[#00DFA2] hover:text-[#040D1A] hover:border-[#00DFA2] transition-all shadow-md shrink-0"
          >
            <span>Visit Contact Page</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
