import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type RouteParams = { params?: { slug?: string } };

export default function WorkItemPage(props: unknown) {
  const { params } = (props as RouteParams) || {};
  const slug = params?.slug;
  if (!slug) notFound();

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main id="content" className="mx-auto max-w-5xl px-4 py-10">
      <nav className="mb-6">
        <Link href="/work" className="underline underline-offset-4">
          ← Back to Work
        </Link>
      </nav>

      <header className="mb-4">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="mt-1 text-sm text-neutral-400">
          {project.year} · {project.tags.join(" · ")}
        </p>
      </header>

      <section aria-label="Preview" className="flex flex-col gap-6">
        <video
          className="w-full aspect-video rounded-2xl border border-white/10 bg-black"
          src={project.mediaSrc}
          poster={project.cover}
          controls
          playsInline
          preload="metadata"
        >
          <source src={project.mediaSrc} type="video/mp4" />
        </video>
      </section>

      <section className="mt-6">
        <p className="text-neutral-300">{project.summary}</p>
      </section>
    </main>
  );
}
