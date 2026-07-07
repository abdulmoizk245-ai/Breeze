import Link from "next/link";

export default function ServiceBanner() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 px-8 py-16 shadow-2xl sm:px-12 lg:px-16">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-35"
            style={{
              backgroundImage: "url('/Service/service-banner.jpg')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-primary-900/50" />
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary-400/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-primary-400/20 blur-3xl" />

          <div className="relative max-w-3xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-primary-200 backdrop-blur-md">
              Wellness Support
            </span>

            <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Your Health Journey Starts With Better Daily Choices
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              We help you build simple, realistic, and long-lasting wellness
              habits that support your mind, body, energy, and lifestyle.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary-500/25 transition hover:-translate-y-1 hover:bg-primary-400"
              >
                Book a Consultation
              </Link>

              <Link
                href="/About"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20"
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