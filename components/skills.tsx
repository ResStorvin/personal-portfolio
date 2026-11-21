export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative isolate min-h-[760px] overflow-hidden bg-[#070b12] px-6 pb-28 pt-36 text-[#f4f3f1] md:px-12 md:pt-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-[20rem] top-[-19rem] size-[44rem] rounded-full border border-[#f2ad22]/20" />
        <div className="absolute -left-[20rem] bottom-[-27rem] size-[43rem] rounded-full border border-[#748197]/20" />
        <div className="absolute left-0 right-0 top-[26%] h-px bg-gradient-to-r from-transparent via-[#28303d] to-[#28303d]" />
      </div>
    </section>
  );
}
