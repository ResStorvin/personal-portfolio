const skillCards = [
  "Frontend",
  "Backend",
  "Tools & Others",
  "Currently Learning",
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative z-10 flex min-h-screen flex-col overflow-hidden bg-[#CFA50E] px-5 pt-20 text-[#151515] md:px-10 md:pt-24">
      <div className="mx-auto max-w-7xl pt-4 text-center md:pt-8">
        <p className="font-sans text-sm font-medium md:text-base">
          Hover Cards <span aria-hidden="true">↓</span>
        </p>
        <h2 className="mt-4 font-serif text-[clamp(5rem,14vw,11rem)] uppercase leading-[0.78] tracking-[-0.08em]">
          Skills
        </h2>
      </div>

      <div className="mx-auto mt-auto flex w-full max-w-7xl items-end justify-center overflow-x-auto pt-16 [scrollbar-width:none] md:pt-20">
        <div className="flex min-w-[920px] items-end justify-center px-10 md:min-w-0 md:w-full">
          {skillCards.map((title, index) => (
            <article
              key={title}
              className="group relative -ml-5 h-[calc(100vh-270px)] min-h-[390px] w-[240px] shrink-0 overflow-hidden px-5 pb-8 pt-20 text-[#F5F5F5] transition-transform duration-300 ease-out first:ml-0 hover:z-20 hover:-translate-y-8 md:h-[440px] md:w-[260px] md:px-6"
              style={{ zIndex: index }}>
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true">
                <path
                  d="M 0 23 Q 0 19 4 17 L 96 0 Q 100 0 100 4 L 100 100 L 0 100 Z"
                  fill="#202020"
                  stroke="#4B4B4B"
                  strokeWidth="0.7"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <div
                // className="absolute right-5 top-7 flex h-7 w-7 items-center justify-center font-serif text-xl md:right-7 md:top-9"
                className="absolute right-5 top-7 z-10 flex h-7 w-7 items-center justify-center font-serif text-xl md:right-7 md:top-9"
                aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 stroke-current"
                  fill="none"
                  strokeWidth="1.4">
                  <circle cx="12" cy="12" r="8.5" />
                  <path d="M3.8 12h16.4M5.5 7.5h13M5.5 16.5h13M12 3.5c2.3 2.3 3.4 5.1 3.4 8.5s-1.1 6.2-3.4 8.5c-2.3-2.3-3.4-5.1-3.4-8.5S9.7 5.8 12 3.5Z" />
                </svg>
              </div>
              {/* <div className="flex h-full items-end"> */}
              <div className="relative z-10 flex h-full items-end">
                <h3 className="font-serif text-[1.7rem] italic leading-none md:text-[2rem]">
                  {title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
