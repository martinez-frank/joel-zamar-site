"use client";

import { FormEvent, useState } from "react";

const projectTypes = [
  "Music Video",
  "Short Story Film",
  "Nonprofit Story",
  "Artist Feature",
  "Event Coverage",
];

const usageTypes = [
  "Social media",
  "Film festival",
  "Nonprofit campaign",
  "YouTube",
  "Church / ministry",
  "Brand marketing",
];

const budgetRanges = ["Under $2k", "$2k–$5k", "$5k–$10k", "$10k+"];

const timelines = ["ASAP", "1–3 months", "3–6 months"];

export default function StorySection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="story" className="bg-black px-6 py-24 text-white md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-light tracking-wide md:text-5xl">What&apos;s Your Story?</h2>
        <p className="mt-4 text-lg text-gray-300">
          Every meaningful story begins somewhere. Tell us about yours.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-white/20 bg-zinc-950/80 p-8 shadow-2xl md:p-10">
        {isSubmitted ? (
          <div className="text-center">
            <p className="text-2xl font-light leading-relaxed text-gray-100">
              Thank you for sharing your story.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Joel or a member of the team will review your submission and reach out to explore
              how we can bring your story to life.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-4 text-left">
              <h3 className="text-xl font-light tracking-wide text-gray-100">Step 1 — Who Are You?</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <input required type="text" name="name" placeholder="Name" className="w-full border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white focus:outline-none" />
                <input type="text" name="organization" placeholder="Organization / Artist Name" className="w-full border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white focus:outline-none" />
                <input required type="email" name="email" placeholder="Email" className="w-full border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white focus:outline-none" />
                <input type="tel" name="phone" placeholder="Phone" className="w-full border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white focus:outline-none" />
              </div>
            </div>

            <div className="space-y-3 text-left">
              <h3 className="text-xl font-light tracking-wide text-gray-100">Step 2 — Your Story</h3>
              <label className="block text-sm text-gray-300" htmlFor="storyPrompt">
                &quot;What story do you want to tell?&quot;
              </label>
              <textarea id="storyPrompt" required name="story" rows={5} className="w-full resize-y border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white focus:outline-none" />
              <p className="text-sm text-gray-400">
                Examples: personal journey, nonprofit mission, music story, documentary, brand
                story
              </p>
            </div>

            <div className="space-y-3 text-left">
              <h3 className="text-xl font-light tracking-wide text-gray-100">
                Step 3 — Why Does This Story Matter?
              </h3>
              <label className="block text-sm text-gray-300" htmlFor="impact">
                &quot;What impact do you hope your story has on others?&quot;
              </label>
              <textarea id="impact" required name="impact" rows={4} className="w-full resize-y border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white focus:outline-none" />
            </div>

            <div className="space-y-6 text-left">
              <div className="space-y-2">
                <h3 className="text-xl font-light tracking-wide text-gray-100">Step 4 — Project Type</h3>
                <select required name="projectType" className="w-full border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-white focus:outline-none">
                  <option value="">Select project type</option>
                  {projectTypes.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-light tracking-wide text-gray-100">
                  Step 5 — Where Will This Be Used?
                </h3>
                <select required name="usage" className="w-full border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-white focus:outline-none">
                  <option value="">Select usage</option>
                  {usageTypes.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-light tracking-wide text-gray-100">Step 6 — Budget Range</h3>
                <select required name="budget" className="w-full border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-white focus:outline-none">
                  <option value="">Select budget range</option>
                  {budgetRanges.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-light tracking-wide text-gray-100">Step 7 — Timeline</h3>
                <select required name="timeline" className="w-full border border-white/20 bg-black/40 px-4 py-3 text-white focus:border-white focus:outline-none">
                  <option value="">Select timeline</option>
                  {timelines.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button type="submit" className="w-full border border-white px-6 py-3 tracking-[0.2em] text-sm transition hover:bg-white hover:text-black">
              SUBMIT YOUR STORY
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
