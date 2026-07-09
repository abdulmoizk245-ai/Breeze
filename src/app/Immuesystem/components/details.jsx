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

export default function ImmuneSystemPage() {
  return (
    <main className="overflow-hidden bg-[#f8fffb] text-slate-900">
      {/* Hero — dark, editorial */}
      <section className="relative isolate overflow-hidden bg-slate-950 px-6 pb-24 pt-28 sm:pt-32 lg:px-16 lg:pb-32 lg:pt-48">
        <div className="pointer-events-none absolute left-[-10%] top-[-20%] h-[32rem] w-[32rem] rounded-full bg-primary-500/15 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[32rem] w-[32rem] rounded-full bg-secondary-500/10 blur-[130px]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:88px_88px]" />

        <div className="relative mx-auto grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-300">
                Wellness &amp; Prevention
              </span>
            </div>

            {/* Light backdrop panel so Home's navy heading/paragraph colors stay legible on this dark hero */}
            <div className="mt-8 max-w-xl rounded-3xl  p-6   sm:p-8">
              <h1 className="text-4xl leading-[1.05] tracking-tight text-[#132A4A] sm:text-5xl lg:text-6xl">
                <span className="font-sans font-semibold">
                  Boost your immune system
                </span>
                <br />
                <span className="font-serif italic bg-gradient-to-r from-[#2F8F8B] to-[#7FA64A] bg-clip-text text-transparent">
                  naturally.
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-[#334155]">
                Healthy habits that help you stay well, feel stronger, and
                protect your long-term health with confidence.
              </p>

              <p className="mt-4 text-base leading-8 text-[#334155]/80">
                Your immune system works around the clock to protect you from
                viruses, bacteria, and other harmful invaders. While no
                lifestyle can guarantee that you&apos;ll never get sick,
                daily healthy choices can help your immune system function at
                its best.
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
                Speak With Brenda
                <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Prevention card */}
          <div className="relative">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500/15 text-primary-300">
                <FaShieldAlt className="h-7 w-7" />
              </div>

              <h2 className="mt-7 font-serif text-3xl text-white">
                Prevention Is Protection
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                At Breezy Health Solutions, we believe prevention is one of
                the greatest investments you can make in your health.
              </p>

              <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
                <div className="rounded-2xl bg-white/5 p-5">
                  <p className="text-sm font-semibold text-primary-300">
                    Healthy Habits
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Support your immune system naturally every day.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 p-5">
                  <p className="text-sm font-semibold text-primary-300">
                    Quality Coverage
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Protect yourself when unexpected medical needs happen.
                  </p>
                </div>
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
            Small Healthy Choices Can Build a Stronger Tomorrow
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-primary-50">
            By combining daily wellness habits with quality health insurance,
            you give yourself the tools to live a stronger, healthier, and
            more protected life.
          </p>
        </div>
      </section>

      {/* Healthy Habits */}
      <section className="px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-9xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                Healthy Immune Habits
              </span>
            </div>

            <h2 className="mt-6 text-3xl leading-tight tracking-tight text-slate-900 sm:text-5xl">
              <span className="font-sans font-semibold">
                Natural ways to
              </span>{" "}
              <span className="font-serif italic">
                support your immune system.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Focus on consistent habits that support your body, mind, and
              overall wellness.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {habits.map((habit) => {
              const Icon = habit.icon;

              return (
                <div
                  key={habit.title}
                  className="group rounded-3xl border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl sm:p-7"
                >
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition group-hover:bg-primary-600 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="font-serif text-lg text-primary-500/60">
                          {habit.number}
                        </span>
                        <div className="h-px flex-1 bg-slate-100" />
                      </div>

                      <h3 className="mt-3 text-xl font-semibold text-slate-900">
                        {habit.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {habit.text}
                      </p>

                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {habit.points.map((point) => (
                          <div key={point} className="flex gap-3">
                            <FaCheckCircle className="mt-1 h-4 w-4 flex-none text-primary-500" />
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
      <section className="relative overflow-hidden bg-slate-950 px-6 py-20 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute right-[-10%] top-0 h-96 w-96 rounded-full bg-secondary-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-9xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-300">
                Prevention + Protection
              </span>
            </div>

            <h2 className="mt-6 text-3xl leading-tight tracking-tight text-white sm:text-4xl">
              Good habits help keep you healthy.
              <br />
              <span className="font-serif italic text-primary-300">
                Good insurance helps protect you.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300">
              Living a healthy lifestyle is one of the best ways to support
              your immune system, but even the healthiest people can
              experience unexpected illnesses or accidents. That&apos;s why
              having quality health insurance matters.
            </p>

            <div className="mt-8 flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-primary-400/15 text-primary-300">
                <FaStethoscope className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-base font-semibold text-white">
                  The right health plan gives you access to care when you
                  need it most.
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Preventive care, primary care, specialist support, testing,
                  prescriptions, and emergency medical care can all play a
                  role in protecting your health and financial future.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {insuranceBenefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <FaCheckCircle className="h-6 w-6 text-primary-300" />
                <h3 className="mt-4 text-base font-semibold text-white">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-9xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-primary-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                  Your Health Is Your Greatest Investment
                </span>
              </div>

              <h2 className="mt-6 text-3xl leading-tight tracking-tight text-slate-900 sm:text-5xl">
                <span className="font-sans font-semibold">
                  Start with small,
                </span>{" "}
                <span className="font-serif italic">consistent steps.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                Every healthy choice you make today contributes to a
                healthier tomorrow. You do not need to change everything
                overnight. Start with simple habits and build from there.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-primary-50 p-6">
              <div className="grid gap-3">
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
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary-50 text-primary-600">
                      <FaCheckCircle className="h-4 w-4" />
                    </div>
                    <p className="text-sm font-medium text-slate-700">
                      {item}
                    </p>
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
                <span className="font-sans font-semibold">
                  Let Breezy Health Solutions
                </span>{" "}
                <span className="font-serif italic text-primary-300">
                  help protect your health.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-300">
                Breezy Health Solutions is committed to helping individuals,
                families, and small business owners find affordable health
                insurance solutions that fit their needs and budget.
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
                We&apos;re here to help you understand your options with
                personalized guidance.
              </p>

              <div className="mt-6 grid gap-3">
                {services.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-4 rounded-2xl bg-white/5 p-4"
                  >
                    <FaCheckCircle className="h-5 w-5 flex-none text-primary-300" />
                    <p className="text-sm font-medium text-white">
                      {service}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-primary-500/15 p-5">
                <p className="text-sm leading-7 text-primary-100">
                  Helping you protect both your health and your financial
                  future — one conversation at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
