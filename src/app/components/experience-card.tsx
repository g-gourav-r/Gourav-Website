import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

const ExperienceCard = ({
  title,
  company,
  location,
  duration,
  responsibilities,
}: ExperienceCardProps) => {
  return (
    <Card className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 grid:3">
      {" "}
      <GlowingEffect
        blur={0}
        borderWidth={3}
        spread={80}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {duration}
        </span>
      </div>
      <p className="text-md text-gray-700 dark:text-gray-300 mb-4">
        {company} - {location}
      </p>
      <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </Card>
  );
};
export default ExperienceCard;
