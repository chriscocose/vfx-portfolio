import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">My Portfolio Projects</h1>

      <ul className="space-y-4">
        {projects.map((p) => (
          <li key={p.id} className="border p-4 rounded-lg">
            <h2 className="font-semibold">{p.title}</h2>
            <p className="text-sm text-neutral-600">{p.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

