// import {
//   FaHeartPulse,
//   FaUserDoctor,
//   FaTooth,
//   FaEye,
//   FaShieldHeart,
//   FaHandHoldingHeart,
//   FaUserTie,
//   FaChevronRight,
// } from "react-icons/fa6";

// const CATEGORIES = [
//   { label: "Health", icon: FaHeartPulse, href: "#health" },
//   { label: "Medicare", icon: FaUserDoctor, href: "#medicare" },
//   { label: "Dental", icon: FaTooth, href: "#dental" },
//   { label: "Vision", icon: FaEye, href: "#vision" },
//   { label: "Supplemental", icon: FaShieldHeart, href: "#supplemental" },
//   { label: "Life", icon: FaHandHoldingHeart, href: "#life" },
//   { label: "Insurance Agent", icon: FaUserTie, href: "#agent" },
// ];

// export default function Categories() {
//   return (
//     <section className="relative w-full overflow-hidden bg-gradient-to-br from-primary-500 to-primary-800 py-10">
//       {/* Decorative dot grid + glow */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.15]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle, white 1px, transparent 1px)",
//           backgroundSize: "24px 24px",
//         }}
//       />
//       <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-6 text-center">
//         <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-50 backdrop-blur-sm">
//           Coverage For Every Chapter
//         </span>

//         <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
//           More than just health insurance
//         </h2>
//         <p className="mt-4 text-lg text-primary-50/90">
//           We&apos;re here to help you find the plans that fit your needs and
//           budget
//         </p>

//         <div className="mt-12 flex flex-nowrap justify-center gap-4 overflow-x-auto pt-3 pb-2">
//           {CATEGORIES.map(({ label, icon: Icon, href }) => (
//             <a
//               key={label}
//               href={href}
//               className="group flex w-32 shrink-0 flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary-950/30 sm:w-36 sm:p-6"
//             >
//               <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 transition-colors duration-300 group-hover:bg-primary-500">
//                 <Icon className="h-6 w-6 text-primary-500 transition-colors duration-300 group-hover:text-white" />
//               </span>

//               <span className="flex items-center justify-center gap-1 whitespace-nowrap text-xs font-semibold text-zinc-900 sm:text-sm">
//                 {label}
//                 <FaChevronRight className="h-3 w-3 shrink-0 text-primary-500 transition-transform duration-300 group-hover:translate-x-1" />
//               </span>
//             </a>
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
  FaEye,
  FaShieldHeart,
  FaHandHoldingHeart,
  FaUserTie,
  FaChevronRight,
} from "react-icons/fa6";

const CATEGORIES = [
  {
    label: "Health",
    icon: FaHeartPulse,
    href: "#health",
    text: "Flexible medical coverage for everyday care, doctor visits, and real-life health needs.",
  },
  {
    label: "Medicare",
    icon: FaUserDoctor,
    href: "#medicare",
    text: "Clear guidance for choosing the Medicare option that fits your lifestyle.",
  },
  {
    label: "Dental",
    icon: FaTooth,
    href: "#dental",
    text: "Plans for cleanings, exams, fillings, and ongoing dental support.",
  },
  {
    label: "Vision",
    icon: FaEye,
    href: "#vision",
    text: "Coverage for eye exams, lenses, frames, and vision care.",
  },
  {
    label: "Supplemental",
    icon: FaShieldHeart,
    href: "#supplemental",
    text: "Extra protection when accidents, illness, or unexpected costs happen.",
  },
  {
    label: "Life",
    icon: FaHandHoldingHeart,
    href: "#life",
    text: "Protection designed to support the people who matter most.",
  },
  {
    label: "Insurance Agent",
    icon: FaUserTie,
    href: "#agent",
    text: "Get personal help from a trusted licensed advisor who explains everything clearly.",
  },
];

export default function Categories() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8fffb] py-24">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-emerald-100/70 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.08)_1px,transparent_0)] [background-size:28px_28px] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-3 rounded-full border border-primary-100 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-primary-700 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-500" />
            </span>
            Coverage For Every Chapter
          </span>

          <h2 className="mt-6 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
            Simple coverage,{" "}
            <span className="font-serif italic text-primary-600">
              personal guidance,
            </span>{" "}
            better peace of mind.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Explore health, dental, vision, supplemental, and life insurance
            options designed around your needs, budget, and future.
          </p>
        </div>

        <div className="mt-16 grid auto-rows-[250px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map(({ label, icon: Icon, href, text }, index) => {
            const isFeatured = index === 0;
            const isAgent = index === 6;

            return (
              <a
                key={label}
                href={href}
                className={`group relative flex overflow-hidden rounded-[2rem] border transition-all duration-500 hover:-translate-y-2 ${
                  isFeatured
                    ? "sm:col-span-2 sm:row-span-2 border-primary-400 bg-gradient-to-br from-primary-600 via-primary-700 to-slate-950 p-8 text-white shadow-2xl shadow-primary-200/60"
                    : isAgent
                    ? "sm:col-span-2 lg:col-span-3 border-primary-100 bg-white p-7 shadow-sm hover:border-primary-300 hover:shadow-2xl hover:shadow-primary-100/80"
                    : "border-slate-200 bg-white p-7 shadow-sm hover:border-primary-300 hover:shadow-2xl hover:shadow-primary-100/80"
                }`}
              >
                <div
                  className={`absolute -right-16 -top-16 h-44 w-44 rounded-full transition-all duration-500 group-hover:scale-125 ${
                    isFeatured ? "bg-white/15" : "bg-primary-50"
                  }`}
                />

                <div
                  className={`absolute -bottom-20 -left-20 h-48 w-48 rounded-full blur-2xl transition-all duration-500 group-hover:scale-125 ${
                    isFeatured ? "bg-emerald-300/20" : "bg-primary-100/50"
                  }`}
                />

                <span
                  className={`absolute right-6 top-5 font-serif text-7xl italic leading-none transition duration-500 ${
                    isFeatured
                      ? "text-white/10 group-hover:text-white/20"
                      : "text-slate-100 group-hover:text-primary-100"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 flex h-full w-full flex-col justify-between">
                  <div className="flex items-start justify-between gap-5">
                    <span
                      className={`flex shrink-0 items-center justify-center rounded-3xl ring-1 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 ${
                        isFeatured
                          ? "h-20 w-20 bg-white/15 text-white ring-white/25"
                          : "h-14 w-14 bg-primary-50 text-primary-600 ring-primary-100 group-hover:bg-primary-500 group-hover:text-white"
                      }`}
                    >
                      <Icon className={isFeatured ? "h-9 w-9" : "h-6 w-6"} />
                    </span>

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:translate-x-1 ${
                        isFeatured
                          ? "border-white/20 bg-white/10 text-white"
                          : "border-slate-200 bg-white text-primary-600 group-hover:border-primary-500 group-hover:bg-primary-500 group-hover:text-white"
                      }`}
                    >
                      <FaChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </div>

                  <div className={isAgent ? "max-w-2xl" : ""}>
                    {isFeatured && (
                      <span className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-white/90 ring-1 ring-white/20">
                        Most Requested
                      </span>
                    )}

                    <h3
                      className={`font-semibold ${
                        isFeatured
                          ? "max-w-sm text-4xl leading-tight text-white"
                          : "text-xl text-slate-950"
                      }`}
                    >
                      {label}
                    </h3>

                    <p
                      className={`mt-3 leading-7 ${
                        isFeatured
                          ? "max-w-md text-base text-white/80"
                          : "text-sm text-slate-600"
                      }`}
                    >
                      {text}
                    </p>

                    <div className="mt-7 flex items-center gap-3">
                      <span
                        className={`h-px flex-1 transition ${
                          isFeatured
                            ? "bg-white/20 group-hover:bg-white/40"
                            : "bg-slate-200 group-hover:bg-primary-200"
                        }`}
                      />
                      <span
                        className={`text-xs font-bold uppercase tracking-[0.22em] ${
                          isFeatured ? "text-white" : "text-primary-600"
                        }`}
                      >
                        Explore
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}