import Footer from "../Home/components/footer";
import Header from "../Home/components/header";
import ManagingStressPage from "./Components/detail";

export const metadata = {
  title: "Managing Stress | Breezy Health Solutions",
  description:
    "Learn simple stress management strategies for a healthier mind and body, including breathing exercises, walking, journaling, meditation, exercise, sleep, nutrition, and health insurance support.",
  keywords: [
    "stress management",
    "healthy ways to manage stress",
    "stress relief techniques",
    "mental wellness",
    "emotional health",
    "preventive healthcare",
    "affordable private PPO health insurance",
    "family health insurance",
    "small business health insurance",
    "Breezy Health Solutions",
  ],
};

export default function ManageStress() {
  return (
    <>
      <Header />
      <ManagingStressPage />
      <Footer />
    </>
  );
}
