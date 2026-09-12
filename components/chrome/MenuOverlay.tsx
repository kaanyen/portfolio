"use client";

import { useEffect, useRef } from "react";
import { nav } from "@/lib/data";
import { site } from "@/lib/site";
import { NavLink } from "@/components/chrome/NavLink";
import { RECRUITER_OPEN } from "@/components/chrome/RecruiterView";

function focusables(root: HTMLElement | null) {
  return [
    ...(root?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []),
  ];
}

export function MenuOverlay({ onClose }: { onClose: () => void }) {
  const panel = useRef<HTMLDivElement>(null);
  // The parent passes a fresh arrow each render; read it through a ref so the
  // effect below runs once per open and focus isn't reset mid-interaction.
  const close = useRef(onClose);
  useEffect(() => {
    close.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    focusables(panel.current)[0]?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close.current();
        return;
      }
      if (event.key !== "Tab") return;
      // Keep Tab / Shift+Tab cycling inside the dialog.
      const items = focusables(panel.current);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      // Return focus to the Menu button (or whatever opened the dialog).
      opener?.focus();
    };
  }, []);

  return (
    <div
      ref={panel}
      className="menu"
      id="site-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div className="flex items-start justify-between">
        <p className="text-youth text-sm uppercase tracking-wide">{site.name}</p>
        <button type="button" className="text-youth text-sm uppercase" onClick={onClose}>
          Close
        </button>
      </div>
      <nav>
        {nav.map((item) => (
          <NavLink key={item.href} href={item.href} onClick={onClose}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="flex flex-wrap gap-6 text-sm text-grey">
        {/* The header's Recruiter view button is hidden on small screens, so
            the menu opens the same dialog. The href is the no-JS fallback. */}
        <a
          href="#recruiter"
          onClick={(event) => {
            event.preventDefault();
            onClose();
            window.dispatchEvent(new Event(RECRUITER_OPEN));
          }}
        >
          Recruiter view
        </a>
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={site.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={site.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={site.cv} target="_blank" rel="noreferrer">
          CV (PDF)
        </a>
      </div>
    </div>
  );
}
