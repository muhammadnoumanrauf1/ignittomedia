"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const footerElement = document.getElementById("footer-reveal");
    if (!footerElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the footer wrapper is visible
    );

    observer.observe(footerElement);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header 
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[60] transition-all duration-500 w-[95%] max-w-5xl rounded-full ${
          isFooterVisible && !isMobileMenuOpen
            ? "-translate-y-32 opacity-0 pointer-events-none" 
            : "translate-y-0 opacity-100"
        } ${
          scrolled || isMobileMenuOpen
            ? "py-3 px-6 bg-brand-bg/80 backdrop-blur-md border border-white/10 shadow-2xl" 
            : "py-4 px-6 bg-transparent"
        }`}
      >
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative flex items-center group" onClick={() => setIsMobileMenuOpen(false)}>
            <Image 
              src="/ignitto-media-logo.png" 
              alt="Ignitto Media" 
              width={160} 
              height={40} 
              className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-brand-text-secondary hover:text-brand-glow transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="#contact">
              <MagneticButton>
                <span className="relative z-10 font-semibold tracking-wide text-sm px-4">Book a Call</span>
              </MagneticButton>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-brand-text hover:text-brand-glow transition-colors z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-brand-bg/95 md:hidden flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center space-y-8 w-full px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-bold text-white hover:text-brand-glow transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1 + navLinks.length * 0.05 }}
                className="pt-8 w-full max-w-[200px]"
              >
                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full">
                  <div className="w-full py-4 rounded-full bg-brand-glow/10 border border-brand-glow/30 text-brand-glow text-center font-bold text-lg hover:bg-brand-glow hover:text-black transition-all">
                    Book a Call
                  </div>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
