import Navbar from "@/components/sections/Navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";
import BackgroundAtmosphere from "@/components/ui/BackgroundAtmosphere";

export default function RefundPolicy() {
  return (
    <div className="relative w-full bg-brand-bg min-h-screen font-sans selection:bg-white/20 overflow-x-hidden">
      <BackgroundAtmosphere />
      <Navbar />
      
      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-40 pb-32 bg-brand-bg text-white border-b border-white/10 shadow-2xl rounded-b-[40px] md:rounded-b-[80px] text-left">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-8 text-white">Refund Policy</h1>
        
        <div className="space-y-6 text-brand-text-secondary leading-relaxed font-light">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold tracking-wide text-white mt-12 mb-4">1. General Policy</h2>
          <p>Due to the nature of our digital services and the immediate time and resources invested in content creation and editing, we generally do not offer refunds once a project has commenced.</p>
          
          <h2 className="text-2xl font-bold tracking-wide text-white mt-12 mb-4">2. Revisions and Adjustments</h2>
          <p>We are committed to delivering high-quality work. Instead of refunds, we offer a dedicated revision process as outlined in your specific project agreement to ensure the final deliverable meets your expectations.</p>

          <h2 className="text-2xl font-bold tracking-wide text-white mt-12 mb-4">3. Exceptional Circumstances</h2>
          <p>Refunds may be granted under exceptional circumstances at our sole discretion, such as if we are entirely unable to deliver the agreed-upon services due to unforeseen internal issues.</p>
          
          <h2 className="text-2xl font-bold tracking-wide text-white mt-12 mb-4">4. Contact Us</h2>
          <p>If you have any questions or concerns regarding our refund policy, please contact us at info@ignittomedia.com before committing to our services.</p>
        </div>
      </main>

      <CinematicFooter />
    </div>
  );
}
