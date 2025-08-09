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
          className="relative z-10 text-lg md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 text-center font-sans font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to Make <span className="text-neon-yellow">Your Presence</span>{" "}
          Online?
        </motion.h1>
        <motion.p
          className="text-gray-400 max-w-lg mx-auto my-2 text-sm md:text-lg text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I specialize in crafting innovative web solutions from start to
          finish. Let&apos;s discuss your ideas and turn them into a reality.
        </motion.p>
        <div className="flex justify-center relative z-10 mt-8">
          <FormModal />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
