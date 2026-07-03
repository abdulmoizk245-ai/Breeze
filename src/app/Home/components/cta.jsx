import { FaArrowRight, FaPhone } from "react-icons/fa6";

export default function Cta() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 px-8 py-16 text-center shadow-2xl shadow-emerald-900/20 sm:px-16">
        {/* Decorative dot grid + glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="max-w-2xl text-3xl lg:text-[39px] font-bold tracking-tight text-white sm:text-4xl">
              Peace of mind is a few minutes away
            </h2>
            <p className="mt-4 max-w-xl text-lg lg:text-[17px] text-emerald-50/90">
              Get a free, no-obligation quote today and see why 12,000+
              members trust Breeze with their coverage.
            </p>
          </div>

          <div className="flex flex-shrink-0 flex-wrap items-center justify-center gap-4">
            <a
              href="#quote"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-emerald-700 shadow-lg transition-all hover:scale-105 hover:bg-emerald-50"
            >
              Get My Free Quote
              <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="tel:+18005551234"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              <FaPhone className="h-3.5 w-3.5" />
              +1 (800) 555-1234
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
