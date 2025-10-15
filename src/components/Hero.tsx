"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const vidRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = vidRef.current;
    if (!v) return;
    v.muted = true;
    v.playsInline = true;
    v.loop = true;
    v.play().catch(() => {});
  }, []);

  return (
    <section className="relative isolate min-h-[70vh] md:min-h-[78vh] overflow-hidden">
      {/* background video */}
      <video
        ref={vidRef}
        className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover"
        src="/videos/hero.mp4"
        poster="/covers/square.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* readability layers */}
      <div className="absolute inset-0 -z-10 bg-neutral-950/45" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black/70 to-transparent" />

      {/* content */}
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-14 md:pt-28 md:pb-20">
        <p className="text-xs uppercase tracking-[0.18em] text-white/60 mb-2">
          Portfolio & Case Study
        </p>

        {/* staggered hero lines */}
        <div className="space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            VFX Editor
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            Motion Designer
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            UI/UX Developer
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.95 }}
          className="mt-5 max-w-2xl text-base md:text-lg text-white/85"
        >
          I build kinetic visuals and performant interfaces — from stage visuals and music videos
          to interactive sites and design systems. Focused on animation, accessibility, and
          production-ready front-end.
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/work"
            className="inline-flex items-center rounded-2xl bg-white text-black px-5 py-2.5 font-medium shadow-sm hover:bg-white/90 transition"
          >
            View Work
          </Link>
          <Link
  href="/about"
  className="inline-flex items-center rounded-2xl border border-white/20 px-5 py-2.5 font-medium text-white/90 hover:bg-white/5 transition"
>
  About
</Link>

        </div>
      </div>
    </section>
  );
}
