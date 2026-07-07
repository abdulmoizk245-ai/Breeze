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
    points: [
      "Lavender",
      "Chamomile",
      "Peppermint",
      "Eucalyptus",
    ],
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

const seoKeywords = [
  "Stress management",
  "Healthy ways to manage stress",
  "Stress relief techniques",
  "Mental wellness",
  "Emotional health",
  "Preventive healthcare",
  "Affordable private PPO health insurance",
  "Family health insurance",
  "Small business health insurance",
  "Breezy Health Solutions",
];

export default function ManagingStressPage() {
  return (
    <main className="overflow-hidden bg-[#f8fffb] text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-28 lg:px-8">
        <div className="absolute left-[-12%] top-[-18%] h-[36rem] w-[36rem] rounded-full bg-primary-500/20 blur-[130px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[34rem] w-[34rem] rounded-full bg-primary-400/20 blur-[130px]" />
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-300/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:90px_90px] opacity-20" />

        <div className="relative mx-auto grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-300/20 bg-primary-300/10 px-5 py-2 text-sm font-bold text-primary-200">
              <span className="h-2 w-2 rounded-full bg-primary-300 shadow-[0_0_22px_rgba(194,220,142,0.9)]" />
              Health Solutions Consultant
            </span>

            <h1 className="mt-7 text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Managing Stress:
              <span className="mt-2 block bg-gradient-to-r from-primary-300 via-primary-200 to-primary-200 bg-clip-text text-transparent">
                Simple Strategies for a Healthier Mind and Body
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Stress is a normal part of life, but chronic stress can affect
              your body, mood, sleep, immune system, and long-term health. The
              good news is that simple daily habits can help you feel more calm,
              focused, and in control.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#stress-strategies"
                className="rounded-full bg-primary-300 px-8 py-4 text-sm font-black text-slate-950 shadow-xl shadow-primary-500/25 transition hover:scale-105 hover:bg-primary-200"
              >
                Explore Stress Relief
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                Speak With Brenda
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-primary-400/20 to-primary-400/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.08] p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="rounded-[2rem] bg-gradient-to-br from-primary-300 via-primary-200 to-primary-200 p-1">
                <div className="rounded-[1.8rem] bg-slate-950 p-7">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary-200">
                        Stress Balance
                      </p>

                      <h2 className="mt-3 text-3xl font-black text-white">
                        Instant, short-term, and long-term ways to reset.
                      </h2>
                    </div>

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-primary-300 text-2xl font-black text-slate-950">
                      +
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    {[
                      "Deep Breathing",
                      "Walking",
                      "Journaling",
                      "Exercise",
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
                            style={{ width: `${58 + index * 10}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-5 text-center text-sm leading-7 text-slate-300">
                Healthy habits and quality health coverage can both support
                long-term wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Intro Cards */}
      <section className="relative px-6 py-10 lg:px-8">
        <div className="mx-auto ">
          <div className="-mt-20 grid gap-4 rounded-[2rem] border border-slate-100 bg-white p-5 shadow-2xl shadow-primary-950/10 sm:grid-cols-3">
            <div className="rounded-[1.5rem] bg-primary-50 p-6">
              <p className="text-sm font-black uppercase tracking-widest text-primary-700">
                Instant
              </p>
              <h3 className="mt-2 text-xl font-black text-slate-950">
                Calm your body in minutes
              </h3>
            </div>

            <div className="rounded-[1.5rem] bg-primary-50 p-6">
              <p className="text-sm font-black uppercase tracking-widest text-primary-700">
                Short-Term
              </p>
              <h3 className="mt-2 text-xl font-black text-slate-950">
                Reset during stressful days
              </h3>
            </div>

            <div className="rounded-[1.5rem] bg-primary-50 p-6">
              <p className="text-sm font-black uppercase tracking-widest text-primary-700">
                Long-Term
              </p>
              <h3 className="mt-2 text-xl font-black text-slate-950">
                Build a healthier lifestyle
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Article Intro */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.25em] text-primary-600">
              Wellness Education
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Managing stress is an investment in your long-term health.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-slate-100 bg-slate-50 p-7 shadow-xl shadow-slate-200/60">
            <p className="text-base leading-8 text-slate-600">
              At Breezy Health Solutions, we believe protecting your health is
              about more than having quality health insurance. It is also about
              developing healthy habits that support your physical, mental, and
              emotional wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Stress Effects */}
      <section className="relative  px-6 py-24 lg:px-8">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-primary-200/50 blur-3xl" />

        <div className="relative mx-auto ">
          <div className="max-w-3xl">
            <span className="text-sm font-black uppercase tracking-[0.25em] text-primary-600">
              How Stress Affects Your Body
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Chronic stress can keep your body in a constant state of alert.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              When you&apos;re stressed, your body releases hormones such as
              cortisol and adrenaline. These hormones can help in emergencies,
              but when stress becomes constant, they may contribute to physical
              and emotional health concerns.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stressEffects.map((effect) => (
              <div
                key={effect}
                className="group rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-lg shadow-slate-200/70 transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-2xl hover:shadow-primary-950/10"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-50 text-lg font-black text-primary-700 transition group-hover:bg-primary-300 group-hover:text-slate-950">
                  !
                </div>

                <h3 className="text-base font-black text-slate-950">
                  {effect}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] bg-slate-950 p-7 text-white shadow-2xl shadow-slate-300/60">
            <h3 className="text-2xl font-black">
              The goal is not to eliminate every challenge.
            </h3>

            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
              Stress management is about building healthy habits that help you
              respond with resilience, clarity, and better emotional balance.
            </p>
          </div>
        </div>
      </section>

      {/* Instant Strategies */}
      <section
        id="stress-strategies"
        className="relative overflow-hidden bg-slate-950 px-6 py-24 lg:px-8"
      >
        <div className="absolute left-[-10%] top-[-15%] h-[32rem] w-[32rem] rounded-full bg-primary-500/20 blur-[120px]" />
        <div className="absolute right-[-12%] bottom-[-20%] h-[34rem] w-[34rem] rounded-full bg-primary-400/20 blur-[120px]" />

        <div className="relative mx-auto ">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-primary-200">
              Instant Stress Relief
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Quick techniques to calm your mind and body.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              Sometimes you need relief right away. These simple techniques can
              help you slow down, reset, and feel more in control within
              minutes.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {instantStrategies.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/[0.12]"
              >
                <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-primary-400/20 blur-3xl transition duration-500 group-hover:scale-150" />

                <div className="relative flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-primary-300 via-primary-300 to-primary-200 text-lg font-black text-slate-950 shadow-xl shadow-primary-500/25">
                  {item.number}
                </div>

                <h3 className="relative mt-7 text-2xl font-black text-white">
                  {item.title}
                </h3>

                <p className="relative mt-4 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>

                <div className="relative mt-6 space-y-3">
                  {item.points.map((point) => (
                    <div key={point} className="flex gap-3">
                      <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-primary-300" />
                      <p className="text-sm leading-6 text-slate-300">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="relative mt-7 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-primary-300 to-primary-300 transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Short-Term Strategies */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto ">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.25em] text-primary-600">
                Short-Term Stress Management
              </span>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Healthy resets for stressful days.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                These habits can help you pause, organize your thoughts, and
                regain a sense of calm during a busy or emotionally heavy day.
              </p>

              <div className="mt-8 rounded-[2rem] bg-primary-50 p-7">
                <h3 className="text-2xl font-black text-slate-950">
                  Journaling ideas
                </h3>

                <div className="mt-5 space-y-3">
                  {journalIdeas.map((idea) => (
                    <div key={idea} className="flex gap-3">
                      <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-primary-500" />
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
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-7 shadow-xl shadow-slate-200/70 transition duration-300 hover:-translate-y-1 hover:border-primary-200"
                >
                  <span className="absolute right-7 top-5 text-6xl font-black text-slate-100 transition group-hover:text-primary-100">
                    0{index + 1}
                  </span>

                  <div className="relative mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-primary-400 to-primary-400 transition group-hover:w-28" />

                  <h3 className="relative text-2xl font-black text-slate-950">
                    {strategy.title}
                  </h3>

                  <p className="relative mt-4 text-sm leading-7 text-slate-600">
                    {strategy.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Long-Term Strategies */}
      <section className="relative  px-6 py-24 lg:px-8">
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-primary-200/40 blur-3xl" />

        <div className="relative mx-auto ">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.25em] text-primary-600">
              Long-Term Stress Management
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Build a lifestyle that supports resilience.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Managing stress is not only about reacting to difficult moments.
              It is also about creating healthy routines that support your mind,
              body, and emotional wellbeing over time.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {longTermStrategies.map((strategy) => (
              <div
                key={strategy.title}
                className="rounded-[2.2rem] border border-slate-100 bg-white p-7 shadow-2xl shadow-slate-200/70"
              >
                <div className="mb-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-primary-400 to-primary-400" />

                <h3 className="text-2xl font-black text-slate-950">
                  {strategy.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {strategy.text}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {strategy.activities.map((activity) => (
                    <span
                      key={activity}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] bg-slate-950 p-7 text-white">
            <h3 className="text-2xl font-black">
              Consistency matters more than perfection.
            </h3>

            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
              Aim for regular movement, balanced meals, personal time, and
              simple routines that are realistic for your daily life.
            </p>
          </div>
        </div>
      </section>

      {/* Sleep Section */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.25em] text-primary-600">
              Quality Sleep
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Don&apos;t overlook the importance of sleep.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Stress and poor sleep often create a frustrating cycle. Stress can
              make it harder to sleep, and lack of sleep can make stress more
              difficult to manage. Adults should aim for 7 to 9 hours of quality
              sleep each night.
            </p>

            <div className="mt-8 rounded-[2rem] bg-primary-50 p-7">
              <h3 className="text-2xl font-black text-slate-950">
                Simple sleep support
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                A consistent bedtime routine and limiting screen time before bed
                can help improve sleep quality.
              </p>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-slate-100 bg-slate-50 p-6 shadow-2xl shadow-slate-200/70">
            <h3 className="text-2xl font-black text-slate-950">
              Good sleep supports:
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {sleepBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl bg-white p-5 shadow-md shadow-slate-200/60"
                >
                  <div className="mb-3 h-2 w-12 rounded-full bg-primary-400" />
                  <p className="font-bold text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seek Help */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-24 lg:px-8">
        <div className="absolute left-[-10%] top-[-10%] h-[30rem] w-[30rem] rounded-full bg-primary-500/20 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-20%] h-[30rem] w-[30rem] rounded-full bg-primary-400/20 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-primary-200">
            Know When to Seek Help
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl">
            Asking for support is a sign of strength, not weakness.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300">
            While everyday stress is common, persistent feelings of anxiety,
            sadness, hopelessness, or being overwhelmed should not be ignored.
            Talking with a healthcare provider or licensed mental health
            professional can provide valuable support and guidance.
          </p>
        </div>
      </section>

      {/* Insurance Role */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto ">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.25em] text-primary-600">
                Health Insurance & Stress
              </span>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Coverage can help reduce financial uncertainty.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                One common source of stress is worrying about unexpected medical
                expenses. Having quality health insurance can provide peace of
                mind and access to care when you need it.
              </p>
            </div>

            <div className="rounded-[2.5rem] border border-slate-100 bg-white p-7 shadow-2xl shadow-slate-200/70">
              <h3 className="text-2xl font-black text-slate-950">
                Health coverage may support access to:
              </h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {insuranceBenefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="rounded-2xl bg-primary-50 p-5 transition hover:bg-primary-100"
                  >
                    <p className="font-black text-slate-950">{benefit}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-600">
                Knowing you have coverage when you need it allows you to focus
                more on your health and less on financial uncertainty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Actions */}
      <section className="relative overflow-hidden bg-slate-50 px-6 py-24 lg:px-8">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary-200/40 blur-3xl" />

        <div className="relative mx-auto ">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-black uppercase tracking-[0.25em] text-primary-600">
              Your Health Is Worth Protecting
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Small daily actions can make a lasting difference.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dailyActions.map((action) => (
              <div
                key={action}
                className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/70"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-100 text-sm font-black text-primary-700">
                  ✓
                </div>

                <h3 className="text-lg font-black text-slate-950">
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
        className="relative overflow-hidden bg-slate-950 px-6 py-24 lg:px-8"
      >
        <div className="absolute left-[-10%] top-[-10%] h-[32rem] w-[32rem] rounded-full bg-primary-500/20 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-20%] h-[34rem] w-[34rem] rounded-full bg-primary-400/20 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-primary-200">
            Let Breezy Health Solutions Help
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl">
            Protect what matters most with guidance you can trust.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300">
            Breezy Health Solutions helps individuals, families, and small
            business owners find affordable health insurance solutions that fit
            their lives and budgets.
          </p>

          <div className="mt-10 rounded-[2.5rem] border border-white/10 bg-white/[0.08] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <h3 className="text-2xl font-black text-white">
              Coverage options include:
            </h3>

            <div className="mx-auto mt-6 grid max-w-3xl gap-4 sm:grid-cols-2">
              {coverageOptions.map((option) => (
                <div
                  key={option}
                  className="rounded-2xl border border-white/10 bg-white/[0.08] p-5"
                >
                  <p className="font-black text-primary-100">{option}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <h3 className="text-3xl font-black text-white">Brenda Ruiz</h3>

              <p className="mt-2 text-sm font-bold uppercase tracking-[0.25em] text-primary-200">
                Licensed Health Insurance Advisor
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="tel:5125579308"
                  className="rounded-full bg-primary-300 px-8 py-4 text-sm font-black text-slate-950 shadow-xl shadow-primary-500/25 transition hover:scale-105 hover:bg-primary-200"
                >
                  Call (512) 557-9308
                </a>

                <a
                  href="/contact"
                  className="rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/15"
                >
                  Request Coverage Help
                </a>
              </div>

              <p className="mt-8 text-lg font-black text-primary-200">
                “Better Coverage. Better Protection. Breezy Solutions.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Keywords */}
      {/* <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto ">
          <div className="rounded-[2rem] border border-slate-100 bg-[#6fe8a3] p-7">
            <h2 className="text-2xl font-black text-slate-950">
              Helpful Topics Covered
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              This educational article supports visitors searching for stress
              relief techniques, mental wellness guidance, preventive healthcare
              information, and affordable health insurance support.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {seoKeywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}