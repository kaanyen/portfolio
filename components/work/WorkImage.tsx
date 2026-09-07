type WorkImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function WorkImage({ src, alt, className }: WorkImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={`work-still ${className ?? ""}`} />
  );
}
