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
    <section id="services" className="relative min-h-screen bg-brand-bg py-20 md:py-32 px-4 md:px-6 flex flex-col items-center">
      <div className="max-w-[1400px] w-full flex flex-col h-auto md:h-[100vh] min-h-[800px]">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center text-silver-matte">
          Our Capabilities
        </h2>
        
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

          {/* Mobile View */}
          <div className="md:hidden flex flex-col gap-4 w-full">
            {demoFrames.map(frame => (
               <div key={frame.id} className="relative aspect-square sm:aspect-video rounded-xl overflow-hidden border border-white/10 group bg-black">
                  <video 
                    src={frame.video} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                     <h3 className="text-white text-2xl font-bold mb-2">{frame.title}</h3>
                     <p className="text-brand-text-muted text-sm leading-relaxed">{frame.description}</p>
                  </div>
               </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
