import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata = { title: "Work — Your Name" };

export default function WorkPage() {
  return (
    <main id="content" className="mx-auto max-w-7xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Work</h1>
        <p className="mt-2 text-neutral-600">
          A selection of projects. (Placeholders for now — filters & media coming next.)
        </p>
      </header>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li key={p.id} className="rounded-2xl border border-neutral-200 overflow-hidden">
            <Link href={`/work/${p.slug}`} className="block">
              <img
                src={p.cover}
                alt=""
                className="aspect-video w-full object-contain bg-neutral-50"
              />
              <div className="p-4">
                <h2 className="font-semibold leading-tight">{p.title}</h2>
                <p className="text-sm text-neutral-600 line-clamp-2 mt-1">{p.summary}</p>
                <div className="mt-2 text-xs text-neutral-500">{p.year}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

