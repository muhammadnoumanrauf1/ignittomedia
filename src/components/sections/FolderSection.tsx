"use client";

import { useState } from "react";
import Folder from "@/components/ui/Folder";
import ProjectModal from "@/components/ui/ProjectModal";
import { projects, Project } from "@/data/projects";
import { FileVideo, FileText, FileImage } from "lucide-react";

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
      <div className="w-full flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wider mb-12 text-center text-silver-matte z-10 pointer-events-none">
          Client Deliverables
        </h2>
        
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
