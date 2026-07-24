"use client";

import { useState } from "react";
import Folder from "@/components/ui/Folder";
import ProjectModal from "@/components/ui/ProjectModal";
import { projects, Project } from "@/data/projects";
import { FileVideo, FileText, FileImage, Sparkles } from "lucide-react";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export default function FolderSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const icons = [FileVideo, FileImage, FileText];

  const folderItems = projects.map((project, index) => {
    const Icon = icons[index % icons.length];
    return (
      <div 
        key={project.id} 
        className="w-full h-full p-2 flex flex-col items-center justify-center text-black/80 cursor-pointer hover:bg-black/5 rounded-lg transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          setSelectedProject(project);
        }}
      >
        <Icon size={24} strokeWidth={1.5} />
        <span className="text-xs font-semibold mt-1.5 text-center leading-tight">
          {project.title.split(' ')[0]}.mp4
        </span>
      </div>
    );
  });

  return (
    <section id="portfolio" className="relative min-h-screen bg-brand-bg py-32 px-6 overflow-hidden flex flex-col items-center justify-center">
      <ProgressiveBlur position="top" backgroundColor="#031e41" height="120px" />
      <ProgressiveBlur position="bottom" backgroundColor="#031e41" height="120px" />
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(0,223,162,0.15)]">
            <Sparkles size={14} className="text-brand-accent animate-pulse" />
            <span className="text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">
              Deliverables
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wider text-center text-white z-10 pointer-events-none">
            Client Deliverables
          </h2>
        </div>
        
        <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center rounded-3xl overflow-hidden interactive bg-brand-bg-secondary border border-white/5">
          <div className="transform scale-[0.7] sm:scale-100 md:scale-125 lg:scale-150 transition-transform">
            <Folder 
              color="#00DFA2" 
              size={1} 
              items={folderItems as any} 
              className="z-10"
            />
          </div>
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
