'use client'
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Workers from "./components/Workers";
import Footer from "./components/Footer";
import ButtonWps from "./components/ButtonWps";
import Questions from "./components/Questions";
import Extra from "./components/Extra";
import Cobertura from "./components/Cobertura";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <About />
      <Services />
      <Extra />
      <Workers />
      <Cobertura />
      <Questions />
      <ButtonWps />
      <Footer />
    </main>
  );
}
