"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FileCode,
  Container,
  Truck,
  Cloud,
  PartyPopper,
  LucideIcon,
} from "lucide-react";

// Define the type for each animation step
interface AnimatedIcon {
  icon: LucideIcon;
  key: string;
  label: string;
}

// Software lifecycle steps
const icons: AnimatedIcon[] = [
  { icon: FileCode, key: "code", label: "Write Code" },
  { icon: Container, key: "container", label: "Pack" },
  { icon: Truck, key: "truck", label: "Ship" },
  { icon: Cloud, key: "cloud", label: "Deploy" },
  { icon: PartyPopper, key: "party", label: "Ta-da!" },
];

// Animation variants
const iconVariants = {
  initial: { y: -20, opacity: 0, scale: 0.8 },
  animate: { y: 0, opacity: 1, scale: 1 },
  exit: { y: 20, opacity: 0, scale: 0.8 },
};

export default function AnimatedTitle() {
  const [currentIconIndex, setCurrentIconIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2000); // 2 seconds per step

    return () => clearInterval(timer);
  }, []);

  const currentIcon = icons[currentIconIndex];

  // Prevent render error
  if (!currentIcon) return null;

  const IconComponent = currentIcon.icon;

  return (
    <div className="flex flex-col items-center justify-center h-[100px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIcon.key}
          className="flex flex-col items-center text-purple-500"
          variants={iconVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4 }}
        >
          <IconComponent className="h-10 w-10 mb-1" />
          <span className="text-sm text-purple-400 font-medium tracking-wide">
            {currentIcon.label}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
