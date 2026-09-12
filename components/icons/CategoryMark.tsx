import type { ReactNode } from "react";

function Mark({ children }: { children: ReactNode }) {
  return (
    <svg
      className="color-card-mark"
      viewBox="0 0 64 64"
      fill="currentColor"
      aria-hidden
    >
      {children}
    </svg>
  );
}

const marks: Record<string, ReactNode> = {
  "Agent platform": (
    <Mark>
      <circle cx="15" cy="18" r="7.2" />
      <circle cx="49" cy="17" r="6.6" />
      <circle cx="32" cy="47" r="8" />
      <rect x="20" y="21.2" width="20.4" height="3.4" rx="1.7" />
      <rect
        x="21.4"
        y="26"
        width="22"
        height="3.4"
        rx="1.7"
        transform="rotate(52 32.4 27.7)"
      />
      <rect
        x="21.4"
        y="26"
        width="22"
        height="3.4"
        rx="1.7"
        transform="rotate(-52 32.4 27.7)"
      />
    </Mark>
  ),
  Fintech: (
    <Mark>
      <circle cx="32" cy="32" r="24" />
      <circle cx="32" cy="32" r="16.4" fill="var(--card-bg)" />
      <rect x="29.2" y="18.6" width="5.6" height="26.8" rx="1.4" />
      <rect x="22.4" y="24.2" width="19.2" height="5" rx="1.4" />
      <rect x="22.4" y="34.8" width="19.2" height="5" rx="1.4" />
    </Mark>
  ),
  "AI product": (
    <Mark>
      <rect x="6" y="14" width="16" height="22" rx="3" />
      <rect x="26" y="14" width="16" height="12" rx="3" />
      <rect x="46" y="14" width="12" height="36" rx="3" />
      <rect x="26" y="30" width="16" height="20" rx="3" />
      <rect x="6" y="40" width="16" height="10" rx="3" />
      <path d="M41 6.4 43.4 12l5.8 2.4-5.8 2.4L41 22.4 38.6 16.8 32.8 14.4 38.6 12Z" />
    </Mark>
  ),
  Research: (
    <Mark>
      <path d="M13 6h25l13 13v39H13V6Z" />
      <path d="M38 7.4V20h12.4L38 7.4Z" fill="var(--card-bg)" />
      <rect x="20" y="28" width="24" height="3.2" rx="1" fill="var(--card-bg)" />
      <rect x="20" y="36" width="24" height="3.2" rx="1" fill="var(--card-bg)" />
      <rect x="20" y="44" width="16" height="3.2" rx="1" fill="var(--card-bg)" />
    </Mark>
  ),
  Commerce: (
    <Mark>
      <path d="M7 17h50v11.2c-3.4 0-6 2.4-6 5.8s2.6 5.8 6 5.8V49H7V39.8c3.4 0 6-2.4 6-5.8s-2.6-5.8-6-5.8V17Z" />
      <rect x="16" y="25" width="3.4" height="16" rx="1" fill="var(--card-bg)" />
      <rect x="23.4" y="25" width="3.4" height="16" rx="1" fill="var(--card-bg)" />
      <rect x="30.8" y="25" width="3.4" height="16" rx="1" fill="var(--card-bg)" />
      <rect x="38.2" y="25" width="3.4" height="16" rx="1" fill="var(--card-bg)" />
    </Mark>
  ),
  "Computer vision": (
    <Mark>
      <path d="M32 12c15.2 0 25.6 13.2 27.6 20-2 6.8-12.4 20-27.6 20S6.4 38.8 4.4 32C6.4 25.2 16.8 12 32 12Z" />
      <circle cx="32" cy="32" r="10.4" fill="var(--card-bg)" />
      <circle cx="32" cy="32" r="5" />
    </Mark>
  ),
  "Healthcare AI": (
    <Mark>
      <path d="M24 6h16v18h18v16H40v18H24V40H6V22h18V6Z" />
    </Mark>
  ),
  "Multi-tenant": (
    <Mark>
      <rect x="5" y="28" width="18" height="28" rx="2" />
      <rect x="23" y="16" width="18" height="40" rx="2" />
      <rect x="41" y="22" width="18" height="34" rx="2" />
      <rect x="9.4" y="36" width="5.2" height="5.2" fill="var(--card-bg)" />
      <rect x="9.4" y="44.6" width="5.2" height="5.2" fill="var(--card-bg)" />
      <rect x="27.4" y="24" width="5.2" height="5.2" fill="var(--card-bg)" />
      <rect x="27.4" y="32.6" width="5.2" height="5.2" fill="var(--card-bg)" />
      <rect x="45.4" y="30" width="5.2" height="5.2" fill="var(--card-bg)" />
      <rect x="45.4" y="38.6" width="5.2" height="5.2" fill="var(--card-bg)" />
    </Mark>
  ),
  Speech: (
    <Mark>
      <rect x="6" y="26" width="7" height="20" rx="3" />
      <rect x="17.4" y="16" width="7" height="36" rx="3" />
      <rect x="28.8" y="8" width="7" height="48" rx="3" />
      <rect x="40.2" y="20" width="7" height="24" rx="3" />
      <rect x="51.6" y="24" width="7" height="16" rx="3" />
    </Mark>
  ),
  Robotics: (
    <Mark>
      <rect x="8" y="8" width="14" height="14" rx="7" />
      <rect x="42" y="8" width="14" height="14" rx="7" />
      <rect x="8" y="42" width="14" height="14" rx="7" />
      <rect x="42" y="42" width="14" height="14" rx="7" />
      <rect x="29" y="29" width="6" height="6" rx="1.4" />
      <rect
        x="18"
        y="30.2"
        width="28"
        height="3.6"
        rx="1.8"
        transform="rotate(45 32 32)"
      />
      <rect
        x="18"
        y="30.2"
        width="28"
        height="3.6"
        rx="1.8"
        transform="rotate(-45 32 32)"
      />
    </Mark>
  ),
};

export function CategoryMark({ category }: { category: string }) {
  return marks[category] ?? marks.Research;
}
