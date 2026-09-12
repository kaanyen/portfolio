"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { PointerEvent } from "react";
import { OrgMark } from "@/components/icons/OrgMark";

export type ExperienceItem = {
  org: string;
  location: string;
  // Compact range for the row, e.g. "2021–2025".
  years: string;
  // Full range for the details, e.g. "Mar 2021 — Aug 2025".
  when: string;
  url?: string;
  mark?: { src: string; width?: string };
  monogram: string;
  // Newest first.
  positions: { title: string; dates: string; points: string[] }[];
  // Tags that match a project's stack link to the filtered Works page.
  stack: { name: string; linked: boolean }[];
  caseStudy?: { slug: string; title: string };
};

// Orgs without a square mark get a monogram tile the same size.
function RoleMark({ item }: { item: ExperienceItem }) {
  if (item.mark) {
    return (
      <OrgMark
        name={item.org}
        src={item.mark.src}
        width={item.mark.width}
        href={item.url}
      />
    );
  }

  const tile = (
    <span className="role-monogram" aria-hidden>
      {item.monogram}
    </span>
  );

  if (!item.url) return tile;

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="org-link"
      aria-label={item.org}
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

// A promotion reads oldest to newest: "Media Assistant → Lead".
function titleOf(item: ExperienceItem) {
  return item.positions.length > 1
    ? [...item.positions]
        .reverse()
        .map((position) => position.title)
        .join(" → ")
    : item.positions[0].title;
}

// Company names in display type. Hovering a row shows a preview card that
// follows the cursor; clicking opens the full role in place.
export function ExperienceList({ items }: { items: ExperienceItem[] }) {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));
  const [peek, setPeek] = useState(0);
  const [peekOn, setPeekOn] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);

  function toggle(index: number) {
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
    setPeekOn(false);
  }

  // Position goes straight onto the card, so moving the mouse doesn't
  // re-render the list.
  function onPointerMove(event: PointerEvent<HTMLOListElement>) {
    if (event.pointerType !== "mouse") return;
    const row = (event.target as HTMLElement).closest<HTMLElement>(
      "[data-index]",
    );
    const index = row ? Number(row.dataset.index) : -1;
    const show = index >= 0 && !open.has(index);
    if (show && index !== peek) setPeek(index);
    if (show !== peekOn) setPeekOn(show);

    const box = wrap.current?.getBoundingClientRect();
    const node = card.current;
    if (!box || !node) return;
    const x = Math.max(
      0,
      Math.min(event.clientX - box.left + 24, box.width - node.offsetWidth),
    );
    node.style.setProperty("--x", `${x}px`);
    node.style.setProperty("--y", `${event.clientY - box.top - 28}px`);
  }

  const preview = items[peek];

  return (
    <div ref={wrap} className="exp">
      <ol
        className="exp-list"
        onPointerMove={onPointerMove}
        onPointerLeave={() => setPeekOn(false)}
      >
        {items.map((item, index) => {
          const isOpen = open.has(index);
          const promoted = item.positions.length > 1;
          return (
            <li
              key={item.org}
              className={`exp-item${isOpen ? " is-open" : ""}`}
            >
              <h3 className="exp-heading">
                <button
                  type="button"
                  className="exp-row"
                  id={`exp-row-${index}`}
                  data-index={index}
                  aria-expanded={isOpen}
                  aria-controls={`exp-detail-${index}`}
                  onClick={() => toggle(index)}
                >
                  <span className="exp-org">{item.org}</span>
                  <span className="exp-years">{item.years}</span>
                  <span className="exp-plus" aria-hidden />
                </button>
              </h3>
              <div
                className="exp-detail"
                id={`exp-detail-${index}`}
                role="region"
                aria-labelledby={`exp-row-${index}`}
                inert={!isOpen}
              >
                <div>
                  <div className="exp-detail-inner">
                    <div className="exp-detail-head">
                      <span className="role-mark">
                        <RoleMark item={item} />
                      </span>
                      <p className="exp-title">{titleOf(item)}</p>
                      <p className="role-when">
                        {item.when}
                        <br />
                        {item.location}
                      </p>
                    </div>
                    <div className="exp-detail-body">
                      {promoted ? (
                        <ol className="role-positions">
                          {item.positions.map((position) => (
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
                        <Points points={item.positions[0].points} />
                      )}
                      {item.stack.length ? (
                        <div className="stack-list role-stack">
                          {item.stack.map((tag) =>
                            tag.linked ? (
                              <Link
                                key={tag.name}
                                href={`/works?skill=${encodeURIComponent(tag.name)}`}
                                className="stack-link"
                                title={`Projects that use ${tag.name}`}
                              >
                                {tag.name}
                              </Link>
                            ) : (
                              <span key={tag.name}>{tag.name}</span>
                            ),
                          )}
                        </div>
                      ) : null}
                      {item.caseStudy ? (
                        <Link
                          href={`/work/${item.caseStudy.slug}`}
                          className="role-case"
                        >
                          Read the {item.caseStudy.title} case study ↗
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div
        ref={card}
        className={`exp-peek${peekOn ? " is-on" : ""}`}
        aria-hidden
      >
        <p className="exp-peek-title">{titleOf(preview)}</p>
        <p className="exp-peek-when">
          {preview.when} · {preview.location}
        </p>
        <p className="exp-peek-point">{preview.positions[0].points[0]}</p>
      </div>
    </div>
  );
}
