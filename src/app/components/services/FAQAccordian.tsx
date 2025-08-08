"use client";
import React, { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

const faqs = [
  {
    question: "I’m not technical. How can I manage my website?",
    answer:
      "A user manual will be provided to guide you through the process, making it easy to manage your website. Plus, full support will be available to help maintain and update your website for an entire year!",
  },
  {
    question: "How much does a website cost?",
    answer:
      "The cost depends on the design, features, and hosting plan. A customized quote can be provided based on specific needs.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "Yes! The website will be fully responsive and optimized for all devices, including mobiles, tablets, and desktops.",
  },
  {
    question: "Can I update my website content myself?",
    answer:
      "Absolutely! The website will be set up with a user-friendly content management system (CMS), making it easy to update content whenever needed.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the complexity of the site. A basic website may take just a few days, while a more advanced one can take a few weeks.",
  },
  {
    question: "Will my website show up on Google?",
    answer:
      "Yes, it will be optimized for search engines (SEO) to improve visibility and ranking on Google.",
  },
  {
    question: "What if I need changes after the website is live?",
    answer:
      "No problem! Updates and ongoing support can be provided whenever needed.",
  },
  {
    question: "Can I connect my website to social media?",
    answer:
      "Definitely! Social media links, feeds, and sharing options can be integrated to keep everything connected.",
  },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="w-full py-16 bg-white dark:bg-neutral-900 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-neutral-300 dark:border-neutral-700"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left py-4 flex justify-between items-center text-slate-800 dark:text-slate-100"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {activeIndex === index ? (
                  <IconChevronUp className="h-6 w-6 text-blue-500" />
                ) : (
                  <IconChevronDown className="h-6 w-6 text-blue-500" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="text-neutral-600 dark:text-neutral-400 pb-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
