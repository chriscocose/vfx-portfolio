"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function SiteFooter() {
  const reduce = useReducedMotion();

  return (
    <motion.footer
      layout
      transition={
        reduce
          ? { duration: 0 }
          : { type: "spring", stiffness: 120, damping: 20, mass: 0.6 }
      }
      id="contact"
      className="border-t border-white/10 mt-10"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-white/60">
        Contact:{" "}
        <a
          className="underline underline-offset-4 text-white/70 hover:text-white transition-colors"
          href="mailto:chriscvisuals@gmail.com"
        >
          chriscvisuals@gmail.com
        </a>
      </div>
    </motion.footer>
  );
}
