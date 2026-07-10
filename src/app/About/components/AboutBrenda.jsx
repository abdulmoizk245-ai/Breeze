"use client";

import Link from "next/link";
import {
  FaCheck,
  FaArrowRight,
  FaClock,
  FaLanguage,
  FaLock,
  FaPeopleGroup,
  FaShieldHalved,
  FaCircleCheck,
  FaUserShield,
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

          {/* Right Image + Information Card */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
            {/* Image */}
            <div className="relative h-[300px] w-full overflow-hidden sm:h-[400px] lg:h-[480px] xl:h-[520px]">
              <img
                src="/about/brenda-about.png"
                alt="Brenda Ruiz helping a client choose health insurance coverage"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-white/20 bg-slate-950/55 px-4 py-3 text-white shadow-xl backdrop-blur-md sm:left-6 sm:right-auto">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-500">
                  <FaClock className="h-4 w-4" />
                </span>

                <div>
                  <p className="text-xs font-medium text-white/70">
                    Quick &amp; simple process
                  </p>

                  <p className="text-sm font-bold sm:text-base">
                    Most quotes in 10–15 minutes
                  </p>
                </div>
              </div>
            </div>

            {/* Information Area */}
            <div className="relative bg-gradient-to-br from-primary-50 via-white to-primary-50/60 p-5 sm:p-7 lg:p-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {/* Quote Process */}
                <div className="flex gap-4 rounded-2xl border border-primary-100 bg-white/80 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                    <FaClock className="h-4 w-4" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold leading-5 text-slate-900 sm:text-base">
                      Fast Quote Process
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">
                      No obligation. Review your options clearly and decide with
                      confidence.
                    </p>
                  </div>
                </div>

                {/* Language Support */}
                <div className="flex gap-4 rounded-2xl border border-primary-100 bg-white/80 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                    <FaLanguage className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold leading-5 text-slate-900 sm:text-base">
                      English &amp; Spanish Support
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">
                      Virtual service nationwide and in-person support
                      throughout Texas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Trust Line */}
              <div className="mt-5 flex items-center justify-center gap-2 border-t border-primary-100 pt-5 text-center">
                <span className="h-2 w-2 rounded-full bg-primary-500" />

                <p className="text-xs font-semibold text-slate-500 sm:text-sm">
                  Personalized guidance with no pressure or obligation
                </p>
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
          <div className="relative overflow-hidden rounded-[22px] border border-slate-200 p-5 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.45)] sm:rounded-[28px] sm:p-8 lg:p-10">
            {/* Side Accent */}
            <div className="absolute left-0 top-7 h-14 w-1 rounded-r-full bg-primary-500 sm:top-8 sm:h-16" />

            {/* Small Heading */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="block h-px w-7 shrink-0 bg-primary-500 sm:w-10" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-primary-600 sm:text-xs sm:tracking-[0.35em]">
                What Sets Me Apart
              </span>
            </div>

            {/* Main Heading */}
            <h3 className="mt-4 max-w-xl text-2xl leading-[1.2] text-slate-950 sm:mt-5 sm:text-4xl sm:leading-tight">
              <span className="font-serif italic text-primary-700">
                More than a quote
              </span>{" "}
              <span className="font-sans font-semibold">
                — an advisor who listens.
              </span>
            </h3>

            {/* Description */}
            <div className="mt-5 space-y-4 sm:mt-7 sm:space-y-5">
              <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Every client deserves more than just a quote. Brenda takes the
                time to understand your unique situation, answer your questions,
                explain your options in plain language, and recommend solutions
                designed specifically for you.
              </p>

              <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Her commitment doesn&apos;t end once your policy is issued. She
                is here to support you throughout the life of your policy
                whenever questions or changes arise.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3">
              {["Personal Guidance", "Clear Answers", "Long-Term Support"].map(
                (item) => (
                  <span
                    key={item}
                    className="flex min-w-0 items-center justify-center whitespace-nowrap rounded-full border border-slate-200 px-1.5 py-2 text-center text-[8px] font-semibold uppercase tracking-[0.04em] text-slate-700 sm:px-4 sm:text-xs sm:tracking-[0.18em]"
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
        {/* Privacy Section */}
        <div className="relative mt-12 overflow-hidden rounded-[24px] border border-primary-100 bg-gradient-to-br from-white via-primary-50/40 to-white shadow-[0_25px_70px_-45px_rgba(15,23,42,0.5)] sm:rounded-[32px]">
          {/* Decorative Background */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-tertiary-200/30 blur-3xl" />

          <div className="relative grid lg:grid-cols-[0.72fr_1.28fr]">
            {/* Left Highlight Area */}
            <div className="flex flex-col justify-between bg-slate-950 p-6 sm:p-8 lg:p-10">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-lg shadow-primary-500/30 sm:h-16 sm:w-16">
                  <FaShieldHalved className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>

                <span className="mt-6 inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-200 backdrop-blur-md sm:text-xs">
                  Confidential &amp; Secure
                </span>

                <h3 className="mt-5 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                  Your privacy always comes first.
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                  Every conversation and personal detail is handled with care,
                  professionalism, and complete respect.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                <FaUserShield className="h-5 w-5 shrink-0 text-primary-300" />

                <p className="text-xs font-medium leading-5 text-slate-300 sm:text-sm">
                  Trusted guidance backed by decades of healthcare experience.
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary-500 sm:w-10" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary-600 sm:text-xs sm:tracking-[0.35em]">
                  Privacy Commitment
                </span>
              </div>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Your personal information is treated with the highest level of
                confidentiality and respect. Brenda understands the importance
                of protecting sensitive information and following strict
                professional standards.
              </p>

              {/* Privacy Points */}
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition group-hover:bg-primary-500 group-hover:text-white">
                    <FaCircleCheck className="h-4 w-4" />
                  </div>

                  <h4 className="mt-4 text-base font-bold text-slate-900">
                    Your data stays private
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Your information will never be sold, shared, or distributed
                    to third parties for marketing purposes.
                  </p>
                </div>

                <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition group-hover:bg-primary-500 group-hover:text-white">
                    <FaCircleCheck className="h-4 w-4" />
                  </div>

                  <h4 className="mt-4 text-base font-bold text-slate-900">
                    Built on trust
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Integrity, professionalism, and respect are at the heart of
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
              <div className="mt-8 grid grid-cols-3 gap-2 border-t border-white/10 pt-7">
                <div className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-center backdrop-blur-md">
                  <p className="text-[11px] leading-4 text-slate-300 sm:text-xs">
                    <span className="block font-bold text-white">
                      10–15 min
                    </span>
                    quote process
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-center backdrop-blur-md">
                  <p className="text-[11px] leading-4 text-slate-300 sm:text-xs">
                    <span className="block font-bold text-white">
                      No obligation
                    </span>
                    free consult
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-center backdrop-blur-md">
                  <p className="text-[11px] leading-4 text-slate-300 sm:text-xs">
                    <span className="block font-bold text-white">
                      Personalized
                    </span>
                    plans for you
                  </p>
                </div>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
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
