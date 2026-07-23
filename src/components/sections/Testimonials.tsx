"use client";

import TestimonialCards from "@/components/ui/TestimonialCards";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative min-h-screen bg-brand-bg-secondary flex flex-col items-center justify-center py-24 md:py-36 px-4 md:px-8 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-glow/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full z-10 relative flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-glow block mb-3">
            Social Proof & Wall of Love
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wider text-center text-white mb-4">
            Don't Take Our Word For It
          </h2>
          <p className="text-brand-text-secondary text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Real feedback from founders, creators, and brands scaling attention with Ignitto.
          </p>
        </div>

        {/* Movable Testimonial Slider */}
        <div className="w-full flex items-center justify-center">
          <TestimonialCards />
        </div>
      </div>

    </section>
  );
}
