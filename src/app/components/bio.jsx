// components/bio.jsx

import React from "react";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Bio({
  name,
  title,
  bio,
  photoUrl,
  githubLink,
  linkedinLink,
  email,
}) {
  return (
    <section
      id="about"
      className="py-12 md:py-24 lg:py-32 flex items-center justify-center min-h-screen text-center"
    >
      <div className="mx-auto max-w-3xl space-y-4 relative z-10">
        {photoUrl && (
          <div className="flex justify-center mb-6">
            <Image
              src={photoUrl}
              alt={name}
              width={160}
              height={160}
              className="rounded-full border-4 border-purple-500 shadow-lg object-cover"
            />
          </div>
        )}
        <small className="text-sm font-semibold text-gray-500 dark:text-gray-400">
          Hey there, I'm
        </small>
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 text-transparent bg-clip-text">
          {name}
        </h1>
        <p className="text-xl font-medium text-gray-500 dark:text-gray-400">
          {title}
        </p>
        <p className="mx-auto max-w-[700px] text-lg text-gray-500 dark:text-gray-400">
          {bio}
        </p>
        <div className="flex justify-center space-x-4 pt-6">
          {githubLink && (
            <Link href={githubLink} target="_blank">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
          )}
          {linkedinLink && (
            <Link href={linkedinLink} target="_blank">
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          )}
          {email && (
            <Link href={`mailto:${email}`}>
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
