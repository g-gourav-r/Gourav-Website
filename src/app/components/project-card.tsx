import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  tags,
}: ProjectCardProps) {
  return (
    <Card
      className="overflow-hidden bg-white dark:bg-purple-950/40
shadow-xl dark:shadow-purple-900/40
border border-gray-100 dark:border-purple-700/30
transform transition-all duration-500 hover:-translate-y-3
hover:shadow-purple-400/30 dark:hover:shadow-purple-700/60 group"
    >
      <div className="relative aspect-video">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
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
              className="inline-flex items-center rounded-md bg-purple-200/50 dark:bg-purple-800/40
px-2 py-1 text-xs font-medium text-purple-800 dark:text-purple-200
ring-1 ring-inset ring-purple-600/20 dark:ring-purple-400/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        {link && (
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <ArrowRight className="h-4 w-4" />
            Learn More
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
