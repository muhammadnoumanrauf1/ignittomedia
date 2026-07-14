"use client";

import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout";

const demoFrames = [
  {
    id: 1,
    title: "Long Form",
    description: "Documentaries, YouTube essays, and deep-dive content that retains viewers for 20+ minutes.",
    video: "https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 2,
    title: "Short Form",
    description: "High-retention vertical content engineered for algorithmic growth on TikTok, Reels, and Shorts.",
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/WebGL%20Exported%20(1).mp4",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 3,
    title: "Commercial",
    description: "High-end brand narratives and advertising campaigns that convert.",
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Jitter%20Exported%20Poster.mp4",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 4,
    title: "Podcast",
    description: "Multi-cam switching, color grading, and audio mastering for professional shows.",
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 5,
    title: "Motion Graphics",
    description: "Custom animations, UI mockups, and visual effects that explain complex ideas.",
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Logo%20Exported.mp4",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 6,
    title: "Creative Direction",
    description: "Thumbnails, hooks, and complete visual strategy designed to maximize CTR.",
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Animation%20Exported%20(4).mp4",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  }
];

export default function Services() {
  return (
    <section id="services" className="relative min-h-screen bg-brand-bg py-32 px-4 md:px-6 overflow-hidden flex flex-col items-center">
      <div className="max-w-[1400px] w-full flex flex-col h-[100vh] min-h-[800px]">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-silver-matte">
          Our Capabilities
        </h2>
        
        <div className="flex-1 w-full bg-brand-bg/50 rounded-3xl overflow-hidden p-2 md:p-4 border border-white/5">
          <DynamicFrameLayout 
            frames={demoFrames} 
            className="w-full h-full" 
            hoverSize={6}
            gapSize={8}
          />
        </div>
      </div>
    </section>
  );
}
