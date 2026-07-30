import type { Metadata } from "next";
import "./globals.css";
import ClickSpark from "@/components/ui/ClickSpark";

const BASE_URL = "https://ignittomedia.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "IgnittoMedia | We don't edit videos. We engineer attention.",
    template: "%s | IgnittoMedia", 
  },
  description:
    "IgnittoMedia helps founders, creators, and businesses transform raw footage into content that builds authority, earns trust, and drives measurable growth. 100+ projects. 20M+ views. 96% client retention.",
  keywords: [
    "video editing agency",
    "short form video editing",
    "long form video production",
    "YouTube video editor",
    "TikTok video editing",
    "content creation agency",
    "video production for founders",
    "brand video production",
    "motion graphics agency",
    "podcast video editing",
  ],
  authors: [{ name: "IgnittoMedia", url: BASE_URL }],
  creator: "IgnittoMedia",
  publisher: "IgnittoMedia",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "IgnittoMedia",
    title: "IgnittoMedia | We don't edit videos. We engineer attention.",
    description:
      "Transform raw footage into content that builds authority, earns trust, and drives measurable growth. 100+ projects delivered. 20M+ views generated.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IgnittoMedia — We engineer attention through video.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ignittomedia",
    creator: "@ignittomedia",
    title: "IgnittoMedia | We engineer attention.",
    description:
      "Transform raw footage into content that builds authority, earns trust, and drives measurable growth.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [
      { url: "/favicon.png", type: "image/png" },
    ],
  },
};

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "IgnittoMedia",
  url: BASE_URL,
  logo: `${BASE_URL}/ignitto-media-logo.png`,
  description:
    "Video production studio helping founders, creators, and businesses build authority through engineered video content. Specializing in short form, long form, commercial, podcast, motion graphics, and creative direction.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    url: `${BASE_URL}/#contact`,
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "Video Editing",
    "Short Form Video",
    "Long Form Video",
    "Content Strategy",
    "Motion Graphics",
    "Podcast Production",
    "Brand Video Production",
    "Creative Direction",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "IgnittoMedia",
  url: BASE_URL,
  description:
    "We don't edit videos. We engineer attention.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IgnittoMedia Services",
  description: "Video production and editing services offered by IgnittoMedia",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Short Form Video Editing",
        description:
          "High-retention vertical content engineered for algorithmic growth on TikTok, Reels, and Shorts.",
        provider: { "@type": "Organization", name: "IgnittoMedia" },
        url: `${BASE_URL}/#services`,
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Long Form Video Production",
        description:
          "Documentaries, YouTube essays, and deep-dive content that retains viewers for 20+ minutes.",
        provider: { "@type": "Organization", name: "IgnittoMedia" },
        url: `${BASE_URL}/#services`,
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Commercial Video Production",
        description:
          "High-end brand narratives and advertising campaigns that convert.",
        provider: { "@type": "Organization", name: "IgnittoMedia" },
        url: `${BASE_URL}/#services`,
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Podcast Video Production",
        description:
          "Multi-cam switching, color grading, and audio mastering for professional shows.",
        provider: { "@type": "Organization", name: "IgnittoMedia" },
        url: `${BASE_URL}/#services`,
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Motion Graphics",
        description:
          "Custom animations, UI mockups, and visual effects that explain complex ideas.",
        provider: { "@type": "Organization", name: "IgnittoMedia" },
        url: `${BASE_URL}/#services`,
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "Creative Direction",
        description:
          "Thumbnails, hooks, and complete visual strategy designed to maximize CTR.",
        provider: { "@type": "Organization", name: "IgnittoMedia" },
        url: `${BASE_URL}/#services`,
      },
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What video editing services does IgnittoMedia offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IgnittoMedia offers short form video editing (Reels, TikTok, Shorts), long form YouTube video production, commercial & brand ad editing, podcast video editing, motion graphics, and full creative direction.",
      },
    },
    {
      "@type": "Question",
      name: "How does IgnittoMedia engineer video retention?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We combine front-loaded cold open hooks, rapid pattern interrupt cuts, kinetic typography, motion graphics, beat-synced pacing, and sound design to keep viewers engaged from the first second.",
      },
    },
    {
      "@type": "Question",
      name: "What is IgnittoMedia's turn-around time for video edits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Short-form edits are typically delivered within 24-48 hours. Long-form and commercial projects are delivered according to agreed milestone schedules.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${BASE_URL}/#services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Portfolio",
      item: `${BASE_URL}/#portfolio`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Deliverables Vault",
      item: `${BASE_URL}/#deliverables`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Testimonials",
      item: `${BASE_URL}/#testimonials`,
    },
  ],
};

import Navbar from "@/components/sections/Navbar";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import DynamicPageTitle from "@/components/ui/DynamicPageTitle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased bg-brand-bg text-brand-text"
    >
      <head>
        {/* Google Analytics Tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7YHE98KXLX"
        />
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7YHE98KXLX');
            `,
          }}
        />

        {/* JSON-LD Structured Data */}
        <script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          id="schema-services"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
        <script
          id="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          id="schema-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col relative" suppressHydrationWarning>
        <DynamicPageTitle />
        {/* Global Full-Website Progressive Viewport Blur Edge Masks */}
        <ProgressiveBlur position="fixed-top" height="120px" blurAmount="24px" />
        <ProgressiveBlur position="fixed-bottom" height="120px" blurAmount="24px" hideWhenVisible="#footer-reveal" />

        <ClickSpark sparkColor="#00DFA2" sparkSize={12} sparkRadius={40} sparkCount={10} duration={500} />
        <Navbar />
        {children}

        {/* Ignitto External Tracking Script */}
        <script
          src="https://link.ignitto.com/js/external-tracking.js"
          data-tracking-id="tk_e587a8609db741368adf911c7423e5bb"
        />
      </body>
    </html>
  );
}
