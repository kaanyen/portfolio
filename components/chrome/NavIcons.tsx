export function WorksIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z" />
    </svg>
  );
}

export function ExperienceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M9 6V5a3 3 0 0 1 6 0v1h4v14H5V6h4Zm2 0h2V5a1 1 0 0 0-2 0v1ZM7 10h10v1.6H7V10Z" />
    </svg>
  );
}

export function AboutIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 1.8c-3.4 0-8 1.7-8 5.1V21h16v-2.1c0-3.4-4.6-5.1-8-5.1Z" />
    </svg>
  );
}

export function WritingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4 3h10l6 6v12H4V3Zm10 1.7V10h5.2L14 4.7ZM7 13.2h10v1.6H7v-1.6Zm0 3.4h7v1.6H7v-1.6Z" />
    </svg>
  );
}

export function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3 5.5h18V19H3V5.5Zm1.8 1.7 7.2 5 7.2-5H4.8Zm15.4 1.6-7.6 5.3a1.5 1.5 0 0 1-1.6 0L3.8 8.8V17.3h16.4V8.8Z" />
    </svg>
  );
}

export const icons = {
  works: WorksIcon,
  experience: ExperienceIcon,
  about: AboutIcon,
  writing: WritingIcon,
  contact: ContactIcon,
};
