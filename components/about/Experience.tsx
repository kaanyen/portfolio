import Link from "next/link";
import { getProject, orgByName, roles } from "@/lib/data";
import type { Org, Position } from "@/lib/data";
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

// Full span of a stint: start of the earliest position to the end of the
// latest. Positions run newest first.
function span(positions: Position[]) {
  const end = positions[0].dates.split(" — ")[1];
  const start = positions[positions.length - 1].dates.split(" — ")[0];
  return `${start} — ${end}`;
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

function Points({ points }: { points: string[] }) {
  return (
    <ul className="role-points">
      {points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
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
            const [only] = role.positions;
            const promoted = role.positions.length > 1;
            return (
              <article key={role.org} className="role">
                <span className="role-mark">
                  <RoleMark name={role.org} org={org} />
                </span>
                <div>
                  <div className="role-head">
                    <div>
                      <h3>{role.org}</h3>
                      {promoted ? null : (
                        <p className="role-title">{only.title}</p>
                      )}
                    </div>
                    <p className="role-when">
                      {promoted ? span(role.positions) : only.dates}
                      <br />
                      {role.location}
                    </p>
                  </div>
                  {promoted ? (
                    <ol className="role-positions">
                      {role.positions.map((position) => (
                        <li key={position.title} className="role-position">
                          <p className="role-position-title">
                            {position.title}
                          </p>
                          <p className="role-position-dates">
                            {position.dates}
                          </p>
                          <Points points={position.points} />
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <Points points={only.points} />
                  )}
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
