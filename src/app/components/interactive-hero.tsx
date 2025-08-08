"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Lightbulb } from "lucide-react";
import { GlowingButton } from "./glowing-button";
import Hero from "./Hero-section";
import type { HeroProps } from "./Hero-section"; // Corrected import for the type

// Define the props for the InteractiveHero component
// It takes all the same props as the Hero component
interface InteractiveHeroProps extends HeroProps {}

const InteractiveHero = (props: InteractiveHeroProps) => {
  const [isLightOn, setIsLightOn] = useState<boolean>(true);
  const heroRef = useRef<HTMLDivElement>(null);

  const handleToggleLight = () => {
    setIsLightOn(!isLightOn);
  };

  return (
    <div className={`relative ${isLightOn ? "bg-gray-900" : "bg-black"}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLightOn ? 0 : 1 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 bg-black z-[60] pointer-events-none"
      />

      <Hero {...props} ref={heroRef} isLightOn={isLightOn} />

      <AnimatePresence>
        {!isLightOn && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="fixed bottom-10 right-10 z-[70]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1.2,
                opacity: 1,
                transition: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                  ease: "easeInOut",
                },
              }}
              className="absolute inset-0 -m-8 rounded-full z-[-1]"
              style={{
                background:
                  "radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, rgba(0,0,0,0) 70%)",
              }}
            />

            <GlowingButton
              onClick={handleToggleLight}
              className="p-4 flex items-center gap-2"
            >
              <Lightbulb className="h-5 w-5" />
              Turn On Lights
            </GlowingButton>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isLightOn && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="fixed bottom-10 right-10 z-[70]"
          >
            <GlowingButton
              onClick={handleToggleLight}
              className="p-4 flex items-center gap-2 ring-red-600/20 text-red-600 dark:ring-red-400/20 dark:text-red-400"
            >
              <AlertTriangle className="h-5 w-5" />
              DO NOT CLICK ME !!
            </GlowingButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveHero;
