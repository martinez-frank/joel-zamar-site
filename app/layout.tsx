import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joel Zamar",
  description: "A boutique creative studio for music, film, and visual storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
