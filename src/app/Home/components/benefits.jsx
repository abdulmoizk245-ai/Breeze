// import { FaSackDollar, FaHeadset, FaRoute, FaHospital } from "react-icons/fa6";

// const BENEFITS = [
//   {
//     title: "Affordable Rates",
//     description: "Quality protection without breaking the bank.",
//     icon: FaSackDollar,
//   },
//   {
//     title: "Personal Guidance",
//     description:
//       "I will personally walk you through every step, answer your questions, and make sure you understand your benefits.",
//     icon: FaHeadset,
//   },
//   {
//     title: "Flexible Options",
//     description: "Choose coverage that travels with you in the U.S.",
//     icon: FaRoute,
//   },
//   {
//     title: "Nationwide Provider Access",
//     description:
//       "Over a million providers, hospitals, and facilities to choose from.",
//     icon: FaHospital,
//   },
// ];

// export default function Benefits() {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#f8fffb] py-24">
//       <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-primary-50 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-6 text-center">
//         <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-700">
//           Why Choose Breezy
//         </span>

//         <h2 className="mx-auto mt-6 max-w-2xl text-2xl font-bold tracking-tight text-primary-950 sm:text-3xl">
//           Tailored health insurance plans that fit your life and budget.
//         </h2>

//         <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
//           {BENEFITS.map(({ title, description, icon: Icon }, i) => (
//             <div
//               key={title}
//               className="group relative flex items-start gap-5 overflow-hidden rounded-2xl border border-primary-100 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-2xl hover:shadow-black/30"
//             >
//               <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-shine" />

//               <span className="absolute right-4 top-2 text-5xl font-black text-primary-50 transition-colors duration-300 group-hover:text-primary-100">
//                 0{i + 1}
//               </span>

//               <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 shadow-lg shadow-primary-500/20 transition-transform duration-300 group-hover:scale-110">
//                 <Icon className="h-6 w-6 text-white" />
//               </span>

//               <div className="relative">
//                 <h3 className="text-lg font-semibold text-primary-950">
//                   {title}
//                 </h3>
//                 <p className="mt-1 text-sm leading-6 text-zinc-600">
//                   {description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { FaSackDollar, FaHeadset, FaRoute, FaHospital } from "react-icons/fa6";

const BENEFITS = [
  {
    title: "Affordable Rates",
    description: "Quality protection without breaking the bank.",
    icon: FaSackDollar,
  },
  {
    title: "Personal Guidance",
    description:
      "I will personally walk you through every step, answer your questions, and make sure you understand your benefits.",
    icon: FaHeadset,
  },
  {
    title: "Flexible Options",
    description: "Choose coverage that travels with you in the U.S.",
    icon: FaRoute,
  },
  {
    title: "Nationwide Provider Access",
    description:
      "Over a million providers, hospitals, and facilities to choose from.",
    icon: FaHospital,
  },
];

export default function Benefits() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8fffb] py-24 sm:py-28">
      <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-primary-50 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-primary-100/50 blur-3xl" />

      <div className="relative mx-auto  px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary-200 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-primary-700 shadow-sm">
            Why Choose Breezy
          </span>

          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl lg:text-5xl">
            Tailored health insurance plans that fit your life and budget.
          </h2>
        </div>

        {/* Benefit Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {BENEFITS.map(({ title, description, icon: Icon }, i) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-[2rem] border border-primary-100 bg-white p-7 text-left shadow-[0_20px_60px_-45px_rgba(15,23,42,0.6)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-[0_28px_70px_-45px_rgba(15,23,42,0.75)] sm:p-8"
            >
              {/* Dark Gradient Hover Background */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-slate-950 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Large Number */}
              <span className="absolute right-6 top-5 font-serif text-6xl leading-none text-primary-500/10 transition duration-300 group-hover:text-white/15">
                0{i + 1}
              </span>

              <div className="relative flex items-start gap-5">
                {/* Icon Box */}
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-primary-100 bg-primary-50 transition duration-300 group-hover:scale-105 group-hover:border-white/25 group-hover:bg-white/15">
                  <Icon className="h-7 w-7 text-primary-600 transition duration-300 group-hover:text-white" />
                </span>

                <div className="pt-1">
                  <h3 className="text-xl font-semibold tracking-tight text-primary-950 transition-colors duration-500 group-hover:text-white">
                    {title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-600 transition-colors duration-500 group-hover:text-white/80">
                    {description}
                  </p>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary-500 transition-all duration-500 group-hover:w-full group-hover:bg-white/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 