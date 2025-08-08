"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "KS Praveen",
    company: "Sindhu Eye Hospital",
    feedback:
      "We entrusted them with our website, SEO, and Google Maps setup. The results were beyond our expectations! Our online visibility has significantly improved, and patients are finding us more easily. Highly recommended!",
  },
  {
    name: "Anuradha Manjunath",
    company: "National Video",
    feedback:
      "Their team transformed our online presence. From website development to SEO and Maps optimization, everything was handled professionally. We’ve seen a noticeable increase in customer inquiries. Truly a game-changer!",
  },
  {
    name: "Sanath",
    company: "Agino",
    feedback:
      "Our experience was fantastic! They built our website from scratch, optimized it for search engines, and ensured our business was visible on Google Maps. The comprehensive digital solution has boosted our brand’s credibility.",
  },
  {
    name: "Arjun Reddy",
    company: "Freelancer",
    feedback:
      "I was unsure about digital marketing, but they guided me patiently. Didn’t take the service but felt valued. Excellent approach!",
  },
  {
    name: "Meera Iyer",
    company: "Homemaker",
    feedback:
      "I had queries about building a personal blog. Even though I didn’t proceed, they explained everything without any pressure. That speaks volumes!",
  },
];

const Testimonial = () => {
  return (
    <div className="py-12 bg-background text-foreground">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Clients Say
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="p-6 shadow-md transition-transform transform hover:scale-105 bg-card"
          >
            <CardContent>
              <p className="text-sm italic text-muted-foreground mb-4">
                <Quote className="inline mr-2 text-accent" />
                {testimonial.feedback}
              </p>
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-muted-foreground">
                {testimonial.company}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
