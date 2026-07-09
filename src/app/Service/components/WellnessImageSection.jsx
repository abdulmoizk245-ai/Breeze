import Link from "next/link";

export default function WellnessImageSection() {
  const points = [
    "Personal guidance for better everyday habits",
    "Simple wellness steps that feel realistic",
    "Support for mind, body, energy, and lifestyle",
    "Clear plans without pressure or confusion",
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8fffb] px-6 py-24 lg:px-8">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary-100 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-tertiary-100 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        {/* Image Side */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-200 shadow-2xl">
            <img
              src="/Service/wellness-care.png"
              alt="Wellness consultation"
              className="h-[280px] w-full object-cover sm:h-[380px] lg:h-[520px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/20 bg-white/90 p-5 shadow-xl backdrop-blur-md">
              <p className="text-sm font-bold text-primary-700">
                Better Habits. Better Health.
              </p>
              <h3 className="mt-2 text-xl font-black text-slate-950">
                Wellness support designed around real life.
              </h3>
            </div>
          </div>

          <div className="absolute -right-5 -top-5 hidden rounded-3xl bg-white p-5 shadow-2xl lg:block">
            <p className="text-sm font-bold text-slate-500">Daily Progress</p>
            <p className="mt-2 text-3xl font-black text-primary-600">1%</p>
            <p className="mt-1 text-xs font-semibold text-slate-500">
              Better every day
            </p>
          </div>
        </div>

        {/* Text Side */}
        <div>
          <span className="inline-flex rounded-full bg-primary-100 px-4 py-2 text-sm font-bold text-primary-700">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Wellness Guidance That Feels Clear, Calm, and Personal
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Health improvement does not need to feel complicated. We focus on
            practical routines, supportive guidance, and small changes that
            become part of your everyday life.
          </p>

          <div className="mt-8 space-y-4">
            {points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-4 rounded-2xl border border-primary-100 bg-white p-4 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-white">
                  ✓
                </span>
                <p className="text-sm font-semibold leading-7 text-slate-700">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-9 inline-flex rounded-full bg-slate-950 px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-primary-600"
          >
            Talk to an Advisor
          </Link>
        </div>
      </div>
    </section>
  );
}