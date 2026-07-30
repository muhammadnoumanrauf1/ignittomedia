"use client";

import { useState, useRef } from "react";
import CircularGallery from "@/components/ui/CircularGallery";
import ProjectModal from "@/components/ui/ProjectModal";
import { projects, Project } from "@/data/projects";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const galleryRef = useRef<{ next: () => void; prev: () => void } | null>(null);

  const galleryItems = projects.map(p => ({
    text: p.title,
    image: p.thumbnail
  }));

  const handleItemClick = (index: number) => {
    setSelectedProject(projects[index]);
  };

  const handleNext = () => galleryRef.current?.next();
  const handlePrev = () => galleryRef.current?.prev();

  return (
    <section id="portfolio" className="relative bg-brand-bg pt-16 pb-4 md:pt-24 md:pb-6 px-4 md:px-6 overflow-hidden flex flex-col items-center justify-center">
      <ProgressiveBlur position="top" backgroundColor="#031e41" height="120px" />
      <ProgressiveBlur position="bottom" backgroundColor="#031e41" height="120px" />
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center text-center mb-6 md:mb-8">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-brand-accent uppercase mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white z-10 pointer-events-none mb-4">
            Selected Works
          </h2>

          {/* Navigation Controls Bar */}
          <div className="flex items-center gap-3 sm:gap-4 z-20 mt-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Project"
              className="w-11 h-11 rounded-full border border-white/10 bg-[#031e41]/80 backdrop-blur-md flex items-center justify-center text-white hover:text-brand-glow hover:border-brand-glow/50 hover:bg-brand-bg active:scale-95 transition-all shadow-lg cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-accent/30 backdrop-blur-md text-xs font-mono font-bold text-brand-accent shadow-md">
              {/* <Sparkles size={13} className="text-brand-glow animate-pulse" /> */}
              <span>View all projects</span>
            </div>
            <button
              onClick={handleNext}
              aria-label="Next Project"
              className="w-11 h-11 rounded-full border border-brand-glow/40 bg-brand-glow/10 backdrop-blur-md flex items-center justify-center text-brand-glow hover:text-black hover:bg-brand-glow active:scale-95 transition-all shadow-[0_0_20px_rgba(0,223,162,0.25)] cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative w-full h-[460px] md:h-[540px] rounded-3xl overflow-hidden interactive">
          {/* @ts-ignore */}
          <CircularGallery
            ref={galleryRef}
            items={galleryItems}
            bend={3.5}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.05}
            fontUrl="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
            font="bold 28px Inter"
            scrollSpeed={2}
            autoScrollSpeed={0}
            onItemClick={handleItemClick}
          />
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
