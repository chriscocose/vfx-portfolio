import { Suspense } from "react";
import Link from "next/link";
import WorkGrid from "@/components/WorkGrid"; 

export const metadata = { title: "Work — Your Name" };

export default function WorkPage() {
  return (
    <main id="content" className="mx-auto max-w-7xl px-4 py-2">
    

      <Suspense
        fallback={
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <li
                key={i}
                className="h-48 rounded-2xl border border-white/10 bg-neutral-900/60 animate-pulse"
              />
            ))}
          </ul>
        }
      >
        <WorkGrid />
      </Suspense>
    </main>
  );
}
