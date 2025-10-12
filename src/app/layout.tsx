import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import IntroOverlay from "@/components/IntroOverlay"; // ⬅️ new (next step adds it)

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Your Name — VFX & Front-End",
  description:
    "Interactive VFX portfolio built with Next.js, TypeScript, Tailwind, and Framer Motion.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // ⬇️ make dark the default
    <html lang="en" className="h-full dark">
      <body className={`${inter.className} min-h-screen bg-neutral-950 text-neutral-100`}>
        {/* Intro overlay (plays once per session) */}
        <IntroOverlay />

        {/* Header (shared) */}
        <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
          <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-6" aria-label="Primary">
          <Link href="/" className="flex items-center gap-2">
              <img src="/chrisc.png" alt="Logo" className="h-6 w-auto" />
              <span className="sr-only">Home</span>
            </Link>
            <div className="ml-auto flex gap-4">
              <Link className="underline underline-offset-4" href="/work">Work</Link>
              <Link className="underline underline-offset-4" href="/about">About</Link>
              <Link className="underline underline-offset-4" href="/#contact">Contact</Link>
            </div>
            <a
              href="#content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-white text-black px-3 py-2 rounded"
            >
              Skip to content
            </a>
          </nav>
        </header>

        {children}

        {/* Footer (shared) */}
        <footer id="contact" className="border-t border-white/10 mt-10">
          <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-neutral-400">
            Contact:{" "}
            <a className="underline underline-offset-4" href="mailto:chriscvisuals@gmail.com">
              chriscvisuals@gmail.com
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}


