import Footer from "../Home/components/footer";
import Header from "../Home/components/header";
import ServiceCards from "./components/card";
import HeroSection from "./components/hero";
import ServiceBanner from "./components/ServiceBanner";
import ServiceCTA from "./components/ServiceCTA";
import ServiceProcess from "./components/ServiceProcess";
import WellnessImageSection from "./components/WellnessImageSection";

export default function Services() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServiceCards />
      <ServiceBanner />
      <WellnessImageSection />
      <ServiceProcess />
      <ServiceCTA />
      <Footer />
    </>
  );
}
