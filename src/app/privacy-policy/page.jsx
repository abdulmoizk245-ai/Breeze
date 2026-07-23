import Footer from "../Home/components/footer";
import Header from "../Home/components/header";
import LegalHero from "../components/LegalHero";

export const metadata = {
  title: "Privacy Policy | Breezy Health Solutions",
  description:
    "Learn how Breezy Health Solutions collects, uses, and protects your personal information.",
};

const SECTIONS = [
  {
    heading: "Information We Collect",
    body: [
      "We collect information you provide directly to us, such as your name, email address, phone number, and health coverage preferences when you request a quote, subscribe to our newsletter, or contact us for support.",
      "We may also automatically collect certain information about your device and how you interact with our website, including IP address, browser type, and pages visited, through cookies and similar technologies.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "We use the information we collect to provide, maintain, and improve our services, to respond to your inquiries, to send you quotes and plan recommendations, and to communicate updates about your coverage.",
      "With your consent, we may also send you newsletters and marketing communications. You can opt out of these communications at any time.",
    ],
  },
  {
    heading: "How We Share Your Information",
    body: [
      "We do not sell your personal information. We may share your information with licensed insurance carriers and partners solely for the purpose of providing you with coverage options and quotes you have requested.",
      "We may also disclose information when required by law, to protect our rights, or in connection with a business transfer such as a merger or acquisition.",
    ],
  },
  {
    heading: "Data Security",
    body: [
      "We implement reasonable administrative, technical, and physical safeguards designed to protect your personal information from unauthorized access, disclosure, alteration, or destruction.",
      "No method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Your Choices",
    body: [
      "You may update or correct your personal information, unsubscribe from marketing communications, or request that we delete your information by contacting us at info@breezyhealthsolutions.com.",
    ],
  },
  {
    heading: "Children's Privacy",
    body: [
      "Our services are not directed to individuals under the age of 18, and we do not knowingly collect personal information from children.",
    ],
  },
  {
    heading: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.",
    ],
  },
  {
    heading: "Contact Us",
    body: [
      "If you have questions about this Privacy Policy, please reach out to us at info@breezyhealthsolutions.com or +1 (888) 879-1872.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="overflow-hidden bg-[#f8fffb]">
      <Header />

      <LegalHero
        eyebrow="Legal"
        title="Privacy Policy"
        updated="July 23, 2026"
      />

      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20 lg:px-0">
        <p className="text-base leading-8 text-slate-600">
          Breezy Health Solutions ("we," "us," or "our") respects your
          privacy and is committed to protecting the personal information you
          share with us. This Privacy Policy explains how we collect, use,
          and safeguard your information when you visit our website or use
          our services.
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
