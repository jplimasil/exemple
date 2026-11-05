import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.business.name}: ${site.business.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Generated share image, so every client gets one without design work. */
export default function OpengraphImage() {
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
          background: "#0a1f44",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 800 }}>{site.business.name}</div>
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, maxWidth: 1000 }}>
          {site.hero.headline}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 34 }}>
          <div
            style={{
              background: "#f7c234",
              color: "#0a1f44",
              padding: "14px 28px",
              borderRadius: 999,
              fontWeight: 800,
            }}
          >
            {site.business.phone}
          </div>
          <div style={{ color: "rgba(255,255,255,0.8)" }}>{site.business.baseLocation}</div>
        </div>
      </div>
    ),
    size,
  );
}
