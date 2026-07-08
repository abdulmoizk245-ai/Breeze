import { FaExclamationCircle, FaCheckCircle } from "react-icons/fa";

const stressEffects = [
  "High blood pressure",
  "Increased heart disease risk",
  "Digestive issues",
  "Headaches",
  "Muscle tension",
  "Difficulty sleeping",
  "Anxiety and depression",
  "Weakened immune function",
];

const instantStrategies = [
  {
    number: "01",
    title: "Practice Deep Breathing",
    text: "Slow, controlled breathing can help activate your body's relaxation response and reduce feelings of anxiety.",
    points: [
      "Inhale through your nose for four seconds",
      "Hold your breath for four seconds",
      "Exhale slowly through your mouth for six seconds",
      "Repeat several times",
    ],
  },
  {
    number: "02",
    title: "Laugh More",
    text: "Laughter can help reduce stress hormones, improve your mood, and create a lighter mental state.",
    points: [
      "Watch something funny",
      "Spend time with positive people",
      "Enjoy a comedy show",
      "Create moments that make you smile",
    ],
  },
  {
    number: "03",
    title: "Try Aromatherapy",
    text: "Calming scents may help create a peaceful environment and support relaxation at home.",
    points: ["Lavender", "Chamomile", "Peppermint", "Eucalyptus"],
  },
];

const shortTermStrategies = [
  {
    title: "Take a Walk",
    text: "A 10- to 20-minute walk can improve your mood, increase circulation, reduce muscle tension, and help clear your mind.",
  },
  {
    title: "Write in a Journal",
    text: "Journaling can help organize your thoughts, reduce mental clutter, and give you a healthier perspective.",
  },
  {
    title: "Practice Meditation",
    text: "Even five to ten minutes of quiet reflection, mindfulness, prayer, or inspirational reading can help calm the mind.",
  },
];

const journalIdeas = [
  "What you're grateful for",
  "Challenges you're facing",
  "Possible solutions",
  "Personal goals",
  "Positive experiences from your day",
];

const longTermStrategies = [
  {
    title: "Make Time for Yourself",
    text: "Taking time to recharge is not selfish. It helps you care for yourself and better support the people around you.",
    activities: [
      "Reading",
      "Gardening",
      "Crafting",
      "Traveling",
      "Family time",
      "Volunteering",
      "Favorite hobbies",
    ],
  },
  {
    title: "Exercise Regularly",
    text: "Physical activity releases endorphins, your body's natural feel-good chemicals, which can improve mood and reduce anxiety.",
    activities: [
      "Walking",
      "Cycling",
      "Swimming",
      "Dancing",
      "Strength training",
      "Yoga",
    ],
  },
  {
    title: "Eat a Balanced Diet",
    text: "Nourishing foods support your brain and body, helping you manage stress more effectively and maintain steady energy.",
    activities: [
      "Fruits",
      "Vegetables",
      "Lean proteins",
      "Whole grains",
      "Healthy fats",
      "Hydration",
    ],
  },
];

const sleepBenefits = [
  "Mental clarity",
  "Emotional balance",
  "Immune health",
  "Heart health",
  "Better decision-making",
];

const insuranceBenefits = [
  "Preventive care",
  "Annual wellness visits",
  "Primary care physicians",
  "Mental health services",
  "Prescription medications",
  "Specialist care",
  "Emergency medical treatment",
];

const dailyActions = [
  "Practice deep breathing",
  "Stay active",
  "Prioritize quality sleep",
  "Eat nourishing foods",
  "Spend time doing what you enjoy",
  "Ask for support when you need it",
];

const coverageOptions = [
  "Private PPO Health Plans",
  "Family Coverage",
  "Dental Insurance",
  "Vision Insurance",
  "Medicare Supplement Plans",
];

export default function ManagingStressPage() {
  return (
    <main className="overflow-hidden bg-[#f8fffb] text-slate-900">
      {/* Hero — dark, editorial */}
      <section className="relative isolate overflow-hidden bg-slate-950 px-6 pb-24 pt-40 lg:px-16 lg:pb-32 lg:pt-48">
        <div className="pointer-events-none absolute left-[-10%] top-[-20%] h-[32rem] w-[32rem] rounded-full bg-primary-500/15 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[32rem] w-[32rem] rounded-full bg-secondary-500/10 blur-[130px]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:88px_88px]" />

        <div className="relative mx-auto max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-300">
              Health Solutions Consultant
            </span>
          </div>

          <h1 className="mt-8 text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="font-sans font-semibold">Managing stress:</span>
            <br />
            <span className="font-serif italic text-primary-300">
              simple strategies for a healthier mind and body.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
            Stress is a normal part of life, but chronic stress can affect
            your body, mood, sleep, immune system, and long-term health.
            The good news is that simple daily habits can help you feel
            more calm, focused, and in control.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <a
              href="#stress-strategies"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-400"
            >
              Explore Stress Relief
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Speak With Brenda
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Floating Intro Cards */}
      <section className="relative px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-9xl">
          <div className="-mt-20 grid gap-4 rounded-[1.75rem] border border-slate-100 bg-white p-5 shadow-xl shadow-primary-950/5 sm:grid-cols-3">
            <div className="rounded-2xl bg-primary-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-600">
                Instant
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                Calm your body in minutes
              </h3>
            </div>

            <div className="rounded-2xl bg-primary-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-600">
                Short-Term
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                Reset during stressful days
              </h3>
            </div>

            <div className="rounded-2xl bg-primary-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-600">
                Long-Term
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                Build a healthier lifestyle
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Article Intro */}
      <section className="px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-9xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                Wellness Education
              </span>
            </div>

            <h2 className="mt-6 text-3xl leading-tight tracking-tight text-slate-900 sm:text-4xl">
              <span className="font-sans font-semibold">
                Managing stress is an
              </span>{" "}
              <span className="font-serif italic">
                investment in your long-term health.
              </span>
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
            <p className="text-base leading-8 text-slate-600">
              At Breezy Health Solutions, we believe protecting your health
              is about more than having quality health insurance. It is
              also about developing healthy habits that support your
              physical, mental, and emotional wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Stress Effects */}
      <section className="relative px-6 py-20 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-primary-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-9xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                How Stress Affects Your Body
              </span>
            </div>

            <h2 className="mt-6 text-3xl leading-tight tracking-tight text-slate-900 sm:text-5xl">
              <span className="font-sans font-semibold">
                Chronic stress can keep
              </span>{" "}
              <span className="font-serif italic">
                your body in a constant state of alert.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              When you&apos;re stressed, your body releases hormones such
              as cortisol and adrenaline. These hormones can help in
              emergencies, but when stress becomes constant, they may
              contribute to physical and emotional health concerns.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stressEffects.map((effect) => (
              <div
                key={effect}
                className="group rounded-2xl border border-slate-100 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-700 transition group-hover:bg-primary-600 group-hover:text-white">
                  <FaExclamationCircle className="h-4 w-4" />
                </div>

                <h3 className="text-sm font-semibold text-slate-900">
                  {effect}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[1.5rem] bg-slate-950 p-7 text-white sm:p-8">
            <h3 className="font-serif text-2xl text-white">
              The goal is not to eliminate every challenge.
            </h3>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              Stress management is about building healthy habits that help
              you respond with resilience, clarity, and better emotional
              balance.
            </p>
          </div>
        </div>
      </section>

      {/* Instant Strategies */}
      <section
        id="stress-strategies"
        className="relative overflow-hidden bg-slate-950 px-6 py-20 sm:py-24 lg:px-8"
      >
        <div className="pointer-events-none absolute left-[-10%] top-[-15%] h-[28rem] w-[28rem] rounded-full bg-primary-500/15 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[-20%] right-[-12%] h-[30rem] w-[30rem] rounded-full bg-secondary-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-9xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary-300">
              Instant Stress Relief
            </span>

            <h2 className="mt-6 text-3xl leading-tight tracking-tight text-white sm:text-5xl">
              <span className="font-sans font-semibold">
                Quick techniques to calm
              </span>{" "}
              <span className="font-serif italic text-primary-300">
                your mind and body.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300">
              Sometimes you need relief right away. These simple
              techniques can help you slow down, reset, and feel more in
              control within minutes.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {instantStrategies.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <span className="font-serif text-3xl text-primary-300/70">
                  {item.number}
                </span>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>

                <div className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                  {item.points.map((point) => (
                    <div key={point} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-300" />
                      <p className="text-sm leading-6 text-slate-300">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Short-Term Strategies */}
      <section className="px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-9xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-primary-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                  Short-Term Stress Management
                </span>
              </div>

              <h2 className="mt-6 text-3xl leading-tight tracking-tight text-slate-900 sm:text-5xl">
                <span className="font-sans font-semibold">
                  Healthy resets
                </span>{" "}
                <span className="font-serif italic">
                  for stressful days.
                </span>
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                These habits can help you pause, organize your thoughts,
                and regain a sense of calm during a busy or emotionally
                heavy day.
              </p>

              <div className="mt-8 rounded-2xl bg-primary-50 p-7">
                <h3 className="text-xl font-semibold text-slate-900">
                  Journaling ideas
                </h3>

                <div className="mt-5 space-y-3">
                  {journalIdeas.map((idea) => (
                    <div key={idea} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary-500" />
                      <p className="text-sm font-medium leading-6 text-slate-600">
                        {idea}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              {shortTermStrategies.map((strategy, index) => (
                <div
                  key={strategy.title}
                  className="group rounded-2xl border border-slate-100 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-2xl text-primary-500/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-slate-100" />
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-slate-900">
                    {strategy.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {strategy.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Long-Term Strategies */}
      <section className="relative px-6 py-20 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-9xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-primary-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                Long-Term Stress Management
              </span>
              <span className="h-px w-10 bg-primary-500" />
            </div>

            <h2 className="mt-6 text-3xl leading-tight tracking-tight text-slate-900 sm:text-5xl">
              <span className="font-sans font-semibold">
                Build a lifestyle
              </span>{" "}
              <span className="font-serif italic">
                that supports resilience.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Managing stress is not only about reacting to difficult
              moments. It is also about creating healthy routines that
              support your mind, body, and emotional wellbeing over time.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {longTermStrategies.map((strategy) => (
              <div
                key={strategy.title}
                className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {strategy.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {strategy.text}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {strategy.activities.map((activity) => (
                    <span
                      key={activity}
                      className="rounded-full border border-slate-200 bg-primary-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[1.5rem] bg-slate-950 p-7 text-white sm:p-8">
            <h3 className="font-serif text-2xl text-white">
              Consistency matters more than perfection.
            </h3>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              Aim for regular movement, balanced meals, personal time, and
              simple routines that are realistic for your daily life.
            </p>
          </div>
        </div>
      </section>

      {/* Sleep Section */}
      <section className="px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-9xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                Quality Sleep
              </span>
            </div>

            <h2 className="mt-6 text-3xl leading-tight tracking-tight text-slate-900 sm:text-5xl">
              <span className="font-sans font-semibold">
                Don&apos;t overlook
              </span>{" "}
              <span className="font-serif italic">
                the importance of sleep.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Stress and poor sleep often create a frustrating cycle.
              Stress can make it harder to sleep, and lack of sleep can
              make stress more difficult to manage. Adults should aim for
              7 to 9 hours of quality sleep each night.
            </p>

            <div className="mt-8 rounded-2xl bg-primary-50 p-7">
              <h3 className="text-xl font-semibold text-slate-900">
                Simple sleep support
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                A consistent bedtime routine and limiting screen time
                before bed can help improve sleep quality.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Good sleep supports:
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {sleepBenefits.map((benefit) => (
                <div key={benefit} className="rounded-2xl bg-primary-50 p-5">
                  <div className="mb-3 h-px w-10 bg-primary-400" />
                  <p className="text-sm font-medium text-slate-700">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seek Help */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-20 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute left-[-10%] top-[-10%] h-[28rem] w-[28rem] rounded-full bg-primary-500/15 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[28rem] w-[28rem] rounded-full bg-secondary-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary-300">
            Know When to Seek Help
          </span>

          <h2 className="mx-auto mt-7 max-w-3xl text-3xl leading-tight text-white sm:text-5xl">
            <span className="font-sans font-semibold">Asking for support</span>{" "}
            <span className="font-serif italic text-primary-300">
              is a sign of strength, not weakness.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
            While everyday stress is common, persistent feelings of
            anxiety, sadness, hopelessness, or being overwhelmed should
            not be ignored. Talking with a healthcare provider or licensed
            mental health professional can provide valuable support and
            guidance.
          </p>
        </div>
      </section>

      {/* Insurance Role */}
      <section className="px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-9xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-primary-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                  Health Insurance &amp; Stress
                </span>
              </div>

              <h2 className="mt-6 text-3xl leading-tight tracking-tight text-slate-900 sm:text-5xl">
                <span className="font-sans font-semibold">
                  Coverage can help reduce
                </span>{" "}
                <span className="font-serif italic">
                  financial uncertainty.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                One common source of stress is worrying about unexpected
                medical expenses. Having quality health insurance can
                provide peace of mind and access to care when you need it.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Health coverage may support access to:
              </h3>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {insuranceBenefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="rounded-2xl bg-primary-50 p-5 transition hover:bg-primary-100"
                  >
                    <p className="text-sm font-medium text-slate-900">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-600">
                Knowing you have coverage when you need it allows you to
                focus more on your health and less on financial
                uncertainty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Actions */}
      <section className="relative px-6 py-20 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-primary-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-9xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-primary-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600">
                Your Health Is Worth Protecting
              </span>
              <span className="h-px w-10 bg-primary-500" />
            </div>

            <h2 className="mt-6 text-3xl leading-tight tracking-tight text-slate-900 sm:text-5xl">
              <span className="font-sans font-semibold">
                Small daily actions
              </span>{" "}
              <span className="font-serif italic">
                can make a lasting difference.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dailyActions.map((action) => (
              <div
                key={action}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                  <FaCheckCircle className="h-4 w-4" />
                </div>

                <h3 className="text-base font-semibold text-slate-900">
                  {action}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Breezy CTA */}
      <section
        id="contact"
        className="relative overflow-hidden bg-slate-950 px-6 py-20 sm:py-24 lg:px-8"
      >
        <div className="pointer-events-none absolute left-[-10%] top-[-10%] h-[32rem] w-[32rem] rounded-full bg-primary-500/15 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[32rem] w-[32rem] rounded-full bg-secondary-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary-300">
            Let Breezy Health Solutions Help
          </span>

          <h2 className="mx-auto mt-7 max-w-3xl text-3xl leading-tight text-white sm:text-5xl">
            <span className="font-sans font-semibold">
              Protect what matters most
            </span>{" "}
            <span className="font-serif italic text-primary-300">
              with guidance you can trust.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
            Breezy Health Solutions helps individuals, families, and small
            business owners find affordable health insurance solutions
            that fit their lives and budgets.
          </p>

          <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/5 p-8">
            <h3 className="font-serif text-xl text-white">
              Coverage options include:
            </h3>

            <div className="mx-auto mt-6 grid max-w-2xl gap-3 sm:grid-cols-2">
              {coverageOptions.map((option) => (
                <div
                  key={option}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-sm font-medium text-primary-100">
                    {option}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <h3 className="font-serif text-2xl text-white">
                Brenda Ruiz
              </h3>

              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary-300">
                Licensed Health Insurance Advisor
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="tel:5125579308"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-400"
                >
                  Call (512) 557-9308
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Request Coverage Help
                </a>
              </div>

              <p className="mt-8 font-serif text-lg italic text-primary-300">
                “Better Coverage. Better Protection. Breezy Solutions.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
