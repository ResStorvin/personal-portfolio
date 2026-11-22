"use client";

import { useState } from "react";
import {
  Atom,
  Braces,
  Container,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  PanelsTopLeft,
  Server,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type Skill = {
  name: string;
  icon: LucideIcon;
  mark?: string;
};

type SkillGroup = {
  title: string;
  description: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Building beautiful and responsive user interfaces.",
    skills: [
      { name: "React", icon: Atom },
      { name: "Next.js", icon: Layers3, mark: "N" },
      { name: "HTML5", icon: Braces, mark: "5" },
      { name: "CSS3", icon: Braces, mark: "3" },
      { name: "Tailwind CSS", icon: Workflow },
      { name: "Responsive Design", icon: Smartphone },
    ],
  },
  {
    title: "Backend",
    description:
      "Designing reliable services and scalable application foundations.",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Workflow },
      { name: "REST APIs", icon: Globe2 },
      { name: "Microservices", icon: Layers3 },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "Tools & Others",
    description: "The tools and workflows that bring projects together.",
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "Docker", icon: Container },
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
      { name: "TurboRepo", icon: Workflow },
      { name: "Kafka", icon: Layers3 },
    ],
  },
  {
    title: "Currently Learning",
    description:
      "Exploring new ways to build immersive, high-performance experiences.",
    skills: [
      { name: "Three.js", icon: Layers3 },
      { name: "GSAP", icon: Workflow },
      { name: "Advanced TypeScript", icon: Braces },
    ],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative isolate min-h-[760px] overflow-hidden bg-[#070b12] px-6 pb-28 pt-36 text-[#f4f3f1] md:px-12 md:pt-44">
      {/* background style */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-[20rem] top-[-19rem] size-[44rem] rounded-full border border-[#f2ad22]/20" />
        <div className="absolute -left-[20rem] bottom-[-27rem] size-[43rem] rounded-full border border-[#748197]/20" />
        <div className="absolute left-0 right-0 top-[26%] h-px bg-gradient-to-r from-transparent via-[#28303d] to-[#28303d]" />
      </div>

      <div className="relative mx-auto  max-w-[1240px]">
        {/* header for skills section */}
        <header className="relative mb-16 pl-0 md:ml-[12%] md:pl-2">
          <p className="mb-5 flex items-center gap-4 text-sm font-medium tracking-[0.26em] text-[#f2b126]">
            <span aria-hidden="true" className="h-px w-11 bg-[#f2b126]" />
            SKILLS
          </p>
          <h2
            id="skills-title"
            className="font-serif text-[clamp(2.8rem,6vw,4.3rem)] leading-[1.08] tracking-[-0.045em]">
            Technologies <span className="text-[#f2b126]">I work with</span>
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#aab4c3] md:text-xl">
            A blend of modern tools and technologies to build exceptional
            experiences.
          </p>
        </header>

        <div className="relative md:ml-[12%]">
          <div
            role="tablist"
            aria-label="Skill categories"
            className="relative grid grid-cols-4 border-b border-[#26303e]"></div>
        </div>
      </div>
    </section>
  );
}
