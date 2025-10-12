"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function IntroOverlay() {
  const [show, setShow] = useState(true);

  // safety timer in case onAnimationComplete doesn't fire (slow devices)
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2200); // duration+delay buffer
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          onAnimationComplete={() => setShow(false)}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
          aria-hidden="true"
        >
          <Image
            src="/chrisc.png"     // your logo
            alt=""
            width={160}
            height={80}
            priority
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
