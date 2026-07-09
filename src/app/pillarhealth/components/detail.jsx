import Link from "next/link";
import {
  FaArrowRight,
  FaAppleAlt,
  FaBed,
  FaCheckCircle,
  FaDumbbell,
  FaHeartbeat,
  FaMoon,
  FaPhoneAlt,
  FaShieldAlt,
  FaStethoscope,
  FaUtensils,
  FaUserMd,
} from "react-icons/fa";

export const metadata = {
  title: "The Three Pillars of Good Health | Breezy Health Solutions",
  description:
    "Learn why quality sleep, regular exercise, proper nutrition, and health insurance work together to support long-term health and protection.",
};

const pillars = [
  {
    number: "01",
    title: "Quality Sleep",
    icon: FaBed,
    highlight: "Your body repairs, restores, and strengthens while you sleep.",
    description:
      "Sleep is one of the most overlooked aspects of health. During sleep, your body repairs tissues, strengthens your immune system, balances hormones, and processes memories.",
    goal: "Adults should aim for 7–9 hours of quality sleep each night.",
    risks: [
      "High blood pressure",
      "Weight gain",
      "Diabetes",
      "Depression and anxiety",
      "Reduced immune function",
      "Increased risk of heart disease",
    ],
    tips: [
      "Maintain a consistent bedtime",
      "Limit screen time before bed",
      "Create a cool, quiet sleeping environment",
    ],
  },
  {
    number: "02",
    title: "Regular Exercise",
    icon: FaDumbbell,
    highlight: "Movement helps keep your body strong and functioning well.",
    description:
      "Exercise is not just about losing weight. It helps your heart, muscles, bones, energy, stress levels, and mental health.",
    goal: "Even 30 minutes of walking most days of the week can provide strong health benefits.",
    risks: [
      "Improved heart health",
      "Better blood sugar control",
      "Stronger muscles and bones",
      "Increased energy",
      "Reduced stress",
      "Better mental health",
    ],
    tips: [
      "Walk regularly",
      "Choose movement you enjoy",
      "Stay consistent instead of chasing perfection",
    ],
  },
  {
    number: "03",
    title: "Proper Nutrition",
    icon: FaAppleAlt,
    highlight: "Food fuels every cell in your body.",
    description:
      "A balanced diet can reduce the risk of many chronic illnesses while improving energy, mood, digestion, and overall quality of life.",
    goal: "Healthy eating is not about perfection. It is about making better choices more often.",
    risks: [
      "Fresh fruits",
      "Vegetables",
      "Lean proteins",
      "Whole grains",
      "Healthy fats",
      "More fiber and water",
    ],
    tips: [
      "Drink more water",
      "Reduce processed foods",
      "Increase fruits, vegetables, and fiber",
    ],
  },
];

const insuranceAccess = [
  "Preventive care",
  "Annual wellness visits",
  "Specialist care",
  "Prescription coverage",
  "Emergency medical services",
  "Peace of mind when life changes",
];

const coverageOptions = [
  "Private PPO Health Insurance",
  "Family Health Plans",
  "Dental Insurance",
  "Vision Insurance",
  "Medicare Supplement Options",
  "Small Business Health Coverage",
];

export default function ThreePillarsHealthPage() {
  return (
    <main className="overflow-hidden bg-[#f8fffb] text-slate-900">
      {/* Hero — dark, editorial */}
      <section className="relative isolate overflow-hidden bg-slate-950 px-6 pb-24 pt-28 sm:pt-32 lg:px-16 lg:pb-32 lg:pt-48">
        <div className="pointer-events-none absolute left-[-10%] top-[-20%] h-[32rem] w-[32rem] rounded-full bg-primary-500/15 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[32rem] w-[32rem] rounded-full bg-secondary-500/10 blur-[130px]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:88px_88px]" />

        <div className="pointer-events-none absolute left-[-10%] top-[-20%] h-[32rem] w-[32rem] rounded-full bg-primary-500/15 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[32rem] w-[32rem] rounded-full bg-secondary-500/10 blur-[130px]" />

        <div className="relative mx-auto grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-300">
                Wellness &amp; Protection
              </span>
            </div>

            {/* Light backdrop panel so Home's navy heading/paragraph colors stay legible on this dark hero */}
            <div className="mt-8 max-w-xl rounded-3xl  p-6  sm:p-8">
              <h1 className="text-4xl leading-[1.05] tracking-tight text-[#132A4A] sm:text-5xl lg:text-6xl">
                <span className="font-sans font-semibold">The three pillars</span>
                <br />
                <span className="font-serif italic bg-gradient-to-r from-[#2F8F8B] to-[#7FA64A] bg-clip-text text-transparent">
                  of good health.
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-[#334155]">
                Why health insurance is only part of the equation.
              </p>

              <p className="mt-4 text-base leading-8 text-[#334155]/80">
                True health begins long before you step into a doctor&apos;s
                office. Quality sleep, regular exercise, and proper nutrition
                work together to create a strong foundation for a healthier,
                happier life.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-8">
              <a
                href="tel:+15125579308"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-400"
              >
                <FaPhoneAlt className="h-3.5 w-3.5" />
                Call (512) 557-9308
              </a>

              <Link
                href="/Contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                Get Coverage Guidance
                <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Pillars snapshot card */}
          <div className="relative">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-9">
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="rounded-2xl bg-white/5 p-2.5 text-center sm:p-4">
                  <FaMoon className="mx-auto h-5 w-5 text-primary-300 sm:h-6 sm:w-6" />
                  <p className="mt-3 text-xs font-semibold text-white">Sleep</p>
                </div>

                <div className="rounded-2xl bg-white/5 p-2.5 text-center sm:p-4">
                  <FaDumbbell className="mx-auto h-5 w-5 text-primary-300 sm:h-6 sm:w-6" />
                  <p className="mt-3 text-xs font-semibold text-white">
                    Exercise
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 p-2.5 text-center sm:p-4">
                  <FaUtensils className="mx-auto h-5 w-5 text-primary-300 sm:h-6 sm:w-6" />
                  <p className="mt-3 text-xs font-semibold text-white">
                    Nutrition
                  </p>
                </div>
              </div>

              <h2 className="mt-7 font-serif text-3xl text-white">
                Health Is Built Daily
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Better sleep, movement, and nutrition help support your
                well-being. Quality health insurance helps protect you when life
                takes an unexpected turn.
              </p>

              <div className="mt-6 rounded-2xl bg-primary-500/15 p-5">
                <p className="text-sm leading-7 text-primary-100">
                  Prevention and protection go hand in hand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-9xl rounded-[1.5rem] bg-primary-600 px-6 py-12 text-center sm:px-12 sm:py-14">
          <FaHeartbeat className="mx-auto h-9 w-9 text-white" />

          <h2 className="mt-6 font-serif text-3xl text-white sm:text-4xl">
            Sleep. Exercise. Nutrition.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-primary-50">
            When these three work together, they create a strong foundation for
            better energy, stronger immunity, improved mood, and long-term
            wellness.
          </p>
        </div>
      </section>

      {/* Pillar Cards */}
      <section className="px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-9xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                The Three Pillars
              </span>
            </div>

            <h2 className="mt-6 text-3xl leading-tight tracking-tight text-slate-900 sm:text-5xl">
              <span className="font-sans font-semibold">
                A simple foundation
              </span>{" "}
              <span className="font-serif italic">for better health.</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Good health is built through daily habits and smart decisions.
            </p>
          </div>

          <div className="mt-14 grid gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const reverse = index % 2 !== 0;

              return (
                <div
                  key={pillar.title}
                  className={`grid gap-6 rounded-[1.75rem] border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl sm:p-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch ${
                    reverse ? "lg:grid-cols-[1.2fr_0.8fr]" : ""
                  }`}
                >
                  <div
                    className={`rounded-[1.4rem] bg-slate-950 p-7 text-white sm:p-8 ${
                      reverse ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500/15 text-primary-300">
                      <Icon className="h-7 w-7" />
                    </div>

                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.3em] text-primary-300">
                      Pillar {pillar.number}
                    </p>

                    <h3 className="mt-3 font-serif text-3xl text-white">
                      {pillar.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {pillar.highlight}
                    </p>

                    <div className="mt-6 rounded-2xl bg-white/5 p-5">
                      <p className="text-sm leading-7 text-slate-200">
                        {pillar.goal}
                      </p>
                    </div>
                  </div>

                  <div className="p-1 sm:p-3">
                    <p className="text-base leading-8 text-slate-600">
                      {pillar.description}
                    </p>

                    <div className="mt-7 grid gap-6 sm:grid-cols-2">
                      <div>
                        <h4 className="text-base font-semibold text-slate-900">
                          Key Health Benefits
                        </h4>

                        <div className="mt-4 space-y-3">
                          {pillar.risks.map((item) => (
                            <div key={item} className="flex gap-3">
                              <FaCheckCircle className="mt-1 h-4 w-4 flex-none text-primary-500" />
                              <p className="text-sm leading-6 text-slate-600">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-base font-semibold text-slate-900">
                          Simple Ways to Improve
                        </h4>

                        <div className="mt-4 space-y-3">
                          {pillar.tips.map((item) => (
                            <div key={item} className="flex gap-3">
                              <FaCheckCircle className="mt-1 h-4 w-4 flex-none text-primary-500" />
                              <p className="text-sm leading-6 text-slate-600">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Health Insurance Section */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-20 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute right-[-10%] top-0 h-96 w-96 rounded-full bg-tertiary-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-9xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-300">
                Where Insurance Fits In
              </span>
            </div>

            <h2 className="mt-6 text-3xl leading-tight tracking-tight text-white sm:text-4xl">
              Health insurance is
              <br />
              <span className="font-serif italic text-primary-300">
                protection for the unexpected.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300">
              Even people who prioritize sleep, exercise, and nutrition can
              experience unexpected illnesses or injuries. That&apos;s why
              quality health insurance is an important part of protecting your
              financial and physical well-being.
            </p>

            <div className="mt-8 flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-primary-400/15 text-primary-300">
                <FaShieldAlt className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-base font-semibold text-white">
                  Prevention and protection go hand in hand.
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Healthy habits help support your body. The right health plan
                  helps give you access to care when life takes an unexpected
                  turn.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {insuranceAccess.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <FaStethoscope className="h-6 w-6 text-primary-300" />
                <h3 className="mt-4 text-base font-semibold text-white">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Better Future */}
      <section className="px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-9xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-primary-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                  Building a Healthier Future
                </span>
              </div>

              <h2 className="mt-6 text-3xl leading-tight tracking-tight text-slate-900 sm:text-5xl">
                <span className="font-sans font-semibold">
                  Good health is built
                </span>{" "}
                <span className="font-serif italic">through daily habits.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                Better sleep, regular exercise, and healthy nutrition give you
                and your family a stronger foundation for long-term wellness.
                Pairing those habits with quality health insurance helps protect
                your health and your future.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-primary-50 p-6">
              <div className="grid gap-3">
                {[
                  "Better sleep",
                  "Regular exercise",
                  "Healthy nutrition",
                  "Preventive care",
                  "Quality health insurance",
                  "Peace of mind",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm"
                  >
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary-50 text-primary-600">
                      <FaCheckCircle className="h-4 w-4" />
                    </div>
                    <p className="text-sm font-medium text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breezy CTA */}
      <section className="px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-9xl rounded-[1.5rem] bg-slate-950 px-6 py-14 sm:px-10 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500/15 text-primary-300">
                <FaUserMd className="h-7 w-7" />
              </div>

              <h2 className="mt-7 text-3xl leading-tight text-white sm:text-4xl">
                <span className="font-sans font-semibold">Ready to</span>{" "}
                <span className="font-serif italic text-primary-300">
                  protect your health?
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-300">
                At Breezy Health Solutions, healthcare is about more than
                insurance. It is about helping people protect their health,
                their family, and their financial future.
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="font-serif text-lg text-white">Brenda Ruiz</p>
                <p className="mt-1 text-sm text-slate-400">
                  Licensed Health Insurance Advisor
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Breezy Health Solutions
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:+15125579308"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-400"
                >
                  <FaPhoneAlt className="h-3.5 w-3.5" />
                  (512) 557-9308
                </a>

                <Link
                  href="/Contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-primary-50"
                >
                  Request Guidance
                  <FaArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 sm:p-7">
              <h3 className="font-serif text-2xl text-white">
                Coverage Options
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Whether you need private PPO coverage, family plans, dental,
                vision, or Medicare supplement options, Brenda can help you find
                coverage that fits your needs and budget.
              </p>

              <div className="mt-6 grid gap-3">
                {coverageOptions.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-4 rounded-2xl bg-white/5 p-4"
                  >
                    <FaCheckCircle className="h-5 w-5 flex-none text-primary-300" />
                    <p className="text-sm font-medium text-white">{service}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-primary-500/15 p-5">
                <p className="text-sm leading-7 text-primary-100">
                  Helping individuals, families, and small business owners find
                  affordable private PPO health insurance solutions—with the
                  freedom to choose their providers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
