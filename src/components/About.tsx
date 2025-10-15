"use client";

import { motion, type MotionProps, type Variants } from "framer-motion";
import Link from "next/link";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp = (d = 0): MotionProps => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: EASE_OUT, delay: d },
});

const listItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
};

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-xl border border-white/15 bg-neutral-900/60 px-3 py-1 text-sm text-neutral-200">
      {children}
    </span>
  );
}

export default function About() {
  return (
    <div className="text-neutral-100">
      {/* Intro */}
      <motion.div {...fadeUp(0)}>
        <header>
          <h1 className="text-3xl md:text-4xl font-bold">About</h1>
          <p className="mt-2 text-white/70">
            VFX Editor, Motion Designer, and UI/UX Developer. I build kinetic visuals and
            production-ready interfaces with a focus on performance, accessibility, and
            film-quality motion.
          </p>
        </header>
      </motion.div>

      {/* Hero row (photo + quick facts) */}
      <section className="mt-8 grid gap-6 md:grid-cols-[240px,1fr]">
       

        {/* Bio / badges */}
        <motion.div {...fadeUp(0.15)} className="space-y-4">
          <p className="text-neutral-300">
            I’ve delivered stage visuals, music videos, commercials, and interactive web pieces —
            collaborating with directors, artists, and brands. On the front end, I focus on fluid
            motion, clean architecture, and tight delivery.
          </p>

          <div className="flex flex-wrap gap-2">
            <Chip>VFX Editing</Chip>
            <Chip>Motion Design</Chip>
            <Chip>UI/UX</Chip>
            <Chip>Design Systems</Chip>
            <Chip>Web Performance</Chip>
            <Chip>Accessibility</Chip>
          </div>
        </motion.div>
      </section>

      {/* Tools */}
      <motion.div {...fadeUp(0.2)} className="mt-10">
        <section>
          <h2 className="text-xl font-semibold">Tools</h2>
          <p className="mt-2 text-white/70">Daily drivers in post and code.</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "After Effects / Expressions",
              "JavaScript / TypeScript",
              "React / Next.js / Tailwind / Framer Motion",
            ].map((t) => (
              <li
                key={t}
                className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-neutral-200"
              >
                {t}
              </li>
            ))}
          </ul>
        </section>
      </motion.div>

      {/* Approach (staggered) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ staggerChildren: 0.12 }}
        className="mt-10"
      >
        <section>
          <h2 className="text-xl font-semibold">Approach</h2>
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Motion-first UX",
                body:
                  "Choreograph interactions with physics and intent. Micro-transitions guide attention and explain state.",
              },
              {
                title: "Performance",
                body:
                  "Ship smooth 60fps experiences with lazy loading, responsive media, memoized components, and GPU-accelerated animation.",
              },
              {
                title: "Accessibility",
                body:
                  "Keyboard paths, reduced-motion support, semantic structure, and high-contrast defaults — by design, not afterthought.",
              },
              {
                title: "Production discipline",
                body:
                  "Clean architecture, reusable primitives, type safety, and automated checks — so creativity scales.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={listItem}
                className="rounded-2xl border border-white/10 bg-neutral-900 p-4"
              >
                <h3 className="font-medium text-neutral-100">{item.title}</h3>
                <p className="mt-1 text-neutral-300">{item.body}</p>
              </motion.div>
            ))}
          </ul>
        </section>
      </motion.div>

      {/* CTA */}
      <motion.div {...fadeUp(0.1)} className="mt-12 border-t border-white/10 pt-8">
        <section>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/work"
              className="inline-flex items-center rounded-2xl bg-white text-black px-5 py-2.5 font-medium shadow-sm hover:bg-white/90 transition"
            >
              View Work
            </Link>
            <Link
              href="mailto:chriscvisuals@gmail.com"
              className="inline-flex items-center rounded-2xl border border-white/20 px-5 py-2.5 font-medium text-white/90 hover:bg-white/5 transition"
            >
              Email
            </Link>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
