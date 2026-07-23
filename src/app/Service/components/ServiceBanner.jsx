
import Link from "next/link";

export default function ServiceBanner() {
  return (
    <section className=" max-w-9xl relative isolate overflow-hidden bg-[#f8fffb] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      {/* Outer Background Blurs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary-200/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-primary-200/50 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-10 shadow-2xl sm:rounded-[2.5rem] sm:px-10 sm:py-12 lg:px-16 lg:py-14">
          {/* Background Image */}
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-35"
            style={{
              backgroundImage: "url('/Service/service-banner.jpg')",
            }}
          />

          {/* Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-primary-900/50" />

          {/* Inner Blurs */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary-400/30 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-tertiary-400/20 blur-3xl" />

          <div className=" relative z-10 grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-primary-200 backdrop-blur-md sm:text-sm">
                Wellness Support
              </span>

              <h2 className="mx-auto mt-5 max-w-7xl text-2xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:mx-0 lg:text-5xl">
                Your Health Journey Starts With Better Daily Choices
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 lg:mx-0">
                We help you build simple, realistic, and long-lasting wellness
                habits that support your mind, body, energy, and lifestyle.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-end">
              <a
                href="https://calendly.com/breezy12/quote-consult"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-56 items-center justify-center whitespace-nowrap rounded-full bg-primary-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-500/25 transition hover:-translate-y-1 hover:bg-primary-400"
              >
                Book a Consultation
              </a>

              <Link
                href="/about"
                className="inline-flex w-full max-w-56 items-center justify-center whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}