import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  description,
  link,
  tags,
}: ProjectCardProps) {
  return (
    <Card className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 grid:3 flex justify-between">
      <GlowingEffect
        blur={0}
        borderWidth={3}
        spread={80}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <CardContent className="p-6">
        <h3 className="font-semibold text-xl mb-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-neon-yellow/40
px-2 py-1 text-xs font-medium text-neon-yellow
ring-1 ring-inset ring-neon-yellow/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      {link && (
        <CardFooter className="p-6 pt-0">
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-neon-yellow transition-colors"
          >
            <ArrowRight className="h-4 w-4" />
            Learn More
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
