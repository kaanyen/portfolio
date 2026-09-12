"use client";

import Link from "next/link";
import { useState } from "react";
import { nav } from "@/lib/data";
import { site } from "@/lib/site";
import { KingMark } from "@/components/icons/KingMark";
import { Clock } from "@/components/chrome/Clock";
import { ScrollProgress } from "@/components/chrome/ScrollProgress";
import { icons } from "@/components/chrome/NavIcons";
import { MenuOverlay } from "@/components/chrome/MenuOverlay";
import { NavLink } from "@/components/chrome/NavLink";
import { EmailCta } from "@/components/chrome/EmailCta";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="header-bar header-bar-top">
            <Link href="/" className="brand" aria-label={`${site.name}, home`}>
              <KingMark className="brand-mark" />
              <span className="brand-word">{site.name}</span>
            </Link>

            <div className="header-actions">
              <EmailCta />
              <a
                href={site.cv}
                className="header-in header-cv"
                target="_blank"
                rel="noreferrer"
              >
                CV
              </a>
              <a
                href={site.linkedin}
                className="header-in"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <nav className="nav-rail" aria-label="Primary">
            {nav.map((item) => {
              const Icon = icons[item.icon];
              return (
                <NavLink key={item.href} href={item.href} className="nav-item">
                  <Icon />
                  <span className="nav-tag">{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          <div className="header-bar header-bar-bottom">
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen(true)}
            >
              <span className="menu-dots" aria-hidden>
                <span />
                <span />
                <span />
              </span>
              Menu
            </button>

            <Clock />
          </div>

          <ScrollProgress />
        </div>
      </header>
      {open ? <MenuOverlay onClose={() => setOpen(false)} /> : null}
    </>
  );
}
