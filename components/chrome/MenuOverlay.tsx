"use client";

import { useEffect } from "react";
import { nav } from "@/lib/data";
import { site } from "@/lib/site";
import { NavLink } from "@/components/chrome/NavLink";

export function MenuOverlay({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="menu" id="site-menu" role="dialog" aria-modal="true" aria-label="Menu">
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
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={site.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={site.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
}
