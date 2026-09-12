import type { Metadata } from "next";
import Image from "next/image";
import { education, orgByName } from "@/lib/data";
import { site } from "@/lib/site";
import { Experience } from "@/components/about/Experience";
import { OrgMark } from "@/components/icons/OrgMark";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container about-grid">
          <div className="portrait-lg">
            <Image
              src={site.portrait}
              alt={site.fullName}
              width={720}
              height={720}
            />
          </div>
          <div>
            <h1 className="headline-md">
              Software
              <br />
              and research.
            </h1>
            <p className="mt-6 max-w-[40ch] text-xl leading-snug">
              {site.fullName} is a software engineer and MPhil candidate in
              Intelligent Computing Systems at Ashesi University. The work sits
              at the intersection of agent systems, product engineering, and
              security architecture.
            </p>
            <p className="mt-4 max-w-[40ch] text-lg leading-snug text-[#3b342f]">
              Training includes Agile practice (Scrum, Kanban) and security
              frameworks (SABSA, NIST, ISO 27001) applied to the software
              lifecycle. Earlier roles in media at iSpace Foundation, Wode Maya,
              and Brothers in Hue still inform how interfaces are structured
              and presented.
            </p>
            <p className="about-links">
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={site.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={site.cv} target="_blank" rel="noreferrer">
                Download CV (PDF)
              </a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <div className="mt-8 space-y-4">
              {education.map((item) => {
                const org = orgByName(item.school);
                return (
                  <div key={item.degree}>
                    <p className="role-org text-youth text-lg">
                      {org?.mark ? (
                        <OrgMark
                          name={org.name}
                          src={org.mark}
                          width={org.markWidth}
                          href={org.url}
                          className="role-logo"
                        />
                      ) : null}
                      {item.school}
                    </p>
                    <p>
                      {item.degree}
                      <span className="text-grey"> · {item.dates}</span>
                    </p>
                    <p className="text-sm text-grey">{item.note}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Experience />
    </main>
  );
}
