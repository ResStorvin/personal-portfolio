const contactEmail = "zwezaynyi@gmail.com";

export function SubmitForm() {
  return (
    <section
      aria-labelledby="rest-title"
      className="bg-[#070b12] px-6 py-20 text-[#f4f3f1] md:px-12 md:py-28">
      <div className="mx-auto grid max-w-[1080px] gap-10  pt-12 md:grid-cols-[minmax(220px,0.75fr)_2fr] md:gap-16 md:pt-16">
        <div>
          <p className="mb-4 text-sm font-medium tracking-[0.24em] text-[#f2b126]">
            GET IN TOUCH
          </p>
          <h2
            id="rest-title"
            className="font-serif text-4xl leading-tight tracking-[-0.035em] md:text-5xl">
            Send me a message
          </h2>
          <p className="mt-4 max-w-sm leading-relaxed text-[#aab4c3]">
            Have a project or a question? Leave me a note and I&apos;ll get back
            to you.
          </p>
        </div>

        <form
          action="https://formspree.io/f/myewawgy"
          method="post"
          // encType="text/plain"
          className="grid gap-x-7 gap-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="sr-only">
                Your name
              </label>
              <input
                id="contact-name"
                name="Name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                required
                className="w-full border-b border-[#647184] bg-transparent py-3 text-white outline-none placeholder:text-[#aab4c3] transition-colors focus:border-[#f2b126]"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="sr-only">
                Your email
              </label>
              <input
                id="contact-email"
                name="Email"
                type="email"
                autoComplete="email"
                placeholder="Your email"
                required
                className="w-full border-b border-[#647184] bg-transparent py-3 text-white outline-none placeholder:text-[#aab4c3] transition-colors focus:border-[#f2b126]"
              />
            </div>
          </div>
          <div>
            <label htmlFor="contact-message" className="sr-only">
              Your message
            </label>
            <textarea
              id="contact-message"
              name="Message"
              placeholder="Your message"
              rows={4}
              required
              className="w-full resize-y border-b border-[#647184] bg-transparent py-3 text-white outline-none placeholder:text-[#aab4c3] transition-colors focus:border-[#f2b126]"
            />
          </div>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="shrink-0 border-b border-[#f2b126] pb-2 text-sm font-medium tracking-[0.16em] text-[#f2b126] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f2b126]">
              SEND MESSAGE{" "}
              <span aria-hidden="true" className="ml-3 text-lg">
                →
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
