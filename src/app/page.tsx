// src/app/page.tsx

"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProjectCard from "./components/project-card";
import TechStack from "./components/tech-stack";
import ExperienceCard from "./components/experience-card";
import CertificationCard from "./components/certification-card";
// import { FloatingDock } from "@/components/ui/floating-dock";
import Hero from "./components/Hero-section";
import BackgroundPattern from "./components/services/BackgroundPattern";

// Import data from the new file
import { heroData, experiences, projects, certifications } from "@/data/data";

export default function Page() {
  return (
    <div className="min-h-screen bg-background relative z-10">
      <BackgroundPattern />
      <header className="sticky top-0 z-50 w-full border-b backdrop-blur-lg">
        <div className="container mx-auto flex h-14 items-center px-4 md:px-6">
          <div className="mr-4">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="font-bold font-brush text-neon-yellow sm:inline-block">
                {heroData.name}
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-2 ml-auto">
            {/* <Link href="/services">
              <Button
                type="button"
                className="px-6 font-medium transition-transform hover:scale-105  mx-auto sm:text-sm  h-8 border bg-neon-yellow/50 text-white hover:bg-neon-yellow  border-neon-yellow hover:text-black text-xs flex justify-center items-center rounded-2xl hover:shadow-lg duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              >
                Services
              </Button>
            </Link> */}

            <Link href="/Gourav_R_Resume.pdf">
              <Button
                type="button"
                className=" px-6 font-medium transition-transform hover:scale-105  mx-auto sm:text-sm  h-8 border bg-neon-yellow/50 text-white hover:bg-neon-yellow  border-neon-yellow hover:text-black text-xs flex justify-center items-center rounded-2xl hover:shadow-lg duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              >
                Download Resume
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 md:px-6">
        <Hero {...heroData} isLightOn={true} />
        <section id="experience" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-gradient-to-b from-neon-yellow via-lime-300 to-neon-yellow text-transparent bg-clip-text">
            Professional Experience
          </h2>
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </section>
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter leading-relaxed sm:text-4xl md:text-5xl mb-12 text-center bg-gradient-to-b from-neon-yellow via-lime-300 to-neon-yellow text-transparent bg-clip-text">
            Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
        <section id="tech-stack" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter leading-relaxed sm:text-4xl md:text-5xl mb-12 text-center bg-gradient-to-b from-neon-yellow via-lime-300 to-neon-yellow text-transparent bg-clip-text">
            Tech Stack
          </h2>
          <small className="block text-center text-gray-500 dark:text-gray-400 mb-12">
            A versatile developer with the right skills for your next big
            project.
          </small>
          <TechStack />
        </section>
        <section id="certifications" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter leading-relaxed sm:text-4xl md:text-5xl mb-12 text-center bg-gradient-to-b from-neon-yellow via-lime-300 to-neon-yellow text-transparent bg-clip-text">
            Certifications
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </section>
        <section id="contact" className="py-12 md:py-24 lg:py-32 border-t">
          <h2 className="text-3xl font-bold tracking-tighter leading-relaxed sm:text-4xl md:text-5xl mb-12 text-center bg-gradient-to-b from-neon-yellow via-lime-300 to-neon-yellow text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <div className="max-w-xl mx-auto text-center space-y-4">
            <p className="text-lg text-gray-500 dark:text-gray-400">
              I&apos;m currently open to new opportunities. Whether you have a
              question or just want to say hi, my inbox is always open.
            </p>
            <Link href={`mailto:${heroData.email}`}>
              <Button
                type="button"
                className=" px-6 font-medium transition-transform hover:scale-105  mx-auto sm:text-sm  h-8 border bg-neon-yellow/50 text-white hover:bg-neon-yellow  border-neon-yellow hover:text-black text-xs flex justify-center items-center rounded-2xl hover:shadow-lg duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              >
                Let&apos;s Connect
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container mx-auto flex flex-col justify-center gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 {heroData.name}. All rights reserved.
          </p>
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
