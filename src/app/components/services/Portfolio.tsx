"use client";
import React from "react";
import Carousel from "@/components/ui/carousel";
import { motion } from "framer-motion";

interface SlideData {
  title: string;
  button: string;
  src: string;
  href: string;
}

export function Portfolio() {
  const slideData: SlideData[] = [
    {
      title: "Agino Tech",
      button: "View",
      src: "/portfolio/Agino Tech.png",
      href: "https://www.agino.tech",
    },
    {
      title: "National Video and Photo Studio",
      button: "View",
      src: "/portfolio/National Video and Photo Studio.png",
      href: "https://www.nationalvideo.in/",
    },
    {
      title: "OptiExtract",
      button: "View",
      src: "/portfolio/OptiExtract.png",
      href: "https://www.optiextract.com",
    },
    {
      title: "Sindhu Eye Hospitals",
      button: "View",
      src: "/portfolio/Sindhu Eye Hospitals.png",
      href: "https://www.sindhueyehospital.com",
    },
    {
      title: "TwinTring",
      button: "View",
      src: "/portfolio/TwinTring.png",
      href: "https://www.twintring.in",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 text-foreground overflow-x-hidden">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-neon-yellow">Works</span>
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A selection of projects that showcase my skills and passion for
          building innovative solutions.
        </motion.p>
      </div>
      <div className="relative mx-auto max-w-4xl">
        <Carousel slides={slideData} />
      </div>
    </section>
  );
}
