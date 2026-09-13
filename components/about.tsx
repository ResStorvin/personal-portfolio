"use client";

import { useEffect, useRef, useState } from "react";

const phrases = [
  "I'm a passionate designer and developer dedicated to creating beautiful, functional digital experiences.",
  "With a focus on user-centered design and clean code, I help bring visions to life.",
];

const words = phrases.flatMap((phrase) => phrase.split(" "));

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
      className="relative z-20 min-h-[220vh] w-full overflow-x-clip bg-[#0D1320] px-6"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(58, 70, 92, 0.48) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}>
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true">
        <svg
          className="h-full w-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M -80 720 C 120 560, 180 820, 390 660 S 650 500, 820 650 S 1050 820, 1280 610"
            fill="none"
            stroke="#3A465C"
            strokeWidth="1"
          />
          <path
            d="M -80 750 C 120 590, 180 850, 390 690 S 650 530, 820 680 S 1050 850, 1280 640"
            fill="none"
            stroke="#3A465C"
            strokeWidth="1"
          />
          <path
            d="M 1080 -40 C 920 120, 1080 240, 960 390 S 1080 610, 940 860"
            fill="none"
            stroke="#3A465C"
            strokeWidth="1"
          />
          <path
            d="M 1110 -40 C 950 120, 1110 240, 990 390 S 1110 610, 970 860"
            fill="none"
            stroke="#3A465C"
            strokeWidth="1"
          />
          <circle
            cx="130"
            cy="190"
            r="78"
            fill="none"
            stroke="#CFA50E"
            strokeWidth="1"
            opacity="0.5"
          />
          <circle cx="130" cy="190" r="3" fill="#CFA50E" />
          <circle
            cx="1060"
            cy="680"
            r="78"
            fill="none"
            stroke="#CFA50E"
            strokeWidth="1"
            opacity="0.5"
          />
          <circle cx="1060" cy="680" r="3" fill="#CFA50E" />
        </svg>
      </div>

      <div className="sticky top-0 flex min-h-screen w-full items-center justify-center py-24">
        <div className="relative z-10 w-full max-w-6xl text-center">
          <div className="mb-10 flex items-center justify-center gap-5 text-sm font-medium uppercase tracking-[0.24em] text-[#CFA50E] md:mb-12">
            <span className="h-px w-10 bg-[#CFA50E]" />
            <span>About me</span>
            <span className="h-px w-10 bg-[#CFA50E]" />
          </div>

          <p className="mx-auto max-w-5xl font-serif text-[1.875rem] leading-[1.12] tracking-tight md:text-4xl lg:text-[3.125rem]">
            {words.map((word, index) => {
              const wordProgress = progress * words.length - index;
              const intensity = Math.min(1, Math.max(0, wordProgress));
              const isPhraseBreak = index === phrases[0].split(" ").length - 1;

              return (
                <span
                  key={`${word}-${index}`}
                  className={`transition-[color,opacity,text-shadow] duration-1000 ease-out ${isPhraseBreak ? "after:block" : ""}`}
                  style={{
                    color: intensity > 0 ? "#F5F5F5" : "#596579",
                    opacity: 0.42 + intensity * 0.58,
                    textShadow:
                      intensity > 0
                        ? "0 0 24px rgba(245,245,245,0.14)"
                        : "none",
                  }}>
                  {word}{" "}
                </span>
              );
            })}
          </p>

          <p className="mx-auto mt-12 max-w-3xl text-lg leading-relaxed text-[#94A3B8] md:text-2xl">
            With a focus on user-centered design and clean code, i think this is
            the part which is happening error
          </p>

          <div
            className="mt-14 flex items-center justify-center gap-3 text-[#CFA50E]"
            aria-hidden="true">
            <span className="h-px w-20 bg-[#CFA50E]/60" />
            <span className="text-lg">◆</span>
            <span className="h-px w-20 bg-[#CFA50E]/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
