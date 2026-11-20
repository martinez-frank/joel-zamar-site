import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "Joel Zamar — Music. Film. Visual Storytelling.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Reuse the original JZ artwork so the preview matches the website.
const logoBase64 = await readFile(
  join(process.cwd(), "public", "jz-logo-white.png"),
  "base64",
);
const logoSrc = `data:image/png;base64,${logoBase64}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#000000",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial, Helvetica, sans-serif",
          textAlign: "center",
        }}
      >
        <img
          src={logoSrc}
          width={325}
          height={242}
          alt="JZ"
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            fontSize: 55,
            fontWeight: 400,
            letterSpacing: "9px",
            marginTop: 14,
            display: "flex",
          }}
        >
          JOEL ZAMAR
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 300,
            letterSpacing: "5px",
            marginTop: 23,
            color: "#b9b9b9",
            display: "flex",
          }}
        >
          MUSIC. FILM. VISUAL STORYTELLING.
        </div>
        <div
          style={{
            fontSize: 18,
            letterSpacing: "4px",
            marginTop: 42,
            color: "#777777",
            display: "flex",
          }}
        >
          JOELZAMAR.COM
        </div>
      </div>
    ),
    size,
  );
}
