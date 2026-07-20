"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroVideoZoom() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Fade out and translate the header/form upwards during the first phase of scroll
  const headerOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  // Video clipping bounds animation
  // Desktop: centered card. Mobile: wider centered card.
  const desktopClip = ["inset(35% 20% round 24px)", "inset(0% 0% round 0px)"];
  const mobileClip = ["inset(35% 5% round 16px)", "inset(0% 0% round 0px)"];
  
  const clipPathValue = useTransform(
    scrollYProgress,
    [0.1, 0.75],
    isMobile ? mobileClip : desktopClip
  );

  // Parallax zoom effect for the actual video inside the clipping container
  const videoScale = useTransform(scrollYProgress, [0.1, 0.8], [1.15, 1.0]);

  // Bottom scroll call-to-action animation
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Attention engineered! Welcome aboard.");
  };

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-brand-bg w-full">
      {/* Sticky viewport frame */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-16 md:py-24 z-10">
        
        {/* Background Zooming Video container */}
        <motion.div
          style={{ clipPath: clipPathValue }}
          className="absolute inset-0 z-0 bg-brand-bg overflow-hidden shadow-2xl flex items-center justify-center border-glow"
        >
          {/* Loop Video */}
          <motion.video
            style={{ scale: videoScale }}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover pointer-events-none brightness-[0.85]"
          >
            <source
              src="https://assets.cdn.filesafe.space/Wwll2ZKRP6bvPK3K5ByU/media/6977499529dcf506c27a2ec8.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </motion.video>
          
          {/* Soft tint layer that is transparent in the center to keep video highly visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/50 via-transparent to-brand-bg/75 pointer-events-none" />
        </motion.div>

        {/* Foreground Content (Title, Subtext, Inline Form) */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center flex-1"
        >
          {/* Social Proof Star Rating */}
          <div className="flex items-center gap-1 mb-4 text-brand-accent animate-pulse">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-white text-xs font-bold uppercase tracking-widest ml-2">
              4.9/5 Rating (250+ Audited Audits)
            </span>
          </div>

          {/* Core Bold Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-tight select-none">
            Like <span className="text-brand-accent text-glow">Steroids</span> <br />
            For Your Brand
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-base md:text-xl text-brand-text-secondary max-w-2xl font-light leading-relaxed">
            Growing organic presence is hard. Really hard. We don't just edit videos. We engineer attention, building systems that drive predictable virality, authority, and leads.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center max-w-md w-full"
          >
            <input
              required
              type="email"
              placeholder="Enter your email address..."
              className="w-full px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-black font-black uppercase text-sm tracking-widest rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-[0_0_30px_rgba(0,223,162,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
            >
              Get Free Audit
            </button>
          </form>
        </motion.div>

        {/* Scroll indicator overlay */}
        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="relative z-10 w-full text-center flex flex-col items-center gap-2 text-brand-text-muted font-bold uppercase tracking-widest text-xs pointer-events-none"
        >
          <span>Scroll to uncover the system</span>
          <div className="w-6 h-10 border-2 border-neutral-800 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-brand-accent rounded-full"
            />
          </div>
        </motion.div>
      </div>
      
      {/* Target anchor to block/stretch layout spacing for the sticky container scroll track */}
      <div className="absolute bottom-0 w-full h-[1px]" />
    </div>
  );
}
