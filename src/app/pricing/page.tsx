import type { Metadata } from "next";
import PricingClientView from "./PricingClientView";

export const metadata: Metadata = {
  title: "Pricing & Video Packages | IgnittoMedia",
  description:
    "Transparent pricing for real estate short-form and long-form video editing packages. Fixed per-video pricing with 2 revision rounds and professional attention engineering.",
  alternates: {
    canonical: "https://ignittomedia.com/pricing",
  },
  openGraph: {
    title: "Pricing & Video Packages | IgnittoMedia",
    description:
      "Transparent pricing for real estate short-form and long-form video editing packages with guaranteed turnarounds and dedicated editors.",
    url: "https://ignittomedia.com/pricing",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IgnittoMedia Pricing Packages" }],
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-white flex flex-col justify-between selection:bg-brand-glow selection:text-black">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-glow/10 rounded-full blur-[160px]" />
        <div className="absolute top-[800px] right-10 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[140px]" />
      </div>

      <PricingClientView />
    </div>
  );
}
