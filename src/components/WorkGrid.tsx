"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { projects } from "@/lib/projects";

const TABS = ["All", "Stage Visuals", "Music Videos", "TV", "Visualizers", "UI/UX"] as const;
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
        <p className="mt-2 text-white/60">
          Browse by section or search
        </p>
      </header>

      {/* Controls */}
      
<div className="flex flex-wrap items-center gap-2">
  <input
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search projects…"
    aria-label="Search projects"
    className="w-full sm:w-64 px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/40
               focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
  />

  <div role="tablist" aria-label="Work categories" className="flex flex-wrap gap-2">
    {TABS.map((t) => (
      <button
        key={t}
        role="tab"
        aria-selected={cat === t}
        onClick={() => setCat(t)}
        className={`px-3 py-2 rounded-xl border text-sm transition
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25
        ${
          cat === t
            ? "border-white/20 bg-white/10 text-white"
            : "border-white/10 bg-white/5 text-white/75 hover:bg-white/10 hover:text-white"
        }`}
      >
        {t}
      </button>
    ))}
  </div>

  <div className="ml-auto text-sm text-white/50" aria-live="polite">
    {filtered.length} result{filtered.length === 1 ? "" : "s"}
  </div>
</div>


      {/* Grid */}
      <motion.ul
        layout
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Project results"
      >
        <AnimatePresence>
          {filtered.map((p) => (
           <motion.li
           key={p.id}
           layout
           initial={{ opacity: 0, y: 20}}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, transition: { duration: 0.1 } }}
           transition={{ type: "spring", stiffness: 75, damping: 12 }}
           className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900"
         >
           <Link href={`/work/${p.slug}`} className="block">
             {/* wrapper so everything scales together */}
             <div className="relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
               <img
                 src={p.cover}
                 alt={p.title}
                 className="aspect-video w-full object-cover opacity-95"
               />
         
               {/* dark gradient overlay that moves with image */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-opacity group-hover:opacity-90" />
               
         
               {/* text overlay */}
               <div className="absolute inset-x-0 bottom-0 p-4">
                 <h2 className="text-white font-semibold leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                   {p.title}
                 </h2>
                 <p className="mt-1 text-xs text-white/80">
                   {p.year} · {p.tags.join(" · ")}
                 </p>
               </div>
             </div>
         
            
           </Link>
         </motion.li>
         
          
          ))}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
}
