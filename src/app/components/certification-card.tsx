import { Card, CardFooter } from "@/components/ui/card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export default function CertificationCard({
  title,
  issuer,
  date,
  link,
}: CertificationCardProps) {
  return (
    <Card className="relative h-full rounded-2xl border p-5 md:rounded-3xl md:p-3 grid:3 flex justify-between">
      <GlowingEffect
        blur={0}
        borderWidth={3}
        spread={80}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="flex items-center space-x-4">
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
        <CardFooter className="p-0">
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
