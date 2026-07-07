import Link from "next/link";

export default function ServiceCTA() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary-600 via-primary-600 to-slate-950 px-8 py-16 text-center shadow-2xl sm:px-12">
          <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-primary-300/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur-md">
              Ready to Begin?
            </span>

            <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Take the First Step Toward a Healthier You
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-primary-50">
              Start with a simple conversation. We will help you understand
              what your body and lifestyle need, then guide you toward better
              daily choices.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-4 text-sm font-black text-primary-700 shadow-xl transition hover:-translate-y-1 hover:bg-primary-50"
              >
                Get Started Today
              </Link>

              <Link
                href="/About"
                className="rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-black text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20"
              >
                Meet Your Advisor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}