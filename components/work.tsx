const projects = [
  {
    number: "01",
    status: "Currently building",
    title: "Portfolio",
    description:
      "My personal portfolio website built with Next.js, Typescript and Tailwind CSS, A space to showcase my journey skills and the projects I’m working on.",
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
    featured: true,
  },
  {
    number: "02",
    status: "Coming Soon",
    title: "Finance Dashboard",
    description:
      "A personal finance dashboard to track expenses, set budgets and visualize your financial goals.",
    tags: ["Next.js"],
    statusDetail: "Currently In Development",
  },
  {
    number: "03",
    status: "Coming Soon",
    title: "E-commerce Store",
    description:
      "A modern online store with product listing, cart and a smooth checkout experience.",
    tags: ["Next.js"],
    statusDetails: "Currently In Development",
  },
];

function ProjectLabel({ number, status }: { number: string; status: string }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#CFA50E]">
      {number} / {status}
    </p>
  );
}

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-[#294261] px-3 py-1 text-xs text-[#A8BAD0]">
          {tag}
        </span>
      ))}
    </div>
  );
}

export function WorkSection() {
  const featured = projects[0];
  const upcoming = projects.slice(1);
  return (
    <section
      id="work"
      className="relative z-10 w-full overflow-hidden bg-[#06111F] px-6 py-24 text-[#F5F5F5] md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <header className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <div className="mb-6 flex items-center justify-center gap-4 font-mono text-xs uppercase tracking-[0.28em] text-[#CFA50E]">
            <span className="h-px w-16 bg-[#CFA50E]" />
            Selected work
            <span className="h-px w-16 bg-[#CFA50E]" />
          </div>
          <h2 className="font-serif text-5xl leading-none tracking-tight md:text-7xl">
            Things I&apos;m building.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#A8BAD0] md:text-lg">
            A collection of projects I&apos;m currently designing, developing,
            and experimenting with.
          </p>
        </header>

        <div className="grid gap-5 lg:grid-cols-[1.55fr_1fr]">
          <article className="rounded-2xl border border-[#294261] bg-[#081728]/75 p-6 md:p-10">
            <ProjectLabel number={featured.number} status={featured.status} />
            <div className="mt-8 grid items-center gap-8 md:grid-cols-[0.82fr_1.18fr]">
              <div>
                <h3 className="font-serif text-4xl md:text-5xl">
                  {featured.title}
                </h3>
                <p className="mt-6 max-w-md text-sm leading-7 text-[#A8BAD0] md:text-base">
                  {featured.description}
                </p>
                <div className="mt-7">
                  <ProjectTags tags={featured.tags} />
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-[#294261] bg-[#0D1B2C] p-2">
                <div className="flex aspect-[4/3] flex-col rounded-lg border border-[#294261] bg-[#071321] p-4">
                  <div className="flex items-center justify-between border-b border-[#294261] pb-3 font-mono text-[8px] uppercase tracking-[0.16rem] text-[#CFA50E]">
                    <span>Your Portfolio</span>
                    <span>About&nbsp;&nbsp; Work&nbsp;&nbsp; Skills</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-center text-center">
                    <span className="font-mono text-[7px] uppercase tracking-[0.24em] text-[#CFA50E]">
                      About me
                    </span>
                    <span className="mt-4 max-w-[85%] font-serif text-lg leading-tight text-[#F5F5F5]">
                      A thoughtful space for design, development, and ideas.
                    </span>
                    <span className="mt-5 h-px w-16 bg-[#CFA50E]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 font-mono text-xs uppercase tracking-[0.18em] text-[#CFA50E]">
              <span>
                View live site <span className="ml-2 text-lg">→</span>
              </span>
              <a
                href="https://github.com/ResStorvin/personal-portfolio"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#F5F5F5]">
                View source <span className="ml-2 text-lg">↗</span>
              </a>
            </div>
          </article>

          <div className="gird gap-5">
            {upcoming.map((project) => (
              <article
                key={project.number}
                className="rounded-2xl border border-[#294261] bg-[#081728]/75 p-6 md:p-7">
                <ProjectLabel number={project.number} status={project.status} />
                <div className="mt-6 grid items-center gap-6 md:grid-cols-[1fr_0.9fr]">
                  <div>
                    <h3 className="font-serif text-3xl">{project.title}</h3>

                    <p className="mt-4 max-w-md text-sm leading-6 text-[#A8BAD0]">
                      {project.description}
                    </p>
                    <div className="mt-5">
                      <ProjectTags tags={project.tags} />
                    </div>
                    <div className="mt-7 font-mono text-xs uppercase tracking-[0.18em] text-[#CFA50E]">
                      {project.statusDetail}
                      <span className="ml-2 text-lg">→</span>
                    </div>
                  </div>

                  <div className="flex aspect-[1.45/1] items-center justify-center overflow-hidden rounded-xl border border-[#294261] bg-[#0D1B2C] p-3">
                    <div className="grid h-full w-full grid-cols-3 gap-2 rounded-lg border border-[#294261] bg-[#071321] p-3">
                      <div className="col-span-1 space-y-2 border-r border-[#294261] pr-2">
                        <span className="block h-1.5 w-10 rounded bg-[#CFA50E]/70" />
                        <span className="block h-1 w-full rounded bg-[#294261]" />
                        <span className="block h-1 w-4/5 rounded bg-[#294261]" />
                        <span className="block h-1 w-3/5 rounded bg-[#294261]" />
                      </div>
                      <div className="col-span-2 space-y-3">
                        <span className="block h-2 w-1/2 rounded bg-[#A8BAD0]/70" />
                        <div className="h-14 rounded border border-[#294261] bg-[#0D1B2C]" />
                        <div className="grid grid-cols-2 gap-2">
                          <span className="h-8 rounded border border-[#294261] bg-[#0D1B2C]" />
                          <span className="h-8 rounded border border-[#294261] bg-[#0D1B2C]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
