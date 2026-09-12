"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Project } from "@/lib/data";
import type { SkillCount } from "@/lib/skills";
import { WorkShelf } from "@/components/work/WorkShelf";

// Skill chips over the shelf. The choice lives in ?skill= so a filtered view
// can be linked to, e.g. from a tag on the experience list.
export function WorksExplorer({
  projects,
  skills,
}: {
  projects: Project[];
  skills: SkillCount[];
}) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const wanted = params.get("skill");
  const active = skills.some((skill) => skill.name === wanted) ? wanted : null;
  const shown = active
    ? projects.filter((project) => project.stack.includes(active))
    : projects;
  // Skills used once stay out of the chip row unless one is selected.
  const chips = skills.filter(
    (skill) => skill.count > 1 || skill.name === active,
  );

  function choose(skill: string | null) {
    const next =
      skill && skill !== active
        ? `${pathname}?skill=${encodeURIComponent(skill)}`
        : pathname;
    router.replace(next, { scroll: false });
  }

  return (
    <>
      <div
        className="skill-filter"
        role="group"
        aria-label="Filter projects by skill"
      >
        <button
          type="button"
          className="skill-chip"
          aria-pressed={!active}
          onClick={() => choose(null)}
        >
          All <span>{projects.length}</span>
        </button>
        {chips.map((skill) => (
          <button
            key={skill.name}
            type="button"
            className="skill-chip"
            aria-pressed={skill.name === active}
            onClick={() => choose(skill.name)}
          >
            {skill.name} <span>{skill.count}</span>
          </button>
        ))}
      </div>
      <p className="skill-status" aria-live="polite">
        {active
          ? `${shown.length} ${shown.length === 1 ? "project uses" : "projects use"} ${active}.`
          : `Showing all ${projects.length} projects.`}
      </p>
      <WorkShelf projects={shown} />
    </>
  );
}
