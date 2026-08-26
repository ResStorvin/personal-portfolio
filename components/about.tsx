"use client";

import { useEffect, useRef, useState } from "react";

const phrases = [
  "I'm a passionate designer and developer dedicated to creating beautiful, functional digital experiences.",
  "With a focus on user-centered design and clean code, I help bring visions to life.",
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;

        const range = section.offsetHeight - window.innerHeight;
        const distance = window.scrollY - section.offsetTop;
        setProgress(range > 0 ? Math.min(1, Math.max(0, distance / range)) : 0);
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-20 min-h-[360vh] w-full bg-gray-900 px-6">
      <div className="sticky top-0 flex min-h-screen items-center justify-center overflow-hidden">
        <div className="w-full max-w-6xl text-center">
          <p className="font-serif text-sm leading-[1.08] tracking-tight md:text-3xl lg:text-4xl">
            {phrases.map((phrase, index) => {
              const phraseProgress = progress * phrases.length - index;
              const opacity =
                0.28 + Math.min(1, Math.max(0, phraseProgress)) * 0.72;
              const color = phraseProgress > 0 ? "#F5F5F5" : "#596579";

              return (
                <span
                  key={phrase}
                  className="block transition-[color,opacity] duration-1000 ease-out"
                  style={{ color, opacity }}>
                  {phrase}{" "}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
