import Footer from "../Home/components/footer";
import Header from "../Home/components/header";
import LegalHero from "../components/LegalHero";

export const metadata = {
  title: "Accessibility | Breezy Health Solutions",
  description:
    "Learn about Breezy Health Solutions' commitment to digital accessibility for all visitors.",
};

const SECTIONS = [
  {
    heading: "Our Commitment",
    body: [
      "Breezy Health Solutions is committed to ensuring digital accessibility for people of all abilities. We are continually improving the user experience for everyone and applying relevant accessibility standards.",
    ],
  },
  {
    heading: "Accessibility Standards",
    body: [
      "We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, which help make web content more accessible for people with disabilities and more usable for everyone.",
    ],
  },
  {
    heading: "Ongoing Efforts",
    body: [
      "Our efforts include maintaining clear navigation, providing descriptive text for images, ensuring sufficient color contrast, and supporting keyboard navigation across our website.",
      "We regularly review our website and work to address accessibility barriers as they are identified.",
    ],
  },
  {
    heading: "Feedback",
    body: [
      "We welcome your feedback on the accessibility of our website. If you encounter any barriers or have suggestions for improvement, please let us know so we can address the issue.",
    ],
  },
  {
    heading: "Contact Us",
    body: [
      "You can reach our team at info@breezyhealthsolutions.com or +1 (888) 879-1872 to report accessibility issues or request assistance in an alternative format.",
    ],
  },
];

export default function AccessibilityPage() {
  return (
    <main className="overflow-hidden bg-[#f8fffb]">
      <Header />

      <LegalHero
        eyebrow="Legal"
        title="Accessibility"
        updated="July 23, 2026"
      />

      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:px-0">
        <p className="text-base leading-8 text-slate-600">
          Breezy Health Solutions is dedicated to providing a website that is
          accessible to the widest possible audience, regardless of ability
          or technology.
        </p>

        <div className="mt-12 flex flex-col gap-12">
          {SECTIONS.map(({ heading, body }) => (
            <div key={heading}>
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-primary-500" />
                <h2 className="text-lg font-bold text-primary-500 sm:text-xl">
                  {heading}
                </h2>
              </div>

              <div className="mt-4 flex flex-col gap-4">
                {body.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base leading-8 text-slate-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
