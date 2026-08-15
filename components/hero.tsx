"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [lineOffset, setLineOffset] = useState(0);
  const [reverseLineOffset, setReverseLineOffset] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [timezone, setTimezone] = useState("Local time");

  useEffect(() => {
    const interval = setInterval(() => {
      setLineOffset((prev) => (prev + 6) % 1200);
      setReverseLineOffset((prev) => (prev - 6 + 1200) % 1200);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateClock = () => {
      setCurrentTime(new Date());
      setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    };

    const initialUpdate = window.setTimeout(updateClock, 0);
    const interval = window.setInterval(updateClock, 1000);
    return () => {
      window.clearTimeout(initialUpdate);
      window.clearInterval(interval);
    };
  }, []);

  const formattedTime = currentTime
    ? currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    : "--:--";

  return (
    <section
      className="sticky top-0 z-0 flex h-screen w-full items-center justify-center overflow-hidden bg-[#0D1320] px-4 md:px-6"
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        setPointer({
          x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 2,
          y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 2,
        });
      }}
      onMouseLeave={() => setPointer({ x: 0, y: 0 })}>
      {/* Subtle curved line patterns background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg">
        <g
          style={{
            transform: `translate(${pointer.x * 18}px, ${pointer.y * 14}px) scale(${1 + Math.abs(pointer.x + pointer.y) * 0.012})`,
            transformOrigin: "center",
            transition: "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}>
          <path
            d="M 0 150 Q 300 100, 600 150 T 1200 150"
            stroke="#3A465C"
            strokeWidth="2"
            fill="none"
            style={{
              strokeDasharray: "1200",
              strokeDashoffset: reverseLineOffset,
              transition: "none",
            }}
          />
          <path
            d="M 0 350 Q 250 300, 600 350 T 1200 350"
            stroke="#3A465C"
            strokeWidth="2"
            fill="none"
            style={{
              strokeDasharray: "1200",
              strokeDashoffset: reverseLineOffset,
              transition: "none",
            }}
          />
          <path
            d="M 0 550 Q 300 500, 600 550 T 1200 550"
            stroke="#3A465C"
            strokeWidth="2"
            fill="none"
            style={{
              strokeDasharray: "1200",
              strokeDashoffset: lineOffset,
              transition: "none",
            }}
          />
          <ellipse
            cx="1050"
            cy="120"
            rx="100"
            ry="140"
            stroke="#3A465C"
            strokeWidth="1.5"
            fill="none"
            opacity="0.5"
          />
          <ellipse
            cx="150"
            cy="200"
            rx="120"
            ry="90"
            stroke="#3A465C"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
          />
          <ellipse
            cx="1080"
            cy="700"
            rx="140"
            ry="110"
            stroke="#3A465C"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
          />
          <ellipse
            cx="300"
            cy="650"
            rx="180"
            ry="80"
            stroke="#3A465C"
            strokeWidth="1.5"
            fill="none"
            opacity="0.35"
          />
          <ellipse
            cx="760"
            cy="90"
            rx="150"
            ry="70"
            stroke="#3A465C"
            strokeWidth="1.5"
            fill="none"
            opacity="0.35"
          />
          <path
            d="M -100 260 Q 220 180, 520 260 T 1320 260"
            stroke="#3A465C"
            strokeWidth="1.5"
            fill="none"
            opacity="0.55"
          />
          <path
            d="M -120 690 Q 180 580, 520 690 T 1320 690"
            stroke="#3A465C"
            strokeWidth="1.5"
            fill="none"
            opacity="0.45"
          />
          <path
            d="M 100 0 Q 40 240, 160 430 T 80 800"
            stroke="#3A465C"
            strokeWidth="1.5"
            fill="none"
            opacity="0.3"
          />
        </g>
      </svg>

      {/* Photo Container */}
      <div
        className="relative z-20 flex items-center justify-center h-full
          w-full pt-20 pb-20">
        <Image
          src="/11.2.png"
          alt="Portfolio"
          width={500}
          height={500}
          className="w-auto h-full max-h-[calc(100vh-160px)] object-contain"
          loading="eager"
        />
      </div>
      {/* Scroll indicator */}
      <div className="absolute inset-x-0 bottom-8 z-30 grid grid-cols-3 items-end px-6 md:px-10 text-xs text-slate-300 drop-shadow-lg">
        <div className="justify-self-start text-left">
          <p className="text-slate-200">{formattedTime}</p>
          <p className="mt-1 max-w-32 truncate text-slate-400">{timezone}</p>
        </div>

        <div className="justify-self-center text-center">
          <p className="mb-2 text-sm text-slate-200">Scroll to Explore</p>
          <div className="flex justify-center gap-2">
            <div
              className="h-1 w-1 animate-bounce rounded-full bg-slate-400"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="h-1 w-1 animate-bounce rounded-full bg-slate-400"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="h-1 w-1 animate-bounce rounded-full bg-slate-400"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>

        <div className="justify-self-end text-right">
          <p className="text-slate-200">Open to possibilities</p>
          <p className="mt-1 text-slate-400">Available for select projects</p>
        </div>
      </div>
    </section>
  );
}
