"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

// Interface for a single technology category
interface Technology {
  category: string;
  skills: string[];
}

const technologies: Technology[] = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript"],
  },
  {
    category: "AI & Emerging Technologies",
    skills: ["GenAI", "Prompt Engineering"],
  },
  {
    category: "Front End",
    skills: [
      "HTML",
      "CSS",
      "SCSS",
      "Bootstrap",
      "Tailwind CSS",
      "GSAP",
      "React JS",
      "Next JS",
    ],
  },
  {
    category: "Back End",
    skills: ["Node.js", "FastAPI", "Celery"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "SQLite", "Redis"],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      "Docker",
      "GitHub Actions",
      "Cloud Run",
      "Cloud Tasks",
      "AWS (EC2, S3, Elastic IP, Route 53)",
    ],
  },
  {
    category: "Tools & Practices",
    skills: [
      "RESTful APIs",
      "Scrum",
      "Jira",
      "Git",
      "GitHub",
      "Artifact Registry",
      "DNS Management",
    ],
  },
  {
    category: "CMS & Marketing",
    skills: ["WordPress", "HubSpot", "SEO", "Google Search Console"],
  },
];

// Explicitly type the variants object
const itemVariants: Variants = {
  hidden: { opacity: 1, y: 0, rotate: 0 },
  falling: {
    opacity: 0,
    y: 1000,
    rotate: [0, 10, -10, 5, -5, 0],
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
  reset: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function TechStack() {
  const [isFalling, setIsFalling] = useState<boolean>(false);

  const handleTouch = () => {
    setIsFalling(true);
  };

  const handleReset = () => {
    setIsFalling(false);
  };

  return (
    <>
      <div className="flex justify-center mb-6 space-x-4">
        <Button onClick={handleTouch} variant="outline" disabled={isFalling}>
          {isFalling ? "See? I told you!" : "Don't touch me!"}
        </Button>
        {isFalling && (
          <Button onClick={handleReset} disabled={!isFalling}>
            Reset
          </Button>
        )}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech) => (
          <Card
            key={tech.category}
            className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 grid:3"
          >
            <GlowingEffect
              blur={0}
              borderWidth={3}
              spread={80}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              {tech.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              <AnimatePresence>
                {tech.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    animate={isFalling ? "falling" : "reset"}
                    initial="hidden"
                    className="inline-flex items-center rounded-md bg-neon-yellow/40
px-2 py-1 text-xs font-medium text-neon-yellow
ring-1 ring-inset ring-neon-yellow/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </AnimatePresence>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
