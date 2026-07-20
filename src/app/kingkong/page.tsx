import React from "react";
import ScrollZoomHero from "@/components/kingkong/ScrollZoomHero";
import SalesLetter from "@/components/kingkong/SalesLetter";

export const metadata = {
  title: "Like Steroids For Your Brand | Scroll Zoom | IgnittoMedia",
  description: "We don't edit videos. We engineer attention. Scaling organic presence with direct-response video systems.",
};

export default function KingKongPage() {
  return (
    <div className="relative w-full bg-brand-bg min-h-screen text-white selection:bg-brand-glow/30 selection:text-white">
      {/* 380vh scroll-driven pinned hero scene */}
      <ScrollZoomHero />
      
      {/* Normal scrolling content section */}
      <SalesLetter />
    </div>
  );
}
