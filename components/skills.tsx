const skills = [
  "Design",
  "Development",
  "Strategy",
  "UX/UI",
  "Frontend",
  "Backend",
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative z-10 flex min-h-screen w-full items-center justify-center bg-gray-900 px-6 py-32">
      <div className="w-full max-w-3xl">
        <h2 className="mb-12 text-center font-serif text-5xl font-light text-white">
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-lg bg-gray-800 p-6 text-center text-gray-300 transition-colors hover:text-white">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
