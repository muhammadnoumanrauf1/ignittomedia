"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import MagneticButton from "./MagneticButton";
import { Play, Pause } from "lucide-react";
import ParticleWaves from "./threejs-particles-waves";

const INJECTED_STYLES = `
  .gsap-reveal { visibility: hidden; }
  .transform-style-3d { transform-style: preserve-3d; }

  /* Environment Overlays */
  .film-grain {
      position: absolute; inset: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-theme {
      background-size: 60px 60px;
      background-image: 
          linear-gradient(to right, color-mix(in srgb, var(--color-foreground) 5%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in srgb, var(--color-foreground) 5%, transparent) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }
  
  .text-3d-matte {
      color: var(--foreground);
      text-shadow: 
          0 10px 30px color-mix(in srgb, var(--foreground) 20%, transparent), 
          0 2px 4px color-mix(in srgb, var(--foreground) 10%, transparent);
  }

  .text-silver-matte {
      background: linear-gradient(180deg, var(--foreground) 0%, color-mix(in srgb, var(--foreground) 40%, transparent) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0); 
      filter: 
          drop-shadow(0px 10px 20px color-mix(in srgb, var(--foreground) 15%, transparent)) 
          drop-shadow(0px 2px 4px color-mix(in srgb, var(--foreground) 10%, transparent));
  }

  .premium-depth-card {
      background: linear-gradient(145deg, #001F3F 0%, #001F3F 100%);
      box-shadow: 
          0 40px 100px -20px rgba(0, 0, 0, 0.9),
          0 20px 40px -20px rgba(0, 0, 0, 0.8),
          inset 0 1px 2px rgba(255, 255, 255, 0.2),
          inset 0 -2px 4px rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.04);
      position: relative;
  }

  .card-sheen {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
      background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06) 0%, transparent 40%);
      mix-blend-mode: screen; transition: opacity 0.3s ease;
  }


  
  .screen-glare {
      background: linear-gradient(110deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 45%);
  }

  .video-container {
      position: relative;
      width: 100%;
      height: 100%;
      background: #000;
      border-radius: 0.5rem;
      overflow: hidden;
  }
  
  video {
      width: 100%;
      height: 100%;
      object-fit: cover;
  }
`;

export interface CinematicHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  videoSrc?: string;
}

export function CinematicHero({
  videoSrc = "https://assets.cdn.filesafe.space/Wwll2ZKRP6bvPK3K5ByU/media/6977499529dcf506c27a2ec8.mp4",
  className,
  ...props
}: CinematicHeroProps) {

  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  // --- VIDEO AUTOPLAY LOGIC ---
  const isInViewRef = useRef(false);
  const wasManuallyPaused = useRef(false);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const activeVideo = videoRef.current;
    if (activeVideo) {
      if (activeVideo.paused) {
        wasManuallyPaused.current = false;
        activeVideo.play().catch((err) => console.warn("Video playback failed:", err));
      }
      else {
        wasManuallyPaused.current = true;
        activeVideo.pause();
      }
    }
  };

  // --- FRAMER MOTION SCROLL LOGIC ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 25, stiffness: 100, mass: 0.5 });

  // 1. Text Blur & Scale (0 - 0.2)
  const textScale = useTransform(smoothProgress, [0, 0.2], [1, 1.15]);
  const textBlurRaw = useTransform(smoothProgress, [0, 0.2], [0, 20]);
  const textBlur = useTransform(textBlurRaw, (v) => `blur(${v}px)`);
  const textOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0.2]);

  // 2. Main Card Entrance (0 - 0.2)
  const cardY = useTransform(smoothProgress, [0, 0.2, 0.8, 1], ["120vh", "0vh", "0vh", "-120vh"]);
  
  const [isMobileState, setIsMobileState] = React.useState(false); // Default to false for SSR match

  useEffect(() => {
    const checkMobile = () => setIsMobileState(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const initialWidth = isMobileState ? "92vw" : "85vw";
  const initialHeight = isMobileState ? "92vh" : "85vh";
  const initialRadius = isMobileState ? "32px" : "40px";

  // 3. Main Card Expansion (0.2 - 0.35)
  const cardWidth = useTransform(smoothProgress, [0.2, 0.35, 0.7, 0.85], [initialWidth, "100vw", "100vw", initialWidth]);
  const cardHeight = useTransform(smoothProgress, [0.2, 0.35, 0.7, 0.85], [initialHeight, "100vh", "100vh", initialHeight]);
  const cardRadius = useTransform(smoothProgress, [0.2, 0.35, 0.7, 0.85], [initialRadius, "0px", "0px", initialRadius]);

  // 4. Laptop Entrance (0.3 - 0.5)
  const mockupY = useTransform(smoothProgress, [0.3, 0.5, 0.7, 0.85], [300, 0, 0, -40]);
  const mockupZ = useTransform(smoothProgress, [0.3, 0.5, 0.7, 0.85], [-500, 0, 0, -200]);
  const mockupOpacity = useTransform(smoothProgress, [0.3, 0.5, 0.7, 0.85], [0, 1, 1, 0]);
  const mockupScale = useTransform(smoothProgress, [0.3, 0.5, 0.7, 0.85], [0.6, 1, 1, 0.9]);
  
  const scrollRotateX = useTransform(smoothProgress, [0.3, 0.5], [50, 0]);
  const scrollRotateY = useTransform(smoothProgress, [0.3, 0.5], [-30, 0]);

  // 5. Top/Bottom Text Entrance (0.4 - 0.55)
  const textTopY = useTransform(smoothProgress, [0.4, 0.55, 0.7, 0.85], [-50, 0, 0, -50]);
  const textTopOpacity = useTransform(smoothProgress, [0.4, 0.55, 0.7, 0.85], [0, 1, 1, 0]);
  const textBottomY = useTransform(smoothProgress, [0.4, 0.55, 0.7, 0.85], [50, 0, 0, 50]);
  const textBottomOpacity = useTransform(smoothProgress, [0.4, 0.55, 0.7, 0.85], [0, 1, 1, 0]);

  // --- MOUSE PARALLAX ---
  const mouseRotateX = useMotionValue(0);
  const mouseRotateY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > window.innerHeight * 4) return;
      const xVal = (e.clientX / window.innerWidth - 0.5) * 16;
      const yVal = -(e.clientY / window.innerHeight - 0.5) * 16;
      
      mouseRotateY.set(xVal);
      mouseRotateX.set(yVal);
      
      if (mainCardRef.current) {
        const rect = mainCardRef.current.getBoundingClientRect();
        mainCardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        mainCardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const currentlyInView = latest > 0.35 && latest < 0.8;
    
    // Only trigger play/pause when the visibility state CHANGES
    if (currentlyInView && !isInViewRef.current) {
      isInViewRef.current = true;
      if (!wasManuallyPaused.current) {
        if (videoRef.current?.paused) videoRef.current.play().catch(() => {});
      }
    } else if (!currentlyInView && isInViewRef.current) {
      isInViewRef.current = false;
      if (videoRef.current && !videoRef.current.paused) videoRef.current.pause();
    }
  });

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-[500vh] bg-background text-foreground font-sans antialiased", className)}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
      
      <div className="sticky top-0 w-screen h-screen overflow-hidden flex items-center justify-center" style={{ perspective: "1500px" }}>
        
        <ParticleWaves hideControls={true} />
        <div className="film-grain" aria-hidden="true" />
        <motion.div 
           className="bg-grid-theme absolute inset-0 z-0 pointer-events-none" 
           style={{ scale: textScale, filter: textBlur, opacity: textOpacity }} 
        />

        {/* BACKGROUND TEXTS */}
        <motion.div 
          className="absolute inset-0 pt-[15vh] md:pt-[18vh] z-10 flex flex-col items-center justify-start text-center w-screen px-4 will-change-transform"
          style={{ scale: textScale, filter: textBlur, opacity: textOpacity }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 60, scale: 0.85, filter: "blur(20px)", rotateX: -20 }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)", rotateX: 0 }}
            transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center w-full"
          >
            <span className="text-brand-glow text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase border border-brand-glow/30 px-4 py-1.5 rounded-full bg-brand-glow/5 inline-block mb-8 shadow-[0_0_15px_rgba(0,191,255,0.2)]">
              Content that people remember
            </span>
            <h1 className="text-3d-matte text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tight mb-2 leading-none">
              Every Second
            </h1>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-silver-matte text-5xl md:text-7xl lg:text-[7rem] font-extrabold tracking-tighter leading-none pb-2"
          >
            Earns Attention.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
            className="mt-8 flex flex-col items-center"
          >
            <p className="text-lg md:text-xl text-brand-text-secondary mb-8 font-light max-w-3xl mx-auto leading-relaxed">
              IgnittoMedia helps founders, creators, and businesses transform raw footage into content that builds authority, earns trust, and drives measurable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <MagneticButton 
                variant="primary"
                onClick={() => window.open("https://calendly.com/ahmar-nawab/new-meeting", "_blank")}
              >
                Book a Strategy Call
              </MagneticButton>
              <MagneticButton 
                variant="secondary"
                onClick={() => {
                  window.scrollTo({
                    top: window.innerHeight * 2.2, // Scrolls down to where the laptop is fully visible
                    behavior: "smooth"
                  });
                }}
              >
                Watch Our Manifesto
              </MagneticButton>
            </div>
            <p className="text-sm font-medium text-brand-text-muted tracking-wide">
              Trusted by creators, founders and growing brands.
            </p>
          </motion.div>
        </motion.div>

        {/* FOREGROUND CARD & MOCKUPS */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none" style={{ perspective: "1500px" }}>
          <motion.div
            ref={mainCardRef}
            className="premium-depth-card relative overflow-hidden flex items-center justify-center pointer-events-auto"
            style={{ 
              y: cardY,
              width: cardWidth,
              height: cardHeight,
              borderRadius: cardRadius
            }}
          >
            <div className="card-sheen" aria-hidden="true" />

            <div className="relative w-full h-full max-w-[1200px] mx-auto px-4 flex flex-col justify-center items-center z-10 py-4 gap-6 lg:gap-8">
              
              {/* TOP TEXT */}
              <motion.div 
                className="flex flex-col justify-center text-center z-20 w-full px-4 absolute top-24 md:top-32"
                style={{ y: textTopY, opacity: textTopOpacity }}
              >
                <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight drop-shadow-lg">
                  Don't Hire Us Yet.<br className="md:hidden" /> <span className="text-brand-glow">Watch This First.</span>
                </h3>
              </motion.div>

              {/* MOCKUP CENTER */}
              <div className="relative w-full max-w-[90vw] md:max-w-[75vw] lg:max-w-[800px] xl:max-w-[900px] flex items-center justify-center z-10 flex-shrink-0 mt-8 md:mt-0" style={{ perspective: "1000px" }}>
                <motion.div
                  className="relative w-full h-full flex items-center justify-center will-change-transform transform-style-3d"
                  style={{
                    y: mockupY,
                    z: mockupZ,
                    scale: mockupScale,
                    opacity: mockupOpacity,
                    rotateX: scrollRotateX,
                    rotateY: scrollRotateY
                  }}
                >
                  <motion.div 
                    className="relative w-full h-full flex items-center justify-center will-change-transform transform-style-3d"
                    style={{
                      rotateX: mouseRotateX,
                      rotateY: mouseRotateY
                    }}
                  >
                    {/* VIDEO PLAYER */}
                    <div className="relative w-full max-w-[800px] max-h-[50vh] aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group bg-black/50 mx-auto">
                      <div className="absolute inset-0 screen-glare z-40 pointer-events-none" aria-hidden="true" />
                      <div className="relative w-full h-full video-container">
                        <video 
                          ref={videoRef} 
                          src={videoSrc} 
                          poster="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2988&auto=format&fit=crop"
                          preload="auto"
                          playsInline 
                          loop 
                          controls={true}
                          onPlay={() => setIsPlaying(true)}
                          onPause={() => setIsPlaying(false)}
                          className="w-full h-full object-cover"
                        />
                        {!isPlaying && (
                          <div 
                            className="absolute inset-0 flex items-center justify-center z-20 transition-all cursor-pointer bg-black/40 backdrop-blur-sm"
                            onClick={togglePlay}
                          >
                            <div className="w-20 h-20 rounded-full bg-brand-glow/20 flex items-center justify-center backdrop-blur-md border border-brand-glow/50 transition-transform hover:scale-110 shadow-[0_0_30px_rgba(0,223,162,0.3)]">
                              <Play className="w-8 h-8 text-brand-glow fill-brand-glow ml-1" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                  </motion.div>
                </motion.div>
              </div>

              {/* BOTTOM TEXT */}
              <motion.div 
                className="flex justify-center z-20 w-full px-4 absolute bottom-12 md:bottom-24"
                style={{ y: textBottomY, opacity: textBottomOpacity }}
              >
                <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-brand-text-secondary leading-snug text-center max-w-3xl drop-shadow-lg">
                  "If we can't keep your attention...<br className="md:hidden" /> <span className="text-white drop-shadow-md">We shouldn't be editing your content."</span>
                </blockquote>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
