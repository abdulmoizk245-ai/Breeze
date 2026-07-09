"use client";

import Link from "next/link";
import {
  FaCheck,
  FaArrowRight,
  FaClock,
  FaLanguage,
  FaLock,
  FaPeopleGroup,
} from "react-icons/fa6";

const solutions = [
  "Young adults transitioning off their parents' health insurance plans",
  "Self-employed individuals and entrepreneurs",
  "Families seeking affordable, comprehensive healthcare coverage",
  "Small and mid-sized businesses looking to provide employee benefits",
  "Individuals seeking an alternative to expensive COBRA coverage",
  "Dental, vision, supplemental, and life insurance solutions",
];

const reasons = [
  "Licensed in multiple states across the United States",
  "Bilingual service in English and Spanish",
  "Convenient online quote request available through the website",
  "Virtual appointments nationwide and in-person consultations throughout Texas",
  "Honest, personalized recommendations based on your needs — not sales quotas",
];

export default function AboutBrenda() {
  return (
    <section className="relative bg-[#f8fffb] py-24 sm:py-28">
      <div className="relative mx-auto max-w-9xl px-6 lg:px-8">
        {/* Intro */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
              Meet Brenda Ruiz
            </span>
          </div>

          <h2 className="mt-6 text-3xl leading-tight tracking-tight text-slate-900 sm:text-5xl">
            <span className="font-sans font-semibold">
              Making health insurance
            </span>{" "}
            <span className="font-serif italic">simple &amp; personal.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Finding the right health insurance shouldn&apos;t be confusing or
            overwhelming. Brenda helps make the process simple, educational, and
            personalized so you can make confident decisions about your
            healthcare.
          </p>
        </div>

        {/* Main About Card */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          {/* Left Content Card */}
          <div className="rounded-[1.5rem] bg-slate-950 p-8 sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-400">
              Your Advisor
            </span>

            <h3 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-white sm:text-4xl">
              Licensed Health, Accident &amp; Life Insurance Advisor
            </h3>

            <p className="mt-6 text-base leading-8 text-slate-300">
              I&apos;m Brenda Ruiz, a licensed Health, Accident, and Life
              Insurance Advisor and the founder of Breezy Health Solutions. With
              more than 20 years of experience in medical and dental billing,
              financial management, and healthcare administration, I understand
              both the healthcare system and the financial impact that choosing
              the right coverage can have on individuals, families, and
              businesses.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-300">
              Today, I specialize in helping self-employed individuals,
              families, small business owners, and employer groups find
              affordable, high-quality health insurance solutions. My expertise
              in Private PPO plans allows me to recommend coverage that offers
              flexibility, nationwide provider access, and protection that fits
              both your healthcare needs and your budget.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-white/10 pt-7">
              <div>
                <p className="font-serif text-2xl text-white">20+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
                  Years experience
                </p>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <p className="font-serif text-2xl text-white">PPO</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
                  Private plan guidance
                </p>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <p className="font-serif text-2xl text-white">2</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
                  Languages spoken
                </p>
              </div>
            </div>
          </div>

          {/* Right Image + Caption */}
          <div className="flex flex-col overflow-hidden rounded-[1.5rem] border border-slate-100">
            <div className="relative h-[320px] w-full overflow-hidden rounded-3xl sm:h-[420px] lg:h-[600px]">
              <img
                src="/about/brenda-about.png"
                alt="Brenda Ruiz helping a client choose health insurance coverage"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center gap-6 bg-primary-50 p-7">
              <div className="flex gap-4">
                <FaClock className="mt-1 h-5 w-5 shrink-0 text-primary-600" />
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Most quotes take 10–15 minutes
                  </h3>
                  <p className="mt-1 text-sm leading-7 text-slate-600">
                    No obligation — review your options clearly and decide with
                    confidence.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 border-t border-primary-100 pt-6">
                <FaLanguage className="mt-1 h-5 w-5 shrink-0 text-primary-600" />
                <div>
                  <h3 className="font-semibold text-slate-900">
                    English &amp; Spanish support
                  </h3>
                  <p className="mt-1 text-sm leading-7 text-slate-600">
                    Virtual nationwide, in-person throughout Texas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions — creative light cards */}
        <div className="mt-24">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="block h-px w-10 bg-primary-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                  Who We Help
                </span>
              </div>

              <h3 className="mt-4 text-2xl leading-tight text-slate-900 sm:text-3xl">
                <span className="font-serif italic">Coverage options</span>{" "}
                <span className="font-sans font-semibold">
                  designed around your needs.
                </span>
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-7 text-slate-500">
              Simple, flexible support for people who want clear guidance and
              dependable coverage.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((title, index) => (
              <div
                key={title}
                className="group relative min-h-[190px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl hover:shadow-primary-100/60"
              >
                {/* Large number watermark */}
                <span className="pointer-events-none absolute -right-3 -top-6 font-serif text-8xl italic leading-none text-slate-100 transition duration-300 group-hover:text-primary-50">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Top accent */}
                <div className="relative flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-sm font-bold text-primary-600 ring-1 ring-primary-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="rounded-full border border-slate-200 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 transition group-hover:border-primary-200 group-hover:text-primary-600">
                    Coverage
                  </span>
                </div>

                <div className="relative mt-10">
                  <p className="text-base font-semibold leading-7 text-slate-800">
                    {title}
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <span className="h-px flex-1 bg-slate-200 transition group-hover:bg-primary-200" />
                    <span className="h-2 w-2 rounded-full bg-primary-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Plan Comparison */}
        <div className="mt-24 flex flex-col gap-8 rounded-[1.5rem] bg-primary-600 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
          <div>
            <h3 className="font-serif text-2xl text-white sm:text-3xl">
              Already have health insurance?
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-primary-50">
              If you currently have coverage but aren&apos;t sure you&apos;re
              getting the best value, Brenda can provide a complimentary plan
              comparison so you can make an informed decision.
            </p>
          </div>

          <Link
            href="/quote"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary-700 transition hover:bg-primary-50"
          >
            Compare My Plan
            <FaArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* What Sets Me Apart */}
        <div className="mt-24 grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-stretch">
          {/* Left Content */}
          <div className="relative rounded-[28px] border border-slate-200 p-6 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.45)] sm:p-8 lg:p-10">
            <div className="absolute left-0 top-8 h-16 w-1 rounded-r-full bg-primary-500" />

            <div className="flex items-center gap-3">
              <span className="block h-px w-10 bg-primary-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                What Sets Me Apart
              </span>
            </div>

            <h3 className="mt-5 max-w-xl text-3xl leading-tight text-slate-950 sm:text-4xl">
              <span className="font-serif italic text-primary-700">
                More than a quote
              </span>{" "}
              <span className="font-sans font-semibold">
                — an advisor who listens.
              </span>
            </h3>

            <div className="mt-7 space-y-5">
              <p className="text-base leading-8 text-slate-600">
                Every client deserves more than just a quote. Brenda takes the
                time to understand your unique situation, answer your questions,
                explain your options in plain language, and recommend solutions
                designed specifically for you.
              </p>

              <p className="text-base leading-8 text-slate-600">
                Her commitment doesn&apos;t end once your policy is issued. She
                is here to support you throughout the life of your policy
                whenever questions or changes arise.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Personal Guidance", "Clear Answers", "Long-Term Support"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative rounded-[28px] border border-slate-200 p-6 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.45)] sm:p-8 lg:p-10">
            <div className="flex items-start justify-between gap-5">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary-200">
                  <FaPeopleGroup className="h-7 w-7 text-primary-600" />
                </div>

                <h4 className="mt-6 text-2xl font-semibold leading-tight text-slate-950">
                  Why clients choose Breezy Health Solutions
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  A simple, honest, and supportive experience from the first
                  call to ongoing policy support.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {reasons.map((reason, index) => (
                <div
                  key={reason}
                  className="group flex gap-4 rounded-2xl border border-slate-200 p-4 transition duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-[0_14px_35px_-25px_rgba(15,23,42,0.45)]"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary-200 text-xs font-bold text-primary-700">
                    {index + 1}
                  </div>

                  <p className="text-sm leading-7 text-slate-600 transition group-hover:text-slate-900">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Privacy */}
        <div className="mt-12 rounded-[28px] border border-slate-200 p-6 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.45)] sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary-200">
              <FaLock className="h-6 w-6 text-primary-600" />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-semibold text-slate-950">
                  Your privacy matters
                </h3>

                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                  Confidential
                </span>
              </div>

              <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600">
                Your personal information is treated with the highest level of
                confidentiality and respect. Having spent decades working in
                healthcare with strict compliance standards, Brenda understands
                the importance of protecting sensitive information.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-5">
                  <FaCheck className="h-4 w-4 text-primary-600" />
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Your information will never be sold, shared, or distributed
                    to third parties for marketing purposes.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-5">
                  <FaCheck className="h-4 w-4 text-primary-600" />
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Integrity, professionalism, and trust are the foundation of
                    every client relationship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="relative mt-24 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950 px-8 py-14 shadow-2xl sm:px-10 lg:px-16">
          {/* Background Glow */}
          <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-secondary-400/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            {/* Left Content */}
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-primary-400" />
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-primary-300">
                  Trusted Guidance
                </span>
              </div>

              <h3 className="mt-6 text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                <span className="font-sans font-black">
                  Better coverage. Better protection.
                </span>
                <br />
                <span className="font-serif italic text-primary-300">
                  Breezy Solutions.
                </span>
              </h3>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                Let Brenda help you find health insurance that fits your
                healthcare needs, your budget, and your peace of mind — with
                honest guidance and no pressure.
              </p>

              {/* Trust Points */}
              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/10 pt-7">
                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-md">
                  <p className="text-sm text-slate-300">
                    <span className="font-bold text-white">10–15 min</span>{" "}
                    quote process
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-md">
                  <p className="text-sm text-slate-300">
                    <span className="font-bold text-white">No obligation</span>{" "}
                    free consult
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-md">
                  <p className="text-sm text-slate-300">
                    <span className="font-bold text-white">Personalized</span>{" "}
                    plans for you
                  </p>
                </div>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-wrap items-center justify-start gap-4 lg:justify-end">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-primary-500/25 transition hover:-translate-y-1 hover:bg-primary-400"
              >
                Get a Free Quote
                <FaArrowRight className="h-3.5 w-3.5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
