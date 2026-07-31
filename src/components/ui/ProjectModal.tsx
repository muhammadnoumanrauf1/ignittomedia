"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Project } from "@/data/projects";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { GlowCard } from "@/components/ui/spotlight-card";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!project || !mounted) return null;

  // Map aspect ratio to Tailwind classes
  const aspectClass = {
    "16:9": "aspect-video",
    "9:16": "aspect-[9/16] max-h-[50vh] md:max-h-[70vh]",
    "1:1": "aspect-square max-h-[50vh] md:max-h-[70vh]",
    "4:5": "aspect-[4/5] max-h-[50vh] md:max-h-[70vh]",
  }[project.aspectRatio];

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 md:p-12"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Content Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative z-10 w-full max-w-5xl rounded-3xl overflow-y-auto overflow-x-hidden max-h-[90vh] shadow-[0_25px_80px_rgba(0,0,0,0.95)] border border-white/15"
          >
            <GlowCard customSize={true} glowColor="theme" className="w-full min-h-min bg-[#040D1A] border-white/15 !p-0 relative">
              {/* Close Button - Always visible and stacked above modal content & header */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 p-2.5 bg-black/80 hover:bg-brand-glow hover:text-black rounded-full text-white border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-brand-glow shadow-xl active:scale-95 cursor-pointer"
                aria-label="Close Project Modal"
              >
                <X size={20} />
              </button>

              <div className="w-full h-full flex flex-col md:flex-row">
                {/* Video Container */}
                <div className={`w-full md:w-3/5 bg-black flex items-center justify-center ${project.aspectRatio === "9:16" || project.aspectRatio === "4:5" ? "py-6 sm:py-8" : ""}`}>
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
                <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-center">
                  <span className="text-brand-glow text-xs font-bold tracking-widest uppercase mb-2">
                    {project.category}
                  </span>
                  <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-white mb-6">
                    {project.title}
                  </h2>
                  
                  <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-brand-text-muted text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
