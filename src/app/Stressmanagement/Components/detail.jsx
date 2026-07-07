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
    <main className="overflow-hidden bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-28 lg:px-8">
        <div className="absolute left-[-10%] top-[-20%] h-[35rem] w-[35rem] rounded-full bg-primary-500/20 blur-[130px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[35rem] w-[35rem] rounded-full bg-primary-400/20 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:90px_90px] opacity-20" />

        <div className="relative mx-auto grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-300/20 bg-primary-300/10 px-5 py-2 text-sm font-bold text-primary-200">
              <span className="h-2 w-2 rounded-full bg-primary-300 shadow-[0_0_20px_rgba(194,220,142,0.9)]" />
              Health Solutions Consultant
            </span>

            <h1 className="mt-7 text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Understand Stress.
              <span className="mt-2 block bg-gradient-to-r from-primary-300 via-primary-200 to-primary-200 bg-clip-text text-transparent">
                Protect Your Wellness.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Stress affects the mind, body, emotions, behavior, sleep, and
              long-term health. This guide brings together trusted wellness
              education from leading health organizations in a simple,
              easy-to-understand way.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#stress-effects"
                className="rounded-full bg-primary-300 px-8 py-4 text-sm font-black text-slate-950 shadow-xl shadow-primary-500/25 transition hover:scale-105 hover:bg-primary-200"
              >
                Explore Stress Effects
              </a>

              <a
                href="#trusted-sources"
                className="rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                View Trusted Sources
              </a>
            </div>
          </div>

          {/* Hero Visual Card */}
          {/* <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-primary-400/20 to-primary-400/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.08] p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="rounded-[2rem] bg-gradient-to-br from-primary-300 via-primary-200 to-primary-200 p-1">
                <div className="rounded-[1.8rem] bg-slate-950 p-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary-200">
                        Stress Check
                      </p>
                      <h2 className="mt-3 text-3xl font-black text-white">
                        Body + Mind Balance
                      </h2>
                    </div>

                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-primary-300 text-2xl font-black text-slate-950">
                      +
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    {[
                      "Sleep Quality",
                      "Emotional Wellbeing",
                      "Heart Health",
                      "Focus & Memory",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/[0.07] p-4"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-slate-200">
                            {item}
                          </span>
                          <span className="text-xs font-black text-primary-200">
                            0{index + 1}
                          </span>
                        </div>

                        <div className="mt-3 h-2 rounded-full bg-white/10">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-primary-300 to-primary-300"
                            style={{ width: `${55 + index * 10}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-5 text-center text-sm leading-7 text-slate-300">
                A clear guide to recognizing stress, understanding its effects,
                and building healthier coping habits.
              </p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Intro Strip */}
      <section className="relative px-6 py-10 lg:px-8">
        <div className="mx-auto ">
          <div className="-mt-20 grid gap-4 rounded-[2rem] border border-slate-100 bg-white p-5 shadow-2xl shadow-primary-950/10 sm:grid-cols-3">
            <div className="rounded-[1.5rem] bg-primary-50 p-6">
              <p className="text-sm font-black uppercase tracking-widest text-primary-700">
                Learn
              </p>
              <h3 className="mt-2 text-xl font-black text-slate-950">
                What stress does
              </h3>
            </div>

            <div className="rounded-[1.5rem] bg-primary-50 p-6">
              <p className="text-sm font-black uppercase tracking-widest text-primary-700">
                Notice
              </p>
              <h3 className="mt-2 text-xl font-black text-slate-950">
                Signs and symptoms
              </h3>
            </div>

            <div className="rounded-[1.5rem] bg-primary-50 p-6">
              <p className="text-sm font-black uppercase tracking-widest text-primary-700">
                Improve
              </p>
              <h3 className="mt-2 text-xl font-black text-slate-950">
                Healthier coping habits
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Stress Effects */}
      <section id="stress-effects" className="px-6 py-20 lg:px-8">
        <div className="mx-auto ">
          <div className="max-w-3xl">
            <span className="text-sm font-black uppercase tracking-[0.25em] text-primary-600">
              How Stress Affects You
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Stress can affect nearly every part of the body.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Trusted health organizations explain that stress is not only an
              emotional experience. It can also affect your body, behavior,
              sleep, focus, and long-term health.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {stressEffects.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-2 hover:border-primary-200 hover:shadow-2xl hover:shadow-primary-950/10"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary-100 transition duration-500 group-hover:scale-150" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-primary-200">
                  {item.icon}
                </div>

                <h3 className="relative mt-6 text-lg font-black text-slate-950">
                  {item.title}
                </h3>

                <p className="relative mt-4 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="relative  px-6 py-24 lg:px-8">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-primary-200/50 blur-3xl" />

        <div className="relative mx-auto ">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.25em] text-primary-600">
                Signs & Symptoms
              </span>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Stress shows up in different ways.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Some signs are physical, some are emotional, and some appear in
                daily habits or behavior. Recognizing these signs early can help
                people take healthier next steps.
              </p>

              <div className="mt-8 rounded-[2rem] bg-slate-950 p-7 text-white">
                <h3 className="text-2xl font-black">
                  When should someone seek help?
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  If stress becomes overwhelming, affects daily life, disrupts
                  sleep, impacts relationships, or creates ongoing emotional
                  distress, professional support may be helpful.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {symptomGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/70"
                >
                  <h3 className="text-xl font-black text-slate-950">
                    {group.title}
                  </h3>

                  <div className="mt-5 space-y-3">
                    {group.points.map((point) => (
                      <div key={point} className="flex gap-3">
                        <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-primary-500" />
                        <p className="text-sm font-medium leading-6 text-slate-600">
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
      <section id="trusted-sources" className="px-6 py-24 lg:px-8">
        <div className="mx-auto ">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.25em] text-primary-600">
              Trusted Health References
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Educational resources from leading health organizations.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              These organizations provide helpful information about stress,
              symptoms, body effects, emotional wellbeing, and healthy coping
              strategies.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {trustedSources.map((source, index) => (
              <a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-[2.2rem] border p-7 shadow-xl transition duration-300 hover:-translate-y-2 ${
                  index === 0
                    ? "border-primary-200 bg-primary-50"
                    : "border-slate-100 bg-white"
                }`}
              >
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary-200/50 blur-2xl transition duration-500 group-hover:scale-125" />

                <div className="relative flex items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-slate-950 text-sm font-black text-primary-200">
                    {source.short}
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-950">
                      {source.name}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {source.text}
                    </p>
                  </div>
                </div>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {source.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="relative mt-6 text-sm font-black text-primary-700">
                  Visit Resource →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Coping Strategies */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-24 lg:px-8">
        <div className="absolute left-[-10%] top-0 h-[28rem] w-[28rem] rounded-full bg-primary-500/20 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-20%] h-[30rem] w-[30rem] rounded-full bg-primary-400/20 blur-[120px]" />

        <div className="relative mx-auto ">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-primary-200">
                Healthy Coping
              </span>

              <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Small habits can support better stress management.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-300">
                Healthy lifestyle habits such as movement, sleep, nutrition,
                social connection, and relaxation can support emotional and
                physical wellbeing.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {copingCards.map((card) => (
                <div
                  key={card.title}
                  className="group rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/[0.12]"
                >
                  <div className="mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-primary-300 to-primary-300 transition duration-300 group-hover:w-28" />

                  <h3 className="text-xl font-black text-white">
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
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto ">
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-primary-500 via-primary-500 to-primary-300 p-1 shadow-2xl shadow-primary-950/20">
            <div className="rounded-[2.8rem] bg-slate-950 px-8 py-14 text-center sm:px-12">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-primary-100">
                Health Solutions Consultant
              </span>

              <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl">
                Ready to take a healthier step forward?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
                Learn how stress may be affecting your lifestyle and discover
                simple wellness steps that support balance, clarity, and better
                daily habits.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-primary-300 px-8 py-4 text-sm font-black text-slate-950 shadow-xl shadow-primary-500/25 transition hover:scale-105 hover:bg-primary-200"
                >
                  Speak With a Consultant
                </a>

                <a
                  href="/Service"
                  className="rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/15"
                >
                  View Wellness Services
                </a>
              </div>

              <p className="mx-auto mt-8 max-w-3xl text-xs leading-6 text-slate-400">
                This page is for educational wellness information only and does
                not replace medical advice, diagnosis, or treatment. Always
                consult a qualified healthcare professional for personal medical
                concerns.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}