"use client";

import { useState } from "react";
import CircularGallery from "@/components/ui/CircularGallery";
import ProjectModal from "@/components/ui/ProjectModal";
import { projects, Project } from "@/data/projects";

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
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center text-silver-matte z-10 pointer-events-none">
          Selected Works
        </h2>

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
