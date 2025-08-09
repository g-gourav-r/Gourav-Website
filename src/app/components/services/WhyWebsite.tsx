import React from "react";
import { Globe, Search, BarChart } from "lucide-react";

const WhyWebsite = () => {
  const points = [
    {
      title: "Look Professional, Build Trust",
      description:
        "When people need a service, their first step is often a quick online search. A great website makes you look professional and reliable, building trust with potential customers right away.",
      icon: <Globe className="h-10 w-10 text-neon-yellow" />,
    },
    {
      title: "Get Found on Google",
      description:
        "Think of your website as your storefront on the world's biggest street: Google. With SEO, your business shows up higher in search results, so people can easily find you when they're looking for what you offer.",
      icon: <Search className="h-10 w-10 text-neon-yellow" />,
    },
    {
      title: "Know Your Customers Better",
      description:
        "Tools like Google Analytics show you what your customers are interested in. You can see which parts of your site they visit and what they like, helping you make smarter business decisions that lead to more sales.",
      icon: <BarChart className="h-10 w-10 text-neon-yellow" />,
    },
  ];

  return (
    <section className="w-full py-16 bg-background px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Why Your Business Needs{" "}
          <span className="text-neon-yellow">Online Presence</span>
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
          In a world where everyone starts their search online, a great website
          is your key to growth. Here&apos;s why getting a solid online presence
          is essential for your business.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {points.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white dark:bg-neutral-800 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4 flex justify-center text-center">
                {point.icon}
              </div>
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
          <button className="mt-8 inline-flex h-12 items-center justify-center rounded-md border border-transparent bg-neon-yellow px-6 font-medium text-slate-100 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neon-yellow focus:ring-offset-2 focus:ring-offset-background">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyWebsite;
