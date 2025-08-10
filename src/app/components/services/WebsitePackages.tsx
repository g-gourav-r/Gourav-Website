import React from "react";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import FormModal from "./FormModal";

// A single package's data
interface Package {
  name: string;
  idealFor: string;
  features: string[];
}

const packages: Package[] = [
  {
    name: "Static Website",
    idealFor:
      "Ideal for businesses needing a quick, impactful digital brochure or a professional portfolio with infrequent content updates.",
    features: [
      "Up to 3-5 Static Pages",
      "Responsive Design",
      "Basic Contact Form",
      "Standard Professional Design",
      "Social Media Integration",
      "Fast Loading",
      "One-Time Development",
    ],
  },
  {
    name: "WordPress CMS Website",
    idealFor:
      "Ideal for businesses that require dynamic content, a blog, or a scalable platform for future features like e-commerce.",
    features: [
      "Up to 7-12 Pages",
      "WordPress CMS for easy content management",
      "Premium Theme Customization",
      "Essential Plugins (SEO, security, speed)",
      "Integrated Blog",
      "Responsive Design",
      "Google Maps Integration",
      "Basic On-Page SEO",
      "Client Training Session",
    ],
  },
  {
    name: "Digital Analytics & Compliance",
    idealFor:
      "Businesses that need to track user behavior, measure marketing campaigns, and ensure cookie policy compliance.",
    features: [
      "Google Tag Manager (GTM) Setup",
      "Google Analytics 4 (GA4) Integration",
      "Conversion & Event Tracking",
      "Cookie Consent Banner",
      "Basic Data Reporting & Insights",
      "One-Time Setup & Training",
    ],
  },
  {
    name: "Custom Solutions",
    idealFor:
      "Businesses with unique or complex needs that require a tailored approach, from advanced features to full-scale enterprise applications.",
    features: [
      "Custom Feature Development",
      "Advanced API Integration",
      "Full-Stack Application Build",
      "Performance Optimization",
      "Dedicated Project Management",
      "Scalable Cloud Architecture",
      "Personalized Consultation",
    ],
  },
];

const WebsitePackages = () => {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Development <span className="text-neon-yellow">Packages</span>
        </h2>
        <p className="text-lg text-gray-400 mb-12">
          Choose a path that&apos;s right for you. We offer two primary options
          to cater to different needs, ensuring you get the best value for your
          foundational online presence.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className="flex flex-col h-full justify-between bg-black p-8 shadow-xl"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-500 text-sm mb-6">{pkg.idealFor}</p>

                <ul className="text-left space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <Check className="h-4 w-4 mr-2 text-neon-yellow" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <FormModal
                buttonClassName="w-full hover:bg-neon-yellow transition-colors px-6 font-medium transition-transform hover:scale-105  mx-auto sm:text-sm  h-8 border bg-neon-yellow/50 text-white hover:bg-neon-yellow  border-neon-yellow hover:text-black text-xs flex justify-center items-center rounded-2xl hover:shadow-lg duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                buttonText="Get a Quote"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsitePackages;
