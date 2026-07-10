
// import Link from "next/link";

// export default function ServiceCTA() {
//   return (
//     <section className="bg-white px-6 py-24 lg:px-8">
//       <div className="mx-auto ">
//         <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary-600 via-primary-600 to-slate-950 px-8 py-14 shadow-2xl sm:px-12 lg:px-16">
//           {/* Background Blur */}
//           <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white/20 blur-3xl" />
//           <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-tertiary-300/20 blur-3xl" />

//           <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
//             {/* Left Text */}
//             <div className="text-left">
//               <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur-md">
//                 Ready to Begin?
//               </span>

//               <h2 className="mt-6 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">
//                 Take the First Step Toward a Healthier You
//               </h2>

//               <p className="mt-5 max-w-2xl text-base leading-8 text-primary-50">
//                 Start with a simple conversation. We will help you understand
//                 what your body and lifestyle need, then guide you toward better
//                 daily choices.
//               </p>
//             </div>

//             {/* Right Buttons */}
//             <div className="flex items-center justify-start gap-4 lg:justify-end">
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-black text-primary-700 shadow-xl transition hover:-translate-y-1 hover:bg-primary-50"
//               >
//                 Get Started Today
//               </Link>

//               <Link
//                 href="/about"
//                 className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-black text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20"
//               >
//                 Meet Your Advisor
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";

export default function ServiceCTA() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-600 via-primary-600 to-slate-950 px-6 py-10 shadow-2xl sm:rounded-[2.5rem] sm:px-12 sm:py-14 lg:px-16">
          {/* Background Blur */}
          <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-tertiary-300/20 blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
            {/* Left Text */}
            <div className="text-center lg:text-left">
              <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-bold text-white backdrop-blur-md sm:text-sm">
                Ready to Begin?
              </span>

              <h2 className="mx-auto mt-5 max-w-3xl text-2xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:mx-0 lg:text-5xl">
                Take the First Step Toward a Healthier You
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-primary-50 sm:text-base sm:leading-8 lg:mx-0">
                Start with a simple conversation. We will help you understand
                what your body and lifestyle need, then guide you toward better
                daily choices.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex w-56 items-center justify-center rounded-full bg-white px-6 py-3.5 text-xs font-black text-primary-700 shadow-xl transition hover:-translate-y-1 hover:bg-primary-50 sm:text-sm"
              >
                Get Started Today
              </Link>

              <Link
                href="/about"
                className="inline-flex w-56 items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-xs font-black text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20 sm:text-sm"
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