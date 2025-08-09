import React from "react";
import { Cover } from "@/components/ui/cover";
import { Spotlight } from "@/components/ui/Spotlight";
import FormModal from "./FormModal";

const Hero = () => {
  return (
    <section className="relative w-screen h-screen text-foreground flex flex-col justify-center items-center overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="max-w-6xl mx-auto text-center px-6 z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
          Accelerate Your Business Growth <br />
          and <span className="text-neon-yellow">
            Reach More Customers
          </span> at <Cover>warp speed</Cover>
        </h1>
        <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mt-4 max-w-3xl mx-auto">
          Take your business to the next level with a powerful online presence.
          Connect with your audience,{" "}
          <span className="text-neon-yellow">boost visibility</span>, and drive{" "}
          <span className="text-neon-yellow">rapid growth</span>. Let us help
          you succeed in the digital world.
        </p>

        <FormModal />
      </div>
    </section>
  );
};

export default Hero;
