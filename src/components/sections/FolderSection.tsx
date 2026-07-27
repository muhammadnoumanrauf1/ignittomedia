"use client";

import { useState } from "react";
import Folder from "@/components/ui/Folder";
import ProjectModal from "@/components/ui/ProjectModal";
import { projects, Project } from "@/data/projects";
import { FileVideo, FileText, FileImage, MousePointerClick, Touchpad } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FolderSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isFolderOpen, setIsFolderOpen] = useState(false);

  const icons = [FileVideo, FileImage, FileText];

  const folderItems = projects.map((project, index) => {
    const Icon = icons[index % icons.length];
    return (
      <div 
        key={project.id} 
        className="w-full h-full p-1.5 sm:p-2.5 flex flex-col items-center justify-center text-[#040D1A] cursor-pointer hover:bg-black/10 active:scale-95 rounded-lg transition-all"
        onClick={(e) => {
          e.stopPropagation();
          setSelectedProject(project);
        }}
      >
        <div className="p-1.5 rounded-md bg-brand-glow/20 text-[#00b3dd] mb-1 group-hover:scale-110 transition-transform">
          <Icon size={20} strokeWidth={2} className="sm:w-6 sm:h-6" />
        </div>
        <span className="text-[10px] sm:text-xs font-bold text-center leading-tight truncate max-w-full px-1 text-slate-800">
          {project.title.split(' ')[0]}.mp4
        </span>
      </div>
    );
  });

  return (
    <section id="deliverables" className="relative min-h-[80vh] md:min-h-screen bg-brand-bg py-20 md:py-32 px-4 sm:px-6 overflow-hidden flex flex-col items-center justify-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-brand-glow/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-12 z-10">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-brand-accent uppercase mb-3">
            Deliverables
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
            Client Deliverables
          </h2>
          <p className="text-brand-text-secondary text-sm sm:text-base md:text-lg max-w-xl font-light">
            Interactive vault of client edits, short-form assets, and long-form masters.
          </p>
        </div>

        {/* Interactive Folder Stage */}
        <div className="relative w-full h-[420px] sm:h-[500px] md:h-[600px] flex items-center justify-center rounded-3xl overflow-hidden interactive bg-brand-bg-secondary/70 border border-white/10 shadow-2xl backdrop-blur-sm">
          
          {/* Interactive Hint Badge */}
          <div className="absolute top-6 z-30 pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={isFolderOpen ? "open" : "closed"}
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-bold tracking-wide shadow-lg backdrop-blur-md ${
                  isFolderOpen
                    ? "bg-brand-glow/20 border-brand-glow/50 text-brand-glow shadow-[0_0_20px_rgba(0,223,162,0.3)]"
                    : "bg-white/10 border-white/20 text-white shadow-black/50"
                }`}
              >
                <Touchpad className="w-4 h-4 animate-bounce text-brand-glow" />
                <span>
                  {isFolderOpen
                    ? "Tap any file item to inspect case study"
                    : "Tap folder to open client vault"}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Folder Graphic Container with Mobile Scaling */}
          <div className="transform scale-[0.85] sm:scale-110 md:scale-135 lg:scale-150 transition-all duration-300">
            <Folder 
              color="#00DFA2" 
              size={1} 
              items={folderItems as any} 
              className="z-10"
              onOpenChange={setIsFolderOpen}
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
