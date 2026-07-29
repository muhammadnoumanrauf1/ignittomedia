"use client";

import { DynamicFrameLayout, Frame } from "@/components/ui/dynamic-frame-layout";
import { Sparkles } from "lucide-react";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const demoFrames: (Frame & { aspectRatio: "16:9" | "9:16" | "1:1" })[] = [
  {
    id: 1,
    title: "Long Form",
    aspectRatio: "16:9",
    description: "Documentaries, YouTube essays, and deep-dive content that retains viewers for 20+ minutes.",
    video: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a689cdc2cfe8da14c951bc7.mp4",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 2,
    title: "Short Form",
    aspectRatio: "9:16",
    description: "High-retention vertical content engineered for algorithmic growth on TikTok, Reels, and Shorts.",
    video: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a689d29d1438d5c4eb3c208.mp4",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 3,
    title: "Commercial",
    aspectRatio: "9:16",
    description: "High-end brand narratives and advertising campaigns that convert.",
    video: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a689d942cfe8da14c9581c9.mp4",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 4,
    title: "Podcast",
    aspectRatio: "16:9",
    description: "Multi-cam switching, color grading, and audio mastering for professional shows.",
    video: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a68a2f918a264df5356746d.mp4",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 5,
    title: "Motion Graphics",
    aspectRatio: "16:9",
    description: "Custom animations, UI mockups, and visual effects that explain complex ideas.",
    video: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a68a186b4176d3727edfc67.mp4",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 6,
    title: "Creative Direction",
    aspectRatio: "9:16",
    description: "Thumbnails, hooks, and complete visual strategy designed to maximize CTR.",
    video: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a68a2b818a264df535662e7.mp4",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  }
];

export default function Services() {
  return (
    <section id="services" className="relative min-h-screen bg-brand-bg py-20 md:py-32 px-4 md:px-6 flex flex-col items-center overflow-hidden">
      <ProgressiveBlur position="top" backgroundColor="#031e41" height="120px" />
      <ProgressiveBlur position="bottom" backgroundColor="#031e41" height="120px" />
      <div className="max-w-[1400px] w-full flex flex-col h-auto md:h-[100vh] min-h-[800px]">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-brand-accent uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-wider text-white">
            High-Impact Production
          </h2>
        </div>

        <div className="flex-1 w-full bg-brand-bg/50 rounded-3xl overflow-hidden p-2 md:p-4 border border-white/5">
          {/* Desktop/Tablet View */}
          <div className="hidden md:block w-full h-full">
            <DynamicFrameLayout
              frames={demoFrames}
              className="w-full h-full"
              hoverSize={6}
              gapSize={8}
            />
          </div>

          {/* Mobile View — respects 9:16 vertical vs 16:9 landscape aspect ratios */}
          <div className="md:hidden flex flex-col gap-6 w-full">
            {demoFrames.map((frame, index) => {
              const isVertical = frame.aspectRatio === "9:16";
              return (
                <div
                  key={frame.id}
                  className={`relative w-full rounded-2xl overflow-hidden border border-white/10 group bg-black shadow-xl ${isVertical ? "aspect-[9/16] max-h-[560px]" : "aspect-video"
                    }`}
                >
                  <video
                    src={frame.video}
                    autoPlay={false}
                    preload="metadata"
                    loop
                    muted
                    playsInline
                    className={`absolute inset-0 w-full h-full ${isVertical ? 'object-cover sm:object-contain' : 'object-cover'} opacity-90`}
                    aria-label={`${frame.title} video reel`}
                  />
                  {/* Aspect Badge */}
                  <div className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono font-bold text-brand-glow">
                    {frame.aspectRatio}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-6 flex flex-col justify-end z-10">
                    <h3 className="text-white text-2xl font-bold mb-2">{frame.title}</h3>
                    <p className="text-brand-text-secondary text-sm leading-relaxed">{frame.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
