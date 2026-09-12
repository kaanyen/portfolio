import Link from "next/link";
import type { Project } from "@/lib/data";
import { CategoryMark } from "@/components/icons/CategoryMark";

// A thin 3D book: the front cover carries the project, and the spine and page
// edges come into view when hover tilts it. The caption sits below.
export function WorkBook({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="work-book"
      data-tone={project.tone}
    >
      <span className="work-book-stage">
        <span className="work-book-object">
          <span className="work-book-face work-book-front">
            <CategoryMark category={project.category} />
            <span className="work-book-kicker">{project.category}</span>
            <span className="work-book-title">{project.title}</span>
            <span className="work-book-year">{project.year}</span>
          </span>
          <span className="work-book-face work-book-back" aria-hidden />
          <span className="work-book-face work-book-spine" aria-hidden />
          <span className="work-book-face work-book-edge" aria-hidden />
          <span className="work-book-face work-book-top" aria-hidden />
          <span className="work-book-face work-book-bottom" aria-hidden />
        </span>
        <span className="work-book-cta" aria-hidden>
          Take a closer look ↗
        </span>
      </span>
      <span className="work-book-caption">{project.summary}</span>
      <span className="work-book-meta">
        {project.category} · {project.year}
      </span>
    </Link>
  );
}
