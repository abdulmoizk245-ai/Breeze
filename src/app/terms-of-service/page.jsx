import Footer from "../Home/components/footer";
import Header from "../Home/components/header";
import LegalHero from "../components/LegalHero";

export const metadata = {
  title: "Terms of Service | Breezy Health Solutions",
  description:
    "Read the terms and conditions that govern your use of the Breezy Health Solutions website and services.",
};

const SECTIONS = [
  {
    heading: "Acceptance of Terms",
    body: [
      "By accessing or using the Breezy Health Solutions website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.",
    ],
  },
  {
    heading: "Our Services",
    body: [
      "Breezy Health Solutions helps individuals, families, and business owners explore health insurance coverage options. We are not an insurance carrier; we help connect you with licensed carriers and plans that may fit your needs.",
      "Any quotes, plan details, or pricing provided through our website are for informational purposes only and are subject to change based on eligibility and carrier terms.",
    ],
  },
  {
    heading: "Use of Our Website",
    body: [
      "You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, this website by any third party.",
      "You may not attempt to gain unauthorized access to any part of our website, servers, or networks connected to our website.",
    ],
  },
  {
    heading: "No Guarantee of Coverage",
    body: [
      "Submitting a request for a quote does not guarantee approval or issuance of any insurance policy. Final eligibility, pricing, and coverage terms are determined by the applicable insurance carrier.",
    ],
  },
  {
    heading: "Intellectual Property",
    body: [
      "All content on this website, including text, graphics, logos, and images, is the property of Breezy Health Solutions or its licensors and is protected by applicable intellectual property laws.",
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      "Breezy Health Solutions shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services, to the fullest extent permitted by law.",
    ],
  },
  {
    heading: "Changes to These Terms",
    body: [
      "We may revise these Terms of Service from time to time. Continued use of our website after changes are posted constitutes your acceptance of the revised terms.",
    ],
  },
  {
    heading: "Contact Us",
    body: [
      "If you have questions about these Terms of Service, please contact us at info@breezyhealthsolutions.com or +1 (888) 879-1872.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="overflow-hidden bg-[#f8fffb]">
      <Header />

      <LegalHero
        eyebrow="Legal"
        title="Terms of Service"
        updated="July 23, 2026"
      />

      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:px-0">
        <p className="text-base leading-8 text-slate-600">
          These Terms of Service ("Terms") govern your access to and use of
          the Breezy Health Solutions website and services. Please read them
          carefully before using our website.
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
