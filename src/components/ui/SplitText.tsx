"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: "words" | "chars";
  as?: React.ElementType;
}

export default function SplitText({
  text,
  className,
  delay = 0,
  type = "words",
  as: Component = "div",
}: SplitTextProps) {
  const words = text.split(" ");
  const chars = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: type === "words" ? 0.08 : 0.03, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  const MotionComponent = motion.create(Component as any);

  return (
    <MotionComponent
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={cn("flex flex-wrap", className)}
    >
      {type === "words"
        ? words.map((word, index) => (
            <motion.span variants={child} key={index} className="mr-[0.25em] inline-block">
              {word}
            </motion.span>
          ))
        : chars.map((char, index) => (
            <motion.span variants={child} key={index} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
    </MotionComponent>
  );
}
