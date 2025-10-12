"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/lib/projects";

const featured = projects.filter(p => p.featured);

export default function FeaturedGrid() {
  if (!featured.length) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p) => (
          <li
            key={p.id}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900"
          >
            <Link href={`/work/${p.slug}`} className="block">
              <div className="relative overflow-hidden">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="aspect-video w-full object-cover opacity-95 transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-white font-semibold leading-tight">{p.title}</h3>
                  <p className="mt-1 text-xs text-white/80">
                    {p.year} · {p.tags.join(" · ")}
                  </p>
                </div>
              </div>
              <div className="p-4 border-t border-white/10">
                <p className="text-sm text-neutral-300 line-clamp-3">{p.summary}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
