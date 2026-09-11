import { orgByName, roles } from "@/lib/data";
import { OrgMark } from "@/components/icons/OrgMark";

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container experience">
        <div>
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
            return (
              <article key={`${role.org}-${role.title}`} className="role">
                <div className="role-top">
                  <div>
                    <div className="role-org">
                      {org?.mark ? (
                        <OrgMark
                          name={org.name}
                          src={org.mark}
                          width={org.markWidth}
                          href={org.url}
                          className="role-logo"
                        />
                      ) : null}
                      <h3>{role.org}</h3>
                    </div>
                    <p>{role.title}</p>
                  </div>
                  <p className="text-grey text-sm">
                    {role.dates}
                    <br />
                    {role.location}
                  </p>
                </div>
                <ul>
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
