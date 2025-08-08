import React from "react";
import { IconGlobe, IconSearch, IconChartBar } from "@tabler/icons-react";

const WhyWebsite = () => {
  const points = [
    {
      title: "Build Credibility & Trust",
      description:
        "A professional website establishes your business's credibility and builds trust with potential customers. In today's digital age, customers expect businesses to have an online presence.",
      icon: <IconGlobe className="h-10 w-10 text-blue-500" />,
    },
    {
      title: "Increase Visibility with SEO",
      description:
        "Search Engine Optimization (SEO) helps your website rank higher on search engines, driving organic traffic to your site. This increases your visibility to potential customers actively searching for your products or services.",
      icon: <IconSearch className="h-10 w-10 text-green-500" />,
    },
    {
      title: "Data-Driven Decisions with Google Analytics",
      description:
        "Google Analytics provides valuable insights into customer behavior, helping you make informed marketing decisions. Understand what works and optimize your digital strategy accordingly.",
      icon: <IconChartBar className="h-10 w-10 text-purple-500" />,
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-neutral-900 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Why Your Business Needs a Website
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
          In today&apos;s digital era, having a website is crucial for growth
          and success. Learn how a strategic online presence, SEO, and Google
          Analytics can elevate your business.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {points.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white dark:bg-neutral-800 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                {point.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyWebsite;
