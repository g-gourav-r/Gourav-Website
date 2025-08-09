"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    name: "KS Praveen",
    title: "Sindhu Eye Hospital",
    quote:
      "We entrusted them with our website, SEO, and Google Maps setup. The results were beyond our expectations! Our online visibility has significantly improved, and patients are finding us more easily. Highly recommended!",
  },
  {
    name: "Anuradha Manjunath",
    title: "National Video",
    quote:
      "Their team transformed our online presence. From website development to SEO and Maps optimization, everything was handled professionally. We've seen a noticeable increase in customer inquiries. Truly a game-changer!",
  },
  {
    name: "Sanath",
    title: "Agino",
    quote:
      "Our experience was fantastic! They built our website from scratch, optimized it for search engines, and ensured our business was visible on Google Maps. The comprehensive digital solution has boosted our brand's credibility.",
  },
  {
    name: "Arjun Reddy",
    title: "Freelancer",
    quote:
      "I was unsure about digital marketing, but they guided me patiently. Didn't take the service but felt valued. Excellent approach!",
  },
  {
    name: "Meera Iyer",
    title: "Homemaker",
    quote:
      "I had queries about building a personal blog. Even though I didn't proceed, they explained everything without any pressure. That speaks volumes!",
  },
];

const Testimonial = () => {
  return (
    <div className="py-12 text-foreground">
      <h2 className="text-5xl font-bold text-center mb-8">
        What Our <span className="text-neon-yellow">Clients</span> Say
      </h2>

      <div className=" rounded-md flex flex-col antialiased bg-background dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="fast"
        />
      </div>
    </div>
  );
};

export default Testimonial;
