import Image from "next/image";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#010B14] py-16 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center space-x-3">
            <Image 
              src="/ignitto-media-logo.png" 
              alt="IgnittoMedia Logo" 
              width={160} 
              height={40} 
              className="object-contain"
            />
          </div>
          <p className="text-brand-text-muted text-sm text-center md:text-left max-w-xs">
            Content that builds authority, earns trust, and drives measurable growth.
          </p>
        </div>
        
        <nav className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-medium text-brand-text-secondary">
          <a href="#problem" className="hover:text-brand-glow transition-colors interactive">Problem</a>
          <a href="#services" className="hover:text-brand-glow transition-colors interactive">Services</a>
          <a href="#process" className="hover:text-brand-glow transition-colors interactive">Process</a>
          <a href="#story" className="hover:text-brand-glow transition-colors interactive">Story</a>
          <a href="#metrics" className="hover:text-brand-glow transition-colors interactive">Metrics</a>
          <a href="#portfolio" className="hover:text-brand-glow transition-colors interactive">Portfolio</a>
          <a href="#contact" className="hover:text-brand-glow transition-colors interactive">Contact</a>
        </nav>

        <div className="flex items-center gap-6 text-sm">
          <a href="mailto:info@ignittomedia.com" aria-label="Email" className="text-brand-text-secondary hover:text-brand-glow transition-colors interactive">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/ignittomedia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-brand-text-secondary hover:text-brand-glow transition-colors interactive">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://www.facebook.com/ignittomedia" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-brand-text-secondary hover:text-brand-glow transition-colors interactive">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/ignitto-media" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-brand-text-secondary hover:text-brand-glow transition-colors interactive">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto w-full mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-text-muted">
        <p>&copy; {new Date().getFullYear()} IgnittoMedia. All rights reserved.</p>
      </div>
    </footer>
  );
}
