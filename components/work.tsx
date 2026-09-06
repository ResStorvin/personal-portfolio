const projects = [
  {
    number: "01",
    status: "Currently building",
    title: "Portfolio",
    description:
      "My personal portfolio website built with Next.js, Typescript and Tailwind CSS, A space to showcase my journey skills and the projects I’m working on.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
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
      className="relative z-10 flex min-h-screen w-full items-center justify-center bg-gray-950 px-6 py-32">
      <div className="w-full max-w-3xl">
        <h2 className="mb-12 text-center font-serif text-5xl font-light text-white">
          Work
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="aspect-square cursor-pointer rounded-lg bg-gray-800 transition-colors duration-200 hover:bg-gray-700"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
