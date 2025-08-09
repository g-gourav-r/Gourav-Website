import Hero from "../components/services/Hero";
import Services from "../components/services/Services";
import { Portfolio } from "../components/services/Portfolio";
import Testimonial from "../components/services/Testimonial";
import WhyWebsite from "../components/services/WhyWebsite";
import FAQAccordion from "../components/services/FAQAccordian";
import WebsitePackages from "../components/services/WebsitePackages";
import { Footer } from "../components/services/Footer";
import BackgroundPattern from "../components/services/BackgroundPattern";

export default function Home() {
  return (
    <div className="relative">
      <BackgroundPattern />
      {/* 1. Hero Section - The main introduction to your brand */}
      <Hero />

      {/* 2. Services Section - An overview of what you offer */}
      <Services />

      {/* 3. Why Website Section - Explains the value of your services */}
      <WhyWebsite />

      {/* 4. Portfolio Section - A showcase of your work to build confidence */}
      <Portfolio />

      {/* 5. Website Packages - Details your specific offerings and plans */}
      <WebsitePackages />

      {/* 6. Testimonial Section - Placeholder for social proof */}
      <Testimonial />

      {/* 7. FAQ Section - Answers common questions and addresses concerns */}
      <FAQAccordion />

      {/* 8. Contact CTA/Footer - The final call-to-action */}
      <Footer />
    </div>
  );
}
