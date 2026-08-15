export function WorkSection() {
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
