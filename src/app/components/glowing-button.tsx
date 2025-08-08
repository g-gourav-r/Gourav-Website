"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import React, { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

// Define the props for GlowingButton
// We extend HTMLMotionProps<'button'> to inherit all standard button props
// and Framer Motion animation properties.
export interface GlowingButtonProps extends HTMLMotionProps<"button"> {
  className?: string;
}

export const GlowingButton = React.forwardRef<
  HTMLButtonElement,
  GlowingButtonProps
>(({ className, children, ...props }, ref) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 10px 2px rgba(168, 85, 247, 0.5)",
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-1 ring-inset ring-purple-600/20 dark:ring-purple-400/20 text-purple-600 dark:text-purple-400 bg-transparent hover:bg-purple-900/10",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
});

GlowingButton.displayName = "GlowingButton";
