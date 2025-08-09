import React from "react";
import { Globe, Search, BarChart } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import FormModal from "./FormModal";

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
    <section className="w-full py-16 px-4">
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
            <CardSpotlight key={index} className="relative p-6">
              <div className="absolute inset-0 bg-black opacity-10 rounded-2xl pointer-events-none"></div>
              <div className="relative flex justify-center items-center mb-4">
                {point.icon}
              </div>
              <h2 className="relative text-2xl font-semibold text-center mb-2">
                {point.title}
              </h2>
              <p className="relative text-muted-foreground text-center">
                {point.description}
              </p>
            </CardSpotlight>
          ))}
        </div>
        <div className="mt-12">
          <FormModal />
        </div>
      </div>
    </section>
  );
};

export default WhyWebsite;
