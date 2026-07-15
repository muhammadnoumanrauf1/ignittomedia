"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Project } from "@/data/projects";
import { useEffect } from "react";
import { GlowCard } from "@/components/ui/spotlight-card";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!project) return null;

  // Map aspect ratio to Tailwind classes
  const aspectClass = {
    "16:9": "aspect-video",
    "9:16": "aspect-[9/16] max-h-[50vh] md:max-h-[70vh]",
    "1:1": "aspect-square max-h-[50vh] md:max-h-[70vh]",
    "4:5": "aspect-[4/5] max-h-[50vh] md:max-h-[70vh]",
  }[project.aspectRatio];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-5xl rounded-3xl overflow-y-auto overflow-x-hidden max-h-[90vh] shadow-2xl"
          >
            <GlowCard customSize={true} glowColor="theme" className="w-full min-h-min flex flex-col md:flex-row bg-[#0F1110]/90 backdrop-blur-xl border-white/10 !p-0">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-white transition-colors backdrop-blur-md"
              >
                <X size={20} />
              </button>

              {/* Video Container */}
              <div className={`w-full md:w-3/5 bg-black flex items-center justify-center ${project.aspectRatio === "9:16" || project.aspectRatio === "4:5" ? "py-8" : ""}`}>
                <div className={`w-full ${aspectClass} relative flex items-center justify-center`}>
                  <video
                    src={project.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Info Container */}
              <div className="w-full md:w-2/5 p-8 flex flex-col justify-center">
                <span className="text-brand-glow text-xs font-bold tracking-widest uppercase mb-2">
                  {project.category}
                </span>
                <h2 className="text-3xl font-bold text-white mb-6">
                  {project.title}
                </h2>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-brand-text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
