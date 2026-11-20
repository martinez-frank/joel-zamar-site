import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "@/components/InstagramIcon";

export const metadata: Metadata = {
  title: "Links | Joel Zamar",
  description: "Explore music, videos, and contact Joel Zamar.",
};

const destinations = [
  { label: "MUSIC", detail: "Listen to Wave My Flag", href: "/music", external: false },
  { label: "VIDEOS", detail: "Visual storytelling", href: "/videos", external: false },
  { label: "SPOTIFY", detail: "Wave My Flag — Myron El", href: "https://open.spotify.com/track/5vqdpUCYe40FegZ8vuqRw9", external: true },
  { label: "INSTAGRAM", detail: "@joelzamar_music", href: "https://www.instagram.com/joelzamar_music/", external: true },
  { label: "CONTACT", detail: "Mario@joelzamar.com", href: "mailto:Mario@joelzamar.com", external: false },
] as const;

export default function LinksPage() {
  return (
    <main className="flex min-h-dvh flex-col bg-black px-6 text-white">
      <section className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center py-20 text-center">
        <Link href="/" aria-label="Joel Zamar home" className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
          <Image src="/jz-logo-white.png" alt="Joel Zamar" width={160} height={160} priority className="h-auto w-28 sm:w-32" />
        </Link>
        <h1 className="mt-8 text-2xl font-light tracking-[0.25em] sm:text-3xl">Links</h1>
        <p className="mt-4 text-xs font-light tracking-[0.2em] text-white/45">MUSIC. FILM. VISUAL STORYTELLING.</p>

        <nav aria-label="Explore Joel Zamar" className="mt-12 w-full border-t border-white/20 text-left">
          {destinations.map(({ label, detail, href, external }) => (
            <Link
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex w-full items-center justify-between gap-4 border-b border-white/20 py-5 transition hover:border-white/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span>
                <span className="flex items-center gap-3 text-sm font-light tracking-[0.22em] text-white">
                  {label === "INSTAGRAM" && <InstagramIcon className="h-[18px] w-[18px] shrink-0" />}
                  {label}
                </span>
                <span className="mt-1.5 block text-xs font-light tracking-[0.05em] text-white/45">{detail}</span>
              </span>
              <span aria-hidden="true" className="text-xl font-light text-white/40 transition group-hover:translate-x-1 group-hover:text-white">
                {external ? "↗" : "→"}
              </span>
            </Link>
          ))}
        </nav>
        <Link href="/" className="mt-10 text-xs font-light tracking-[0.2em] text-white/45 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
          BACK TO HOME
        </Link>
      </section>
      <footer className="py-8 text-center text-xs font-light tracking-[0.22em] text-white/35">© Joel Zamar</footer>
    </main>
  );
}
