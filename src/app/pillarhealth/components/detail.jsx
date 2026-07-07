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
  title:
    "The Three Pillars of Good Health | Breezy Health Solutions",
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

const seoKeywords = [
  "Private PPO health insurance",
  "Affordable health insurance",
  "Health insurance Texas",
  "Healthy lifestyle tips",
  "Sleep exercise nutrition",
  "Preventive healthcare",
  "Health insurance for families",
  "Small business health insurance",
  "Breezy Health Solutions",
];

export default function ThreePillarsHealthPage() {
  return (
    <main className="overflow-hidden bg-[#f8fffb]">
      {/* Hero */}
      <section className="relative px-6 pb-24 pt-36 lg:px-8 lg:pt-44">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#d1fae5,transparent_35%),radial-gradient(circle_at_bottom_right,#cffafe,transparent_35%)]" />

        <div className="mx-auto grid  gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-emerald-50 px-5 py-2 text-sm font-black uppercase tracking-[0.2em] text-emerald-700 ring-1 ring-emerald-100">
              Wellness & Protection
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              The Three Pillars of Good Health
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Why health insurance is only part of the equation.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              True health begins long before you step into a doctor&apos;s
              office. Quality sleep, regular exercise, and proper nutrition work
              together to create a strong foundation for a healthier, happier
              life.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+15125579308"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-600 px-7 py-4 text-sm font-black text-white shadow-xl shadow-emerald-600/25 transition hover:-translate-y-1 hover:bg-emerald-700"
              >
                <FaPhoneAlt className="h-4 w-4" />
                Call (512) 557-9308
              </a>

              <Link
                href="/Contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black text-slate-950 shadow-lg ring-1 ring-slate-200 transition hover:-translate-y-1 hover:ring-emerald-200"
              >
                Get Coverage Guidance
                <FaArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Icon Hero Card */}
          <div className="relative">
            <div className="absolute -left-8 -top-8 h-36 w-36 rounded-full bg-emerald-200 blur-3xl" />
            <div className="absolute -bottom-8 -right-8 h-36 w-36 rounded-full bg-cyan-200 blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-white/70 bg-white/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-3xl bg-white/10 p-5 text-center">
                    <FaMoon className="mx-auto h-8 w-8 text-emerald-300" />
                    <p className="mt-3 text-sm font-bold">Sleep</p>
                  </div>

                  <div className="rounded-3xl bg-white/10 p-5 text-center">
                    <FaDumbbell className="mx-auto h-8 w-8 text-emerald-300" />
                    <p className="mt-3 text-sm font-bold">Exercise</p>
                  </div>

                  <div className="rounded-3xl bg-white/10 p-5 text-center">
                    <FaUtensils className="mx-auto h-8 w-8 text-emerald-300" />
                    <p className="mt-3 text-sm font-bold">Nutrition</p>
                  </div>
                </div>

                <h2 className="mt-8 text-3xl font-black">
                  Health Is Built Daily
                </h2>

                <p className="mt-4 text-sm leading-7 text-white">
                  Better sleep, movement, and nutrition help support your
                  well-being. Quality health insurance helps protect you when
                  life takes an unexpected turn.
                </p>

                <div className="mt-7 rounded-2xl bg-emerald-500/15 p-5">
                  <p className="text-sm font-bold leading-7 text-emerald-100">
                    Prevention and protection go hand in hand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Intro */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto  rounded-[2rem] bg-gradient-to-br from-emerald-600 to-cyan-600 p-8 text-center shadow-2xl shadow-emerald-600/20 sm:p-12">
          <FaHeartbeat className="mx-auto h-10 w-10 text-white" />

          <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Sleep. Exercise. Nutrition.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-emerald-50">
            When these three work together, they create a strong foundation for
            better energy, stronger immunity, improved mood, and long-term
            wellness.
          </p>
        </div>
      </section>

      {/* Pillar Cards */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto ">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.25em] text-emerald-600">
              The Three Pillars
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              A Simple Foundation for Better Health
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Good health is built through daily habits and smart decisions.
            </p>
          </div>

          <div className="mt-16 grid gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const reverse = index % 2 !== 0;

              return (
                <div
                  key={pillar.title}
                  className={`grid gap-6 rounded-[2rem] border border-slate-100 bg-[#f8fffb] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-2xl lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch ${
                    reverse ? "lg:grid-cols-[1.2fr_0.8fr]" : ""
                  }`}
                >
                  <div
                    className={`rounded-[1.7rem] bg-slate-950 p-8 text-white ${
                      reverse ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                      <Icon className="h-8 w-8" />
                    </div>

                    <p className="mt-7 text-sm font-black uppercase tracking-[0.25em] text-emerald-300">
                      Pillar {pillar.number}
                    </p>

                    <h3 className="mt-3 text-3xl font-black">
                      {pillar.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white">
                      {pillar.highlight}
                    </p>

                    <div className="mt-6 rounded-2xl bg-white/10 p-5">
                      <p className="text-sm font-bold leading-7 text-white">
                        {pillar.goal}
                      </p>
                    </div>
                  </div>

                  <div className="p-2 sm:p-4">
                    <p className="text-base leading-8 text-slate-600">
                      {pillar.description}
                    </p>

                    <div className="mt-7 grid gap-6 lg:grid-cols-2">
                      <div>
                        <h4 className="text-lg font-black text-slate-950">
                          Key Health Benefits
                        </h4>

                        <div className="mt-4 space-y-3">
                          {pillar.risks.map((item) => (
                            <div key={item} className="flex gap-3">
                              <FaCheckCircle className="mt-1 h-4 w-4 flex-none text-emerald-500" />
                              <p className="text-sm leading-6 text-slate-600">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-black text-slate-950">
                          Simple Ways to Improve
                        </h4>

                        <div className="mt-4 space-y-3">
                          {pillar.tips.map((item) => (
                            <div key={item} className="flex gap-3">
                              <FaCheckCircle className="mt-1 h-4 w-4 flex-none text-emerald-500" />
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
      <section className="relative px-6 py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-slate-950" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.25),transparent_35%)]" />

        <div className="mx-auto grid  gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.25em] text-emerald-300">
              Where Insurance Fits In
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-black sm:text-5xl">
              Health Insurance Is Protection for the Unexpected
            </h2>

            <p className="mt-6 text-base leading-8 text-black">
              Even people who prioritize sleep, exercise, and nutrition can
              experience unexpected illnesses or injuries. That&apos;s why
              quality health insurance is an important part of protecting your
              financial and physical well-being.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300">
                  <FaShieldAlt className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-lg font-black text-black">
                    Prevention and protection go hand in hand.
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-black">
                    Healthy habits help support your body. The right health plan
                    helps give you access to care when life takes an unexpected
                    turn.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {insuranceAccess.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
              >
                <FaStethoscope className="h-6 w-6 text-emerald-300" />
                <h3 className="mt-4 text-base font-black text-black">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Better Future */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto ">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.25em] text-emerald-600">
                Building a Healthier Future
              </span>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Good Health Is Built Through Daily Habits
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                Better sleep, regular exercise, and healthy nutrition give you
                and your family a stronger foundation for long-term wellness.
                Pairing those habits with quality health insurance helps protect
                your health and your future.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-100 bg-slate-50 p-6">
              <div className="grid gap-4">
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
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <FaCheckCircle className="h-4 w-4" />
                    </div>
                    <p className="text-sm font-bold text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breezy CTA */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto  rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-8 shadow-2xl sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300">
                <FaUserMd className="h-8 w-8" />
              </div>

              <h2 className="mt-7 text-3xl font-black tracking-tight text-white sm:text-5xl">
                Ready to Protect Your Health?
              </h2>

              <p className="mt-6 text-base leading-8 text-black">
                At Breezy Health Solutions, healthcare is about more than
                insurance. It is about helping people protect their health,
                their family, and their financial future.
              </p>

              <div className="mt-8">
                <p className="font-black text-white">Brenda Ruiz</p>
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
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-500 px-7 py-4 text-sm font-black text-white shadow-xl shadow-emerald-500/25 transition hover:-translate-y-1 hover:bg-emerald-400"
                >
                  <FaPhoneAlt className="h-4 w-4" />
                  (512) 557-9308
                </a>

                <Link
                  href="/Contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:bg-emerald-50"
                >
                  Request Guidance
                  <FaArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
              <h3 className="text-2xl font-black text-white">
                Coverage Options
              </h3>

              <p className="mt-3 text-sm leading-7 text-black">
                Whether you need private PPO coverage, family plans, dental,
                vision, or Medicare supplement options, Brenda can help you find
                coverage that fits your needs and budget.
              </p>

              <div className="mt-6 grid gap-4">
                {coverageOptions.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-4 rounded-2xl bg-white/10 p-4"
                  >
                    <FaCheckCircle className="h-5 w-5 flex-none text-emerald-300" />
                    <p className="text-sm font-bold text-white">{service}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl bg-emerald-500/15 p-5">
                <p className="text-sm font-bold leading-7 text-emerald-100">
                  Helping individuals, families, and small business owners find
                  affordable private PPO health insurance solutions—with the
                  freedom to choose their providers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Keywords */}
      {/* <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto  rounded-[2rem] border border-slate-100 bg-slate-50 p-8">
          <h2 className="text-2xl font-black text-slate-950">SEO Keywords</h2>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            This article naturally supports wellness, preventive healthcare, and
            affordable health insurance search terms.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {seoKeywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm ring-1 ring-slate-100"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
}