"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  cubicBezier
} from "framer-motion";
import ParticleWaves from "@/components/ui/threejs-particles-waves";
import { GlowCard } from "@/components/ui/spotlight-card";
import MagneticButton from "@/components/ui/MagneticButton";

interface ScrollZoomHeroProps {
  nextSection?: React.ReactNode;
}

export default function ScrollZoomHero({ nextSection }: ScrollZoomHeroProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [dimensions, setDimensions] = useState({
    vw: 1500,
    vh: 800,
    cardWidth: 744,
    cardHeight: 418.5,
    isMobile: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const isMobile = vw < 640;
      // Responsive widths: 86vw on mobile, min(62vw, 900px) on desktop
      const cardWidth = isMobile ? vw * 0.86 : Math.min(vw * 0.62, 900);
      const cardHeight = cardWidth / (16 / 9);
      setDimensions({ vw, vh, cardWidth, cardHeight, isMobile });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking on the full scene height
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring smoothing for trackpads and momentum scroll
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Calculations for offsets and target scales
  const startX = (dimensions.vw - 0.12 * dimensions.cardWidth) - (dimensions.vw - dimensions.cardWidth) / 2;

  // Calculate endScale to have at least 80px margin on top/bottom (vh - 160px) and 40px on left/right (vw - 80px) at max zoom
  const endScale = Math.min((dimensions.vw - 80) / dimensions.cardWidth, (dimensions.vh - 160) / dimensions.cardHeight);

  const easeInOut = cubicBezier(0.42, 0, 0.58, 1);

  // CARD TRANSLATIONS & SCALE (0 -> 0.30 -> 0.65)
  const x = useTransform(springProgress, [0, 0.3, 0.65], [startX, 0, 0], { ease: [easeInOut, easeInOut] });
  const cardY = useTransform(springProgress, [0, 0.3, 0.65], [100, 0, 0], { ease: [easeInOut, easeInOut] });
  const rotate = useTransform(springProgress, [0, 0.3, 0.65], [-10, 0, 0], { ease: [easeInOut, easeInOut] });
  const scale = useTransform(springProgress, [0, 0.3, 0.65], [1, 1, endScale], { ease: [easeInOut, easeInOut] });

  // STAGE DISSOLVE & DRIFT OUT INTO NEXT SECTION (0.65 -> 0.95)
  const stageOpacity = useTransform(springProgress, [0.65, 0.95], [1, 0], { ease: [easeInOut, easeInOut] });
  const stageY = useTransform(springProgress, [0.65, 0.95], [0, -60], { ease: [easeInOut, easeInOut] });

  // CONSTANT VISUAL RADIUS (Dividing border radius by scale dynamically)
  const borderRadius = useTransform(scale, (s) => `${18 / s}px`);

  // HERO CONTENT OPACITY & Y LIFTOFF (0 -> 0.30)
  const heroOpacity = useTransform(springProgress, [0, 0.3, 0.65], [1, 0, 0], { ease: [easeInOut, easeInOut] });
  const heroY = useTransform(springProgress, [0, 0.3, 0.65], [0, -60, -60], { ease: [easeInOut, easeInOut] });
  const heroPointerEvents = useTransform(springProgress, (p) => p > 0.3 ? "none" : "auto");

  // Dynamically control play/pause state of the video
  useEffect(() => {
    const video = videoRef.current;
    if (!video || shouldReduceMotion) return;

    let playPromise: Promise<void> | null = null;
    let isPlayPending = false;
    let shouldBePlaying = false;

    // Direct DOM initial setup
    video.muted = true;
    setIsMuted(true);

    const safePlay = (unmuteAttempt = false) => {
      shouldBePlaying = true;
      if (isPlayPending) return;

      if (unmuteAttempt) {
        video.muted = false;
        setIsMuted(false);
      }

      isPlayPending = true;
      playPromise = video.play();

      playPromise
        .then(() => {
          isPlayPending = false;
          // If a pause request came in while loading, pause it safely now
          if (!shouldBePlaying) {
            video.pause();
          }
        })
        .catch((error) => {
          isPlayPending = false;
          console.log("Unmuted play blocked by browser, falling back to muted autoplay:", error);

          // Fall back to muted playback on policy block
          video.muted = true;
          setIsMuted(true);

          isPlayPending = true;
          video.play()
            .then(() => {
              isPlayPending = false;
              if (!shouldBePlaying) {
                video.pause();
              }
            })
            .catch((e) => {
              isPlayPending = false;
              console.error("Playback failed even when muted:", e);
            });
        });
    };

    const safePause = () => {
      shouldBePlaying = false;
      if (!isPlayPending) {
        video.pause();
      }
    };

    // Play briefly on mount to force-render the first frame, then pause immediately if still at top
    safePlay(false);
    const initialPauseTimeout = setTimeout(() => {
      if (springProgress.get() < 0.3) {
        safePause();
      }
    }, 150);

    // Unmute as soon as the user performs any interaction (click, touch, or scroll)
    const handleInteraction = () => {
      video.muted = false;
      setIsMuted(false);
    };
    window.addEventListener("click", handleInteraction, { once: true });
    window.addEventListener("touchstart", handleInteraction, { once: true });
    window.addEventListener("scroll", handleInteraction, { once: true });

    // Scroll change listener
    const unsubscribe = springProgress.on("change", (latest) => {
      // Play ONLY when scroll is between 30% (0.3) and 99% (0.99)
      if (latest >= 0.3 && latest < 0.99) {
        if (video.paused) {
          // If user has already clicked/scrolled, try unmuted play
          const isUserInteracted = !video.muted;
          safePlay(isUserInteracted);
        }
      } else {
        if (!video.paused) {
          safePause();
        }
      }
    });

    return () => {
      clearTimeout(initialPauseTimeout);
      unsubscribe();
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
  }, [springProgress, shouldReduceMotion]);

  // Toggle Mute Action
  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  // Scroll to booking calendar widget
  const handleBookCall = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-booking-calendar"));
    }
    setTimeout(() => {
      const calendarEl = document.getElementById("booking-calendar-wrapper") || document.getElementById("DogUPsjbSk7gsEqnoDqm_1784107343568") || document.getElementById("contact");
      if (calendarEl) {
        calendarEl.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "/#contact";
      }
    }, 50);
  };

  // Play hero manifesto video with audio and zoom into video player
  const handleWatchManifesto = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      setIsMuted(false);
      video.play().catch((err) => console.log("Unmuted play error:", err));
    }
    if (containerRef.current) {
      const targetScroll = containerRef.current.offsetTop + window.innerHeight * 1.6;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  // Fallback static layout for users with prefers-reduced-motion
  if (shouldReduceMotion) {
    return (
      <section className="bg-brand-bg py-24 px-6 text-center flex flex-col items-center justify-center gap-12 min-h-screen">
        <div className="max-w-4xl flex flex-col items-center pt-24 sm:pt-28 md:pt-32">
          <div className="px-6 py-2 rounded-full border border-brand-glow/30 bg-brand-bg/40 backdrop-blur-sm text-brand-glow font-bold uppercase tracking-widest text-xs sm:text-sm shadow-[0_0_20px_rgba(1,195,255,0.15)]">
            Content That People Remember
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-[150px] lg:text-[150px] font-['Special_Gothic_Expanded_One',sans-serif] font-bold tracking-tight mt-6 leading-[1.15] pb-4 pt-1 select-none bg-gradient-to-r from-[#00b3dd] via-[#00DFA2] to-[#00b3dd] bg-clip-text text-transparent drop-shadow-[0_10px_40px_rgba(0,223,162,0.25)]">
            Ignitto Media
          </h1>
          <p className="text-brand-text-secondary mt-8 text-base sm:text-lg md:text-2xl max-w-3xl font-light leading-relaxed">
            We help founders, creators, and businesses transform raw footage into content that builds authority, earns trust, and drives measurable growth.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <MagneticButton
              onClick={handleBookCall}
              variant="primary"
              className="font-extrabold text-base focus:outline-none focus:ring-2 focus:ring-white"
            >
              Book a Strategy Call
            </MagneticButton>
            <MagneticButton
              onClick={handleWatchManifesto}
              variant="secondary"
              className="font-extrabold text-base border-brand-glow/30 focus:outline-none focus:ring-2 focus:ring-brand-glow"
            >
              Watch Our Manifesto
            </MagneticButton>
          </div>
        </div>

        {/* Static Card with AutoPlay Video and Spotlight */}
        <div
          style={{ width: dimensions.cardWidth, height: dimensions.cardHeight }}
          className="bg-brand-bg rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl overflow-hidden relative cursor-default z-100 "
        >
          <GlowCard
            glowColor="theme"
            customSize={true}
            className="w-full h-full !p-0 !gap-0 bg-transparent border-0 rounded-2xl overflow-hidden shadow-none backdrop-blur-none"
          >
            <video
              autoPlay
              loop
              preload="auto"
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://assets.cdn.filesafe.space/Wwll2ZKRP6bvPK3K5ByU/media/6977499529dcf506c27a2ec8.mp4"
                type="video/mp4"
              />
            </video>
          </GlowCard>

          <button
            onClick={handleToggleMute}
            className="absolute bottom-4 right-4 z-30 p-2.5 bg-black/60 hover:bg-black/80 hover:scale-105 active:scale-95 text-white rounded-full transition-all border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-glow"
            aria-label="Toggle Sound"
          >
            {isMuted ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>
        </div>
      </section>
    );
  }

  const sceneHeight = dimensions.isMobile ? "200vh" : "240vh";

  return (
    <section ref={containerRef} style={{ height: sceneHeight }} className="relative bg-brand-bg w-full">
      {/* Sticky Stage Container */}
      <motion.div
        style={{ opacity: stageOpacity, y: stageY }}
        className="sticky top-0 h-dvh w-full overflow-hidden flex items-center justify-center z-100 will-change-[transform,opacity]"
      >
        {/* Background WebGL Particle Waves */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <ParticleWaves
            hideControls={true}
            particleColor="#00DFA2"
            bgColor="#030A12"
          />
        </div>

        {/* Hero Content Layer */}
        <motion.div
          style={{
            opacity: heroOpacity,
            y: heroY,
            pointerEvents: heroPointerEvents as any
          }}
          className="absolute inset-0 z-30 px-6 text-center flex flex-col items-center justify-center pt-24 sm:pt-28 md:pt-32"
        >
          <span className="text-brand-glow font-bold uppercase tracking-[0.25em] text-xs sm:text-sm">
            Content That People Remember
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-[150px] lg:text-[150px] font-['Special_Gothic_Expanded_One',sans-serif] font-bold tracking-tight mt-6 leading-[1.15] pb-4 pt-1 select-none bg-gradient-to-r from-[#00b3dd] via-[#00DFA2] to-[#00b3dd] bg-clip-text text-transparent drop-shadow-[0_10px_40px_rgba(0,223,162,0.25)]">
            Ignitto Media
          </h1>

          <p className="mt-8 text-base sm:text-lg md:text-2xl text-brand-text-secondary max-w-4xl font-light leading-relaxed px-4">
            We help founders, creators, and businesses transform raw footage into content that builds authority, earns trust, and drives measurable growth.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <MagneticButton
              onClick={handleBookCall}
              variant="primary"
              className="font-extrabold text-base focus:outline-none focus:ring-2 focus:ring-white"
            >
              Book a Strategy Call
            </MagneticButton>
            <MagneticButton
              onClick={handleWatchManifesto}
              variant="secondary"
              className="font-extrabold text-base border-brand-glow/30 focus:outline-none focus:ring-2 focus:ring-brand-glow"
            >
              Watch Our Manifesto
            </MagneticButton>
          </div>
        </motion.div>

        {/* Video Card Layer */}
        <motion.div
          style={{
            x,
            y: cardY,
            rotate,
            scale,
            borderRadius,
            width: dimensions.cardWidth,
            height: dimensions.cardHeight,
            willChange: "transform"
          }}
          className="absolute z-40 bg-brand-bg flex items-center justify-center shadow-[0_30px_100px_rgba(0,0,0,0.8)] border border-white/10 overflow-hidden cursor-default rounded-2xl"
        >
          <GlowCard
            glowColor="theme"
            customSize={true}
            className="w-full h-full !p-0 !gap-0 bg-transparent border-0 rounded-2xl overflow-hidden shadow-none backdrop-blur-none"
          >
            {/* Loop Video Element */}
            <div className="w-full h-full relative">
              <video
                ref={videoRef}
                loop
                preload="auto"
                playsInline
                className="w-full h-full object-cover pointer-events-none"
              >
                <source
                  src="https://assets.cdn.filesafe.space/Wwll2ZKRP6bvPK3K5ByU/media/6977499529dcf506c27a2ec8.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* Interactive Mute/Unmute Overlay Button */}
              <button
                onClick={handleToggleMute}
                className="absolute bottom-4 right-4 z-30 p-2.5 bg-black/60 hover:bg-black/80 hover:scale-105 active:scale-95 text-white rounded-full transition-all border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-glow"
                aria-label="Toggle Sound"
              >
                {isMuted ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                )}
              </button>
            </div>
          </GlowCard>
        </motion.div>
      </motion.div>
    </section>
  );
}
