import Link from "next/link";

export default function Hero() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-4xl md:text-6xl font-light tracking-widest whitespace-nowrap">
          JOEL ZAMAR
        </h1>

        <p className="text-sm md:text-lg tracking-[0.4em] text-gray-400 mt-4">
          FILM | MUSIC | STORYTELLING
        </p>

        <p className="mt-6 text-gray-400 leading-relaxed">
          Joel Zamar is a boutique production company focused on capturing meaningful stories
          through film and music.
        </p>

        <div className="flex flex-col md:flex-row gap-6 mt-10 justify-center">
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
