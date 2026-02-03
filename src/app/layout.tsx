import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import IntroOverlay from "@/components/IntroOverlay"; // ⬅️ new (next step adds it)
import SiteFooter from "@/components/SiteFooter";


const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Chriscvisuals — VFX & Front-End",
  description:
    "Interactive VFX portfolio built with Next.js, TypeScript, Tailwind, and Framer Motion.",
  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-neutral-950 text-white antialiased`}>
        <IntroOverlay />

        <header className="flex items-center justify-between px-8 py-4 bg-neutral-950">
  <Link href="/">
    <Image src="/chrisc.png" alt="Logo" width={70} height={20} />
  </Link>

  <nav className="flex gap-7 text-white text-sm">
    <Link href="/work" className="hover:underline">
      Work
    </Link>
    <Link href="/about" className="hover:underline">
      About
    </Link>
  </nav>
</header>


        {children}

        <SiteFooter />

      </body>
    </html>
  );
}


