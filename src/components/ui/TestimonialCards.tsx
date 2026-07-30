"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TestimonialItem {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar?: string;
  rating?: number;
  tag?: string;
  featured?: boolean;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 1,

    quote: "IgnittoMedia brought a level of strategy and creativity that completely elevated our content. Their attention to storytelling, pacing, and visual detail helped us produce videos that not only looked premium but also performed exceptionally well. They feel like a true extension of our team rather than just an editing service.",
    name: "Lewis Maguire",
    role: "Brand Strategist & Producer",
    avatar: "/lewis.JPG",
    rating: 5,
    tag: "Featured Partner",
    featured: true
  },
  {
    id: 2,
    quote: "Partnering with IgnittoMedia has been one of the best decisions for my content. They don't just edit videos; they understand the psychology behind keeping viewers engaged. Every project has been delivered on time, communication has been seamless, and the quality consistently exceeds my expectations. I can now focus on creating while knowing my content is in expert hands.",
    name: "Muhammad Nouman",
    role: "Content Creator & Founder",
    avatar: "/nouman-image.png",
    rating: 5,
    tag: "Featured Partner",
    featured: true
  },
  {
    id: 3,
    quote: "The turnaround speed is incredible, but what impressed us most was the strategic thinking behind every edit. Hooks are stronger, pacing is tighter, and viewers are staying engaged much longer than before.",
    name: "Personal Brand Founder",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    tag: "Strategic Pacing"
  },
  {
    id: 4,
    quote: "IgnittoMedia feels less like a freelancer and more like an extension of our marketing team. Communication is seamless, revisions are fast, and they consistently deliver content that aligns perfectly with our brand.",
    name: "Marketing Director",
    role: "E-commerce Brand",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    tag: "Seamless Handoff"

  },
  {
    id: 5,
    quote: "Before working with IgnittoMedia, publishing content felt like a bottleneck. Now our pipeline runs effortlessly. We simply record, upload, and receive videos that are optimized for every platform. It's been one of the best investments we've made.",
    name: "CEO",
    role: "Digital Agency",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    tag: "Pipeline Efficiency"
  },
  {
    id: 6,
    quote: "What separates IgnittoMedia is their obsession with attention. Every cut, every transition, every sound effect has a purpose. The final product keeps people watching, and that's exactly what today's platforms reward.",
    name: "Business Coach",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    tag: "Attention Retention"
  },
  {
    id: 7,
    quote: "Professional, reliable, and incredibly creative. They don't just make videos look better—they make the message stronger. Our audience immediately noticed the difference in quality.",
    name: "Founder",
    role: "B2B Company",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    tag: "Brand Elevation"
  },
  {
    id: 8,
    quote: "From our very first project, the process was effortless. Fast delivery, clear communication, and edits that exceeded expectations. IgnittoMedia has become our long-term creative partner.",
    name: "Podcast Host",
    role: "Media Network",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    tag: "Long-term Partner"
  },
  {
    id: 9,
    quote: "We've worked with multiple editing teams over the years, but IgnittoMedia operates on a different level. They understand storytelling, pacing, and psychology—not just editing. Every video feels intentional, and our engagement has consistently improved since partnering with them.",
    name: "YouTube Creator",
    role: "500K+ Subscribers",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    tag: "Engagement Growth"
  },
  {
    id: 10,
    quote: "Working with IgnittoMedia completely transformed our content workflow. Instead of spending hours inside editing software, we focused on growing the business while every video arrived polished, engaging, and ready to publish. The difference wasn't just in production quality—it was in audience retention and overall brand perception.",
    name: "Founder",
    role: "SaaS Company",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    tag: "Workflow Transformation"
  }
];

export default function TestimonialCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const total = testimonialsData.length;

  // Auto-scroll effect (advances smoothly every 5 seconds, pauses on hover)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, total]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const currentItem = testimonialsData[currentIndex];

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.97,
      filter: "blur(4px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.35,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 60 : -60,
      opacity: 0,
      scale: 0.97,
      filter: "blur(4px)",
      transition: {
        duration: 0.25,
        ease: [0.25, 1, 0.5, 1],
      },
    }),
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center py-6 px-4 overflow-visible relative">

      {/* Top Controls Bar: Counter Badge & Action Arrows */}
      <div className="w-full max-w-2xl flex items-center justify-between mb-6 z-30 px-2">
        {/* Index Counter Badge */}
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00b3dd]/30 bg-[#031e41]/80 backdrop-blur-md text-xs font-mono font-bold text-[#00b3dd] shadow-md">
            <Sparkles size={13} className="text-[#00DFA2] animate-pulse" />
            <span>
              {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Action Arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="w-11 h-11 rounded-full border border-white/10 bg-[#031e41]/80 backdrop-blur-md flex items-center justify-center text-white hover:text-[#00b3dd] hover:border-[#00b3dd]/50 hover:bg-[#031e41] active:scale-95 transition-all shadow-lg"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="w-11 h-11 rounded-full border border-[#00b3dd]/40 bg-[#00b3dd]/10 backdrop-blur-md flex items-center justify-center text-[#00b3dd] hover:text-black hover:bg-[#00b3dd] active:scale-95 transition-all shadow-[0_0_20px_rgba(0,179,221,0.25)]"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Movable Spotlight Testimonial Card */}
      <div className="w-full max-w-2xl min-h-0 sm:min-h-[380px] flex items-center justify-center relative z-20">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipeThreshold = 50;
              if (offset.x < -swipeThreshold || velocity.x < -300) {
                handleNext();
              } else if (offset.x > swipeThreshold || velocity.x > 300) {
                handlePrev();
              }
            }}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative w-full rounded-2xl sm:rounded-3xl border border-[#00b3dd]/35 bg-[#031e41]/95 backdrop-blur-2xl p-4 sm:p-8 md:p-10 shadow-[0_25px_60px_rgba(3,30,65,0.95)] hover:shadow-[0_30px_70px_rgba(0,179,221,0.3)] transition-all duration-500 cursor-grab active:cursor-grabbing overflow-hidden flex flex-col justify-between"
          >
            {/* Interactive Dynamic Cursor Spotlight Glow */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-3xl z-10"
              style={{
                background: isHovered
                  ? `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 223, 162, 0.18), rgba(0, 179, 221, 0.1), transparent 80%)`
                  : "none",
              }}
            />

            <div>
              {/* Card Header: Rating + Tag */}
              <div className="flex items-center justify-between mb-4 sm:mb-6 relative z-20">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: currentItem.rating || 5 }).map((_, i) => (
                    <Star key={i} size={15} className="sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {currentItem.tag && (
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#00DFA2] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#00DFA2]/10 border border-[#00DFA2]/20">
                    {currentItem.tag}
                  </span>
                )}
              </div>

              {/* Quote Mark */}
              <div className="mb-2 sm:mb-4 relative z-20 text-[#00b3dd]/40">
                <Quote size={28} className="sm:w-10 sm:h-10 rotate-180" />
              </div>

              {/* Quote Body Text */}
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light mb-4 sm:mb-8 relative z-20">
                "{currentItem.quote}"
              </p>
            </div>

            {/* Author Footer */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/10 relative z-20">
              <div className="size-12 sm:size-14 rounded-full bg-gradient-to-br from-[#00b3dd] via-[#00DFA2] to-[#006b75] flex items-center justify-center overflow-hidden shrink-0 border-2 border-white/20 shadow-md">
                {currentItem.avatar ? (
                  <img src={currentItem.avatar} alt={currentItem.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xl">✨</span>
                )}
              </div>

              <div>
                <h4 className="font-bold text-white text-base sm:text-lg tracking-wide">
                  {currentItem.name}
                </h4>
                <p className="text-[#C8D5E0] text-xs sm:text-sm font-semibold">
                  {currentItem.role}
                </p>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots Bar */}
      <div className="flex items-center justify-center gap-2 mt-8 z-30 flex-wrap max-w-full px-4">
        {testimonialsData.map((item, index) => (
          <button
            key={item.id}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300 focus:outline-none",
              currentIndex === index
                ? "w-9 bg-[#00b3dd] shadow-[0_0_12px_rgba(0,179,221,0.6)]"
                : "w-2.5 bg-white/20 hover:bg-white/40"
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

