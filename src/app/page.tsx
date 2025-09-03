import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-white text-neutral-900">
      <section className="mx-auto max-w-7xl px-4 pt-10 pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          VFX Editor & Motion Designer building performant, animated web experiences.
        </h1>

        <p className="mt-4 text-neutral-600 max-w-2xl">
          Stage visuals, music videos, commercials, album cover animations — crafted into an interactive,
          accessible portfolio that doubles as a front-end engineering case study.
        </p>

        <div className="mt-6 flex gap-3">
          {/* Use Next.js <Link> for client-side navigation */}
          <Link
            className="px-4 py-2 rounded-2xl border border-neutral-300 hover:bg-neutral-100 transition"
            href="/work"
          >
            View Work
          </Link>
          <Link
            className="px-4 py-2 rounded-2xl border border-neutral-300 hover:bg-neutral-100 transition"
            href="/#contact"
          >
            Contact
          </Link>
        </div>
      </section>

      <section
        id="content"
        className="mx-auto max-w-7xl px-4 py-10 border-t border-neutral-100"
        aria-labelledby="featured-heading"
      >
        <h2 id="featured-heading" className="text-xl font-semibold">Featured</h2>
        <p className="mt-2 text-neutral-600">We’ll fill this with a grid next phase.</p>
      </section>
    </main>
  );
}
