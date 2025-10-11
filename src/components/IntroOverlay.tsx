"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Full-screen intro that plays once per session.
 * Replace the inline SVG with your animated logo later if you have one.
 */
export default function IntroOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("introSeen");
    if (!seen) {
      setShow(true);
      // auto dismiss after animation time fallback (if user doesn't click)
      const t = setTimeout(() => dismiss(), 1800);
      return () => clearTimeout(t);
    }
  }, []);

  function dismiss() {
    sessionStorage.setItem("introSeen", "1");
    setShow(false);
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onClick={dismiss}
          className="fixed inset-0 z-[60] bg-neutral-950 flex items-center justify-center"
          aria-label="Intro"
        >
          {/* Logo container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="pointer-events-none"
          >
            {/* Placeholder logo (replace with your SVG or Lottie later) */}
            <svg width="120" height="120" viewBox="0 0 120 120" role="img" aria-label="Logo">
              <circle cx="60" cy="60" r="56" fill="none" stroke="white" strokeWidth="4" />
              <path d="M35 65 L60 30 L85 65 L60 90 Z" fill="white" />
            </svg>
          </motion.div>

          {/* Zoom flash / transition plate */}
          <motion.div
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 20, opacity: 0.9 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeIn" }}
            className="absolute w-24 h-24 rounded-full bg-white/5"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
