export default function Footer() {
  return (
    <footer className="bg-[#010B14] py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-sm bg-brand-glow" />
          <span className="font-bold text-xl tracking-tight">IGNITTOMEDIA</span>
        </div>
        
        <nav className="flex items-center gap-8 text-sm font-medium text-brand-text-muted">
          <a href="#" className="hover:text-brand-glow transition-colors interactive">Services</a>
          <a href="#" className="hover:text-brand-glow transition-colors interactive">Work</a>
          <a href="#" className="hover:text-brand-glow transition-colors interactive">Process</a>
        </nav>

        <div className="flex items-center gap-6 text-sm">
          <a href="mailto:hello@ignittomedia.com" className="text-brand-text-muted hover:text-brand-glow transition-colors interactive">hello@ignittomedia.com</a>
          <a href="#" className="text-brand-text-muted hover:text-brand-glow transition-colors interactive">Twitter</a>
          <a href="#" className="text-brand-text-muted hover:text-brand-glow transition-colors interactive">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
