import type { Metadata } from "next";
import "./globals.css";

const siteDescription = "Music. Film. Visual Storytelling.";

export const metadata: Metadata = {
  title: "Joel Zamar",
  description: siteDescription,
  icons: {
    icon: [{ url: "/icon.svg?v=2", type: "image/svg+xml", sizes: "any" }],
    shortcut: [{ url: "/icon.svg?v=2", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Joel Zamar",
    description: siteDescription,
  },
  twitter: {
    title: "Joel Zamar",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
