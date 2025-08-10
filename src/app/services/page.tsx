// This file would be at src/app/services/page.tsx

import Hero from "../components/services/Hero";
import Services from "../components/services/Services";
import { Portfolio } from "../components/services/Portfolio";
import Testimonial from "../components/services/Testimonial";
import WhyWebsite from "../components/services/WhyWebsite";
import FAQAccordion from "../components/services/FAQAccordian";
import WebsitePackages from "../components/services/WebsitePackages";
import { Footer } from "../components/services/Footer";
import BackgroundPattern from "../components/services/BackgroundPattern";
import Script from "next/script";
import Link from "next/link";
import FormModal from "../components/services/FormModal";
import { heroData } from "@/data/data";

// Define the SEO metadata for this specific page
export const metadata = {
  title: "Services - Gourav R",
  description:
    "Explore the full range of professional services I offer, including web development, consulting, and digital marketing to help your business grow and succeed.",
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        name: "Gourav R",
        url: "https://www.gouravr.com/services",
        description:
          "Providing custom website development, software development, SEO, and digital strategy to help businesses grow their online presence.",
        brand: {
          "@type": "Organization",
          name: "Gourav R",
          url: "https://www.gouravr.com/",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Website Development Packages",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Static Website",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "WordPress CMS Website",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Digital Analytics & Compliance",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Solutions",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "I'm not technical. How can I manage my website?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For non-technical users, I often recommend a CMS like WordPress, which provides a user-friendly interface for managing content, blogs, and other features without needing to write any code. I also offer a client training session to help you feel confident.",
            },
          },
          {
            "@type": "Question",
            name: "How much does a website cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The cost of a website varies based on its complexity, features, and design. I offer several packages, from static sites to custom solutions, and can provide a detailed quote after a free consultation to understand your specific needs.",
            },
          },
          {
            "@type": "Question",
            name: "Will my website work on mobile phones?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, all websites I build are designed with a mobile-first approach. They are fully responsive and optimized to look and function perfectly on all devices, including desktops, tablets, and mobile phones.",
            },
          },
          {
            "@type": "Question",
            name: "Can I update my website content myself?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, for CMS-based websites like WordPress, you will have full control to update and manage your content, images, and blog posts easily. For static sites, updates are handled on a case-by-case basis.",
            },
          },
          {
            "@type": "Question",
            name: "How long does it take to build a website?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The timeline depends on the scope of the project. A basic static website can be completed in a few weeks, while a more complex custom application may take several months. I will provide a clear timeline after our initial consultation.",
            },
          },
          {
            "@type": "Question",
            name: "Will my website show up on Google?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, a core part of my service is to ensure your website is search engine friendly. I implement technical SEO best practices and offer dedicated SEO services to help your site rank higher and be easily discoverable on Google.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="relative z-10">
      <Script
        id="schema-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="sticky top-0 z-50 w-full border-b backdrop-blur-lg">
        <div className="container mx-auto flex h-14 items-center px-4 md:px-6">
          <div className="mr-4">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="font-bold font-brush text-neon-yellow sm:inline-block">
                {heroData.name}
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-2 ml-auto">
            <FormModal buttonClassName="px-6 font-medium transition-transform hover:scale-105  mx-auto sm:text-sm  h-8 border bg-neon-yellow/50 text-white hover:bg-neon-yellow  border-neon-yellow hover:text-black text-xs flex justify-center items-center rounded-2xl hover:shadow-lg duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" />
          </div>
        </div>
      </header>
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
