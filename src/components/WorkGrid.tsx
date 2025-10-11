"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { projects } from "@/lib/projects";

const TABS = ["All", "Stage Visuals", "Music Videos", "Visualizers", "TV"] as const;
type Tab = typeof TABS[number];

export default function WorkGrid() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initial = (searchParams.get("cat") as Tab) || "All";

  const [cat, setCat] = useState<Tab>(TABS.includes(initial) ? initial : "All");
  const [query, setQuery] = useState("");
  const reduce = useReducedMotion();

  // keep URL in sync when tab changes
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (cat === "All") params.delete("cat");
    else params.set("cat", cat);
    const next = `${window.location.pathname}?${params.toString()}`.replace(/\?$/, "");
    router.replace(next, { scroll: false });
  }, [cat, router]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const inCat = cat === "All" || p.tags.includes(cat);
      if (!inCat) return false;
      if (!q) return true;
      const hay = [p.title, p.summary, ...p.tags, ...p.roles].join(" ").toLowerCase();
      return hay.includes(q);
    });
  }, [cat, query]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8" aria-labelledby="work-heading">
      <header className="mb-6">
        <h1 id="work-heading" className="text-3xl font-bold">Work</h1>
        <p className="mt-2 text-neutral-600">
          Browse by section or search. (Media is placeholder for now.)
        </p>
      </header>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects…"
          aria-label="Search projects"
          className="px-3 py-2 rounded-xl border border-neutral-300"
        />
        <div role="tablist" aria-label="Work categories" className="flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={cat === t}
              onClick={() => setCat(t)}
              className={`px-3 py-2 rounded-xl border text-sm transition
              ${cat === t
                ? "border-neutral-900"
                : "border-neutral-300 hover:bg-neutral-100"}`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="ml-auto text-sm text-neutral-500" aria-live="polite">
          {filtered.length} result{filtered.length === 1 ? "" : "s"}
        </div>
      </div>

      {/* Grid */}
      <motion.ul
        layout
        className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Project results"
      >
        <AnimatePresence>
          {filtered.map((p) => (
            <motion.li
              key={p.id}
              layout
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
              transition={reduce ? { duration: 0.15 } : { type: "spring", stiffness: 60, damping: 12 }}
              className="rounded-2xl border border-neutral-200 overflow-hidden bg-white"
            >
              <Link href={`/work/${p.slug}`} className="block">
                {/* img now; we can switch to next/image later */}
                <img
                  src={p.cover}
                  alt=""
                  className="aspect-video w-full object-contain bg-neutral-50"
                />
                <div className="p-4">
                  <h2 className="font-semibold leading-tight">{p.title}</h2>
                  <p className="text-sm text-neutral-600 line-clamp-2 mt-1">{p.summary}</p>
                  <div className="mt-2 text-xs text-neutral-500">{p.year} · {p.tags.join(" • ")}</div>
                </div>
              </Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
}
