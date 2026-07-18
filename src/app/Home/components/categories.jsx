import Link from "next/link";
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
              <div
                key={label}
                className={`group relative flex overflow-hidden rounded-[2rem] border border-slate-200 bg-white text-slate-950 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:border-primary-400 hover:shadow-2xl hover:shadow-primary-200/60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-300 ${
                  isFeatured
                    ? "p-8 sm:col-span-2 sm:row-span-2"
                    : isAgent
                      ? "p-7 sm:col-span-2 lg:col-span-3"
                      : "p-7"
                }`}
              >
                {/* Dark Gradient Hover Background */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-slate-950 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />

                {/* Top Decorative Circle */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary-50 transition-all duration-700 group-hover:scale-125 group-hover:bg-white/15 group-focus-visible:scale-125 group-focus-visible:bg-white/15" />

                {/* Bottom Glow */}
                <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-primary-100/50 blur-2xl transition-all duration-700 group-hover:scale-125 group-hover:bg-emerald-300/20 group-focus-visible:scale-125 group-focus-visible:bg-emerald-300/20" />

                {/* Card Number */}
                <span className="pointer-events-none absolute right-6 top-5 font-serif text-7xl italic leading-none text-slate-100 transition-colors duration-500 group-hover:text-white/15 group-focus-visible:text-white/15">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 flex h-full w-full flex-col justify-between">
                  {/* Top Icons */}
                  <div className="flex items-start justify-between gap-5">
                    <span
                      className={`flex shrink-0 items-center justify-center rounded-3xl bg-primary-50 text-primary-600 ring-1 ring-primary-100 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-white/15 group-hover:text-white group-hover:ring-white/25 group-focus-visible:bg-white/15 group-focus-visible:text-white ${
                        isFeatured ? "h-20 w-20" : "h-14 w-14"
                      }`}
                    >
                      <Icon className={isFeatured ? "h-9 w-9" : "h-6 w-6"} />
                    </span>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-primary-600 transition-all duration-500 group-hover:translate-x-1 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white group-focus-visible:border-white/20 group-focus-visible:bg-white/10 group-focus-visible:text-white">
                      <FaChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </div>

                  {/* Content */}
                  <div className={isAgent ? "max-w-2xl" : ""}>
                    {isFeatured && (
                      <span className="mb-4 inline-flex rounded-full bg-primary-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-primary-700 ring-1 ring-primary-100 transition-all duration-500 group-hover:bg-white/15 group-hover:text-white group-hover:ring-white/20 group-focus-visible:bg-white/15 group-focus-visible:text-white">
                        Most Requested
                      </span>
                    )}

                    <h3
                      className={`font-semibold text-slate-950 transition-colors duration-500 group-hover:text-white group-focus-visible:text-white ${
                        isFeatured
                          ? "max-w-sm text-4xl leading-tight"
                          : "text-xl"
                      }`}
                    >
                      {label}
                    </h3>

                    <p
                      className={`mt-3 leading-7 text-slate-600 transition-colors duration-500 group-hover:text-white/80 group-focus-visible:text-white/80 ${
                        isFeatured ? "max-w-md text-base" : "text-sm"
                      }`}
                    >
                      {text}
                    </p>

                    {/* Explore */}
                    {/* <div className="mt-7 flex items-center gap-3">
                      <span className="h-px flex-1 bg-slate-200 transition-colors duration-500 group-hover:bg-white/30 group-focus-visible:bg-white/30" />

                      <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary-600 transition-colors duration-500 group-hover:text-white group-focus-visible:text-white">
                        Explore
                      </span>
                    </div> */}
                    {/* Explore */}
                    <div className="mt-7 flex items-center gap-3">
                      <span className="h-px flex-1 bg-slate-200 transition-colors duration-500 group-hover:bg-white/30" />

                      <Link
                        href="/About"
                        className="relative z-20 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-primary-600 transition-all duration-500 hover:gap-3 group-hover:text-white"
                      >
                        Explore
                        <FaChevronRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
