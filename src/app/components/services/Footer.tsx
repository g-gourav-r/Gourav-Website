"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "framer-motion";
import FormModal from "./FormModal";

export function Footer() {
  return (
    <div className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <motion.h1
          className="relative z-10 text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 text-center font-sans font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to Make <span className="text-neon-yellow">Your Presence</span>{" "}
          Online?
        </motion.h1>
        <motion.p
          className="text-gray-400 max-w-lg mx-auto my-2 text-lg text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I specialize in crafting innovative web solutions from start to
          finish. Let&apos;s discuss your ideas and turn them into a reality.
        </motion.p>
        <div className="flex justify-center relative z-10 mt-8">
          <FormModal buttonClassName="px-6 font-medium transition-transform hover:scale-105  mx-auto sm:text-sm  h-8 border bg-neon-yellow/50 text-white hover:bg-neon-yellow  border-neon-yellow hover:text-black text-xs flex justify-center items-center rounded-2xl hover:shadow-lg duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
