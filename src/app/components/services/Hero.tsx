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

        <FormModal buttonClassName="mt-6 px-6 font-medium transition-transform hover:scale-105  mx-auto sm:text-sm  h-8 border bg-neon-yellow/50 text-white hover:bg-neon-yellow  border-neon-yellow hover:text-black text-xs flex justify-center items-center rounded-2xl hover:shadow-lg duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" />
      </div>
    </section>
  );
};

export default Hero;
