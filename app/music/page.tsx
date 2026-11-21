import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MinimalArrow from "@/components/MinimalArrow";

export const metadata: Metadata = {
  title: "Music | Joel Zamar",
  description: "Listen to featured music from Joel Zamar, including I'll Praise You, Turn Your Lights On, and Wave My Flag.",
};

const praiseYouSpotify = "https://open.spotify.com/track/5DH302mxUJR8AbtTWIFN8Q";
const turnYourLightsOnApple = "https://music.apple.com/us/album/lights-on/6773565470?i=6773565621";
const waveMyFlagSpotify = "https://open.spotify.com/track/5vqdpUCYe40FegZ8vuqRw9";

const externalLinkStyles =
  "inline-flex items-center gap-2 border-b border-white/55 pb-1 text-white transition hover:border-white hover:text-white/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

export default function MusicPage() {
  return (
    <main className="min-h-dvh bg-black px-6 pb-16 text-white">
      <header className="mx-auto flex w-full max-w-4xl items-center justify-between py-8">
        <Link href="/" aria-label="Joel Zamar home" className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
          <Image src="/jz-logo-white.png" width={64} height={64} alt="Joel Zamar" className="h-12 w-12 object-contain" />
        </Link>
        <Link href="/links" className="text-xs font-light tracking-[0.22em] text-white/60 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
          ALL LINKS
        </Link>
      </header>

      <section className="mx-auto w-full max-w-2xl pt-16 sm:pt-24">
        <p className="text-xs font-light tracking-[0.3em] text-white/45">JOEL ZAMAR</p>
        <h1 className="mt-4 text-4xl font-light tracking-[0.13em] sm:text-5xl">Music</h1>

        <article className="mt-12 border-t border-white/20 pt-9">
          <p className="text-xs font-light tracking-[0.25em] text-white/45">NEWLY ADDED</p>
          <h2 className="mt-4 text-2xl font-light tracking-[0.08em] sm:text-3xl">I&apos;ll Praise You</h2>
          <p className="mt-2 text-sm tracking-[0.12em] text-white/55">Listen on Spotify</p>

          <div className="mt-8 overflow-hidden rounded-xl bg-neutral-900">
            <iframe
              title="I'll Praise You on Spotify"
              src="https://open.spotify.com/embed/track/5DH302mxUJR8AbtTWIFN8Q?theme=0"
              width="100%"
              height="152"
              className="block border-0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-light tracking-[0.12em]">
            <a href={praiseYouSpotify} target="_blank" rel="noopener noreferrer" className={externalLinkStyles}>
              SPOTIFY <MinimalArrow className="h-4 w-4" />
            </a>
          </div>
        </article>

        <article className="mt-16 border-t border-white/20 pt-9">
          <p className="text-xs font-light tracking-[0.25em] text-white/45">APPLE MUSIC RELEASE</p>
          <h2 className="mt-4 text-2xl font-light tracking-[0.08em] sm:text-3xl">Turn Your Lights On</h2>
          <p className="mt-2 text-sm tracking-[0.12em] text-white/55">Listen on Apple Music</p>
          <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-light tracking-[0.12em]">
            <a href={turnYourLightsOnApple} target="_blank" rel="noopener noreferrer" className={externalLinkStyles}>
              APPLE MUSIC <MinimalArrow className="h-4 w-4" />
            </a>
          </div>
        </article>

        <article className="mt-16 border-t border-white/20 pt-9">
          <p className="text-xs font-light tracking-[0.25em] text-white/45">FEATURED RELEASE</p>
          <h2 className="mt-4 text-2xl font-light tracking-[0.08em] sm:text-3xl">Wave My Flag</h2>
          <p className="mt-2 text-sm tracking-[0.12em] text-white/55">Myron El</p>

          <div className="mt-8 overflow-hidden rounded-xl bg-neutral-900">
            <iframe
              title="Wave My Flag by Myron El on Spotify"
              src="https://open.spotify.com/embed/track/5vqdpUCYe40FegZ8vuqRw9?theme=0"
              width="100%"
              height="152"
              className="block border-0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-light tracking-[0.12em]">
            <a href={waveMyFlagSpotify} target="_blank" rel="noopener noreferrer" className={externalLinkStyles}>
              SPOTIFY <MinimalArrow className="h-4 w-4" />
            </a>
            <Link href="/videos" className="inline-flex items-center gap-2 border-b border-white/30 pb-1 text-white/65 transition hover:border-white hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              WATCH VIDEO <MinimalArrow className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </section>

      <footer className="mx-auto mt-24 max-w-4xl text-center text-xs font-light tracking-[0.22em] text-white/35">
        © Joel Zamar
      </footer>
    </main>
  );
}
