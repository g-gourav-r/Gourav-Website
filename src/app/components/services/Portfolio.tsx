"use client";

import Carousel from "@/components/ui/carousel";
export function Portfolio() {
  const slideData = [
    {
      title: "Agino Tech",
      button: "Explore Component",
      src: "/portfolio/Agino Tech.png",
      link: "/projects/agino-tech",
    },
    {
      title: "National Video and Photo Studio",
      button: "Explore Component",
      src: "/portfolio/National Video and Photo Studio.png",
      link: "/projects/national-video-photo-studio",
    },
    {
      title: "OptiExtract",
      button: "Explore Component",
      src: "/portfolio/OptiExtract.png",
      link: "/projects/optiextract",
    },
    {
      title: "Sindhu Eye Hospitals",
      button: "Explore Component",
      src: "/portfolio/Sindhu Eye Hospitals.png",
      link: "/projects/sindhu-eye-hospitals",
    },
    {
      title: "TwinTring",
      button: "Explore Component",
      src: "/portfolio/TwinTring.png",
      link: "/projects/twintring",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
