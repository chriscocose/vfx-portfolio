import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Your Name — VFX & Front-End",
  description:
    "Interactive VFX portfolio built with Next.js, TypeScript, Tailwind, and Framer Motion.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-screen bg-white text-neutral-900`}>
        {/* Header (shared) */}
        <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/70 backdrop-blur">
          <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-6" aria-label="Primary">
            <Link href="/" className="font-semibold tracking-tight">
              Your Name — VFX & Front-End
            </Link>
            <div className="ml-auto flex gap-4">
              <Link className="underline underline-offset-4" href="/work">Work</Link>
              <Link className="underline underline-offset-4" href="/about">About</Link>
            </div>
            {/* Skip link for keyboard users */}
            <a
              href="#content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-black text-white px-3 py-2 rounded"
            >
              Skip to content
            </a>
          </nav>
        </header>

        {children}

        {/* Footer (shared) */}
        <footer className="border-t border-neutral-200 mt-10">
          <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-neutral-600">
            © {new Date().getFullYear()} Your Name — Built with Next.js & Tailwind
          </div>
        </footer>
      </body>
    </html>
  );
}

