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
    <section className="relative w-full overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-emerald-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-700">
          Why Choose Breeze
        </span>

        <h2 className="mx-auto mt-6 max-w-2xl text-2xl font-bold tracking-tight text-emerald-950 sm:text-3xl">
          Tailored health insurance plans that fit your life and budget.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {BENEFITS.map(({ title, description, icon: Icon }, i) => (
            <div
              key={title}
              className="group relative flex items-start gap-5 overflow-hidden rounded-2xl border border-emerald-100 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5"
            >
              <span className="absolute right-4 top-2 text-5xl font-black text-emerald-50 transition-colors duration-300 group-hover:text-emerald-100">
                0{i + 1}
              </span>

              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/20 transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-6 w-6 text-white" />
              </span>

              <div className="relative">
                <h3 className="text-lg font-semibold text-emerald-950">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-zinc-600">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
