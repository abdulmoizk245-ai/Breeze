const stressEffects = [
  {
    title: "Cortisol & Chronic Stress",
    text: "Long-term stress can increase cortisol levels, which may affect energy, mood, sleep, and overall wellbeing.",
    icon: "01",
  },
  {
    title: "Anxiety & Depression",
    text: "Stress can contribute to emotional pressure, anxious thoughts, low mood, and difficulty managing daily life.",
    icon: "02",
  },
  {
    title: "Immune System Impact",
    text: "Ongoing stress may weaken the immune system and make it harder for the body to recover and stay balanced.",
    icon: "03",
  },
  {
    title: "Heart & Digestive Health",
    text: "Long-term stress may increase the risk of high blood pressure, heart disease, stroke, and digestive problems.",
    icon: "04",
  },
  {
    title: "Memory, Focus & Sleep",
    text: "Stress may affect memory, concentration, rest, and the ability to stay focused throughout the day.",
    icon: "05",
  },
];

const symptomGroups = [
  {
    title: "Physical Symptoms",
    points: [
      "Headaches or muscle tension",
      "Fatigue or low energy",
      "Digestive discomfort",
      "Sleep disturbance",
    ],
  },
  {
    title: "Emotional Effects",
    points: [
      "Feeling overwhelmed",
      "Anxiety or sadness",
      "Irritability",
      "Low motivation",
    ],
  },
  {
    title: "Behavioral Changes",
    points: [
      "Changes in appetite",
      "Social withdrawal",
      "Difficulty relaxing",
      "Reduced productivity",
    ],
  },
  {
    title: "Mind & Focus",
    points: [
      "Poor concentration",
      "Forgetfulness",
      "Racing thoughts",
      "Trouble making decisions",
    ],
  },
];

const trustedSources = [
  {
    name: "American Psychological Association",
    short: "APA",
    url: "https://www.apa.org/topics/stress",
    text: "Explains how stress can affect nearly every system of the body, including mental, physical, and behavioral wellbeing.",
    topics: ["Cortisol", "Anxiety", "Immune Health", "Memory", "Sleep"],
  },
  {
    name: "National Institute of Mental Health",
    short: "NIMH",
    url: "https://www.nimh.nih.gov/",
    text: "Provides educational guidance on what stress is, common signs, coping strategies, and when to seek help.",
    topics: ["Stress Basics", "Signs", "Symptoms", "Coping", "Professional Help"],
  },
  {
    name: "American Heart Association",
    short: "AHA",
    url: "https://www.heart.org/",
    text: "Highlights the connection between stress, blood pressure, heart disease risk, stroke risk, exercise, and healthy coping.",
    topics: ["Blood Pressure", "Heart Risk", "Stroke Risk", "Exercise", "Stress Education"],
  },
  {
    name: "Centers for Disease Control & Prevention",
    short: "CDC",
    url: "https://www.cdc.gov/mentalhealth",
    text: "Shares practical mental health and emotional wellbeing resources focused on stress management and healthy lifestyle habits.",
    topics: ["Physical Activity", "Sleep", "Healthy Eating", "Social Connection", "Wellbeing"],
  },
  {
    name: "Mayo Clinic",
    short: "Mayo",
    url: "https://www.mayoclinic.org/",
    text: "Explains stress symptoms, causes, effects on the body and behavior, relaxation exercises, and lifestyle changes.",
    topics: ["Causes", "Body Symptoms", "Emotions", "Relaxation", "Lifestyle"],
  },
];

const copingCards = [
  {
    title: "Move Your Body",
    text: "Light exercise, walking, stretching, or daily movement may help reduce tension and improve mood.",
  },
  {
    title: "Prioritize Quality Sleep",
    text: "A consistent sleep routine supports recovery, focus, energy, and emotional balance.",
  },
  {
    title: "Eat for Stability",
    text: "Balanced meals and hydration can support energy levels and help your body manage daily stress.",
  },
  {
    title: "Stay Connected",
    text: "Talking with trusted people and staying socially connected can support emotional wellbeing.",
  },
  {
    title: "Practice Relaxation",
    text: "Breathing, mindfulness, quiet time, and relaxation exercises can help calm the nervous system.",
  },
  {
    title: "Seek Support When Needed",
    text: "If stress feels overwhelming or affects daily life, professional support can be an important next step.",
  },
];

export default function StressWellnessPage() {
  return (
    <main className="overflow-hidden bg-[#f8fffb] text-slate-900">
      {/* Hero — dark, editorial */}
      <section className="relative isolate overflow-hidden bg-slate-950 px-6 pb-24 pt-28 sm:pt-32 lg:px-16 lg:pb-32 lg:pt-48">
        <div className="pointer-events-none absolute left-[-10%] top-[-20%] h-[32rem] w-[32rem] rounded-full bg-primary-500/15 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[32rem] w-[32rem] rounded-full bg-secondary-500/10 blur-[130px]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:88px_88px]" />

        <div className="relative mx-auto ">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-300">
              Health Solutions Consultant
            </span>
          </div>

          <h1 className="mt-8 text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="font-sans font-semibold">Understand stress.</span>
            <br />
            <span className="font-serif italic text-primary-300">
              Protect your wellness.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
            Stress affects the mind, body, emotions, behavior, sleep, and
            long-term health. This guide brings together trusted wellness
            education from leading health organizations in a simple,
            easy-to-understand way.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <a
              href="#stress-effects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-400"
            >
              Explore Stress Effects
            </a>

            <a
              href="#trusted-sources"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              View Trusted Sources
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Intro Strip */}
      <section className="relative px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-9xl">
          <div className="-mt-20 grid gap-4 rounded-[1.75rem] border border-slate-100 bg-white p-5 shadow-xl shadow-primary-950/5 sm:grid-cols-3">
            <div className="rounded-2xl bg-primary-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-600">
                Learn
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                What stress does
              </h3>
            </div>

            <div className="rounded-2xl bg-primary-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-600">
                Notice
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                Signs and symptoms
              </h3>
            </div>

            <div className="rounded-2xl bg-primary-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-600">
                Improve
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                Healthier coping habits
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Stress Effects */}
      <section id="stress-effects" className="px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-9xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                How Stress Affects You
              </span>
            </div>

            <h2 className="mt-6 text-3xl leading-tight tracking-tight text-slate-900 sm:text-5xl">
              <span className="font-sans font-semibold">
                Stress can affect
              </span>{" "}
              <span className="font-serif italic">
                nearly every part of the body.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Trusted health organizations explain that stress is not only
              an emotional experience. It can also affect your body,
              behavior, sleep, focus, and long-term health.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {stressEffects.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl"
              >
                <span className="font-serif text-2xl text-primary-500/50">
                  {item.icon}
                </span>

                <h3 className="mt-5 text-base font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="relative px-6 py-20 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-tertiary-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-9xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-primary-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                  Signs &amp; Symptoms
                </span>
              </div>

              <h2 className="mt-6 text-3xl leading-tight tracking-tight text-slate-900 sm:text-5xl">
                <span className="font-sans font-semibold">
                  Stress shows up
                </span>{" "}
                <span className="font-serif italic">in different ways.</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Some signs are physical, some are emotional, and some appear
                in daily habits or behavior. Recognizing these signs early
                can help people take healthier next steps.
              </p>

              <div className="mt-8 rounded-[1.5rem] bg-slate-950 p-7 text-white">
                <h3 className="font-serif text-2xl text-white">
                  When should someone seek help?
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  If stress becomes overwhelming, affects daily life,
                  disrupts sleep, impacts relationships, or creates ongoing
                  emotional distress, professional support may be helpful.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {symptomGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {group.title}
                  </h3>

                  <div className="mt-5 space-y-3">
                    {group.points.map((point) => (
                      <div key={point} className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                        <p className="text-sm leading-6 text-slate-600">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Sources */}
      <section id="trusted-sources" className="px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-9xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-primary-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                Trusted Health References
              </span>
              <span className="h-px w-10 bg-primary-500" />
            </div>

            <h2 className="mt-6 text-3xl leading-tight tracking-tight text-slate-900 sm:text-5xl">
              <span className="font-sans font-semibold">
                Educational resources
              </span>{" "}
              <span className="font-serif italic">
                from leading health organizations.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              These organizations provide helpful information about stress,
              symptoms, body effects, emotional wellbeing, and healthy
              coping strategies.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {trustedSources.map((source, index) => (
              <a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-[1.75rem] border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  index === 0
                    ? "border-primary-200 bg-primary-50"
                    : "border-slate-100 bg-white"
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-primary-200">
                    {source.short}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {source.name}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {source.text}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {source.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="mt-6 text-sm font-semibold text-primary-700">
                  Visit Resource →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Coping Strategies */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-20 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute left-[-10%] top-0 h-[28rem] w-[28rem] rounded-full bg-primary-500/15 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[30rem] w-[30rem] rounded-full bg-secondary-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-9xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-primary-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-300">
                  Healthy Coping
                </span>
              </div>

              <h2 className="mt-6 text-3xl leading-tight tracking-tight text-white sm:text-4xl">
                <span className="font-sans font-semibold">
                  Small habits can support
                </span>{" "}
                <span className="font-serif italic text-primary-300">
                  better stress management.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-300">
                Healthy lifestyle habits such as movement, sleep, nutrition,
                social connection, and relaxation can support emotional and
                physical wellbeing.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {copingCards.map((card) => (
                <div
                  key={card.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="mb-5 h-px w-12 bg-primary-400 transition-all duration-300 group-hover:w-20" />

                  <h3 className="text-lg font-semibold text-white">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultant CTA */}
<section className="px-6 py-20 sm:py-24 lg:px-8">
  <div className="mx-auto max-w-7xl rounded-[1.5rem] bg-slate-950 px-6 py-14 sm:px-12">
    <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
      {/* Left Content */}
      <div className="text-left">
        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary-300">
          Health Solutions Consultant
        </span>

        <h2 className="mt-7 max-w-3xl text-3xl leading-tight text-white sm:text-5xl">
          <span className="font-sans font-semibold">Ready to take a</span>{" "}
          <span className="font-serif italic text-primary-300">
            healthier step forward?
          </span>
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
          Learn how stress may be affecting your lifestyle and discover simple
          wellness steps that support balance, clarity, and better daily habits.
        </p>
      </div>

      {/* Right Buttons */}
      <div className="flex flex-wrap items-center justify-start gap-4 lg:justify-end">
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-primary-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition hover:-translate-y-0.5 hover:bg-primary-400"
        >
          Speak With a Consultant
        </a>

        <a
          href="/Service"
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
        >
          View Wellness Services
        </a>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}
