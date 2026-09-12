"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { education, getProject, roles } from "@/lib/data";
import type { Role } from "@/lib/data";
import { site } from "@/lib/site";

// Core tools, from the CV's technical skills section.
const TOOLS = [
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "NestJS",
  "FastAPI",
  "PostgreSQL",
  "LangGraph",
  "PyTorch",
  "Docker",
];

// The case studies that say the most in the least time.
const PICKS = ["boafo", "boafo-ticketing", "vlm-corruption"];

// Window event that opens the dialog from elsewhere, e.g. the site menu.
export const RECRUITER_OPEN = "recruiter:open";

// "2021–2025" or "2019–now". Positions run newest first.
function span(role: Role) {
  const [from] = role.positions[role.positions.length - 1].dates.split(" — ");
  const [, to] = role.positions[0].dates.split(" — ");
  const start = from.split(" ")[1];
  const end = to === "Present" ? "now" : to.split(" ")[1];
  return start === end ? start : `${start}–${end}`;
}

// One screen for someone deciding whether to get in touch: who, proof, and
// how to reach me. Opens from the header button or any link to #recruiter.
export function RecruiterView() {
  const dialog = useRef<HTMLDialogElement>(null);
  const picks = PICKS.map(getProject).filter(
    (project) => project !== undefined,
  );

  useEffect(() => {
    const node = dialog.current;
    if (!node) return;

    const open = () => {
      if (!node.open) node.showModal();
    };

    // A shared link to #recruiter opens the dialog, and the hash is cleared
    // straight away, so the same link works again and reloads don't reopen it.
    const openFromHash = () => {
      if (window.location.hash !== "#recruiter") return;
      history.replaceState(
        history.state,
        "",
        window.location.pathname + window.location.search,
      );
      open();
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    // The menu opens it directly, without going through the URL.
    window.addEventListener(RECRUITER_OPEN, open);
    return () => {
      window.removeEventListener("hashchange", openFromHash);
      window.removeEventListener(RECRUITER_OPEN, open);
    };
  }, []);

  const close = () => dialog.current?.close();

  return (
    <>
      <button
        type="button"
        className="header-in header-recruiter"
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
      >
        Recruiter view
      </button>
      <dialog
        ref={dialog}
        className="recruiter"
        aria-labelledby="recruiter-title"
        data-lenis-prevent
        onClick={(event) => {
          // A click on the backdrop lands on the dialog itself.
          if (event.target === dialog.current) close();
        }}
      >
        <div className="recruiter-inner">
          <div className="recruiter-head">
            <div>
              <p className="recruiter-kicker">Recruiter view</p>
              <h2 id="recruiter-title">{site.fullName}</h2>
              <p className="recruiter-sub">
                {site.title} · {site.location}
              </p>
            </div>
            <button type="button" className="recruiter-close" onClick={close}>
              Close
            </button>
          </div>

          <section className="recruiter-block">
            <h3>Strongest work</h3>
            <ul className="recruiter-picks">
              {picks.map((project) => (
                <li key={project.slug}>
                  <Link href={`/work/${project.slug}`} onClick={close}>
                    <span className="recruiter-metric">
                      {project.metric?.value}
                    </span>
                    <span>
                      <b>{project.title}</b>
                      <span>{project.metric?.label}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <div className="recruiter-columns">
            <section className="recruiter-block">
              <h3>Experience</h3>
              <ul className="recruiter-list">
                {roles.map((role) => (
                  <li key={role.org}>
                    <b>{role.org}</b>
                    <span>
                      {role.positions[0].title} · {span(role)}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="recruiter-block">
              <h3>Education</h3>
              <ul className="recruiter-list">
                {education.map((item) => (
                  <li key={item.degree}>
                    <b>{item.degree}</b>
                    <span>
                      {item.school} · {item.dates}
                    </span>
                  </li>
                ))}
              </ul>
              <h3 className="recruiter-tools-label">Core tools</h3>
              <div className="stack-list">
                {TOOLS.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </section>
          </div>

          <div className="recruiter-actions">
            <a className="recruiter-primary" href={`mailto:${site.email}`}>
              Email {site.name.split(" ")[0]}
            </a>
            <a href={site.cv} target="_blank" rel="noreferrer">
              Download CV
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
