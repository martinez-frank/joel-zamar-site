import type { Metadata } from "next";
import "./globals.css";

const siteDescription = "Music. Film. Visual Storytelling.";

export const metadata: Metadata = {
  title: "Joel Zamar",
  description: siteDescription,
  icons: {
    icon: "/jz-logo-white.png",
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
