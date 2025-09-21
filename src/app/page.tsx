import Image from "next/image";
import Hero from "./sections/Hero";
import About from "./sections/About";
import CTA from "./sections/CTA";
import Equaotherapy from "./sections/Equaotherapy";
import EquineTherapy from "./sections/EquineTherapy";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <About />
      {/* <Equaotherapy /> */}
      <EquineTherapy />
      <CTA />
    </div>
  );
}
