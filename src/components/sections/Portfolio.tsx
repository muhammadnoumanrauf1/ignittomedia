"use client";

import { useState } from "react";
import CircularGallery from "@/components/ui/CircularGallery";
import ProjectModal from "@/components/ui/ProjectModal";
import { projects, Project } from "@/data/projects";
import { Sparkles } from "lucide-react";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const galleryItems = projects.map(p => ({
    text: p.title,
    image: p.thumbnail
  }));

  const handleItemClick = (index: number) => {
    setSelectedProject(projects[index]);
  };

  return (
    <section id="portfolio" className="relative bg-brand-bg pt-16 pb-4 md:pt-24 md:pb-6 px-4 md:px-6 overflow-hidden flex flex-col items-center justify-center">
      <ProgressiveBlur position="top" backgroundColor="#031e41" height="120px" />
      <ProgressiveBlur position="bottom" backgroundColor="#031e41" height="120px" />
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center text-center mb-6 md:mb-8">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-brand-accent uppercase mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white z-10 pointer-events-none">
            Selected Works
          </h2>
        </div>

        <div className="relative w-full h-[460px] md:h-[540px] rounded-3xl overflow-hidden interactive">
          <CircularGallery
            items={galleryItems}
            bend={3.5}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.05}
            fontUrl="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
            font="bold 28px Inter"
            scrollSpeed={2}
            autoScrollSpeed={0.05}
            onItemClick={handleItemClick}
          />
          {/* Bottom Blur Overlay for Gallery */}
          {/* <div className="absolute bottom-0 left-0 right-0 h-28 md:h-36 bg-gradient-to-t from-brand-bg via-brand-bg/80 to-transparent backdrop-blur-md pointer-events-none z-20" /> */}
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
