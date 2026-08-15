export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 flex min-h-screen w-full items-center justify-center bg-gray-950 px-6 py-32">
      <div className="max-w-3xl text-center">
        <h2 className="mb-6 font-serif text-5xl font-light text-white">
          Contact Me
        </h2>
        <p className="mb-8 text-lg text-gray-400">
          I&apos;d love to hear from you. Let&apos;s create something amazing
          together.
        </p>
        <a
          href="mailto:your-email@example.com"
          className="inline-block rounded-full bg-white px-8 py-3 font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-100">
          Send me an email
        </a>
      </div>
    </section>
  );
}
