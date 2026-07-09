import { FaQuoteLeft, FaStar } from "react-icons/fa6";

const TESTIMONIALS = [
  {
    name: "Maria Gonzalez",
    plan: "Family Health Plan",
    location: "Austin, TX",
    initials: "MG",
    quote:
      "I switched to Breezy after my old provider hiked my premium for no reason. Within a week I had better coverage for less money, and an actual human called to walk me through it.",
    rating: 5,
    featured: true,
  },
  {
    name: "David Okafor",
    plan: "Medicare Supplement",
    location: "Columbus, OH",
    initials: "DO",
    quote:
      "Medicare paperwork used to give me a headache. My agent sat with me for an hour, no rush, until every question was answered.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    plan: "Dental & Vision",
    location: "Seattle, WA",
    initials: "PS",
    quote:
      "Filed a claim Friday night expecting weeks of waiting. Approved by Monday morning. Didn't think insurance could feel this easy.",
    rating: 5,
  },
  {
    name: "James Whitfield",
    plan: "Individual Health",
    location: "Denver, CO",
    initials: "JW",
    quote:
      "Nationwide access meant I kept my own doctor after moving states. One less thing to worry about during a stressful move.",
    rating: 5,
  },
  {
    name: "Angela Torres",
    plan: "Life Insurance",
    location: "Miami, FL",
    initials: "AT",
    quote:
      "No sales pressure, no jargon — just someone who explained what I was buying. My family is covered and I finally understand our policy.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8fffb] py-24">
      {/* Decorative soft blobs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-tertiary-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-700">
            Real Voices, Real Relief
          </span>

          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight text-primary-950 sm:text-4xl">
            Loved by thousands.{" "}
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              Trusted for life.
            </span>
          </h2>
          {/* working */}
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-500">
            We don&apos;t just sell policies — we build peace of mind. Here&apos;s
            what our members have to say.
          </p>

          {/* Stat strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <div>
              <span className="text-2xl font-bold text-primary-950">4.9/5</span>
              <span className="ml-2 text-sm text-zinc-500">average rating</span>
            </div>
            <div className="hidden h-6 w-px bg-primary-100 sm:block" />
            <div>
              <span className="text-2xl font-bold text-primary-950">12,000+</span>
              <span className="ml-2 text-sm text-zinc-500">members covered</span>
            </div>
            <div className="hidden h-6 w-px bg-primary-100 sm:block" />
            <div>
              <span className="text-2xl font-bold text-primary-950">98%</span>
              <span className="ml-2 text-sm text-zinc-500">claims approved fast</span>
            </div>
          </div>
        </div>

        {/* Bento grid of testimonials */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) =>
            t.featured ? (
              <div
                key={t.name}
                className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 p-8 shadow-lg shadow-primary-900/10 transition-transform duration-300 hover:-translate-y-1 lg:col-span-2"
              >
                <div>
                  <FaQuoteLeft className="h-8 w-8 text-primary-300/60" />
                  <p className="mt-6 text-xl font-medium leading-relaxed text-white sm:text-2xl">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-bold text-white ring-2 ring-white/30">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-primary-100/80">
                      {t.plan} · {t.location}
                    </p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FaStar key={i} className="h-4 w-4 text-primary-300" />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={t.name}
                className="flex flex-col justify-between rounded-3xl border border-primary-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-900/5"
              >
                <div>
                  <FaQuoteLeft className="h-6 w-6 text-primary-200" />
                  <p className="mt-4 text-base leading-relaxed text-zinc-600">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-950">
                      {t.name}
                    </p>
                    <p className="text-xs text-zinc-500">
                      {t.plan} · {t.location}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} className="h-3.5 w-3.5 text-primary-500" />
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
