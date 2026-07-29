"use client";

import { useEffect } from "react";

const SECTION_TITLES: Record<string, string> = {
  hero: "IgnittoMedia | Transform Raw Footage Into High-Growth Content",
  story: "IgnittoMedia | Our 4 Core Pillars of Scalable Content",
  metrics: "IgnittoMedia | 20M+ Views & Proven Track Record",
  services: "IgnittoMedia | End-to-End Video Production Services",
  portfolio: "IgnittoMedia | Selected Portfolio Works & Case Studies",
  folder: "IgnittoMedia | Client Deliverables Vault",
  process: "IgnittoMedia | Seamless Production & Iteration Pipeline",
  testimonials: "IgnittoMedia | Client Wall of Love & Reviews",
  contact: "IgnittoMedia | Book a Strategy Call",
  cta: "IgnittoMedia | Book a Strategy Call",
};

export default function DynamicPageTitle() {
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const activeSections = new Map<string, number>();

    const updateTitle = () => {
      let highestRatio = -1;
      let activeId = "hero";

      activeSections.forEach((ratio, id) => {
        if (ratio > highestRatio) {
          highestRatio = ratio;
          activeId = id;
        }
      });

      const newTitle = SECTION_TITLES[activeId];
      if (newTitle && document.title !== newTitle) {
        document.title = newTitle;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (!id) return;

          if (entry.isIntersecting) {
            activeSections.set(id, entry.intersectionRatio);
          } else {
            activeSections.delete(id);
          }
        });
        updateTitle();
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7],
        rootMargin: "-10% 0px -20% 0px",
      }
    );

    // Observe all sections matching key IDs
    const sectionIds = Object.keys(SECTION_TITLES);
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
