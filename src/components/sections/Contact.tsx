"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const InlineWidget = dynamic(
  () => import("react-calendly").then((mod) => mod.InlineWidget),
  { ssr: false }
);

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen bg-brand-bg-secondary flex flex-col items-center justify-center py-32 px-6 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg-secondary to-brand-bg pointer-events-none" />
      
      <div className="max-w-4xl mx-auto w-full z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4 text-brand-glow">
            Let's Talk
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Ready to Engineer <span className="text-brand-glow text-glow">Attention?</span>
          </h2>
          <p className="text-brand-text-muted max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Book a call with us below to discuss how we can transform your content pipeline and scale your brand.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full rounded-3xl border border-white/10 bg-brand-bg/50 backdrop-blur-md relative overflow-hidden h-[750px] shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-glow/10 via-transparent to-transparent opacity-50 pointer-events-none" />
          
          <div className="relative w-full h-full z-10 pt-4">
            <InlineWidget 
              url="https://calendly.com/ahmar-nawab/new-meeting" 
              styles={{ height: '100%', width: '100%' }}
              pageSettings={{
                backgroundColor: '010B14',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '00DFA2',
                textColor: 'ffffff'
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
