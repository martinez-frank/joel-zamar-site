"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function IntroReveal() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black animate-fadeOut">
      <div className="relative flex items-center justify-center">
        <Image
          src="/jz-logo-white.png"
          alt="Joel Zamar Logo"
          width={220}
          height={220}
          className="animate-logoFade"
        />

        <div className="pointer-events-none absolute inset-0 animate-lightSweep" />
      </div>
    </div>
  );
}
