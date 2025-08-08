"use client";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import ProjectCard from "./components/project-card";
import TechStack from "./components/tech-stack";
import ExperienceCard from "./components/experience-card";
import { FloatingDock } from "@/components/ui/floating-dock";
import Hero from "./components/Hero-section";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

export default function Page() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: (
        <img
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="sticky top-0 z-50 w-full border-b bg-gray-900">
        <div className="container mx-auto flex h-14 items-center px-4 md:px-6">
          <div className="mr-4">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="font-bold font-brush text-purple-500 sm:inline-block">
                Gourav R
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-2 ml-auto">
            <Button variant="outline">Resume</Button>
            <Button variant="outline">Services</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-screen h-[400px] -translate-x-1/2 -translate-y-1/2 bg-purple-400 dark:bg-purple-800 opacity-30 blur-3xl animate-blob"></div>
        </div>
        <Hero
          name="GR"
          title="Full-Stack Developer | AI & Emerging Technologies"
          bio="An experienced full-stack developer with a strong record of delivering end-to-end web applications. I am an expert in designing and building responsive user interfaces with React.js and Next.js, while architecting scalable back-end services using Python (FastAPI) and Node.js. My specialty is in integrating GenAI-powered features through advanced prompt engineering and managing the full application lifecycle, from database design to automated deployments with Docker and CI/CD pipelines."
          githubLink="https://github.com/g-gourav-r"
          linkedinLink="https://linkedin.com/in/gourav-r"
          email="gouravrchandra@gmail.com"
        />

        <section id="experience" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <ExperienceCard
              title="Associate Software Engineer"
              company="Blenheim Chalcot"
              location="Mumbai, India"
              duration="Sep 2023 - Present"
              responsibilities={[
                "Designed, developed, and deployed full-stack applications from the ground up, covering both front-end and back-end systems.",
                "Architected back-end services with Python (FastAPI) and Node.js to handle business logic and data.",
                "Managed the entire development lifecycle, from setting up databases (SQL/NoSQL) to automating deployments with Docker and CI/CD pipelines.",
              ]}
            />
            <ExperienceCard
              title="Associate Software Engineer"
              company="Blenheim Chalcot"
              location="Mumbai, India"
              duration="Sep 2023 - Present"
              responsibilities={[
                "Designed, developed, and deployed full-stack applications from the ground up, covering both front-end and back-end systems.",
                "Architected back-end services with Python (FastAPI) and Node.js to handle business logic and data.",
                "Managed the entire development lifecycle, from setting up databases (SQL/NoSQL) to automating deployments with Docker and CI/CD pipelines.",
              ]}
            />
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="OptiExtract | AI - IDP"
              description="An intelligent document parser built with PyTesseract, FastAPI, and React.js. It allows users to define templates for data extraction from structured files and uses AI for flexible key-value pair extraction from unstructured documents, reducing manual data entry."
              image="/placeholder.svg?height=400&width=600"
              link="#" // Update with project link
              tags={[
                "PyTesseract",
                "FastAPI",
                "React.js",
                "Docker",
                "PostgreSQL",
                "Cloud Run",
                "Cloud Tasks",
              ]}
            />
            <ProjectCard
              title="Agino AI Data Analyst"
              description="An AI-powered assistant for business users developed with Node.js, React.js, MongoDB, OpenAI, and Pinecone. It converts natural language questions into SQL-like queries, fetches data, and visualizes it with dynamic graphs and insights."
              image="/placeholder.svg?height=400&width=600"
              link="#" // Update with project link
              tags={[
                "Node.js",
                "React.js",
                "MongoDB",
                "OpenAI",
                "Pinecone",
                "AWS",
              ]}
            />
            <ProjectCard
              title="Query Ticket Automator"
              description="A lightweight full-stack tool developed to automate customer support ticket generation from a public web form. It integrates SMTP via Amazon SES to trigger ticket creation in Freshdesk, improving workflow efficiency for internal support teams."
              image="/placeholder.svg?height=400&width=600"
              link="#" // Update with project link
              tags={["Full-stack", "Amazon SES", "Freshdesk", "SMTP"]}
            />
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Tech Stack
          </h2>
          <TechStack />
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 Gourav R. All rights reserved.
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
      <div className="flex items-center justify-center h-[35rem] w-full">
        <FloatingDock
          mobileClassName="translate-y-20" // only for demo, remove for production
          items={links}
        />
      </div>
    </div>
  );
}
