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
            <div className="relative h-[600px] w-full overflow-hidden rounded-3xl">
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

        {/* Solutions — editorial numbered list */}
        <div className="mt-24">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
              Who We Help
            </span>
            <h3 className="mt-4 text-2xl leading-tight text-slate-900 sm:text-3xl">
              <span className="font-serif italic">Coverage options</span>{" "}
              <span className="font-sans font-semibold">
                designed around your needs.
              </span>
            </h3>
          </div>

          <div className="mt-10 grid border-t border-slate-200 sm:grid-cols-2">
            {solutions.map((title, index) => (
              <div
                key={title}
                className="flex items-start gap-5 border-b border-slate-200 py-6 pr-6 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
              >
                <span className="font-serif text-2xl text-primary-500/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 text-sm font-medium leading-7 text-slate-700">
                  {title}
                </p>
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
        <div className="mt-24 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
              What Sets Me Apart
            </span>

            <h3 className="mt-4 text-2xl leading-tight text-slate-900 sm:text-3xl">
              <span className="font-serif italic">More than a quote</span>{" "}
              <span className="font-sans font-semibold">
                — an advisor who listens.
              </span>
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Every client deserves more than just a quote. Brenda takes the
              time to understand your unique situation, answer your questions,
              explain your options in plain language, and recommend solutions
              designed specifically for you.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Her commitment doesn&apos;t end once your policy is issued. She is
              here to support you throughout the life of your policy whenever
              questions or changes arise.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-8">
            <FaPeopleGroup className="h-8 w-8 text-primary-600" />
            <h4 className="mt-5 text-xl font-semibold text-slate-900">
              Why clients choose Breezy Health Solutions
            </h4>

            <div className="mt-6 space-y-4">
              {reasons.map((reason) => (
                <div key={reason} className="flex gap-3">
                  <FaCheck className="mt-1 h-3.5 w-3.5 shrink-0 text-primary-600" />
                  <p className="text-sm leading-7 text-slate-600">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Privacy */}
        <div className="mt-24 flex flex-col gap-6 border-t border-slate-200 pt-10 lg:flex-row lg:items-start">
          <FaLock className="h-6 w-6 shrink-0 text-primary-600" />

          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Your privacy matters
            </h3>

            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              Your personal information is treated with the highest level of
              confidentiality and respect. Having spent decades working in
              healthcare with strict compliance standards, Brenda understands
              the importance of protecting sensitive information. Your
              information will never be sold, shared, or distributed to third
              parties for marketing purposes.
            </p>

            <p className="mt-5 font-semibold text-slate-900">
              Integrity, professionalism, and trust are the foundation of every
              client relationship.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-24 rounded-[1.5rem] bg-slate-950 px-6 py-14 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-primary-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-300">
                  Trusted Guidance
                </span>
              </div>

              <h3 className="mt-6 text-3xl leading-tight text-white sm:text-4xl">
                <span className="font-sans font-semibold">
                  Better coverage. Better protection.
                </span>
                <br />
                <span className="font-serif italic text-primary-300">
                  Breezy Solutions.
                </span>
              </h3>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                Let Brenda help you find health insurance that fits your
                healthcare needs, your budget, and your peace of mind — with
                honest guidance and no pressure.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-7">
                <p className="text-sm text-slate-400">
                  <span className="font-serif text-lg text-white">
                    10–15 min
                  </span>{" "}
                  quote process
                </p>
                <div className="h-6 w-px bg-white/10" />
                <p className="text-sm text-slate-400">
                  <span className="font-serif text-lg text-white">
                    No obligation
                  </span>{" "}
                  free consult
                </p>
                <div className="h-6 w-px bg-white/10" />
                <p className="text-sm text-slate-400">
                  <span className="font-serif text-lg text-white">
                    Personalized
                  </span>{" "}
                  plans for you
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-400"
              >
                Get a Free Quote
                <FaArrowRight className="h-3 w-3" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
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
