import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { ColorCard } from "@/components/work/ColorCard";

export const metadata: Metadata = {
  title: "Works",
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
        <div className="mosaic">
          {projects.map((project) => (
            <ColorCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
