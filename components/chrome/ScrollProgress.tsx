"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const line = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max <= 0 ? 0 : window.scrollY / max;
      const percent = `${progress * 100}%`;
      if (line.current) line.current.style.height = percent;
      if (dot.current) dot.current.style.top = percent;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="progress" aria-hidden>
      <div className="progress-track" />
      <div ref={line} className="progress-line" />
      <div ref={dot} className="progress-dot" />
    </div>
  );
}
