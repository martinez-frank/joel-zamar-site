"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const lines = [
  "We craft films with intention.",
  "We shape sound with restraint.",
  "We frame stories with elegance.",
  "We build moments that remain.",
];

export default function Hero() {
  const [currentLine, setCurrentLine] = useState(0);
  const [cursor, setCursor] = useState({ x: 0.5, y: 0.5 });
  const [canUseCursor, setCanUseCursor] = useState(false);
  const [isAmbientOn, setIsAmbientOn] = useState(false);
  const [reactiveLevel, setReactiveLevel] = useState(0.15);

  const rafRef = useRef<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % lines.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");

    const updateCursorAvailability = () => {
      setCanUseCursor(mq.matches && window.innerWidth >= 768);
    };

    updateCursorAvailability();
    mq.addEventListener("change", updateCursorAvailability);
    window.addEventListener("resize", updateCursorAvailability);

    return () => {
      mq.removeEventListener("change", updateCursorAvailability);
      window.removeEventListener("resize", updateCursorAvailability);
    };
  }, []);

  useEffect(() => {
    if (!canUseCursor) return;

    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      setCursor({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [canUseCursor]);

  useEffect(() => {
    const updateReactiveLevel = () => {
      const analyser = analyserRef.current;

      if (analyser && isAmbientOn) {
        const buffer = new Uint8Array(analyser.fftSize);
        analyser.getByteTimeDomainData(buffer);

        let sumSquares = 0;
        for (let i = 0; i < buffer.length; i += 1) {
          const normalized = (buffer[i] - 128) / 128;
          sumSquares += normalized * normalized;
        }

        const rms = Math.sqrt(sumSquares / buffer.length);
        const nextLevel = Math.min(0.45, 0.12 + rms * 3.5);
        setReactiveLevel((prev) => prev * 0.85 + nextLevel * 0.15);
      } else {
        const pulse = 0.14 + (Math.sin(Date.now() * 0.0011) + 1) * 0.04;
        setReactiveLevel((prev) => prev * 0.9 + pulse * 0.1);
      }

      rafRef.current = window.requestAnimationFrame(updateReactiveLevel);
    };

    rafRef.current = window.requestAnimationFrame(updateReactiveLevel);

    return () => {
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isAmbientOn]);

  const parallaxStyle = useMemo(() => {
    if (!canUseCursor) return { x: 0, y: 0 };

    return {
      x: (cursor.x - 0.5) * 2,
      y: (cursor.y - 0.5) * 2,
    };
  }, [canUseCursor, cursor.x, cursor.y]);

  const toggleAmbient = async () => {
    if (isAmbientOn) {
      oscillatorRef.current?.stop();
      oscillatorRef.current?.disconnect();
      gainRef.current?.disconnect();

      oscillatorRef.current = null;
      gainRef.current = null;

      setIsAmbientOn(false);
      return;
    }

    const context =
      audioContextRef.current ??
      new window.AudioContext({ latencyHint: "playback" });

    if (context.state === "suspended") {
      await context.resume();
    }

    audioContextRef.current = context;

    const oscillator = context.createOscillator();
    oscillator.type = "triangle";
    oscillator.frequency.value = 48;

    const gain = context.createGain();
    gain.gain.value = 0.005;

    const analyser = context.createAnalyser();
    analyser.fftSize = 256;

    oscillator.connect(gain);
    gain.connect(analyser);
    analyser.connect(context.destination);

    oscillator.start();

    oscillatorRef.current = oscillator;
    gainRef.current = gain;
    analyserRef.current = analyser;

    setIsAmbientOn(true);
  };

  useEffect(() => {
    return () => {
      oscillatorRef.current?.stop();
      oscillatorRef.current?.disconnect();
      gainRef.current?.disconnect();
      analyserRef.current?.disconnect();
      audioContextRef.current?.close();
    };
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          transform: `translate3d(${parallaxStyle.x * 2}px, ${parallaxStyle.y * 2}px, 0)`,
          transition: "transform 500ms ease-out",
          background:
            "radial-gradient(circle at 45% 35%, rgba(255,255,255,0.07), transparent 55%), radial-gradient(circle at 75% 70%, rgba(255,255,255,0.04), transparent 60%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          transform: `translate3d(${parallaxStyle.x * -3}px, ${parallaxStyle.y * -3}px, 0)`,
          transition: "transform 650ms ease-out",
          background:
            "linear-gradient(140deg, rgba(255,255,255,0.03) 0%, transparent 35%, rgba(255,255,255,0.02) 100%)",
        }}
      />

      {canUseCursor && (
        <div
          className="pointer-events-none absolute h-56 w-56 rounded-full"
          style={{
            left: `calc(${cursor.x * 100}% - 7rem)`,
            top: `calc(${cursor.y * 100}% - 7rem)`,
            background: "radial-gradient(circle, rgba(255,255,255,0.14), rgba(255,255,255,0))",
            filter: "blur(28px)",
            transition: "left 180ms ease-out, top 180ms ease-out",
          }}
        />
      )}

      <section
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center"
        style={{
          transform: `translate3d(${parallaxStyle.x * 1.4}px, ${parallaxStyle.y * 1.4}px, 0)`,
          transition: "transform 450ms ease-out",
        }}
      >
        <div className="relative flex min-h-[16rem] w-full items-center justify-center md:min-h-[19rem]">
          {lines.map((line, index) => (
            <p
              key={line}
              aria-hidden={index !== currentLine}
              className="absolute max-w-4xl px-4 text-center text-3xl font-light leading-[1.45] tracking-[0.12em] text-white/92 opacity-0 transition-opacity duration-[1400ms] ease-out md:text-6xl md:leading-[1.4]"
              style={{
                opacity: index === currentLine ? 1 : 0,
              }}
            >
              {line}
            </p>
          ))}
        </div>

        <div className="mt-8 h-px w-52 overflow-hidden bg-white/15 md:w-72" aria-hidden>
          <div
            className="h-full origin-center bg-white/60"
            style={{
              transform: `scaleX(${0.88 + reactiveLevel * 0.35})`,
              opacity: 0.3 + reactiveLevel,
              transition: "transform 420ms ease-out, opacity 420ms ease-out",
              boxShadow: `0 0 ${8 + reactiveLevel * 16}px rgba(255,255,255,0.24)`,
            }}
          />
        </div>

        <button
          type="button"
          onClick={toggleAmbient}
          className="mt-10 border border-white/20 px-5 py-2 text-xs tracking-[0.28em] text-white/70 transition hover:border-white/45 hover:text-white"
        >
          {isAmbientOn ? "AMBIENT ON" : "ENABLE AMBIENT"}
        </button>
      </section>
    </main>
  );
}
