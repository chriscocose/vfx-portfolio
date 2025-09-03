import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/data";

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found — Your Name" };
  return {
    title: `${project.title} — Your Name`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.cover],
    },
  };
}

export default function ProjectPage({ params }: { params: Params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main id="content" className="mx-auto max-w-5xl px-4 py-8">
      <article className="prose prose-neutral max-w-none">
        <header className="mb-4">
          <h1 className="!mb-1">{project!.title}</h1>
          <p className="m-0 text-neutral-600">{project!.summary}</p>
          <div className="mt-1 text-sm text-neutral-500">
            {project!.year} · {project!.roles.join(" · ")}
          </div>
        </header>

        <section aria-label="Preview" className="rounded-2xl border border-neutral-200 overflow-hidden">
          <img
            src={project!.mediaSrc}
            alt=""
            className="w-full aspect-video object-contain bg-neutral-50"
          />
        </section>

        <section className="mt-6">
          <h2>Details</h2>
          <ul>
            <li><strong>Tags:</strong> {project!.tags.join(", ")}</li>
            {project!.client && <li><strong>Client:</strong> {project!.client}</li>}
            {project!.credits?.length ? (
              <li><strong>Credits:</strong> {project!.credits.join(", ")}</li>
            ) : null}
          </ul>
        </section>

        <p className="mt-6">
          <a href="/work" className="underline underline-offset-4">← Back to Work</a>
        </p>
      </article>
    </main>
  );
}
