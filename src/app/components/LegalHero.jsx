export default function LegalHero({ eyebrow, title, updated }) {
  return (
    <section className="relative isolate flex min-h-[46vh] w-full items-end overflow-hidden bg-slate-950 pb-14 pt-32 sm:min-h-[50vh]">
      <div className="pointer-events-none absolute right-[-10%] top-[-15%] h-96 w-96 rounded-full bg-primary-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[10%] h-80 w-80 rounded-full bg-secondary-500/15 blur-3xl" />

      <div className="relative z-10 w-full px-6 lg:px-16">
        <div className="max-w-2xl text-white">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-300">
              {eyebrow}
            </span>
          </div>

          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            {title}
          </h1>

          {updated && (
            <p className="mt-4 text-sm text-white/60">Last updated: {updated}</p>
          )}
        </div>
      </div>
    </section>
  );
}
