import Navbar from "@/components/sections/Navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";
import BackgroundAtmosphere from "@/components/ui/BackgroundAtmosphere";

export default function TermsOfService() {
  return (
    <div className="relative w-full bg-brand-bg min-h-screen font-sans selection:bg-white/20 overflow-x-hidden">
      <BackgroundAtmosphere />
      <Navbar />
      
      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-40 pb-32 bg-brand-bg text-white border-b border-white/10 shadow-2xl rounded-b-[40px] md:rounded-b-[80px] text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white text-glow">Terms of Service</h1>
        
        <div className="space-y-6 text-brand-text-secondary leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold text-white mt-12 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.</p>
          
          <h2 className="text-2xl font-semibold text-white mt-12 mb-4">2. Services Provided</h2>
          <p>IgnittoMedia provides content creation, editing, and growth strategy services. We reserve the right to refuse service to anyone for any reason at any time.</p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-4">3. Intellectual Property</h2>
          <p>All finalized content delivered to you becomes your intellectual property upon full payment, subject to our right to use the work in our portfolio unless explicitly agreed otherwise.</p>
          
          <h2 className="text-2xl font-semibold text-white mt-12 mb-4">4. Limitation of Liability</h2>
          <p>In no event shall IgnittoMedia, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential or punitive damages arising out of your use of our services.</p>
        </div>
      </main>

      <CinematicFooter />
    </div>
  );
}
