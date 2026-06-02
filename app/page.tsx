import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-12 text-white">
      <section className="mx-auto flex w-full max-w-xl flex-col items-center text-center">
        <Image
          src="/jz-logo-white.png"
          alt="Joel Zamar"
          width={240}
          height={240}
          priority
          className="h-auto w-36 sm:w-44 md:w-56"
        />

        <p className="mt-10 max-w-md text-base font-light leading-7 text-white/75 sm:text-lg">
          A boutique creative studio for music, film, and visual storytelling.
        </p>

        <p className="mt-6 text-sm font-light tracking-wide text-white/60 sm:text-base">
          For more information:{" "}
          <a
            href="mailto:Mario@joelzamar.com"
            className="text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
          >
            Mario@joelzamar.com
          </a>
        </p>
      </section>
    </main>
  );
}
