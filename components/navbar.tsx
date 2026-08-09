"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to add extra styling when scrolled
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 20);
    });
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div
        className="w-full rounded-2xl px-8 py-4 backdrop-blur-md transition-all duration-300"
        style={{
          background: "#1E2A3A",
          border: "1px solid #2C3A4F",
        }}>
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-serif italic text-white font-light">
            Zwe Zay Nyi
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link
              href="#about"
              className="text-gray-300 hover:text-white transition-colors duration-200 font-light">
              About
            </Link>
            <Link
              href="#work"
              className="text-gray-300 hover:text-white transition-colors duration-200 font-light">
              Work
            </Link>
            <Link
              href="#skills"
              className="text-gray-300 hover:text-white transition-colors duration-200 font-light">
              Skills
            </Link>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-2 bg-gray-100 text-[#1B2430] rounded-full font-medium hover:bg-white transition-colors duration-200">
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
}
