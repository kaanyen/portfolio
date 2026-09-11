import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Static Geist instances for next/og, which needs TTF/OTF rather than the
// woff2 that next/font serves to browsers.
export async function geistFonts() {
  const dir = join(process.cwd(), "assets/fonts");
  const [regular, heavy] = await Promise.all([
    readFile(join(dir, "Geist-400.ttf")),
    readFile(join(dir, "Geist-800.ttf")),
  ]);
  return [
    { name: "Geist", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Geist", data: heavy, weight: 800 as const, style: "normal" as const },
  ];
}
