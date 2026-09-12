import type { Project } from "@/lib/data";
import { WorkBook } from "@/components/work/WorkBook";

export function WorkShelf({ projects }: { projects: Project[] }) {
  return (
    <div className="work-shelf">
      {projects.map((project) => (
        <WorkBook key={project.slug} project={project} />
      ))}
    </div>
  );
}
