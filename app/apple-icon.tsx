import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const logoBase64 = await readFile(
  join(process.cwd(), "public", "jz-logo-white.png"),
  "base64",
);
const logoSrc = `data:image/png;base64,${logoBase64}`;

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000000",
        }}
      >
        <img src={logoSrc} alt="Joel Zamar JZ" width={162} height={122} style={{ objectFit: "contain" }} />
      </div>
    ),
    size,
  );
}
