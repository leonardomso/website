import { ImageResponse } from "next/og";

export const alt = "Leonardo Maldonado — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              letterSpacing: "0.2em",
              textTransform: "uppercase" as const,
              color: "#666",
              fontFamily: "monospace",
            }}
          >
            Software Engineer · Valencia, Spain
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "72px",
              fontWeight: 600,
              color: "#ededed",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            <span>Leonardo</span>
            <span>Maldonado</span>
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#888",
              marginTop: "16px",
              maxWidth: "600px",
              lineHeight: 1.6,
            }}
          >
            Software engineer at Namecheap, building web experiences and
            passionate about programming, web development, and building products.
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            fontSize: "14px",
            color: "#666",
            fontFamily: "monospace",
          }}
        >
          leonardomso.com
        </div>
      </div>
    ),
    { ...size }
  );
}
