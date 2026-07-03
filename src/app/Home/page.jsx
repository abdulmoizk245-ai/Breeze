import Header from "./components/header";
import Hero from "./components/hero";
import Categories from "./components/categories";
import Services from "./components/services";
import Benefits from "./components/benefits";
import Plan from "./components/plan";
import Testimonials from "./components/testnomials";
import Faq from "./components/faq";
import Cta from "./components/cta";
import Footer from "./components/footer";

export default function Main() {
  return (
    <main>
      <Header />
      <Hero />
      <Categories />
      <Services />
      <Benefits />
      <Plan />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
