// "use client";

// import Link from "next/link";
// import { FaArrowRight } from "react-icons/fa6";

// const steps = [
//   {
//     number: "01",
//     title: "Free Consultation",
//     description:
//       "We start with a quick, no-pressure conversation about your health, budget, and goals — in English or Spanish, whichever you prefer.",
//   },
//   {
//     number: "02",
//     title: "Compare Your Options",
//     description:
//       "Brenda reviews top-rated PPO plans across carriers and narrows the list down to the coverage that actually fits your needs.",
//   },
//   {
//     number: "03",
//     title: "Enroll With Confidence",
//     description:
//       "Most applications take just 10–15 minutes, fully guided from start to finish — no confusing paperwork, no surprises.",
//   },
//   {
//     number: "04",
//     title: "Ongoing Support",
//     description:
//       "Brenda stays available long after enrollment for questions, life changes, and renewals — your policy is never a one-and-done.",
//   },
// ];

// export default function AboutProcess() {
//   return (
//     <section className="bg-white py-24 sm:py-28">
//       <div className="mx-auto max-w-8xl px-6 lg:px-8">
//         <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
//           <div className="max-w-xl">
//             <div className="flex items-center gap-3">
//               <span className="h-px w-10 bg-primary-500" />
//               <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
//                 How It Works
//               </span>
//             </div>

//             <h2 className="mt-6 text-3xl leading-tight text-slate-900 sm:text-4xl">
//               <span className="font-sans font-semibold">
//                 Working with Brenda,
//               </span>{" "}
//               <span className="font-serif italic">step by step.</span>
//             </h2>
//           </div>

//           <Link
//             href="/quote"
//             className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary-700"
//           >
//             Start Your Free Consultation
//             <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
//           </Link>
//         </div>

//         <div className="mt-14 grid border-t border-slate-200 sm:grid-cols-2">
//           {steps.map((step, index) => (
//             <div
//               key={step.number}
//               className={`flex flex-col gap-4 border-b border-slate-200 py-8 sm:px-8 ${
//                 index % 2 === 0 ? "sm:border-r sm:pl-0" : "sm:pr-0"
//               }`}
//             >
//               <span className="font-serif text-4xl text-primary-500/40">
//                 {step.number}
//               </span>
//               <h3 className="text-lg font-semibold text-slate-900">
//                 {step.title}
//               </h3>
//               <p className="max-w-sm text-sm leading-7 text-slate-600">
//                 {step.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa6";

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
    <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-primary-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-primary-300/20 blur-[110px]" />

      <div className="relative mx-auto max-w-8xl px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="block h-px w-10 bg-primary-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                How It Works
              </span>
            </div>

            <h2 className="mt-6 text-3xl leading-tight text-slate-900 sm:text-5xl">
              <span className="font-sans font-semibold">
                Working with Brenda,
              </span>{" "}
              <span className="font-serif italic text-primary-700">
                step by step.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              A simple, guided process designed to help you understand your
              options clearly and choose coverage with confidence.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-primary-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-500 hover:shadow-primary-500/40 active:translate-y-0"
          >
            Start Your Free Consultation
            <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/10"
            >
              {/* Dark Gradient Hover Background */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-slate-950 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                {/* Top Number */}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-5xl leading-none text-primary-500/20 transition-all duration-300 group-hover:text-white/20">
                    {step.number}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-500/10 text-primary-600 transition-all duration-300 group-hover:bg-white/15 group-hover:text-white">
                    <FaCheck className="h-3.5 w-3.5" />
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-slate-900 transition-colors duration-500 group-hover:text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 transition-colors duration-500 group-hover:text-white/80">
                  {step.description}
                </p>

                {/* Bottom Line */}
                <div className="mt-7 h-px w-full bg-slate-100 group-hover:bg-white/20">
                  <div className="h-px w-0 bg-primary-500 transition-all duration-500 group-hover:w-full group-hover:bg-white/60" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}