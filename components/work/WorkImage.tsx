import Image from "next/image";
import { stillSizes } from "@/lib/data";

type WorkImageProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  eager?: boolean;
};

export function WorkImage({ src, alt, sizes, className, eager }: WorkImageProps) {
  const size = stillSizes[src] ?? { width: 1440, height: 900 };
  return (
    <Image
      src={src}
      alt={alt}
      width={size.width}
      height={size.height}
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      className={`work-still ${className ?? ""}`}
    />
  );
}
