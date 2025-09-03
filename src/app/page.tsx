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
            <a className="px-4 py-2 rounded-2xl border border-neutral-300" href="#work">
              View Work
            </a>
            <a className="px-4 py-2 rounded-2xl border border-neutral-300" href="#contact">
              Contact
            </a>
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
  
        <footer id="contact" className="border-t border-neutral-200">
          <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-neutral-600">
            Contact: <a className="underline underline-offset-4" href="mailto:hello@example.com">hello@example.com</a>
          </div>
        </footer>
      </main>
    );
  }
  