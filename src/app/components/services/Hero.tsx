import React from "react";
import { Cover } from "@/components/ui/cover";
import { Spotlight } from "@/components/ui/Spotlight";

const Hero = () => {
  return (
    <section className="relative w-screen h-screen bg-background text-foreground flex flex-col justify-center items-center overflow-hidden">
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
        <button className="mt-8 inline-flex h-12 items-center justify-center rounded-md border border-transparent bg-neon-yellow px-6 font-medium text-slate-100 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neon-yellow focus:ring-offset-2 focus:ring-offset-background">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
