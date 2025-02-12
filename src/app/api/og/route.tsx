import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const chocolateName = searchParams.get("name") || "";
  const fortune = searchParams.get("fortune") || "";
  const lang = searchParams.get("lang") || "kr";
  const imageUrl = searchParams.get("image") || "";

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
          backgroundColor: "#F5E1DA",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <img
            src={imageUrl}
            alt={chocolateName}
            width='200'
            height='200'
            style={{ borderRadius: "12px" }}
          />
        </div>
        <h1
          style={{ fontSize: "48px", color: "#4E342E", marginBottom: "20px" }}
        >
          {lang === "en" ? "Chocolate Fortune" : "초콜릿 운세"}
        </h1>
        <h2
          style={{ fontSize: "32px", color: "#8D6E63", marginBottom: "16px" }}
        >
          {chocolateName}
        </h2>
        <p style={{ fontSize: "24px", color: "#8D6E63", textAlign: "center" }}>
          {fortune}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
