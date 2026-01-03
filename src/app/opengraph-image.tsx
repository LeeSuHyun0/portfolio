import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "이수현 - 프론트엔드 개발자 포트폴리오";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 120,
            fontWeight: "bold",
            color: "white",
            marginBottom: 20,
          }}
        >
          {"<SH/>"}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            color: "rgba(255, 255, 255, 0.9)",
          }}
        >
          Frontend Developer Portfolio
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}