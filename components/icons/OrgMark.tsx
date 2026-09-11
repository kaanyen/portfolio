type OrgMarkProps = {
  name: string;
  src?: string;
  width?: string;
  height?: string;
  className?: string;
  href?: string;
  // For the marquee's duplicated second half: keep it out of the tab order
  // and the accessibility tree so each logo is announced once.
  hidden?: boolean;
};

export function OrgMark({
  name,
  src,
  width,
  height,
  className,
  href,
  hidden,
}: OrgMarkProps) {
  const label = href ? undefined : name;
  const mark = src ? (
    <span
      className={`org-mark ${className ?? ""}`}
      role={label ? "img" : undefined}
      aria-label={label}
      style={{
        width: width ?? "4.5rem",
        height,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
      }}
    />
  ) : (
    <span className={className}>{name}</span>
  );

  if (!href) return mark;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="org-link"
      aria-label={name}
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
    >
      {mark}
    </a>
  );
}
