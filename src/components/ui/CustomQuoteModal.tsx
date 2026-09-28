"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar } from "lucide-react";
import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

interface CustomQuoteModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const emptySubscribe = () => () => {};

export default function CustomQuoteModal({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
}: CustomQuoteModalProps = {}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [iframeHeight, setIframeHeight] = useState("900px");

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleClose = () => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  // Global listeners for opening custom quote popup from anywhere
  useEffect(() => {
    // If controlled by parent (like on Pricing page), skip global event listeners to prevent duplicate instances
    if (isControlled) return;

    const handleOpenCustomQuote = () => {
      setInternalIsOpen(true);
    };

    const handleHash = () => {
      if (window.location.hash === "#custom-quote" || window.location.hash === "#quote") {
        setInternalIsOpen(true);
      }
    };

    const handleGlobalClicks = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const quoteBtn = target.closest(
        '[data-open-quote="true"], [data-open-custom-quote="true"], a[href="#custom-quote"], a[href="/#custom-quote"], a[href="/pricing#custom-quote"]'
      );
      if (quoteBtn) {
        e.preventDefault();
        setInternalIsOpen(true);
      }
    };

    window.addEventListener("open-custom-quote", handleOpenCustomQuote);
    window.addEventListener("hashchange", handleHash);
    document.addEventListener("click", handleGlobalClicks);

    // Initial hash check on mount
    handleHash();

    return () => {
      window.removeEventListener("open-custom-quote", handleOpenCustomQuote);
      window.removeEventListener("hashchange", handleHash);
      document.removeEventListener("click", handleGlobalClicks);
    };
  }, [isControlled]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Load LeadConnector form_embed script & initialize iFrameResize on the modal iframe
  useEffect(() => {
    if (!isOpen) return;

    const scriptSrc = "https://link.ignitto.com/js/form_embed.js";
    let script = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement | null;

    const initResizer = () => {
      if (typeof window !== "undefined" && (window as any).iFrameResize) {
        try {
          (window as any).iFrameResize(
            {
              log: false,
              checkOrigin: false,
              enablePublicMethods: true,
              scrolling: true,
              autoResize: true,
              sizeHeight: true,
            },
            "#DogUPsjbSk7gsEqnoDqm_1790589064182"
          );
        } catch {
          // Safe fallback
        }
      }
    };

    if (!script) {
      script = document.createElement("script");
      script.src = scriptSrc;
      script.type = "text/javascript";
      script.async = true;
      script.onload = () => {
        setTimeout(initResizer, 100);
      };
      document.body.appendChild(script);
    } else {
      setTimeout(initResizer, 100);
      window.dispatchEvent(new Event("resize"));
    }
  }, [isOpen]);

  // Listen for HighLevel iframe resize messages and booking completion
  useEffect(() => {
    if (!isOpen) return;

    const handleWidgetMessage = (e: MessageEvent) => {
      try {
        const dataStr = typeof e.data === "string" ? e.data : JSON.stringify(e.data || {});

        // Automatically expand height when HighLevel iFrameSizer sends resize data
        if (typeof e.data === "string" && e.data.startsWith("[iFrameSizer]")) {
          const parts = e.data.replace("[iFrameSizer]", "").split(":");
          if (parts.length >= 2) {
            const height = parseInt(parts[1], 10);
            if (!isNaN(height) && height > 300) {
              setIframeHeight(`${height + 30}px`);
            }
          }
        }

        // Booking confirmed -> redirect to /thank-you page
        const isBookingComplete =
          dataStr.includes("appointment-booked") ||
          dataStr.includes("appointment_booked") ||
          dataStr.includes("appointmentBooked") ||
          dataStr.includes("booking_successful") ||
          dataStr.includes("bookingSuccessful") ||
          dataStr.includes("GegBtjOZBR7P2aQrQZkf");

        if (isBookingComplete) {
          window.location.href = "/thank-you";
        }
      } catch {
        // Safe fallback
      }
    };

    window.addEventListener("message", handleWidgetMessage);
    return () => window.removeEventListener("message", handleWidgetMessage);
  }, [isOpen]);

  if (!isClient) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="custom-quote-modal-title"
          className="fixed inset-0 z-[99999] flex items-center justify-center p-2 sm:p-4 md:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: "spring", duration: 0.35 }}
            className="relative z-10 w-full max-w-4xl lg:max-w-5xl rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.95)] border border-white/15 bg-[#040D1A] flex flex-col h-[92vh] max-h-[96vh]"
          >
            {/* Compact Modal Header */}
            <div className="relative px-5 py-4 sm:px-7 sm:py-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-brand-accent/10 via-[#040D1A] to-brand-glow/10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent shrink-0">
                  <Calendar size={16} />
                </div>
                <div>
                  <h2
                    id="custom-quote-modal-title"
                    className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2"
                  >
                    <span>Schedule Your <span className="text-brand-glow">Custom Quote</span> Call</span>
                  </h2>
                  <p className="text-brand-text-secondary text-xs font-light hidden sm:block">
                    Select a date & time to walk through your exact video requirements.
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="p-2 bg-black/60 hover:bg-brand-glow hover:text-black rounded-full text-white border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-brand-glow shadow-xl active:scale-95 cursor-pointer shrink-0 ml-4"
                aria-label="Close Custom Quote Modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body / Calendar iframe with smooth scrolling and dynamic height */}
            <div className="flex-1 overflow-y-auto p-1 sm:p-3 bg-black/40 min-h-0">
              <div className="w-full rounded-2xl bg-white overflow-hidden shadow-inner">
                <iframe
                  src="https://link.ignitto.com/widget/booking/GegBtjOZBR7P2aQrQZkf"
                  allow="payment"
                  style={{
                    width: "100%",
                    minHeight: iframeHeight,
                    border: "none",
                    display: "block",
                  }}
                  scrolling="auto"
                  id="DogUPsjbSk7gsEqnoDqm_1790589064182"
                  title="Custom Quote Booking Calendar"
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
