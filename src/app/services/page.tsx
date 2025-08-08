import Hero from "../components/services/Hero";
import Services from "../components/services/Services";
import { Portfolio } from "../components/services/Portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      {/* Services Section */}
      <Services />
    </>
  );
}
