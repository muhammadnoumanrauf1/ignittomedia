"use client";

import React, { useEffect, useRef, useState } from "react";

// Named tuning constants
const WRAPPER_HEIGHT_VH = 200; // Total height of pinned scroll track in vh
const EASE_FACTOR = 0.09; // Lerp smoothing factor (0.05 = heavier, 0.15 = faster)
const BG_DRIFT_PX = 55; // Parallax translation distance for background layers
const TEXT_DRIFT_PX = 130; // Parallax translation distance for text/foreground layers

interface ParallaxCrossfadeProps {
  hero: React.ReactNode;
  next: React.ReactNode;
  className?: string;
}

function smoothstep(min: number, max: number, value: number): number {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
}

export default function ParallaxCrossfade({
  hero,
  next,
  className = "",
}: ParallaxCrossfadeProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const heroWrapperRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const nextWrapperRef = useRef<HTMLDivElement>(null);
  const nextTextRef = useRef<HTMLDivElement>(null);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMediaChange);
    } else {
      mediaQuery.addListener(handleMediaChange);
    }

    // 2. Measure local scroll progress from container rect
    const updateTargetProgress = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const totalScrollableDistance = rect.height - viewportHeight;

      if (totalScrollableDistance <= 0) {
        targetProgressRef.current = 0;
        return;
      }

      const rawProgress = -rect.top / totalScrollableDistance;
      targetProgressRef.current = Math.max(0, Math.min(1, rawProgress));
    };

    // Initial measurement
    updateTargetProgress();

    // 3. Render loop with lerp smoothing
    const tick = () => {
      const target = targetProgressRef.current;
      const current = currentProgressRef.current;
      const diff = target - current;

      if (Math.abs(diff) > 0.0001) {
        currentProgressRef.current = current + diff * EASE_FACTOR;
      } else {
        currentProgressRef.current = target;
      }

      const p = currentProgressRef.current;

      // Calculate smoothstep crossfade opacities
      const nextOpacity = smoothstep(0, 1, p);
      const heroOpacity = 1 - nextOpacity;

      // Calculate parallax translation offsets
      const heroBgY = -p * BG_DRIFT_PX;
      const heroTextY = -p * TEXT_DRIFT_PX;
      const nextBgY = (1 - p) * BG_DRIFT_PX;
      const nextTextY = (1 - p) * TEXT_DRIFT_PX;

      // Apply transforms directly via DOM style for 60fps performance
      if (heroWrapperRef.current) {
        heroWrapperRef.current.style.opacity = heroOpacity.toFixed(4);
        heroWrapperRef.current.style.transform = `translate3d(0, ${heroBgY.toFixed(2)}px, 0)`;
      }

      if (heroTextRef.current) {
        heroTextRef.current.style.transform = `translate3d(0, ${heroTextY.toFixed(2)}px, 0)`;
      }

      if (nextWrapperRef.current) {
        nextWrapperRef.current.style.opacity = nextOpacity.toFixed(4);
        nextWrapperRef.current.style.transform = `translate3d(0, ${nextBgY.toFixed(2)}px, 0)`;
      }

      if (nextTextRef.current) {
        nextTextRef.current.style.transform = `translate3d(0, ${nextTextY.toFixed(2)}px, 0)`;
      }

      // Unclip stage when crossfade is nearly complete (p >= 0.95) so full height of next section renders
      if (stageRef.current) {
        if (p >= 0.95) {
          stageRef.current.style.overflow = "visible";
        } else {
          stageRef.current.style.overflow = "hidden";
        }
      }

      rafIdRef.current = requestAnimationFrame(tick);
    };

    rafIdRef.current = requestAnimationFrame(tick);

    const onScroll = () => {
      updateTargetProgress();
    };

    const onResize = () => {
      updateTargetProgress();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMediaChange);
      } else {
        mediaQuery.removeListener(handleMediaChange);
      }
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  // Fallback for prefers-reduced-motion: render sections stacked normally
  if (prefersReducedMotion) {
    return (
      <div className={className}>
        <div>{hero}</div>
        <div>{next}</div>
      </div>
    );
  }

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full ${className}`}
      style={{ height: `${WRAPPER_HEIGHT_VH}vh` }}
    >
      {/* Sticky Top-0 Stage holding overlapping sections */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-brand-bg">
        {/* Hero Section Layer */}
        <div
          ref={heroWrapperRef}
          className="absolute inset-0 w-full h-full pointer-events-auto will-change-[transform,opacity]"
          style={{ zIndex: 10 }}
        >
          <div ref={heroTextRef} className="w-full h-full will-change-transform">
            {hero}
          </div>
        </div>

        {/* Next Section Layer */}
        <div
          ref={nextWrapperRef}
          className="absolute inset-0 w-full h-full pointer-events-auto will-change-[transform,opacity]"
          style={{ zIndex: 20 }}
        >
          <div ref={nextTextRef} className="w-full h-full will-change-transform">
            {next}
          </div>
        </div>
      </div>
    </div>
  );
}
