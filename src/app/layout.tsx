import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import IntroOverlay from "@/components/IntroOverlay"; // ⬅️ new (next step adds it)

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Chriscvisuals — VFX & Front-End",
  description:
    "Interactive VFX portfolio built with Next.js, TypeScript, Tailwind, and Framer Motion.",
  icons: {
    icon: "/chrisc.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // ⬇️ make dark the default
    <html lang="en" className="h-full dark">
      <body className={`${inter.className} min-h-screen bg-neutral-950 text-neutral-100`}>
        {/* Intro overlay (plays once per session) */}
        <IntroOverlay />

        {/* Header (shared) */}
        <header className="flex items-center justify-between px-6 py-3 bg-neutral-950">
  <Link href="/">
    <Image src="/chrisc.png" alt="Logo" width={80} height={30} />
  </Link>
  <nav className="flex gap-6 text-white text-sm">
    <Link href="/work" className="hover:underline">Work</Link>
    <Link href="/about" className="hover:underline">About</Link>
    <Link href="/contact" className="hover:underline">Contact</Link>
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


