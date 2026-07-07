import React from "react";
import Header from "../Home/components/header";
import AboutHero from "./components/hero";
import Footer from "../Home/components/footer";
import AboutBrenda from "./components/AboutBrenda";
import AboutProcess from "./components/process";

export default function About() {
  return (
    <>
      <Header />
      <AboutHero />
      <AboutBrenda />
      <AboutProcess />
      <Footer />
    </>
  );
}
