"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import MagneticButton from "./MagneticButton";
import { Play } from "lucide-react";
import ParticleWaves from "./threejs-particles-waves";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
          linear-gradient(to right, color-mix(in srgb, var(--foreground) 5%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in srgb, var(--foreground) 5%, transparent) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  /* -------------------------------------------------------------------
     PHYSICAL SKEUOMORPHIC MATERIALS (Restored 3D Depth)
  ---------------------------------------------------------------------- */
  
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

  /* Deep Physical Card with Dynamic Mouse Lighting (Reverted to Ignitto Dark Blue) */
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
`;

export interface CinematicHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  tagline1?: string;
  tagline2?: string;
  cardTopText?: React.ReactNode;
  cardBottomText?: React.ReactNode;
  ctaBadge?: string;
  ctaHeading?: string;
  ctaDescription?: string;
  videoSrc?: string;
}

export function CinematicHero({
  tagline1 = "Every Second",
  tagline2 = "Earns Attention.",
  cardTopText = <>Don't Hire Us Yet.<br className="md:hidden" /> <span className="text-brand-glow">Watch This First.</span></>,
  cardBottomText = <>"If we can't keep your attention...<br className="md:hidden" /> <span className="text-white drop-shadow-md">We shouldn't be editing your content."</span></>,
  ctaBadge = "Content that people remember",
  ctaHeading = "IgnittoMedia",
  ctaDescription = "IgnittoMedia helps founders, creators, and businesses transform raw footage into content that builds authority, earns trust, and drives measurable growth.",
  videoSrc = "https://assets.cdn.filesafe.space/Wwll2ZKRP6bvPK3K5ByU/media/6977499529dcf506c27a2ec8.mp4",
  className,
  ...props
}: CinematicHeroProps) {

  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const progressRectRef = useRef<SVGRectElement>(null);
  const requestRef = useRef<number>(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
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

  // 1. High-Performance Mouse Interaction Logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > window.innerHeight * 2) return;

      cancelAnimationFrame(requestRef.current);

      requestRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current && mockupRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;

          mainCardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
          mainCardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);

          const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2;

          gsap.to(mockupRef.current, {
            rotationY: xVal * 8,
            rotationX: -yVal * 8,
            ease: "power3.out",
            duration: 1.2,
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // 2. Complex Cinematic Scroll Timeline
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      gsap.set(".text-track", { autoAlpha: 0, y: 60, scale: 0.85, rotationX: -20 });
      gsap.set(".text-days", { autoAlpha: 0, y: 30 });
      gsap.set(".main-card", { y: window.innerHeight + 200, autoAlpha: 1 });
      gsap.set([".card-top-text", ".card-bottom-text", ".mockup-scroll-wrapper"], { autoAlpha: 0 });
      gsap.set(".cta-wrapper", { autoAlpha: 0, scale: 0.8, pointerEvents: "none" });

      const introTl = gsap.timeline({ delay: 0.3 });
      introTl
        .to(".text-track", { duration: 1.8, autoAlpha: 1, y: 0, scale: 1, rotationX: 0, ease: "expo.out" })
        .to(".text-days", { duration: 1.4, autoAlpha: 1, y: 0, ease: "power4.out" }, "-=1.0");

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=7000",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            const currentlyInView = p > 0.1 && p < 0.75;

            // Auto play/pause video based on view progress
            if (currentlyInView && !isInViewRef.current) {
              isInViewRef.current = true;
              if (!wasManuallyPaused.current && videoRef.current?.paused) {
                videoRef.current.play().catch(() => { });
              }
            } else if (!currentlyInView && isInViewRef.current) {
              isInViewRef.current = false;
              if (videoRef.current && !videoRef.current.paused) {
                videoRef.current.pause();
              }
            }

            // Update Progress Border
            if (progressRectRef.current) {
              // p goes from 0 to 1 over the whole scrollTl
              progressRectRef.current.style.strokeDashoffset = `${100 * (1 - p)}`;
            }
          }
        },
      });

      scrollTl
        .to([".hero-text-wrapper", ".bg-grid-theme"], { scale: 1.15, opacity: 0.2, ease: "power2.inOut", duration: 2 }, 0)
        .to(".main-card", { y: 0, ease: "power3.inOut", duration: 2 }, 0)
        .to(".main-card", { width: "100%", height: "100%", borderRadius: "0px", ease: "power3.inOut", duration: 1.5 })
        .fromTo(".mockup-scroll-wrapper",
          { y: 300, z: -500, rotationX: 50, rotationY: -30, autoAlpha: 0, scale: 0.6 },
          { y: 0, z: 0, rotationX: 0, rotationY: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 2.5 }, "-=0.8"
        )
        .fromTo(".card-top-text", { y: -50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, ease: "power4.out", duration: 1.5 }, "-=1.5")
        .fromTo(".card-bottom-text", { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, ease: "expo.out", duration: 1.5 }, "<")
        .to({}, { duration: 3.5 })
        .set(".hero-text-wrapper", { autoAlpha: 0 })
        .set(".cta-wrapper", { autoAlpha: 1, pointerEvents: "auto" })
        .to({}, { duration: 1.5 })
        .to([".mockup-scroll-wrapper", ".card-top-text", ".card-bottom-text"], {
          scale: 0.9, y: -40, z: -200, autoAlpha: 0, ease: "power3.in", duration: 1.2, stagger: 0.05,
        })
        // Responsive card pullback sizing
        .to(".main-card", {
          width: isMobile ? "92vw" : "85vw",
          height: isMobile ? "92vh" : "85vh",
          borderRadius: isMobile ? "32px" : "40px",
          ease: "expo.inOut",
          duration: 1.8
        }, "pullback")
        .to(".cta-wrapper", { scale: 1, ease: "expo.inOut", duration: 1.8 }, "pullback")
        .to(".main-card", { y: -window.innerHeight - 300, ease: "power3.in", duration: 1.5 });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-screen h-screen overflow-hidden flex items-center justify-center bg-background text-foreground font-sans antialiased", className)}
      style={{ perspective: "1500px" }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
      <ParticleWaves hideControls={true} />
      <div className="film-grain" aria-hidden="true" />
      <div className="bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-50" aria-hidden="true" />

      {/* BACKGROUND LAYER: Hero Texts */}
      <div className="hero-text-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 will-change-transform transform-style-3d">
        <h1 className="text-track gsap-reveal text-3d-matte text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tight mb-2 leading-none">
          {tagline1}
        </h1>
        <h1 className="text-days gsap-reveal text-silver-matte text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] font-extrabold tracking-tighter leading-none pb-2">
          {tagline2}
        </h1>
      </div>

      {/* BACKGROUND LAYER 2: CTA View (Visible at end of scroll) */}
      <div className="cta-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 gsap-reveal will-change-transform">
        <span className="text-brand-glow text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase border border-brand-glow/30 px-4 py-1.5 rounded-full bg-brand-glow/5 inline-block mb-8 shadow-[0_0_15px_rgba(0,191,255,0.2)]">
          {ctaBadge}
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-bold mb-6 tracking-tight text-silver-matte">
          {ctaHeading}
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          {ctaDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <MagneticButton
            variant="primary"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book a Strategy Call
          </MagneticButton>
          <MagneticButton
            variant="secondary"
            onClick={() => {
              const el = document.getElementById("story");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Watch Our Manifesto
          </MagneticButton>
        </div>
      </div>

      {/* FOREGROUND LAYER: The Physical Deep Blue Card */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none" style={{ perspective: "1500px" }}>
        <div
          ref={mainCardRef}
          className="main-card premium-depth-card relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] rounded-[32px] md:rounded-[40px]"
        >
          <div className="card-sheen" aria-hidden="true" />

          {/* DYNAMIC RESPONSIVE GRID: Flex-col layout for the video player */}
          <div className="relative w-full h-full max-w-6xl mx-auto px-4 lg:px-12 flex flex-col justify-center items-center z-10 py-6 lg:py-0 gap-8">

            {/* 1. TOP TEXT */}
            <div className="card-top-text gsap-reveal flex justify-center text-center z-20 w-full px-4">
              <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight drop-shadow-lg">
                {cardTopText}
              </h3>
            </div>

            {/* 2. CENTER: VIDEO MOCKUP */}
            <div className="mockup-scroll-wrapper relative w-full max-w-[90vw] md:max-w-[75vw] lg:max-w-[800px] flex items-center justify-center z-10 mt-8 md:mt-0" style={{ perspective: "1000px" }}>

              <div
                ref={mockupRef}
                className="relative w-full h-full flex items-center justify-center will-change-transform transform-style-3d"
              >
                <div className="relative w-full max-w-[800px] aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group bg-black/50 mx-auto">
                  <div className="absolute inset-0 screen-glare z-40 pointer-events-none" aria-hidden="true" />

                  {/* PROGRESS BORDER */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-50">
                    <rect
                      ref={progressRectRef}
                      x="0" y="0" width="100%" height="100%"
                      rx="16"
                      fill="none"
                      stroke="url(#progressGradient)"
                      strokeWidth="6"
                      pathLength="100"
                      strokeDasharray="100"
                      strokeDashoffset="100"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00DFA2" />
                        <stop offset="100%" stopColor="#00bfff" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="relative w-full h-full video-container">
                    <video
                      ref={videoRef}
                      src={videoSrc}
                      poster="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2988&auto=format&fit=crop"
                      preload="auto"
                      playsInline
                      loop
                      autoPlay
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
              </div>
            </div>

            {/* 3. BOTTOM TEXT */}
            <div className="card-bottom-text gsap-reveal flex justify-center text-center z-20 w-full px-4">
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-brand-text-secondary leading-snug text-center max-w-3xl drop-shadow-lg">
                {cardBottomText}
              </blockquote>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
