"use client";

import { motion } from "framer-motion";

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

        {/* Calendar / Form Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-[4/3] md:aspect-video rounded-3xl border border-white/10 bg-brand-bg/50 backdrop-blur-md p-8 flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-glow/10 via-transparent to-transparent opacity-50" />
          
          <div className="text-center relative z-10">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 text-brand-text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
                <path d="M8 14h.01" />
                <path d="M12 14h.01" />
                <path d="M16 14h.01" />
                <path d="M8 18h.01" />
                <path d="M12 18h.01" />
                <path d="M16 18h.01" />
              </svg>
            </div>
            <p className="text-brand-text-secondary font-medium tracking-wide">
              Calendar & Form Embed Placeholder
            </p>
            <p className="text-brand-text-muted text-sm mt-2">
              (Paste your embed code here)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
