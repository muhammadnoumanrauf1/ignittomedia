"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

const metrics = [
  { value: 100, suffix: "+", label: "Projects Delivered", ssrValue: "100+" },
  { value: 20, suffix: "M+", label: "Views Generated", ssrValue: "20M+" },
  { value: 96, suffix: "%", label: "Client Retention", ssrValue: "96%" },
  { value: 48, suffix: "H", label: "Average Turnaround", ssrValue: "48H" },
];

function CountUp({ to, suffix, ssrValue }: { to: number; suffix: string; ssrValue: string }) {
  const count = useMotionValue(to); // Start at real value for SSR — avoids 0+ showing before JS
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Only animate downward then back up once, on first view
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      count.set(0);
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [count, to, isInView]);

  return (
    <motion.span ref={ref} aria-label={ssrValue}>
      {rounded}
    </motion.span>
  );
}

export default function Metrics() {
  return (
    <section className="relative bg-brand-bg-secondary py-32 px-6 border-y border-white/5" aria-label="Key metrics">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
            className="flex-1"
          >
            <div className="h-full flex flex-col items-center justify-center p-8 bg-transparent">
              <h4 className="text-5xl md:text-7xl font-bold text-brand-glow mb-4 text-glow pointer-events-none">
                <CountUp to={metric.value} suffix={metric.suffix} ssrValue={metric.ssrValue} />
              </h4>
              <p className="text-brand-text-muted text-sm md:text-base uppercase tracking-[0.2em] font-medium pointer-events-none">
                {metric.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
