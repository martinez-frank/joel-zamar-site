import Link from "next/link";

export default function StoryPage() {
  return (
    <main className="relative min-h-screen bg-black px-6 py-24 text-white md:py-32">
      <Link
        href="/"
        className="absolute top-8 left-8 border border-white px-4 py-2 text-sm tracking-widest hover:bg-white hover:text-black transition"
      >
        BACK TO HOME
      </Link>
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h1 className="text-4xl font-light tracking-wide md:text-5xl">What&apos;s Your Story?</h1>
          <p className="mt-4 text-lg text-gray-300">
            Every meaningful story begins somewhere. Tell us about yours.
          </p>
        </div>

        <form className="mx-auto mt-14 space-y-10">
          <section className="space-y-4 text-left">
            <h2 className="text-xl font-light tracking-wide text-gray-100">SECTION 1 — Who Are You</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                required
                type="text"
                name="name"
                placeholder="Name"
                className="w-full border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white focus:outline-none"
              />
              <input
                type="text"
                name="organization"
                placeholder="Organization / Artist Name"
                className="w-full border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white focus:outline-none"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="w-full border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white focus:outline-none"
              />
            </div>
          </section>

          <section className="space-y-3 text-left">
            <h2 className="text-xl font-light tracking-wide text-gray-100">SECTION 2 — Your Story</h2>
            <label className="block text-sm text-gray-300" htmlFor="storyPrompt">
              &quot;What story do you want to tell?&quot;
            </label>
            <textarea
              id="storyPrompt"
              required
              name="story"
              rows={6}
              className="w-full resize-y border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white focus:outline-none"
            />
          </section>

          <section className="space-y-3 text-left">
            <h2 className="text-xl font-light tracking-wide text-gray-100">
              SECTION 3 — Why Does This Story Matter
            </h2>
            <label className="block text-sm text-gray-300" htmlFor="impactPrompt">
              &quot;What impact do you hope your story has on others?&quot;
            </label>
            <textarea
              id="impactPrompt"
              required
              name="impact"
              rows={5}
              className="w-full resize-y border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white focus:outline-none"
            />
          </section>

          <button
            type="submit"
            className="w-full border border-white px-6 py-3 text-center tracking-widest transition hover:bg-white hover:text-black"
          >
            SUBMIT YOUR STORY
          </button>
        </form>
      </div>
    </main>
  );
}
