const skillsCard = [
  "Frontend",
  "Backend",
  "Tools & Others",
  "Currently Learning",
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative z-10 flex min-h-screen flex-col overflow-hidden bg-[#CFA50E] px-5 pt-20 text-[#151515] md:10 mt:pt-24">
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
          {skillsCard.map((title, index) => (
            <article
              key={title}
              className="group relative -ml-5 h-[calc(100vh-300px)] min-h-[390px] w-[220px] shrink-0 border border-[#555] bg-[#202020] px-5 pb-8 pt-20 text-[#F5F5F5] transition-transform duration-500 first:ml-0 hover:z-20 hover:-translate-y-8 md:h-[440px] md:w-[250px] md:px-7"
              style={{
                clipPath: "polygon(0 17%, 100% 0, 100% 100%, 0 100%)",
                zIndex: index,
              }}>
              <div className="absolute right-5 top-7 flex h-7 w-7 items-center justify-center rounded-full border border-[#F5F5F5]/80 font-serif text-sm md:right-7 md:top-9">
                ↗
              </div>
              <div className="flex h-full items-end">
                <h3 className="font-serif text-2xl italic leading-none md:text-3xl">
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
