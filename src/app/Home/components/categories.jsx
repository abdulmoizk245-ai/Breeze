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
  { label: "Health", icon: FaHeartPulse, href: "#health" },
  { label: "Medicare", icon: FaUserDoctor, href: "#medicare" },
  { label: "Dental", icon: FaTooth, href: "#dental" },
  { label: "Vision", icon: FaEye, href: "#vision" },
  { label: "Supplemental", icon: FaShieldHeart, href: "#supplemental" },
  { label: "Life", icon: FaHandHoldingHeart, href: "#life" },
  { label: "Insurance Agent", icon: FaUserTie, href: "#agent" },
];

export default function Categories() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-emerald-500 to-emerald-800 py-10">
      {/* Decorative dot grid + glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-50 backdrop-blur-sm">
          Coverage For Every Chapter
        </span>

        <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          More than just health insurance
        </h2>
        <p className="mt-4 text-lg text-emerald-50/90">
          We&apos;re here to help you find the plans that fit your needs and
          budget
        </p>

    <div className="mt-12 flex flex-nowrap justify-center gap-4 overflow-x-auto pt-3 pb-2">
  {CATEGORIES.map(({ label, icon: Icon, href }) => (
    <a
      key={label}
      href={href}
      className="group flex w-32 shrink-0 flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-emerald-950/30 sm:w-36 sm:p-6"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 transition-colors duration-300 group-hover:bg-emerald-500">
        <Icon className="h-6 w-6 text-emerald-500 transition-colors duration-300 group-hover:text-white" />
      </span>

      <span className="flex items-center justify-center gap-1 whitespace-nowrap text-xs font-semibold text-zinc-900 sm:text-sm">
        {label}
        <FaChevronRight className="h-3 w-3 shrink-0 text-emerald-500 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </a>
  ))}
</div>
      </div>
    </section>
  );
}
