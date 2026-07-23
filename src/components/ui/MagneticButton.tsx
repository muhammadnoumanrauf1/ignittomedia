"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = (
  | (React.ComponentPropsWithoutRef<typeof motion.button> & { as?: "button"; href?: undefined })
  | (React.ComponentPropsWithoutRef<typeof motion.a> & { as: "a"; href: string })
) & {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

export default function MagneticButton({
  children,
  className,
  variant = "primary",
  as = "button",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<any>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative overflow-hidden rounded-full font-medium transition-colors duration-300 interactive inline-flex items-center justify-center cursor-pointer";
  const variants = {
    primary: "bg-brand-glow text-brand-bg px-8 py-4 glow-shadow hover:bg-white",
    secondary: "bg-transparent text-white border border-white/20 px-8 py-4 hover:border-brand-glow hover:text-brand-glow hover:bg-brand-glow/10",
  };

  if (as === "a") {
    const aProps = props as React.ComponentPropsWithoutRef<typeof motion.a>;
    return (
      <motion.a
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className={cn(baseStyles, variants[variant], className)}
        {...aProps}
      >
        <span className="relative z-10">{children}</span>
      </motion.a>
    );
  }

  const buttonProps = props as React.ComponentPropsWithoutRef<typeof motion.button>;
  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(baseStyles, variants[variant], className)}
      {...buttonProps}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
