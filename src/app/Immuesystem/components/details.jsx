import Link from "next/link";
import {
  FaArrowRight,
  FaAppleAlt,
  FaBed,
  FaCheckCircle,
  FaHeartbeat,
  FaLeaf,
  FaPhoneAlt,
  FaShieldAlt,
  FaStethoscope,
  FaTint,
  FaWalking,
  FaUserMd,
} from "react-icons/fa";

export const metadata = {
  title:
    "Boost Your Immune System Naturally | Breezy Health Solutions",
  description:
    "Learn healthy habits that support your immune system naturally, including exercise, sleep, hydration, nutrition, stress management, and preventive health protection.",
};

const habits = [
  {
    number: "01",
    title: "Stay Active with Regular Exercise",
    icon: FaWalking,
    text: "Physical activity improves circulation, supports heart health, reduces inflammation, and helps immune cells move more efficiently throughout the body.",
    points: [
      "Walking",
      "Cycling",
      "Swimming",
      "Dancing",
      "Strength training",
      "Stretching or yoga",
    ],
  },
  {
    number: "02",
    title: "Prioritize Quality Sleep",
    icon: FaBed,
    text: "Your body performs important repair functions while you sleep. Quality rest helps your immune system fight infections and inflammation.",
    points: [
      "Maintain a regular bedtime",
      "Limit screen time before bed",
      "Keep your bedroom cool and dark",
      "Avoid excessive caffeine late in the day",
    ],
  },
  {
    number: "03",
    title: "Stay Hydrated",
    icon: FaTint,
    text: "Water supports circulation, digestion, temperature regulation, and immune function. Even mild dehydration can leave you feeling tired and sluggish.",
    points: [
      "Drink water throughout the day",
      "Increase fluids during hot weather or exercise",
      "Eat water-rich foods like watermelon, cucumbers, oranges, and strawberries",
    ],
  },
  {
    number: "04",
    title: "Eat Foods That Nourish Your Body",
    icon: FaAppleAlt,
    text: "Your immune system depends on vitamins, minerals, antioxidants, protein, and healthy fats to function properly.",
    points: [
      "Colorful vegetables",
      "Fresh fruits",
      "Lean proteins",
      "Nuts and seeds",
      "Healthy fats",
      "Whole grains",
    ],
  },
  {
    number: "05",
    title: "Manage Stress",
    icon: FaLeaf,
    text: "Long-term stress can affect many systems in the body, including the immune system. Healthy relaxation habits can make a meaningful difference.",
    points: [
      "Meditation",
      "Deep breathing exercises",
      "Prayer",
      "Reading",
      "Spending time outdoors",
      "Listening to music",
      "Talking with family and friends",
    ],
  },
  {
    number: "06",
    title: "Nurture Your Mind and Spirit",
    icon: FaHeartbeat,
    text: "Emotional and spiritual wellness are important parts of overall health. Caring for your whole self can help reduce stress and support a healthier lifestyle.",
    points: [
      "Prayer or worship",
      "Practicing gratitude",
      "Volunteering",
      "Spending time with loved ones",
      "Building positive routines",
    ],
  },
];

const insuranceBenefits = [
  "Preventive care and annual wellness visits",
  "Primary care physicians",
  "Specialist care with many PPO plans",
  "Prescription medications",
  "Diagnostic testing",
  "Emergency medical care",
];

const services = [
  "Private PPO Health Plans",
  "Family Coverage",
  "Dental Insurance",
  "Vision Insurance",
  "Medicare Supplement Plans",
];

const seoKeywords = [
  "Boost your immune system naturally",
  "Healthy immune system tips",
  "Preventive health habits",
  "Healthy lifestyle",
  "Private PPO health insurance",
  "Affordable health insurance",
  "Wellness and prevention",
  "Health insurance for families",
  "Small business health insurance",
  "Breezy Health Solutions",
];

export default function ImmuneSystemPage() {
  return (
    <main className="overflow-hidden bg-[#f8fffb]">
      {/* Hero */}
      <section className="relative px-6 pb-24 pt-36 lg:px-8 lg:pt-44">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#d1fae5,transparent_35%),radial-gradient(circle_at_bottom_right,#cffafe,transparent_35%)]" />

        <div className="mx-auto grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-emerald-50 px-5 py-2 text-sm font-black uppercase tracking-[0.2em] text-emerald-700 ring-1 ring-emerald-100">
              Wellness & Prevention
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Boost Your Immune System Naturally
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Healthy habits that help you stay well, feel stronger, and protect
              your long-term health with confidence.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Your immune system works around the clock to protect you from
              viruses, bacteria, and other harmful invaders. While no lifestyle
              can guarantee that you&apos;ll never get sick, daily healthy
              choices can help your immune system function at its best.
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
                Speak With Brenda
                <FaArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 -top-8 h-36 w-36 rounded-full bg-emerald-200 blur-3xl" />
            <div className="absolute -bottom-8 -right-8 h-36 w-36 rounded-full bg-cyan-200 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="rounded-[1.7rem] bg-slate-950 p-8 text-white">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                  <FaShieldAlt className="h-8 w-8" />
                </div>

                <h2 className="mt-7 text-3xl font-black">
                  Prevention Is Protection
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  At Breezy Health Solutions, we believe prevention is one of
                  the greatest investments you can make in your health.
                </p>

                <div className="mt-7 grid gap-4">
                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-sm font-bold text-emerald-300">
                      Healthy Habits
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      Support your immune system naturally every day.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-5">
                    <p className="text-sm font-bold text-emerald-300">
                      Quality Coverage
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      Protect yourself when unexpected medical needs happen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-3xl border border-emerald-100 bg-emerald-50 p-6">
                <p className="text-sm font-black uppercase tracking-widest text-emerald-700">
                  Breezy Health Solutions
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Helping individuals, families, and small business owners find
                  affordable health insurance options with personalized guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto  rounded-[2rem] bg-gradient-to-br from-emerald-600 to-cyan-600 p-8 text-center shadow-2xl shadow-emerald-600/20 sm:p-12">
          <FaHeartbeat className="mx-auto h-10 w-10 text-white" />

          <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Small Healthy Choices Can Build a Stronger Tomorrow
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-emerald-50">
            By combining daily wellness habits with quality health insurance,
            you give yourself the tools to live a stronger, healthier, and more
            protected life.
          </p>
        </div>
      </section>

      {/* Healthy Habits */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto ">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.25em] text-emerald-600">
              Healthy Immune Habits
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Natural Ways to Support Your Immune System
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Focus on consistent habits that support your body, mind, and
              overall wellness.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {habits.map((habit) => {
              const Icon = habit.icon;

              return (
                <div
                  key={habit.title}
                  className="group rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-2xl"
                >
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <div className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-black text-emerald-600">
                          {habit.number}
                        </span>
                        <div className="h-px w-12 bg-emerald-200" />
                      </div>

                      <h3 className="mt-3 text-2xl font-black text-slate-950">
                        {habit.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {habit.text}
                      </p>

                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {habit.points.map((point) => (
                          <div key={point} className="flex gap-3">
                            <FaCheckCircle className="mt-1 h-4 w-4 flex-none text-emerald-500" />
                            <p className="text-sm leading-6 text-slate-600">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prevention + Insurance */}
      <section className="relative px-6 py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-slate-950" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.25),transparent_35%)]" />

        <div className="mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.25em] text-emerald-300">
              Prevention + Protection
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-black sm:text-5xl">
              Good Habits Help Keep You Healthy. Good Insurance Helps Protect
              You.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300">
              Living a healthy lifestyle is one of the best ways to support your
              immune system, but even the healthiest people can experience
              unexpected illnesses or accidents. That&apos;s why having quality
              health insurance matters.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300">
                  <FaStethoscope className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-lg font-black text-white">
                    The right health plan gives you access to care when you need
                    it most.
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    Preventive care, primary care, specialist support, testing,
                    prescriptions, and emergency medical care can all play a
                    role in protecting your health and financial future.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {insuranceBenefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-3xl border border-green/10 bg-white/10 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
              >
                <FaCheckCircle className="h-6 w-6 text-emerald-300" />
                <h3 className="mt-4 text-base font-black text-black">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto ">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.25em] text-emerald-600">
                Your Health Is Your Greatest Investment
              </span>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Start With Small, Consistent Steps
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                Every healthy choice you make today contributes to a healthier
                tomorrow. You do not need to change everything overnight. Start
                with simple habits and build from there.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-100 bg-slate-50 p-6">
              <div className="grid gap-4">
                {[
                  "Move your body",
                  "Drink more water",
                  "Eat nourishing foods",
                  "Get enough sleep",
                  "Reduce stress",
                  "Care for your emotional and spiritual well-being",
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
        <div className="mx-auto rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-8 shadow-2xl sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300">
                <FaUserMd className="h-8 w-8" />
              </div>

              <h2 className="mt-7 text-3xl font-black tracking-tight text-white sm:text-5xl">
                Let Breezy Health Solutions Help Protect Your Health
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-300">
                Breezy Health Solutions is committed to helping individuals,
                families, and small business owners find affordable health
                insurance solutions that fit their needs and budget.
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

              <p className="mt-3 text-sm leading-7 text-slate-300">
                We&apos;re here to help you understand your options with
                personalized guidance.
              </p>

              <div className="mt-6 grid gap-4">
                {services.map((service) => (
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
                  Helping you protect both your health and your financial
                  future — one conversation at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Keywords */}
      {/* <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto rounded-[2rem] border border-slate-100 bg-slate-50 p-8">
          <h2 className="text-2xl font-black text-slate-950">SEO Keywords</h2>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            This article is optimized for search engines using wellness,
            prevention, and health insurance related phrases.
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