"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "We start with a quick, no-pressure conversation about your health, budget, and goals — in English or Spanish, whichever you prefer.",
  },
  {
    number: "02",
    title: "Compare Your Options",
    description:
      "Brenda reviews top-rated PPO plans across carriers and narrows the list down to the coverage that actually fits your needs.",
  },
  {
    number: "03",
    title: "Enroll With Confidence",
    description:
      "Most applications take just 10–15 minutes, fully guided from start to finish — no confusing paperwork, no surprises.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "Brenda stays available long after enrollment for questions, life changes, and renewals — your policy is never a one-and-done.",
  },
];

export default function AboutProcess() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                How It Works
              </span>
            </div>

            <h2 className="mt-6 text-3xl leading-tight text-slate-900 sm:text-4xl">
              <span className="font-sans font-semibold">
                Working with Brenda,
              </span>{" "}
              <span className="font-serif italic">step by step.</span>
            </h2>
          </div>

          <Link
            href="/quote"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary-700"
          >
            Start Your Free Consultation
            <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid border-t border-slate-200 sm:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col gap-4 border-b border-slate-200 py-8 sm:px-8 ${
                index % 2 === 0 ? "sm:border-r sm:pl-0" : "sm:pr-0"
              }`}
            >
              <span className="font-serif text-4xl text-primary-500/40">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="max-w-sm text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
