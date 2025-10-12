import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About — Your Name",
  description: "VFX Editor, Motion Designer, and UI/UX Developer focused on performant, animated web experiences.",
};

export default function AboutPage() {
  return (
    <main id="content" className="mx-auto max-w-6xl px-4 py-10">
      <About />
    </main>
  );
}
