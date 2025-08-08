import React from "react";
import Image from "next/image";
import { IconEye, IconVideo, IconRobot } from "@tabler/icons-react";
import { PinContainer } from "./ui/3d-pin";

const Works = () => {
  const items = [
    {
      title: "Sindhu Eye Hospital",
      description:
        "We crafted a professional website for Sindhu Eye Hospital, enhancing their digital presence. Integrated SEO and Google Maps optimization to increase visibility in Mysore and Nanjangud, attracting more patients seeking advanced eye care.",
      header: (
        <Image
          src="/images/SindhuEyeHospital.png"
          alt="Sindhu Eye Hospital"
          width={500}
          height={192}
          className="w-full h-48 object-cover rounded-xl"
        />
      ),
      icon: <IconEye className="h-6 w-6 text-neutral-500" />,
      link: "https://www.sindhueyehospitals.com/",
    },
    {
      title: "National Video and Photo Studio",
      description:
        "Developed a dynamic website showcasing LED video wall rentals and professional photography services. Optimized for search engines and Google Maps, positioning them as a top choice in Mysuru’s event industry.",
      header: (
        <Image
          src="/images/NationalVideo.png"
          alt="National Video and Photo Studio"
          width={500}
          height={192}
          className="w-full h-48 object-cover rounded-xl"
        />
      ),
      icon: <IconVideo className="h-6 w-6 text-neutral-500" />,
      link: "https://www.nationalvideo.in/",
    },
    {
      title: "Agino Tech",
      description:
        "Launched a lead-generating website for Agino Tech, highlighting their AI-powered data analytics platform. Implemented SEO strategies to boost online visibility and credibility in the tech startup ecosystem.",
      header: (
        <Image
          src="/images/AginoTech.png"
          alt="Agino Tech"
          width={500}
          height={192}
          className="w-full h-48 object-cover rounded-xl"
        />
      ),
      icon: <IconRobot className="h-6 w-6 text-neutral-500" />,
      link: "https://www.agino.tech",
    },
  ];

  return (
    <div className="w-full px-4">
      <h3 className="text-3xl font-bold text-center mb-8">
        Our <span className="text-highlight">Works</span>
      </h3>

      <div className="flex flex-wrap justify-center gap-8">
        {items.map((item, index) => (
          <PinContainer key={index} title={item.title} href={item.link}>
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              {item.header}
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 mt-2">
                {item.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">{item.description}</span>
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
};

export default Works;
