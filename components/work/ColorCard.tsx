import Link from "next/link";
import type { Project } from "@/lib/data";

export function ColorCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="color-card"
      data-tone={project.tone}
    >
      <div>
        <div className="project-meta">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-tags">
            <span>{project.year}</span>
            <span>{project.category}</span>
          </div>
        </div>
        <p className="color-card-copy">{project.summary}</p>
      </div>
      <span className="color-card-cta">View case</span>
    </Link>
  );
}
