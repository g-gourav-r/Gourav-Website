import React from "react";
import { cn } from "@/lib/utils";

interface BackgroundPatternProps {
  className?: string;
}

/**
 * A responsive background pattern component that uses a fixed logo image.
 * The image scales down on mobile and is positioned behind all other content.
 */
export default function BackgroundPattern({
  className,
}: BackgroundPatternProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 bg-no-repeat bg-right-bottom opacity-20",
        "sm:bg-[length:50px] md:bg-[length:50px] lg:bg-[length:50px]",
        className
      )}
      style={{
        backgroundImage: 'url("/logo.png")',
        filter: "blur(3px)",
        backgroundSize: "100px",
        zIndex: -1,
      }}
    />
  );
}
