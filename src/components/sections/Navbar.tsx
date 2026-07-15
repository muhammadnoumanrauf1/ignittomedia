"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";

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
    <header 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-5xl rounded-full ${
        isFooterVisible 
          ? "-translate-y-32 opacity-0 pointer-events-none" 
          : "translate-y-0 opacity-100"
      } ${
        scrolled 
          ? "py-3 px-6 bg-brand-bg/80 backdrop-blur-md border border-white/10 shadow-2xl" 
          : "py-4 px-6 bg-transparent"
      }`}
    >
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative flex items-center group">
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

        {/* CTA */}
        <div className="hidden md:block">
          <Link href="#contact">
            <MagneticButton>
              <span className="relative z-10 font-semibold tracking-wide text-sm px-4">Book a Call</span>
            </MagneticButton>
          </Link>
        </div>

        {/* Mobile menu button (simple) */}
        <button className="md:hidden text-brand-text hover:text-brand-glow">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
}
