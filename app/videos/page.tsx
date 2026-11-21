import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MinimalArrow from "@/components/MinimalArrow";
import { existsSync } from "node:fs";
import { join } from "node:path";

export const metadata: Metadata = {
  title: "Videos | Joel Zamar",
  description: "Watch films and music videos by Joel Zamar, including Cherokee Ranch & Castle and Wave My Flag.",
};

const cherokeeRanchVideo = "/videos/CR_Cherokee_Ranch_Web_Optimized.mp4";

// The film appears automatically when its optimized MP4 is committed to public/videos.
const hasCherokeeRanchVideo = existsSync(
  join(process.cwd(), "public", "videos", "CR_Cherokee_Ranch_Web_Optimized.mp4"),
);

export default function VideosPage() {
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

      <section className="mx-auto w-full max-w-4xl pt-12 sm:pt-20">
        <p className="text-xs font-light tracking-[0.3em] text-white/45">JOEL ZAMAR</p>
        <h1 className="mt-4 text-4xl font-light tracking-[0.13em] sm:text-5xl">Videos</h1>

        {hasCherokeeRanchVideo && (
          <article className="mt-12 border-t border-white/20 pt-10">
            <p className="text-xs font-light tracking-[0.25em] text-white/45">FEATURED FILM</p>
            <h2 className="mt-4 text-2xl font-light tracking-[0.08em] sm:text-3xl">Cherokee Ranch &amp; Castle</h2>
            <p className="mt-3 text-sm font-light tracking-[0.08em] text-white/55">
              Visual storytelling
            </p>
            <div className="mt-8 overflow-hidden rounded-sm border border-white/10 bg-neutral-950">
              <video
                controls
                playsInline
                preload="metadata"
                aria-label="Cherokee Ranch and Castle film"
                className="aspect-video w-full bg-black object-contain"
              >
                <source src={cherokeeRanchVideo} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </div>
          </article>
        )}

        <article className="mt-12 grid items-center gap-10 border-t border-white/20 pt-10 md:grid-cols-[minmax(0,340px)_minmax(0,1fr)] md:gap-16">
          <div className="mx-auto w-full max-w-[340px] overflow-hidden rounded-sm border border-white/10 bg-neutral-950">
            <video
              controls
              playsInline
              preload="metadata"
              aria-label="Wave My Flag music video"
              className="aspect-[9/16] w-full bg-neutral-950 object-contain"
            >
              <source src="/videos/Wave_My_Flag_Web_Optimized.mp4" type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          </div>

          <div className="md:self-center">
            <p className="text-xs font-light tracking-[0.25em] text-white/45">MUSIC VIDEO</p>
            <h2 className="mt-4 text-2xl font-light tracking-[0.08em] sm:text-3xl">Wave My Flag</h2>
            <p className="mt-3 text-sm font-light tracking-[0.1em] text-white/60">Myron El</p>
            <p className="mt-7 max-w-sm text-sm font-light leading-7 text-white/55">
              A visual story told through music.
            </p>
            <Link href="/music" className="mt-9 inline-flex items-center gap-2 border-b border-white/60 pb-1 text-sm font-light tracking-[0.15em] text-white transition hover:border-white hover:text-white/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              LISTEN TO THE SONG <MinimalArrow className="h-4 w-4" />
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
