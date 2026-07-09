// import {
//   FaHeartPulse,
//   FaUserDoctor,
//   FaTooth,
//   FaHandHoldingHeart,
//   FaCheck,
//   FaArrowRight,
// } from "react-icons/fa6";

// const SERVICES = [
//   {
//     title: "Individual & Family Health",
//     description:
//       "Comprehensive medical coverage built around your household, with plans that scale as your family grows.",
//     icon: FaHeartPulse,
//     points: ["Primary & specialist care", "Prescription drug coverage", "Preventive checkups included"],
//   },
//   {
//     title: "Medicare Solutions",
//     description:
//       "Original Medicare, Advantage, and Supplement plans explained in plain English by a real person.",
//     icon: FaUserDoctor,
//     points: ["Free plan comparison", "Enrollment period guidance", "No cost to switch"],
//   },
//   {
//     title: "Dental & Vision",
//     description:
//       "Stand-alone or bundled add-ons that cover cleanings, frames, and everything in between.",
//     icon: FaTooth,
//     points: ["Low waiting periods", "Nationwide network", "Kids covered from day one"],
//   },
//   {
//     title: "Life & Supplemental",
//     description:
//       "Extra protection for the moments major medical doesn't reach — income, critical illness, and more.",
//     icon: FaHandHoldingHeart,
//     points: ["No medical exam options", "Fast approval", "Locked-in premiums"],
//   },
// ];

// export default function Services() {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#f8fffb] py-24">
//       <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-primary-100/60 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-6 ">
//         <div className="mx-auto max-w-2xl text-center">
//           <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-700">
//             What We Offer
//           </span>
//           <h2 className="mt-6 text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl">
//             Services designed around your life
//           </h2>
//           <p className="mt-4 text-lg text-zinc-500">
//             Whatever stage of life you&apos;re in, we&apos;ll match you with coverage
//             that actually makes sense.
//           </p>
//         </div>

//         <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
//           {SERVICES.map(({ title, description, icon: Icon, points }) => (
//             <div
//               key={title}
//               className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-2xl hover:shadow-black/30"
//             >
//               <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-shine" />

//               <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 transition-colors duration-300 group-hover:bg-primary-500">
//                 <Icon className="h-6 w-6 text-primary-500 transition-colors duration-300 group-hover:text-white" />
//               </span>

//               <h3 className="mt-6 text-xl font-semibold text-primary-950">
//                 {title}
//               </h3>
//               <p className="mt-2 text-sm leading-6 text-zinc-500">
//                 {description}
//               </p>

//               <ul className="mt-6 flex flex-col gap-2">
//                 {points.map((point) => (
//                   <li
//                     key={point}
//                     className="flex items-center gap-2 text-sm text-zinc-600"
//                   >
//                     <FaCheck className="h-3 w-3 shrink-0 text-primary-500" />
//                     {point}
//                   </li>
//                 ))}
//               </ul>

//               <a
//                 href="#quote"
//                 className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
//               >
//                 Explore coverage
//                 <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import {
  FaHeartPulse,
  FaUserDoctor,
  FaTooth,
  FaHandHoldingHeart,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa6";

const SERVICES = [
  {
    title: "Individual & Family Health",
    description:
      "Comprehensive medical coverage built around your household, with plans that scale as your family grows.",
    icon: FaHeartPulse,
    points: [
      "Primary & specialist care",
      "Prescription drug coverage",
      "Preventive checkups included",
    ],
  },
  {
    title: "Medicare Solutions",
    description:
      "Original Medicare, Advantage, and Supplement plans explained in plain English by a real person.",
    icon: FaUserDoctor,
    points: [
      "Free plan comparison",
      "Enrollment period guidance",
      "No cost to switch",
    ],
  },
  {
    title: "Dental & Vision",
    description:
      "Stand-alone or bundled add-ons that cover cleanings, frames, and everything in between.",
    icon: FaTooth,
    points: ["Low waiting periods", "Nationwide network", "Kids covered from day one"],
  },
  {
    title: "Life & Supplemental",
    description:
      "Extra protection for the moments major medical doesn't reach — income, critical illness, and more.",
    icon: FaHandHoldingHeart,
    points: ["No medical exam options", "Fast approval", "Locked-in premiums"],
  },
];

export default function Services() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8fffb] py-24 sm:py-28">
      {/* Decorative Shape */}
      <div className="pointer-events-none absolute -left-28 bottom-10 h-80 w-80 rounded-full bg-primary-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 top-10 h-80 w-80 rounded-full bg-primary-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary-200 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-primary-700 shadow-sm">
            What We Offer
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-primary-950 sm:text-5xl">
            Services designed around your life
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
            Whatever stage of life you&apos;re in, we&apos;ll match you with
            coverage that actually makes sense.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map(({ title, description, icon: Icon, points }, index) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-[0_28px_70px_-45px_rgba(15,23,42,0.65)] sm:p-8"
            >
              {/* Top Number */}
              <span className="absolute right-7 top-6 font-serif text-5xl leading-none text-primary-500/10 transition duration-300 group-hover:text-primary-500/20">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-primary-100 bg-primary-50 transition duration-300 group-hover:scale-105 group-hover:border-primary-300 group-hover:bg-primary-500">
                <Icon className="h-7 w-7 text-primary-600 transition duration-300 group-hover:text-white" />
              </div>

              <h3 className="mt-7 text-2xl font-semibold tracking-tight text-primary-950">
                {title}
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-500">
                {description}
              </p>

              <ul className="mt-7 grid gap-3">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-zinc-100 px-4 py-3 text-sm font-medium text-zinc-600 transition duration-300 group-hover:border-primary-100"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50">
                      <FaCheck className="h-3 w-3 text-primary-600" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#quote"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary-200 px-5 py-3 text-sm font-bold text-primary-700 transition duration-300 hover:border-primary-500 hover:bg-primary-500 hover:text-white"
              >
                Explore coverage
                <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary-500 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}