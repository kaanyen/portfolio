type OrgMarkProps = {
  name: string;
  src?: string;
  width?: string;
  height?: string;
  className?: string;
};

export function OrgMark({ name, src, width, height, className }: OrgMarkProps) {
  if (!src) {
    return <span className={className}>{name}</span>;
  }

  return (
    <span
      className={`org-mark ${className ?? ""}`}
      role="img"
      aria-label={name}
      style={{
        width: width ?? "4.5rem",
        height,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
      }}
    />
  );
}
