"use client";

import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";

export default function StoryPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    story: "",
    impact: "",
    projectType: "",
    usage: "",
    budget: "",
    timeline: "",
  });

  const inputStyles =
    "w-full border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-gray-500 focus:border-white focus:outline-none";

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const goNext = () => setStep((prev) => prev + 1);
  const goBack = () => setStep((prev) => prev - 1);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <section className="space-y-4 text-left transition-opacity duration-300">
            <h2 className="text-xl font-light tracking-wide text-gray-100">STEP 1 — Who Are You</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className={inputStyles}
              />
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Organization / Artist Name"
                className={inputStyles}
              />
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={inputStyles}
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className={inputStyles}
              />
            </div>
          </section>
        );
      case 2:
        return (
          <section className="space-y-3 text-left transition-opacity duration-300">
            <h2 className="text-xl font-light tracking-wide text-gray-100">STEP 2 — Your Story</h2>
            <label className="block text-sm text-gray-300" htmlFor="storyPrompt">
              &quot;What story do you want to tell?&quot;
            </label>
            <p className="text-sm text-gray-400">Personal journey · Nonprofit mission · Music story · Documentary · Brand story</p>
            <textarea
              id="storyPrompt"
              required
              name="story"
              value={formData.story}
              onChange={handleChange}
              rows={6}
              className={inputStyles}
            />
          </section>
        );
      case 3:
        return (
          <section className="space-y-3 text-left transition-opacity duration-300">
            <h2 className="text-xl font-light tracking-wide text-gray-100">STEP 3 — Why Does This Story Matter</h2>
            <label className="block text-sm text-gray-300" htmlFor="impactPrompt">
              &quot;What impact do you hope your story has on others?&quot;
            </label>
            <textarea
              id="impactPrompt"
              required
              name="impact"
              value={formData.impact}
              onChange={handleChange}
              rows={6}
              className={inputStyles}
            />
          </section>
        );
      case 4:
        return (
          <section className="space-y-3 text-left transition-opacity duration-300">
            <h2 className="text-xl font-light tracking-wide text-gray-100">STEP 4 — Project Type</h2>
            <select
              required
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={inputStyles}
            >
              <option value="" className="bg-black text-gray-500">
                Select a project type
              </option>
              <option value="Music Video" className="bg-black">
                Music Video
              </option>
              <option value="Short Story Film" className="bg-black">
                Short Story Film
              </option>
              <option value="Nonprofit Story" className="bg-black">
                Nonprofit Story
              </option>
              <option value="Artist Feature" className="bg-black">
                Artist Feature
              </option>
              <option value="Event Coverage" className="bg-black">
                Event Coverage
              </option>
            </select>
          </section>
        );
      case 5:
        return (
          <section className="space-y-3 text-left transition-opacity duration-300">
            <h2 className="text-xl font-light tracking-wide text-gray-100">STEP 5 — Where Will This Be Used</h2>
            <select required name="usage" value={formData.usage} onChange={handleChange} className={inputStyles}>
              <option value="" className="bg-black text-gray-500">
                Select usage
              </option>
              <option value="Social Media" className="bg-black">
                Social Media
              </option>
              <option value="Film Festival" className="bg-black">
                Film Festival
              </option>
              <option value="Nonprofit Campaign" className="bg-black">
                Nonprofit Campaign
              </option>
              <option value="YouTube" className="bg-black">
                YouTube
              </option>
              <option value="Church / Ministry" className="bg-black">
                Church / Ministry
              </option>
              <option value="Brand Marketing" className="bg-black">
                Brand Marketing
              </option>
            </select>
          </section>
        );
      case 6:
        return (
          <section className="space-y-3 text-left transition-opacity duration-300">
            <h2 className="text-xl font-light tracking-wide text-gray-100">STEP 6 — Budget Range</h2>
            <select required name="budget" value={formData.budget} onChange={handleChange} className={inputStyles}>
              <option value="" className="bg-black text-gray-500">
                Select a budget range
              </option>
              <option value="Under $2k" className="bg-black">
                Under $2k
              </option>
              <option value="$2k–$5k" className="bg-black">
                $2k–$5k
              </option>
              <option value="$5k–$10k" className="bg-black">
                $5k–$10k
              </option>
              <option value="$10k+" className="bg-black">
                $10k+
              </option>
            </select>
          </section>
        );
      case 7:
        return (
          <section className="space-y-3 text-left transition-opacity duration-300">
            <h2 className="text-xl font-light tracking-wide text-gray-100">STEP 7 — Timeline</h2>
            <select required name="timeline" value={formData.timeline} onChange={handleChange} className={inputStyles}>
              <option value="" className="bg-black text-gray-500">
                Select timeline
              </option>
              <option value="ASAP" className="bg-black">
                ASAP
              </option>
              <option value="1–3 months" className="bg-black">
                1–3 months
              </option>
              <option value="3–6 months" className="bg-black">
                3–6 months
              </option>
            </select>
          </section>
        );
      case 8:
        return (
          <section className="space-y-6 text-left transition-opacity duration-300">
            <h2 className="text-xl font-light tracking-wide text-gray-100">STEP 8 — Submit</h2>
            <button
              type="submit"
              className="w-full border border-white py-4 tracking-widest transition hover:bg-white hover:text-black"
            >
              Submit Your Story
            </button>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <main className="relative min-h-screen bg-black px-6 py-24 text-white">
      <Link
        href="/"
        className="absolute top-8 left-8 border border-white px-4 py-2 text-sm tracking-widest hover:bg-white hover:text-black transition"
      >
        BACK TO HOME
      </Link>

      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-light tracking-wide md:text-5xl">What&apos;s Your Story?</h1>
          <p className="mt-4 text-lg text-gray-300">A guided storytelling journey, one step at a time.</p>
        </div>

        {submitted ? (
          <div className="mt-14 space-y-4 text-center transition-opacity duration-300">
            <h2 className="text-3xl font-light tracking-wide">Thank you for sharing your story.</h2>
            <p className="text-gray-300">
              Joel or a member of the team will review your submission and reach out to explore how we can bring
              your story to life.
            </p>
          </div>
        ) : (
          <form className="mx-auto mt-14 space-y-8" onSubmit={handleSubmit}>
            <p className="text-sm tracking-[0.2em] text-gray-400">STEP {step} OF 8</p>
            {renderStep()}

            {step < 8 && (
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={step === 1}
                  className="w-full border border-white/40 py-4 tracking-widest transition hover:border-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="w-full border border-white py-4 tracking-widest transition hover:bg-white hover:text-black"
                >
                  Next
                </button>
              </div>
            )}
          </form>
        )}
      </div>
    </main>
  );
}
