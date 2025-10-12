import Hero from "@/components/Hero";
import FeaturedGrid from "@/components/FeaturedGrid";

export default function HomePage() {
  return (
    <main className="relative min-h-dvh bg-neutral-950 text-neutral-100">
      <Hero />

      <section
        id="content"
        aria-labelledby="featured-heading"
        className="mx-auto max-w-7xl px-4 py-12 border-t border-white/10"
      >
        <h2 id="featured-heading" className="text-xl font-semibold">Featured</h2>
        <p className="mt-2 text-white/70">Selected projects.</p>

        <div className="mt-6">
          <FeaturedGrid />
        </div>
      </section>
    </main>
  );
}
