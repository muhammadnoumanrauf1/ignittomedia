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
    <section id="portfolio" className="relative bg-brand-bg pt-16 pb-8 md:pt-24 md:pb-12 px-4 md:px-6 overflow-visible flex flex-col items-center justify-center">
      <ProgressiveBlur position="top" backgroundColor="#031e41" height="120px" />
      <ProgressiveBlur position="bottom" backgroundColor="#031e41" height="120px" />
      <div className="w-full flex flex-col items-center overflow-visible">
        <div className="flex flex-col items-center text-center mb-6 md:mb-8">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-brand-accent uppercase mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white z-10 pointer-events-none mb-4">
            Selected Works
          </h2>

          {/* Subtitle Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-accent/20 bg-brand-accent/5 backdrop-blur-md text-xs font-mono font-bold text-brand-accent shadow-sm mt-1">
            <span>Drag or click projects to explore</span>
          </div> */}
        </div>

        <div className="relative w-full min-h-[640px] md:min-h-[700px] rounded-3xl overflow-visible interactive flex items-center justify-center">
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
