import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Joel Zamar | Music. Film. Visual Storytelling.";
const siteDescription =
  "Explore music, music videos, and visual storytelling from Joel Zamar. Listen, watch, and connect.";
const siteUrl = "https://www.joelzamar.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Joel Zamar",
  description: siteDescription,
  applicationName: "Joel Zamar",
  icons: {
    icon: [{ url: "/icon.svg?v=2", type: "image/svg+xml", sizes: "any" }],
    shortcut: [{ url: "/icon.svg?v=2", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    siteName: "Joel Zamar",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
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
