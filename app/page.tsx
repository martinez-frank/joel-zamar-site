import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "@/components/InstagramIcon";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-black px-6 py-16 text-white">
      <section className="mx-auto flex w-full max-w-xl flex-col items-center text-center">
        <Image
          src="/jz-logo-white.png"
          alt="Joel Zamar"
          width={240}
          height={240}
          priority
          className="h-auto w-32 sm:w-40 md:w-48"
        />

        <h1 className="mt-10 text-balance text-lg font-light tracking-[0.28em] text-white sm:text-xl md:text-2xl">
          Music. Film. Visual Storytelling.
        </h1>

        <Link
          href="/links"
          className="mt-9 border-b border-white/50 pb-1 text-xs font-light tracking-[0.3em] text-white/85 transition hover:border-white hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-black sm:text-sm"
        >
          EXPLORE
        </Link>

        <a
          href="mailto:Mario@joelzamar.com"
          className="mt-7 text-sm font-light tracking-[0.18em] text-white/70 transition hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-black sm:text-base"
        >
          Mario@joelzamar.com
        </a>

        <a
          href="https://www.instagram.com/joelzamar_music/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Joel Zamar Music on Instagram"
          className="mt-6 inline-flex items-center gap-2 rounded-sm text-xs font-light tracking-[0.18em] text-white/55 transition hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
        >
          <InstagramIcon className="h-[18px] w-[18px]" />
          <span>INSTAGRAM</span>
        </a>
      </section>

      <footer className="absolute inset-x-0 bottom-8 text-center text-xs font-light tracking-[0.22em] text-white/45 sm:bottom-10 sm:text-sm">
        © Joel Zamar
      </footer>
    </main>
  );
}
