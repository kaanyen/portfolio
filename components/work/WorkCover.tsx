import type { Project } from "@/lib/data";

export function WorkCover({ project }: { project: Project }) {
  return (
    <div className="work-cover" data-tone={project.tone} aria-hidden>
      <p className="work-cover-meta">
        {project.year} · {project.category}
      </p>
      <p className="work-cover-title">{project.title}</p>
    </div>
  );
}
