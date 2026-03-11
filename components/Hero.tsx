import Link from "next/link";

export default function Hero() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-5xl md:text-6xl tracking-widest font-light">JOEL ZAMAR</h1>

        <p className="mt-4 text-lg tracking-[0.3em] text-gray-300">FILM | MUSIC | STORYTELLING</p>

        <p className="mt-6 text-gray-400 leading-relaxed">
          Joel Zamar is a boutique production company focused on capturing meaningful stories
          through film and music.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/story"
            className="border border-white px-6 py-3 tracking-widest hover:bg-white hover:text-black transition"
          >
            TELL YOUR STORY
          </Link>

          <button className="border border-white px-6 py-3 tracking-widest hover:bg-white hover:text-black transition">
            VIEW WORK
          </button>
        </div>
      </div>
    </main>
  );
}
