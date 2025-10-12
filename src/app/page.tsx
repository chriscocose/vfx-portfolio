import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-dvh bg-neutral-950 text-neutral-100">
      {/* HERO with background video */}
      <section className="relative isolate">
        {/* video background */}
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src="/videos/hero.mp4"           // ⬅️ your file
          poster="/covers/square.jpg"        // ⬅️ poster while loading
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        {/* readability layers */}
        <div className="absolute inset-0 -z-10 bg-neutral-950/45" />{/* soft veil */}
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 pt-20 pb-14 md:pt-28 md:pb-20">
          <p className="text-xs uppercase tracking-[0.18em] text-white/60">
            Portfolio & Case Study
          </p>

          <h1 className="mt-3 text-5xl md:text-6xl/tight font-extrabold tracking-tight">
            VFX Editor & Motion Designer
            <span className="block text-white/85">
              building performant, animated web experiences.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base md:text-lg text-white/80">
            Stage visuals, music videos, commercials, album cover animations — crafted into an
            interactive, accessible portfolio that doubles as a front-end engineering case study.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="inline-flex items-center rounded-2xl bg-white text-black px-5 py-2.5 font-medium shadow-sm hover:bg-white/90 transition"
            >
              View Work
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-2xl border border-white/20 px-5 py-2.5 font-medium text-white/90 hover:bg-white/5 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PLACEHOLDER (unchanged) */}
      <section
        id="content"
        aria-labelledby="featured-heading"
        className="mx-auto max-w-7xl px-4 py-10 border-t border-white/10"
      >
        <h2 id="featured-heading" className="text-xl font-semibold">Featured</h2>
        <p className="mt-2 text-white/60">
          A curated set of projects will appear here soon. For now, browse everything on the Work page.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-40 rounded-2xl border border-white/10 bg-neutral-900/60" />
          ))}
        </div>
      </section>
    </main>
  );
}


