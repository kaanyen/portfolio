import { ImageResponse } from "next/og";
import { getProject, projects, toneColors } from "@/lib/data";
import { site } from "@/lib/site";

export const alt = "Case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  const tone = toneColors[project?.tone ?? "purple"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: tone.bg,
          color: tone.ink,
        }}
      >
        <div style={{ display: "flex", fontSize: 28, opacity: 0.75 }}>
          {project ? `${project.year} · ${project.category}` : site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 112,
              fontWeight: 800,
              letterSpacing: "-0.05em",
              lineHeight: 0.9,
            }}
          >
            {project?.title ?? "Work"}
          </div>
          {project ? (
            <div style={{ fontSize: 34, marginTop: 28, maxWidth: 980, lineHeight: 1.25 }}>
              {project.summary}
            </div>
          ) : null}
          <div style={{ fontSize: 26, marginTop: 36, opacity: 0.75 }}>{site.name}</div>
        </div>
      </div>
    ),
    size,
  );
}
