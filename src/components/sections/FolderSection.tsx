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

  const folderItems = projects.map((project) => {
    return (
      <div 
        key={project.id} 
        className="group relative w-full h-full rounded-xl overflow-hidden cursor-pointer border border-[#00DFA2]/40 bg-[#040D1A] shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center p-2 select-none"
        onClick={(e) => {
          e.stopPropagation();
          setSelectedProject(project);
        }}
      >
        {/* Background Thumbnail Image if available */}
        {project.thumbnail && (
          <img 
            src={project.thumbnail} 
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover" 
          />
        )}

        {/* Subtle Dark Studio Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040D1A]/30 to-[#040D1A]/50 z-10" />

        {/* Tech Corner Brackets ONLY */}
        <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#00DFA2] z-20" />
        <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#00DFA2] z-20" />
        <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#00DFA2] z-20" />
        <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#00DFA2] z-20" />

        {/* Center WHITE Play Emblem with Soft Drop Shadow */}
        <div className="relative z-20 flex items-center justify-center">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center shadow-[0_6px_18px_rgba(0,0,0,0.45)] group-hover:scale-115 transition-transform">
            <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-[#040D1A] ml-0.5" />
          </div>
        </div>
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
          <div className="transform scale-[0.95] sm:scale-115 md:scale-135 lg:scale-150 transition-all duration-300">
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
