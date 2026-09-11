import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background: "#fbf9ef",
          color: "#3a1520",
        }}
      >
        <div style={{ fontSize: 28, color: "#8e827c" }}>{site.location}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 120,
              fontWeight: 800,
              letterSpacing: "-0.05em",
              lineHeight: 0.9,
              color: "#6b1d32",
            }}
          >
            {site.name}
          </div>
          <div style={{ fontSize: 40, marginTop: 28, maxWidth: 900 }}>
            {`${site.title}. Agent platforms, products, and models that hold under pressure.`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
