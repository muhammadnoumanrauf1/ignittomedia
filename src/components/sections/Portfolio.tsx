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
    <section id="portfolio" className="relative min-h-screen bg-brand-bg py-20 md:py-32 px-4 md:px-6 overflow-hidden flex flex-col items-center justify-center">
      <ProgressiveBlur position="top" backgroundColor="#031e41" height="120px" />
      <ProgressiveBlur position="bottom" backgroundColor="#031e41" height="120px" />
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(0,223,162,0.15)]">
            <Sparkles size={14} className="text-brand-accent animate-pulse" />
            <span className="text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white z-10 pointer-events-none">
            Selected Works
          </h2>
        </div>

        <div className="relative w-full h-[600px] md:h-[800px] rounded-3xl overflow-hidden interactive">
          <CircularGallery
            items={galleryItems}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.05}
            fontUrl="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
            font="bold 30px Inter"
            scrollSpeed={2}
            autoScrollSpeed={0.05}
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
