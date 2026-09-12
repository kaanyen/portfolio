"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function wait(min: number, span: number) {
  return min + Math.random() * span;
}

export function EmailCta() {
  const [waving, setWaving] = useState(false);

  useEffect(() => {
    if (reducedMotion()) return;

    let cancelled = false;
    const timers = new Set<number>();

    const later = (fn: () => void, ms: number) => {
      const id = window.setTimeout(() => {
        timers.delete(id);
        if (!cancelled) fn();
      }, ms);
      timers.add(id);
    };

    const clearAll = () => {
      timers.forEach((id) => window.clearTimeout(id));
      timers.clear();
    };

    const play = () => {
      setWaving(true);
      later(() => {
        setWaving(false);
        later(play, wait(7000, 5000));
      }, 1800);
    };

    // First wave shortly after the page appears, then every 7–12 seconds.
    later(play, 800);

    return () => {
      cancelled = true;
      clearAll();
    };
  }, []);

  return (
    <Link href="/contact" className="header-cta">
      {waving ? (
        <span className="header-cta-hand" aria-hidden>
          👋
        </span>
      ) : null}
      email me now
    </Link>
  );
}
