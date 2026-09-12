import Image from "next/image";
import { stills } from "@/lib/data";

type WorkImageProps = {
  src: string;
  sizes: string;
  className?: string;
  eager?: boolean;
  // Show the still's caption under it. Off for the hero image, whose context
  // is the page heading.
  captioned?: boolean;
};

export function WorkImage({ src, sizes, className, eager, captioned }: WorkImageProps) {
  const still = stills[src] ?? { width: 1440, height: 900, caption: "" };
  const image = (
    <Image
      src={src}
      alt={still.caption}
      width={still.width}
      height={still.height}
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      className={`work-still ${className ?? ""}`}
    />
  );

  if (!captioned || !still.caption) return image;

  return (
    <figure className="work-figure">
      {image}
      <figcaption>{still.caption}</figcaption>
    </figure>
  );
}
