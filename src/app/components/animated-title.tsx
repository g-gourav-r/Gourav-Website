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

// Define the type for an icon object in the icons array
interface AnimatedIcon {
  icon: LucideIcon;
  key: string;
}

const icons: AnimatedIcon[] = [
  { icon: FileCode, key: "code" },
  { icon: Container, key: "container" },
  { icon: Truck, key: "truck" },
  { icon: Cloud, key: "cloud" },
  { icon: Cloud, key: "cloud-2" },
  { icon: PartyPopper, key: "party" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const iconVariants = {
  initial: { y: -20, opacity: 0, scale: 0.5 },
  animate: { y: 0, opacity: 1, scale: 1 },
  exit: { y: 20, opacity: 0, scale: 0.5 },
};

export default function AnimatedTitle() {
  const [currentIconIndex, setCurrentIconIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  const currentIcon = icons[currentIconIndex];
  const IconComponent = currentIcon.icon;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-center space-x-2"
    >
      <motion.p
        variants={textVariants}
        className="text-xl font-medium text-gray-500 dark:text-gray-400"
      >
        From
      </motion.p>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIcon.key}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="text-purple-500"
        >
          <IconComponent className="h-6 w-6" />
        </motion.div>
      </AnimatePresence>
      <motion.p
        variants={textVariants}
        className="text-xl font-medium text-gray-500 dark:text-gray-400"
      >
        to
      </motion.p>
      <motion.p
        variants={textVariants}
        className="text-xl font-medium text-gray-500 dark:text-gray-400"
      >
        Cloud
      </motion.p>
    </motion.div>
  );
}
