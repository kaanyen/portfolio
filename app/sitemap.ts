import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/works", "/about", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
  }));
  const work = projects.map((project) => ({
    url: `${site.url}/work/${project.slug}`,
  }));
  return [...pages, ...work];
}
