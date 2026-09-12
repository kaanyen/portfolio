import { projects } from "@/lib/data";

export type SkillCount = { name: string; count: number };

// Every stack tag across projects, most used first, then alphabetical.
export function skillCounts(): SkillCount[] {
  const counts = new Map<string, number>();
  for (const project of projects) {
    for (const skill of project.stack) {
      counts.set(skill, (counts.get(skill) ?? 0) + 1);
    }
  }
  return [...counts]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}
