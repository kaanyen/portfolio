import { getProject, orgByName, roles } from "@/lib/data";
import type { Position } from "@/lib/data";
import { ExperienceList } from "@/components/about/ExperienceList";
import type { ExperienceItem } from "@/components/about/ExperienceList";

// "iSpace Foundation" → "IF", "Brothers in Hue" → "BH", "AirtelTigo" → "AT".
function initials(name: string) {
  const words = name.split(/\s+/).filter((word) => /^[A-Z]/i.test(word) && word.length > 2);
  const letters =
    words.length > 1
      ? words.map((word) => word[0])
      : (name.match(/[A-Z]/g) ?? [name[0]]);
  return letters.slice(0, 2).join("").toUpperCase();
}

// Positions run newest first, so the stint starts with the last one.
function firstAndLast(positions: Position[]) {
  const [from] = positions[positions.length - 1].dates.split(" — ");
  const [, to] = positions[0].dates.split(" — ");
  return { from, to };
}

// "Mar 2021 — Aug 2025", for the opened role.
function when(positions: Position[]) {
  const { from, to } = firstAndLast(positions);
  return `${from} — ${to}`;
}

// "2021–2025", "2019–now", or "2025", beside the company name.
function years(positions: Position[]) {
  const { from, to } = firstAndLast(positions);
  const start = from.split(" ")[1];
  const end = to === "Present" ? "now" : to.split(" ")[1];
  return start === end ? start : `${start}–${end}`;
}

export function Experience() {
  // Prepared here so the client list gets plain data, not the whole
  // project catalogue.
  const items: ExperienceItem[] = roles.map((role) => {
    const org = orgByName(role.org);
    const project = role.caseStudy ? getProject(role.caseStudy) : undefined;
    return {
      org: role.org,
      location: role.location,
      years: years(role.positions),
      when: when(role.positions),
      url: org?.url,
      mark: org?.mark ? { src: org.mark, width: org.markWidth } : undefined,
      monogram: initials(role.org),
      positions: role.positions,
      stack: role.stack ?? [],
      caseStudy: project
        ? { slug: project.slug, title: project.title }
        : undefined,
    };
  });

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="experience-head">
          <h2 className="headline-md">
            Work
            <br />
            <span className="text-grey">experience</span>
          </h2>
          <p className="max-w-[34ch] text-lg leading-snug">
            Software engineering, research, and media production. The constant
            is delivery that remains correct after it ships.
          </p>
        </div>
        <ExperienceList items={items} />
      </div>
    </section>
  );
}
