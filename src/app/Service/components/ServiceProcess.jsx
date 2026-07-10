// import Link from "next/link";

// const steps = [
//   {
//     step: "01",
//     title: "Understand Your Lifestyle",
//     text: "We begin by understanding your routine, health goals, stress levels, habits, and daily lifestyle challenges.",
//     tag: "Discover",
//   },
//   {
//     step: "02",
//     title: "Create a Simple Plan",
//     text: "You receive a clear, realistic wellness plan built around small actions that feel easy to follow.",
//     tag: "Plan",
//   },
//   {
//     step: "03",
//     title: "Build Better Habits",
//     text: "We guide you toward consistent choices that support better energy, balance, and long-term wellness.",
//     tag: "Improve",
//   },
//   {
//     step: "04",
//     title: "Track Your Progress",
//     text: "Your plan evolves as your lifestyle improves, keeping your wellness journey flexible and personal.",
//     tag: "Grow",
//   },
// ];

// export default function ServiceProcess() {
//   return (
//     <section className="relative overflow-hidden bg-[#061512] px-6 py-28 lg:px-8">
//       {/* Background Glow */}
//       <div className="absolute left-[-10%] top-[-10%] h-[32rem] w-[32rem] rounded-full bg-primary-500/20 blur-[120px]" />
//       <div className="absolute bottom-[-15%] right-[-10%] h-[34rem] w-[34rem] rounded-full bg-primary-400/20 blur-[130px]" />
//       <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-300/5 blur-[120px]" />

//       {/* Grid Pattern */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

//       <div className="relative mx-auto max-w-7xl">
//         {/* Heading */}
//         <div className="mx-auto max-w-3xl text-center">
//           <span className="inline-flex items-center gap-2 rounded-full border border-primary-300/20 bg-primary-300/10 px-5 py-2 text-sm font-bold text-primary-200 shadow-lg shadow-primary-500/10">
//             <span className="h-2 w-2 rounded-full bg-primary-300 shadow-[0_0_18px_rgba(194,220,142,0.9)]" />
//             Our Process
//           </span>

//           <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-6xl">
//             A Better Way to Build a{" "}
//             <span className="bg-gradient-to-r from-primary-300 via-primary-200 to-primary-200 bg-clip-text text-transparent">
//               Healthier Lifestyle
//             </span>
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
//             A simple, guided process designed to help you feel better, stay
//             consistent, and create wellness habits that actually fit your life.
//           </p>
//         </div>

//         {/* Process Area */}
//         <div className="relative mt-20">
//           {/* Desktop Connector Line */}
//           <div className="absolute left-0 right-0 top-24 hidden h-px bg-gradient-to-r from-transparent via-primary-300/40 to-transparent lg:block" />

//           <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
//             {steps.map((item, index) => (
//               <div
//                 key={item.step}
//                 className={`group relative ${
//                   index % 2 === 1 ? "lg:mt-12" : ""
//                 }`}
//               >
//                 <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-primary-300/40 hover:bg-white/[0.11]">
//                   {/* Card Glow */}
//                   <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-primary-400/20 blur-3xl transition duration-500 group-hover:scale-150 group-hover:bg-primary-300/30" />
//                   <div className="absolute -bottom-16 left-6 h-36 w-36 rounded-full bg-primary-400/10 blur-3xl transition duration-500 group-hover:scale-125" />

//                   {/* Top Tag */}
//                   <div className="relative flex items-center justify-between">
//                     <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-200">
//                       {item.tag}
//                     </span>

//                     <span className="text-5xl font-black text-white/5 transition duration-500 group-hover:text-primary-300/10">
//                       {item.step}
//                     </span>
//                   </div>

//                   {/* Number Badge */}
//                   <div className="relative mt-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-primary-300 via-primary-300 to-primary-200 text-lg font-black text-slate-950 shadow-xl shadow-primary-500/25 transition duration-500 group-hover:rotate-6 group-hover:scale-110">
//                     {item.step}
//                   </div>

//                   <h3 className="relative mt-7 text-xl font-black leading-snug text-white">
//                     {item.title}
//                   </h3>

//                   <p className="relative mt-4 text-sm leading-7 text-slate-300">
//                     {item.text}
//                   </p>

//                   {/* Bottom Accent */}
//                   <div className="relative mt-8 h-1.5 overflow-hidden rounded-full bg-white/10">
//                     <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-primary-300 to-primary-300 transition-all duration-500 group-hover:w-full" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom CTA Strip */}
//         <div className="mx-auto mt-20 max-w-4xl rounded-[2rem] border border-primary-300/20 bg-gradient-to-r from-primary-300/10 via-white/[0.06] to-primary-300/10 p-6 text-center shadow-2xl shadow-primary-950/40 backdrop-blur-xl sm:p-8">
//           <h3 className="text-2xl font-black text-white">
//             Small steps. Better habits. Real progress.
//           </h3>

//           <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
//             Start with simple lifestyle changes and build a wellness routine
//             that feels natural, realistic, and easy to maintain.
//           </p>

//           <Link
//             href="/contact"
//             className="mt-6 inline-flex rounded-full bg-primary-300 px-7 py-3 text-sm font-black text-slate-950 shadow-lg shadow-primary-500/25 transition hover:scale-105 hover:bg-primary-200"
//           >
//             Start Your Wellness Journey
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Understand Your Lifestyle",
    text: "We begin by understanding your routine, health goals, stress levels, habits, and daily lifestyle challenges.",
    tag: "Discover",
  },
  {
    step: "02",
    title: "Create a Simple Plan",
    text: "You receive a clear, realistic wellness plan built around small actions that feel easy to follow.",
    tag: "Plan",
  },
  {
    step: "03",
    title: "Build Better Habits",
    text: "We guide you toward consistent choices that support better energy, balance, and long-term wellness.",
    tag: "Improve",
  },
  {
    step: "04",
    title: "Track Your Progress",
    text: "Your plan evolves as your lifestyle improves, keeping your wellness journey flexible and personal.",
    tag: "Grow",
  },
];

export default function ServiceProcess() {
  return (
    <section className="relative overflow-hidden bg-[#13284A] px-6 py-28 lg:px-8">
      {/* Logo Inspired Background Glow */}
      <div className="absolute left-[-10%] top-[-10%] h-[32rem] w-[32rem] rounded-full bg-[#5FA8AA]/25 blur-[120px]" />
      <div className="absolute bottom-[-15%] right-[-10%] h-[34rem] w-[34rem] rounded-full bg-[#91AD4C]/25 blur-[130px]" />
      <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DCE8EA]/10 blur-[120px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(220,232,234,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(220,232,234,0.06)_1px,transparent_1px)] bg-[size:80px_80px] opacity-25" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#5FA8AA]/30 bg-[#5FA8AA]/10 px-5 py-2 text-sm font-bold text-[#DCE8EA] shadow-lg shadow-[#5FA8AA]/10">
            <span className="h-2 w-2 rounded-full bg-[#91AD4C] shadow-[0_0_18px_rgba(145,173,76,0.9)]" />
            Our Process
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-6xl">
            A Better Way to Build a{" "}
            <span className="bg-gradient-to-r from-[#5FA8AA] via-[#DCE8EA] to-[#91AD4C] bg-clip-text text-transparent">
              Healthier Lifestyle
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#DCE8EA]/80">
            A simple, guided process designed to help you feel better, stay
            consistent, and create wellness habits that actually fit your life.
          </p>
        </div>

        {/* Process Area */}
        <div className="relative mt-20">
          {/* Desktop Connector Line */}
          <div className="absolute left-0 right-0 top-24 hidden h-px bg-gradient-to-r from-transparent via-[#5FA8AA]/50 to-transparent lg:block" />

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className={`group relative ${
                  index % 2 === 1 ? "lg:mt-12" : ""
                }`}
              >
                <div className="relative h-full overflow-hidden rounded-[2rem] border border-[#DCE8EA]/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-[#5FA8AA]/50 hover:bg-white/[0.1]">
                  {/* Card Glow */}
                  <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#5FA8AA]/20 blur-3xl transition duration-500 group-hover:scale-150 group-hover:bg-[#5FA8AA]/35" />
                  <div className="absolute -bottom-16 left-6 h-36 w-36 rounded-full bg-[#91AD4C]/15 blur-3xl transition duration-500 group-hover:scale-125" />

                  {/* Top Tag */}
                  <div className="relative flex items-center justify-between">
                    <span className="rounded-full border border-[#DCE8EA]/10 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#DCE8EA]">
                      {item.tag}
                    </span>

                    <span className="text-5xl font-black text-white/5 transition duration-500 group-hover:text-[#91AD4C]/15">
                      {item.step}
                    </span>
                  </div>

                  {/* Number Badge */}
                  <div className="relative mt-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#5FA8AA] via-[#DCE8EA] to-[#91AD4C] text-lg font-black text-[#13284A] shadow-xl shadow-[#5FA8AA]/25 transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                    {item.step}
                  </div>

                  <h3 className="relative mt-7 text-xl font-black leading-snug text-white">
                    {item.title}
                  </h3>

                  <p className="relative mt-4 text-sm leading-7 text-[#DCE8EA]/75">
                    {item.text}
                  </p>

                  {/* Bottom Accent */}
                  <div className="relative mt-8 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-[#5FA8AA] to-[#91AD4C] transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mx-auto mt-20 max-w-4xl rounded-[2rem] border border-[#5FA8AA]/25 bg-gradient-to-r from-[#5FA8AA]/10 via-white/[0.06] to-[#91AD4C]/10 p-6 text-center shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
          <h3 className="text-2xl font-black text-white">
            Small steps. Better habits. Real progress.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#DCE8EA]/75">
            Start with simple lifestyle changes and build a wellness routine
            that feels natural, realistic, and easy to maintain.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-[#91AD4C] px-7 py-3 text-sm font-black text-[#13284A] shadow-lg shadow-[#91AD4C]/25 transition hover:scale-105 hover:bg-[#A7BE5A]"
          >
            Start Your Wellness Journey
          </Link>
        </div>
      </div>
    </section>
  );
}