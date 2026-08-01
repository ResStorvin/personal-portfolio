"use client";

export default function Home() {
  return (
    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="w-full">
    //     {/* Hero Section */}
    //     <section
    //       className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 px-6 overflow-hidden"
    //       style={{
    //         background:
    //           "linear-gradient(135deg, #8b2323 0%, #c41e3a 25%, #ff4500 50%, #c41e3a 75%, #5c1414 100%)",
    //       }}>
    //       <div
    //         className="absolute inset-0 opacity-30"
    //         style={{
    //           backgroundImage:
    //             "radial-gradient(circle at 20% 50%, rgba(0,0,0,0.3) 0%, transparent 50%)",
    //         }}
    //       />

    //       <div className="relative z-10 text-center max-w-3xl">
    //         <h1 className="text-6xl md:text-7xl font-serif font-light text-white mb-6 leading-tight">
    //           Create Something
    //           <br />
    //           Amazing Today
    //         </h1>
    //         <p className="text-xl md:text-2xl text-gray-200 font-light mb-12">
    //           Bringing ideas to life through design and development.
    //         </p>
    //         <button
    //           onClick={() => {
    //             const element = document.getElementById("contact");
    //             element?.scrollIntoView({ behavior: "smooth" });
    //           }}
    //           className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200">
    //           Get Started
    //         </button>
    //       </div>

    //       <div className="absolute bottom-12 left-0 right-0 text-center">
    //         <p className="text-gray-300 text-sm">Scroll to Explore</p>
    //       </div>
    //     </section>
    //   </main>
    // </div>
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-6 overflow-hidden bg-stone-50">
        {/* Subtle curved line patterns background */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          preserveAspectRatio="none"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 0 150 Q 300 100, 600 150 T 1200 150"
            stroke="#000000"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 0 350 Q 250 300, 600 350 T 1200 350"
            stroke="#000000"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 0 550 Q 300 500, 600 550 T 1200 550"
            stroke="#000000"
            strokeWidth="2"
            fill="none"
          />
          <ellipse
            cx="1050"
            cy="120"
            rx="100"
            ry="140"
            stroke="#000000"
            strokeWidth="1.5"
            fill="none"
            opacity="0.5"
          />
          <ellipse
            cx="150"
            cy="200"
            rx="120"
            ry="90"
            stroke="#000000"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
          />
          <ellipse
            cx="1080"
            cy="700"
            rx="140"
            ry="110"
            stroke="#000000"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
          />
        </svg>

        {/* Photo Container */}
        <div className="relative z-20 flex items-center justify-center">
          <img
            src="/12.4.png"
            alt="Portfolio"
            className="w-auto h-auto max-w-xs md:max-w-sm lg:max-w-md object-contain"
          />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-stone-400 text-sm mb-2">Scroll to Explore</p>
          <div className="flex justify-center gap-2">
            <div
              className="w-1 h-1 bg-stone-400 rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="w-1 h-1 bg-stone-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="w-1 h-1 bg-stone-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
