import Link from "next/link";
import { getProject, orgByName, roles } from "@/lib/data";
import type { Org } from "@/lib/data";
import { OrgMark } from "@/components/icons/OrgMark";

// "iSpace Foundation" → "IF", "Brothers in Hue" → "BH", "AirtelTigo" → "AT".
function initials(name: string) {
  const words = name.split(/\s+/).filter((word) => /^[A-Z]/i.test(word) && word.length > 2);
  const letters =
    words.length > 1
      ? words.map((word) => word[0])
      : (name.match(/[A-Z]/g) ?? [name[0]]);
  return letters.slice(0, 2).join("").toUpperCase();
}

// Orgs without a square mark get a monogram tile the same size, so every role
// carries one.
function RoleMark({ name, org }: { name: string; org?: Org }) {
  if (org?.mark) {
    return (
      <OrgMark
        name={org.name}
        src={org.mark}
        width={org.markWidth}
        href={org.url}
      />
    );
  }

  const tile = (
    <span className="role-monogram" aria-hidden>
      {initials(name)}
    </span>
  );

  if (!org?.url) return tile;

  return (
    <a
      href={org.url}
      target="_blank"
      rel="noreferrer"
      className="org-link"
      aria-label={name}
    >
      {tile}
    </a>
  );
}

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container experience">
        <div className="experience-intro">
          <h2 className="headline-md">
            Work
            <br />
            <span className="text-grey">experience</span>
          </h2>
          <p className="mt-6 max-w-[30ch] text-lg leading-snug">
            Software engineering, research, and media production. The constant
            is delivery that remains correct after it ships.
          </p>
        </div>
        <div>
          {roles.map((role) => {
            const org = orgByName(role.org);
            const caseStudy = role.caseStudy
              ? getProject(role.caseStudy)
              : undefined;
            return (
              <article key={`${role.org}-${role.title}`} className="role">
                <span className="role-mark">
                  <RoleMark name={role.org} org={org} />
                </span>
                <div>
                  <div className="role-head">
                    <div>
                      <h3>{role.org}</h3>
                      <p className="role-title">{role.title}</p>
                    </div>
                    <p className="role-when">
                      {role.dates}
                      <br />
                      {role.location}
                    </p>
                  </div>
                  <ul className="role-points">
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  {role.stack ? (
                    <div className="stack-list role-stack">
                      {role.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  ) : null}
                  {caseStudy ? (
                    <Link
                      href={`/work/${caseStudy.slug}`}
                      className="role-case"
                    >
                      Read the {caseStudy.title} case study ↗
                    </Link>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
