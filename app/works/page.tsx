import type { Metadata } from "next";
import { Suspense } from "react";
import { projects } from "@/lib/data";
import { skillCounts } from "@/lib/skills";
import { WorkShelf } from "@/components/work/WorkShelf";
import { WorksExplorer } from "@/components/work/WorksExplorer";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Case studies from Kweku Anyen: agent platforms, fintech fraud tooling, AI products, and a CVPR 2026 workshop paper.",
  alternates: { canonical: "/works" },
};

export default function WorksPage() {
  return (
    <main className="page-hero">
      <div className="container">
        <h1 className="headline-md mb-4">
          All
          <br />
          work
        </h1>
        <p className="mb-10 max-w-[40ch] text-lg text-grey">
          Featured CV projects and additional research, products, and systems
          work.
        </p>
        {/* The filter reads ?skill= in the browser; the prerendered HTML
            carries the full shelf until it takes over. */}
        <Suspense fallback={<WorkShelf projects={projects} />}>
          <WorksExplorer projects={projects} skills={skillCounts()} />
        </Suspense>
      </div>
    </main>
  );
}
