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

function SkillMark({ skill }: { skill: Skill }) {
  const Icon = skill.icon;

  if (skill.mark) {
    return (
      <span
        aria-hidden="true"
        className="grid size-10 place-items-center rounded-full border-2 border-current text-xl font-semibold leading-none">
        {skill.mark}
      </span>
    );
  }

  return <Icon aria-hidden="true" className="size-10 stroke-[1.7]" />;
}

export function SkillsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeGroup = skillGroups[activeIndex];
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
            className="relative grid grid-cols-4 border-b border-[#26303e]">
            {skillGroups.map((group, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={group.title}
                  id={`skills-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="skills-panel"
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => {
                    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft")
                      return;
                    event.preventDefault();
                    const direction = event.key === "ArrowRight" ? 1 : -1;

                    const nextIndex =
                      (index + direction + skillGroups.length) %
                      skillGroups.length;
                    setActiveIndex(nextIndex);
                    document.getElementById(`skills-tab-${nextIndex}`)?.focus();
                  }}
                  className={`min-h-14 min-w-0 px-1 pb-3 pt-2 text-center font-serif text-sm transition-colors md:text-[1.35rem] ${isActive ? "text-white" : "text-[#9aa6b7] hover:text-white"}`}>
                  {group.title}
                </button>
              );
            })}
            <span
              aria-hidden="true"
              className="absolute bottom-[-1px] left-0 h-[3px] w-1/4 bg-[#f2b126] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
              style={{ transform: `translateX(${activeIndex * 100}%)` }}
            />
          </div>

          <div
            key={activeIndex}
            id="skills-panel"
            role="tabpanel"
            aria-labelledby={`skills-tab-${activeIndex}`}
            className="skills-panel-enter grid gap-10 pt-12 md:grid-cols-[minmax(220px,0.8fr)_2fr] md:gap-16 md:pt-16">
            <div className="flex flex-col justify-center border-b border-[#27303d] pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-12">
              <p className="mb-5 text-sm font-medium tracking-[0.25em] text-[#f2b126]">
                {String(activeIndex + 1).padStart(2, "0")}{" "}
                <span className="px-1 text-[#aab4c3]">/</span>{" "}
                <span className="text-[#8994a4]">04</span>
              </p>
              <h3 className="font-serif text-4xl leading-tight tracking-[-0.035em] md:text-5xl">
                {activeGroup.title}
              </h3>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-[#aab4c3] md:text-lg">
                {activeGroup.description}
              </p>
              <div aria-hidden="true" className="mt-10 flex items-center">
                <span className="h-px w-24 bg-gradient-to-r from-[#aab4c3]/80 to-[#aab4c3]/20" />
                <span className="size-2 rounded-full bg-[#f2b126]" />
              </div>
            </div>

            <ul className="grid grid-cols-2 content-center gap-x-5 gap-y-10 sm:grid-cols-3 md:grid-cols-4 md:gap-x-7 md:gap-y-12">
              {activeGroup.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex min-w-0 flex-col items-center gap-3 text-center text-[#d2d8e1]">
                  <SkillMark skill={skill} />
                  <span className="text-sm leading-snug md:text-base">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
