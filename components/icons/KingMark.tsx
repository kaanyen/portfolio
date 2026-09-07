type KingMarkProps = {
  className?: string;
  title?: string;
};

export function KingMark({ className, title = "Kweku Anyen" }: KingMarkProps) {
  return (
    <span className={`king-mark ${className ?? ""}`} role="img" aria-label={title} />
  );
}
