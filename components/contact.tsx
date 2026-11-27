const contactEmail = "zwezaynyi@gmail.com";

const contactLinks = [
  {
    label: "Email",
    value: contactEmail,
    href: `mailto:${contactEmail}`,
  },
  {
    label: "Instagram",
    value: "@Coady",
    href: "https://www.instagram.com/rexstorvin/",
  },
  {
    label: "LinkedIn",
    value: "@zwezaynyi",
    href: "https://www.linkedin.com/in/zwezaynyiakacody/",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative z-10 scroll-mt-28 bg-[#070b12] px-6 py-24 text-[#f4f3f1] md:px-12 md:py-32">
      <div className="mx-auto max-w-[1080px]">
        <h2 id="contact-title" className="sr-only">
          Contact Me
        </h2>

        <div className="grid gap-x-10 gap-y-12 border-b border-[#26303e] pb-12 md:grid-cols-3 md:gap-y-16 md:pb-16">
          {contactLinks.map((item) => (
            <div key={item.label}>
              <h3 className="mb-5 text-lg font-semibold">{item.label}</h3>
              <a
                href={item.href}
                target={item.href.startsWith("https") ? "_blank" : undefined}
                rel={item.href.startsWith("https") ? "noreferrer" : undefined}
                className="font-serif text-[clamp(1.25rem,2.4vw,2rem)] leading-tight tracking-[-0.035em] text-white transition-colors hover:text-[#f2b126] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f2b126]">
                {item.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
