import { Card } from "@/components/ui/card";
import Image from "next/image";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  image?: string;
  link?: string;
}

export default function CertificationCard({
  title,
  issuer,
  date,
  image,
  link,
}: CertificationCardProps) {
  return (
    <Card
      className="p-6 bg-white dark:bg-purple-950/40
                 shadow-xl dark:shadow-purple-900/40
                 border border-gray-100 dark:border-purple-700/30
                 transform transition-all duration-500 hover:-translate-y-3
                 hover:shadow-purple-400/30 dark:hover:shadow-purple-700/60"
    >
      <div className="flex items-center space-x-4">
        {image && (
          <div className="relative w-16 h-16 shrink-0">
            <Image
              src={image}
              alt={`${issuer} logo`}
              fill
              className="object-contain"
            />
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">{issuer}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Issued: {date}
          </p>
        </div>
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm text-purple-600 dark:text-purple-400 hover:underline"
        >
          View Credential
        </a>
      )}
    </Card>
  );
}
