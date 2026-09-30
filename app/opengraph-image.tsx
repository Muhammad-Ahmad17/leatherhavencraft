import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#dde3e8",
          color: "#1d262e",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase" }}>
          Leather Haven Craft
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 16, letterSpacing: -1 }}>
          Scroll the piece.
        </div>
      </div>
    ),
    { ...size },
  );
}
