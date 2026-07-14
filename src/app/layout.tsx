import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClickSpark from "@/components/ui/ClickSpark";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "IgnittoMedia | We don't edit videos. We engineer attention.",
  description: "IgnittoMedia helps founders, creators, and businesses transform raw footage into content that builds authority, earns trust, and drives measurable growth.",
};

import Navbar from "@/components/sections/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased bg-brand-bg text-brand-text`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ClickSpark sparkColor="#00DFA2" sparkSize={12} sparkRadius={40} sparkCount={10} duration={500} />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
