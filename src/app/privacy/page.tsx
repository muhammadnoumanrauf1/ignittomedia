import Navbar from "@/components/sections/Navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";
import BackgroundAtmosphere from "@/components/ui/BackgroundAtmosphere";

export default function PrivacyPolicy() {
  return (
    <div className="relative w-full bg-brand-bg min-h-screen font-sans selection:bg-white/20 overflow-x-hidden">
      <BackgroundAtmosphere />
      <Navbar />
      
      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-40 pb-32 bg-brand-bg text-white border-b border-white/10 shadow-2xl rounded-b-[40px] md:rounded-b-[80px] text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-8 text-white text-glow">Privacy Policy</h1>
        
        <div className="space-y-6 text-brand-text-secondary leading-relaxed font-light">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold tracking-wide text-white mt-12 mb-4">1. Information We Collect</h2>
          <p>We collect information you provide directly to us when you use our services, including but not limited to your name, email address, and any content you submit for editing or production.</p>
          
          <h2 className="text-2xl font-bold tracking-wide text-white mt-12 mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and develop new features.</p>

          <h2 className="text-2xl font-bold tracking-wide text-white mt-12 mb-4">3. Information Sharing</h2>
          <p>We do not share your personal information with third parties except as described in this privacy policy, such as with service providers who assist us in operating our business.</p>
          
          <h2 className="text-2xl font-bold tracking-wide text-white mt-12 mb-4">4. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at info@ignittomedia.com.</p>
        </div>
      </main>

      <CinematicFooter />
    </div>
  );
}
