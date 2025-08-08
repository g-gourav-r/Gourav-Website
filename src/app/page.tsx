// src/app/page.tsx

"use client";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";
import ProjectCard from "./components/project-card";
import TechStack from "./components/tech-stack";
import ExperienceCard from "./components/experience-card";
import CertificationCard from "./components/certification-card";
// import { FloatingDock } from "@/components/ui/floating-dock";
import InteractiveHero from "./components/interactive-hero";

// Import data from the new file
import { heroData, experiences, projects, certifications } from "@/data/data";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="sticky top-0 z-50 w-full border-b bg-gray-900">
        <div className="container mx-auto flex h-14 items-center px-4 md:px-6">
          <div className="mr-4">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="font-bold font-brush text-purple-500 sm:inline-block">
                {heroData.name}
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-2 ml-auto">
            <Button variant="outline">Resume</Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 md:px-6">
        <InteractiveHero {...heroData} isLightOn={true} />
        <section id="experience" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 text-transparent bg-clip-text">
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </section>
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 text-transparent bg-clip-text">
            Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
        <section id="tech-stack" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-center bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 text-transparent bg-clip-text">
            Tech Stack
          </h2>
          <small className="block text-center text-gray-500 dark:text-gray-400 mb-12">
            A versatile developer with the right skills for your next big
            project.
          </small>
          <TechStack />
        </section>
        <section id="certifications" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Certifications
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </section>
        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Get In Touch
          </h2>
          <div className="max-w-xl mx-auto text-center space-y-4">
            <p className="text-lg text-gray-500 dark:text-gray-400">
              I&apos;m currently open to new opportunities. Whether you have a
              question or just want to say hi, my inbox is always open.
            </p>
            <Link href={`mailto:${heroData.email}`}>
              <Button size="lg" className="px-8 py-6 text-base">
                <Mail className="mr-2 h-5 w-5" />
                Say Hello
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 {heroData.name}. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
      <div className="flex fixed items-center justify-center w-full">
        {/* <FloatingDock
          items={links}
          desktopClassName="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
          mobileClassName="fixed bottom-4 right-2 -translate-x-1/2 z-50"
        /> */}
      </div>
    </div>
  );
}
