import React from "react";

// Define the types for the props this component expects
interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

export default function ExperienceCard({
  title,
  company,
  location,
  duration,
  responsibilities,
}: ExperienceCardProps) {
  return (
    <div
      className="p-6 bg-white dark:bg-purple-950/40
                  shadow-xl dark:shadow-purple-900/40
                  border border-gray-100 dark:border-purple-700/30
                  transform transition-all duration-500 hover:-translate-y-3
                  hover:shadow-purple-400/30 dark:hover:shadow-purple-700/60"
    >
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
    </div>
  );
}
