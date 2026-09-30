"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Video, Sparkles, CheckCircle2 } from "lucide-react";
import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

export type PackageId =
  | "1-short-form"
  | "5-short-form"
  | "1-long-form"
  | "5-long-form";

export interface PackageOrderModalProps {
  isOpen?: boolean;
  packageId?: PackageId | null;
  onClose?: () => void;
}

interface PackageConfig {
  id: PackageId;
  badge: string;
  title: string;
  price: string;
  formId: string;
  formName: string;
  src: string;
  iframeId: string;
  defaultHeight: string;
}

const PACKAGES: Record<PackageId, PackageConfig> = {
  "1-short-form": {
    id: "1-short-form",
    badge: "Up to 90s Video",
    title: "1 Short-Form Video Package (Up to 90s)",
    price: "$100",
    formId: "cl1pQ2r2uD27hz8MTad2",
    formName: "1 Short-Form Videos",
    src: "https://link.ignitto.com/widget/form/cl1pQ2r2uD27hz8MTad2",
    iframeId: "inline-cl1pQ2r2uD27hz8MTad2",
    defaultHeight: "951px",
  },
  "5-short-form": {
    id: "5-short-form",
    badge: "Most Popular (Up to 90s)",
    title: "5 Short-Form Videos Package (Up to 90s each)",
    price: "$397",
    formId: "yTylkrKJFgKmACI3nua2",
    formName: "5 Short-Form Videos",
    src: "https://link.ignitto.com/widget/form/yTylkrKJFgKmACI3nua2",
    iframeId: "inline-yTylkrKJFgKmACI3nua2",
    defaultHeight: "935px",
  },
  "1-long-form": {
    id: "1-long-form",
    badge: "Single Long-Form",
    title: "1 Long-Form Video Package",
    price: "$250",
    formId: "FlER7hXxdVgE5lh1tvQH",
    formName: "1 Long - Form Videos",
    src: "https://link.ignitto.com/widget/form/FlER7hXxdVgE5lh1tvQH",
    iframeId: "inline-FlER7hXxdVgE5lh1tvQH",
    defaultHeight: "919px",
  },
  "5-long-form": {
    id: "5-long-form",
    badge: "Best Value Package",
    title: "5 Long-Form Videos Package",
    price: "$1,197",
    formId: "Uvlxq5c7o05TuS5FSo65",
    formName: "5 Long - Form Videos",
    src: "https://link.ignitto.com/widget/form/Uvlxq5c7o05TuS5FSo65",
    iframeId: "inline-Uvlxq5c7o05TuS5FSo65",
    defaultHeight: "919px",
  },
};

const emptySubscribe = () => () => {};

export default function PackageOrderModal({
  isOpen: controlledIsOpen,
  packageId: controlledPackageId,
  onClose: controlledOnClose,
}: PackageOrderModalProps = {}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [internalPackageId, setInternalPackageId] = useState<PackageId>("1-short-form");
  const [iframeHeight, setIframeHeight] = useState("950px");

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;
  const activePackageId = (isControlled ? controlledPackageId : internalPackageId) || "1-short-form";
  const activePackage = PACKAGES[activePackageId] || PACKAGES["1-short-form"];

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

  // Global event listeners for opening package order popup from any button
  useEffect(() => {
    if (isControlled) return;

    const handleOpenPackageOrder = (e: Event) => {
      const customEvent = e as CustomEvent<{ packageId?: PackageId }>;
      const pkgId = customEvent.detail?.packageId;
      if (pkgId && PACKAGES[pkgId]) {
        setInternalPackageId(pkgId);
      }
      setInternalIsOpen(true);
    };

    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === "#order-1-video" || hash === "#1-short-form") {
        setInternalPackageId("1-short-form");
        setInternalIsOpen(true);
      } else if (hash === "#order-5-videos" || hash === "#5-short-form") {
        setInternalPackageId("5-short-form");
        setInternalIsOpen(true);
      } else if (hash === "#order-1-long-form" || hash === "#1-long-form") {
        setInternalPackageId("1-long-form");
        setInternalIsOpen(true);
      } else if (hash === "#order-5-long-form" || hash === "#5-long-form") {
        setInternalPackageId("5-long-form");
        setInternalIsOpen(true);
      }
    };

    const handleGlobalClicks = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const orderBtn = target.closest(
        '[data-package-order], a[href="#order-1-video"], a[href="#order-5-videos"]'
      ) as HTMLElement | null;

      if (orderBtn) {
        e.preventDefault();
        const pkgAttr = orderBtn.getAttribute("data-package-order") as PackageId | null;
        const href = orderBtn.getAttribute("href");

        if (pkgAttr && PACKAGES[pkgAttr]) {
          setInternalPackageId(pkgAttr);
        } else if (href?.includes("5-video")) {
          setInternalPackageId("5-short-form");
        } else {
          setInternalPackageId("1-short-form");
        }
        setInternalIsOpen(true);
      }
    };

    window.addEventListener("open-package-order", handleOpenPackageOrder);
    window.addEventListener("hashchange", handleHash);
    document.addEventListener("click", handleGlobalClicks);

    handleHash();

    return () => {
      window.removeEventListener("open-package-order", handleOpenPackageOrder);
      window.removeEventListener("hashchange", handleHash);
      document.removeEventListener("click", handleGlobalClicks);
    };
  }, [isControlled]);

  // Reset initial height whenever active package changes
  useEffect(() => {
    if (activePackage?.defaultHeight) {
      setIframeHeight(activePackage.defaultHeight);
    }
  }, [activePackageId, activePackage]);

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

  // Load LeadConnector form_embed script & initialize iFrameResize on the active package iframe
  useEffect(() => {
    if (!isOpen) return;

    const scriptSrc = "https://link.ignitto.com/js/form_embed.js";
    let script = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement | null;

    const initResizer = () => {
      if (typeof window !== "undefined" && (window as any).iFrameResize && activePackage) {
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
            `#${activePackage.iframeId}`
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
  }, [isOpen, activePackage]);

  // Listen for HighLevel iframe resize messages and successful form submissions
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
          return; // Do not check submission on resize events
        }

        // Form submitted successfully -> redirect to /thank-you page
        const isFormSubmitted =
          dataStr.includes("form-submitted") ||
          dataStr.includes("form_submitted") ||
          dataStr.includes("leadCollected") ||
          dataStr.includes("lead_collected") ||
          dataStr.includes("formSubmissionSuccess");

        if (isFormSubmitted) {
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
          aria-labelledby="package-order-modal-title"
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
            {/* Header */}
            <div className="relative px-5 py-4 sm:px-7 sm:py-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-brand-accent/10 via-[#040D1A] to-brand-glow/10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent shrink-0">
                  <Video size={16} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2
                      id="package-order-modal-title"
                      className="text-base sm:text-lg font-bold text-white tracking-tight"
                    >
                      {activePackage.title}
                    </h2>
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-mono font-bold bg-brand-accent/20 text-brand-accent border border-brand-accent/30">
                      {activePackage.price}
                    </span>
                  </div>
                  <p className="text-brand-text-secondary text-xs font-light hidden sm:block">
                    Fill in your details below to initiate your editing workflow.
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="p-2 bg-black/60 hover:bg-brand-glow hover:text-black rounded-full text-white border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-brand-glow shadow-xl active:scale-95 cursor-pointer shrink-0 ml-4"
                aria-label="Close Package Order Modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body / Embedded HighLevel Form */}
            <div className="flex-1 overflow-y-auto p-1 sm:p-3 bg-black/40 min-h-0">
              <div className="w-full rounded-2xl bg-white overflow-hidden shadow-inner">
                <iframe
                  key={activePackage.formId}
                  src={activePackage.src}
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: iframeHeight,
                    border: "none",
                    borderRadius: "8px",
                    display: "block",
                  }}
                  id={activePackage.iframeId}
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name={activePackage.formName}
                  data-height={activePackage.defaultHeight.replace("px", "")}
                  data-layout-iframe-id={activePackage.iframeId}
                  data-form-id={activePackage.formId}
                  data-cookie-consent="true"
                  data-cookie-consent-provider="auto"
                  title={activePackage.formName}
                  scrolling="auto"
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
