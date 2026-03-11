"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-6 right-6 z-50 text-white text-2xl"
        aria-label="Open menu"
      >
        ☰
      </button>

      {open && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center space-y-8 text-white text-xl">
          <button
            className="absolute top-6 right-6 text-3xl"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>

          <a href="#work" onClick={() => setOpen(false)}>
            Work
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#stories" onClick={() => setOpen(false)}>
            Stories
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>

          <a href="#contact" className="border border-white px-6 py-3 mt-4" onClick={() => setOpen(false)}>
            Tell Your Story
          </a>
        </div>
      )}
    </>
  );
}
