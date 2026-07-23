"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen bg-brand-bg-secondary flex flex-col items-center justify-center py-20 md:py-32 px-4 md:px-6 overflow-hidden border-t border-white/5">
      <Script src="https://link.ignitto.com/js/form_embed.js" strategy="afterInteractive" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg-secondary to-brand-bg pointer-events-none" />
      
      <div className="max-w-6xl mx-auto w-full z-10 relative">
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide mb-6 text-white">
            Ready to Engineer <span className="text-brand-glow text-glow font-black tracking-wider">Attention?</span>
          </h2>
          <p className="text-brand-text-muted max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Reach out or book a call with us below to discuss how we can transform your content pipeline and scale your brand.
          </p>
        </motion.div>

        {/* Top Row: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex flex-col justify-center gap-10 p-8 lg:p-12 rounded-3xl border border-white/5 bg-black/20"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Get in Touch</h3>
              <p className="text-brand-text-muted leading-relaxed">
                Whether you have a question, want to start a project, or simply want to connect, our team is ready to help you dominate your market.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-glow/10 border border-brand-glow/30 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand-glow" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email Us</p>
                  <a href="mailto:info@ignittomedia.com" className="text-white hover:text-brand-glow transition-colors font-medium">info@ignittomedia.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-glow/10 border border-brand-glow/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brand-glow" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Headquarters</p>
                  <p className="text-white font-medium">Global / Remote</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full rounded-3xl border border-white/10 bg-brand-bg/50 backdrop-blur-md relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-glow/10 via-transparent to-transparent opacity-50 pointer-events-none" />
            <div className="relative w-full h-full z-10 pt-4 px-4 pb-4">
              <iframe
                src="https://link.ignitto.com/widget/form/MKvVn4aJDIVwZBSgx0Ei"
                style={{ width: '100%', height: '100%', minHeight: '600px', border: 'none', borderRadius: '8px' }}
                id="inline-MKvVn4aJDIVwZBSgx0Ei" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Ignitto Media Contact form"
                data-height="633"
                data-layout-iframe-id="inline-MKvVn4aJDIVwZBSgx0Ei"
                data-form-id="MKvVn4aJDIVwZBSgx0Ei"
                title="Ignitto Media Contact form"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Full Width: Booking Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full rounded-3xl border border-white/10 bg-brand-bg/50 backdrop-blur-md relative overflow-hidden h-[750px] shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/10 via-transparent to-transparent opacity-50 pointer-events-none" />
          <div className="relative w-full h-full z-10 pt-4 px-4 pb-4 overflow-hidden flex flex-col items-center">
            <div className="w-full h-full">
              <iframe 
                src="https://link.ignitto.com/widget/booking/PHPo59XlXcILHazsNUNp" 
                style={{ width: '100%', height: '100%', border: 'none', overflow: 'hidden' }} 
                scrolling="no" 
                id="DogUPsjbSk7gsEqnoDqm_1784107343568"
                title="Ignitto Media Booking"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
