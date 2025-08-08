import React from "react";
import {
  Globe,
  Search,
  MapPin,
  BarChart,
  Code,
  TrendingUp,
} from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const services = [
  {
    title: "Website Development",
    description:
      "Custom Website Development & Design – WordPress, Shopify, E-commerce, and Custom Web Apps. Fast, responsive, and SEO-friendly.",
    icon: <Globe className="h-12 w-12 text-neon-yellow" />,
    link: "/services/website-development",
  },
  {
    title: "Custom Software Development",
    description:
      "Requirement-based full-stack application development using modern technologies like FastAPI and React. I build scalable, end-to-end solutions tailored to your unique business needs.",
    icon: <Code className="h-12 w-12 text-neon-yellow" />,
    link: "/services/custom-software-development",
  },
  {
    title: "SEO Services",
    description:
      "Expert SEO Strategies for Higher Rankings – On-page, off-page, local SEO, and technical SEO.",
    icon: <Search className="h-12 w-12 text-neon-yellow" />,
    link: "/services/seo-services",
  },
  {
    title: "Google Business Setup",
    description:
      "Google Business & Google Maps Optimization – Listing creation, verification, and optimization.",
    icon: <MapPin className="h-12 w-12 text-neon-yellow" />,
    link: "/services/google-business-setup",
  },
  {
    title: "Google Tags & Analytics",
    description:
      "Google Tag Manager & Analytics Setup – Conversion tracking, event tracking, and analytics reporting.",
    icon: <BarChart className="h-12 w-12 text-neon-yellow" />,
    link: "/services/google-tags-analytics",
  },
  {
    title: "Digital Strategy & Consultation",
    description:
      "Leverage data and technical expertise to develop a robust digital strategy, improve online presence, and optimize performance for tangible business growth.",
    icon: <TrendingUp className="h-12 w-12 text-neon-yellow" />,
    link: "/services/digital-strategy",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-8 bg-background text-foreground overflow-x-hidden">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Our Expert <span className="text-neon-yellow">Services</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Explore our services: website design, SEO, Google Maps optimization,
          and Google Business setup to drive more leads and customers to your
          business.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <CardSpotlight key={index} className="relative p-6">
            <div className="absolute inset-0 bg-black opacity-10 rounded-2xl pointer-events-none"></div>
            <div className="relative flex justify-center items-center mb-4">
              {service.icon}
            </div>
            <h2 className="relative text-2xl font-semibold text-center mb-2">
              {service.title}
            </h2>
            <p className="relative text-muted-foreground text-center">
              {service.description}
            </p>
          </CardSpotlight>
        ))}
      </div>
    </section>
  );
};

export default Services;
