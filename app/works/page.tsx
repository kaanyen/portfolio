import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { WorkShelf } from "@/components/work/WorkShelf";

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
        <WorkShelf projects={projects} />
      </div>
    </main>
  );
}
