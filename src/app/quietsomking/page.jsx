import Footer from "../Home/components/footer";
import Header from "../Home/components/header";
import QuitSmokingPage from "./Components/detail";

export const metadata = {
  title: "Quitting Smoking | Breezy Health Solutions",
  description:
    "Learn the health benefits of quitting smoking, practical smoking cessation tips, and how Breezy Health Solutions supports preventive healthcare and affordable health insurance options.",
  keywords: [
    "how to quit smoking",
    "benefits of quitting smoking",
    "smoking cessation tips",
    "quit smoking naturally",
    "health risks of smoking",
    "preventive healthcare",
    "private PPO health insurance",
    "affordable health insurance",
    "health insurance for families",
    "small business health insurance",
    "Breezy Health Solutions",
  ],
};

export default function QuietSomking() {
  return (
    <>
      <Header />
      <QuitSmokingPage />
      <Footer />
    </>
  );
}
