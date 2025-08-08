// src/data/data.ts

// import { Github, Home, FileText, Terminal, Mail, Award } from "lucide-react";

// --- Interfaces for type safety ---

export interface Link {
  href: string;
  title: string;
  icon: React.ReactNode;
}

export interface HeroData {
  name: string;
  title: string;
  bio: string;
  githubLink: string;
  linkedinLink: string;
  email: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

export interface Project {
  title: string;
  description: string;
  image?: string;
  link: string;
  tags: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  image?: string;
  link: string;
}

export const heroData: HeroData = {
  name: "Gourav R",
  title: "Full-Stack Developer | AI & Emerging Technologies",
  bio: "An experienced full-stack developer with a strong record of delivering end-to-end web applications. I am an expert in designing and building responsive user interfaces with React.js and Next.js, while architecting scalable back-end services using Python (FastAPI) and Node.js. My specialty is in integrating GenAI-powered features through advanced prompt engineering and managing the full application lifecycle, from database design to automated deployments with Docker and CI/CD pipelines.",
  githubLink: "https://github.com/g-gourav-r",
  linkedinLink: "https://linkedin.com/in/gourav-r",
  email: "gouravrchandra@gmail.com",
};

export const experiences: Experience[] = [
  {
    title: "Associate Software Engineer",
    company: "Blenheim Chalcot",
    location: "Mumbai, India",
    duration: "Sep 2023 - Present",
    responsibilities: [
      "Designed, developed, and deployed full-stack applications from the ground up, covering both front-end and back-end systems.",
      "Architected back-end services with Python (FastAPI) and Node.js to handle business logic and data.",
      "Managed the entire development lifecycle, from setting up databases (SQL/NoSQL) to automating deployments with Docker and CI/CD pipelines.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "Blenheim Chalcot",
    location: "Mumbai, India",
    duration: "Sep 2023 - Present",
    responsibilities: [
      "Designed, developed, and deployed full-stack applications from the ground up, covering both front-end and back-end systems.",
      "Architected back-end services with Python (FastAPI) and Node.js to handle business logic and data.",
      "Managed the entire development lifecycle, from setting up databases (SQL/NoSQL) to automating deployments with Docker and CI/CD pipelines.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "OptiExtract | AI - IDP",
    description: "An intelligent document parser built with PyTesseract, FastAPI, and React.js. It allows users to define templates for data extraction from structured files and uses AI for flexible key-value pair extraction from unstructured documents, reducing manual data entry.",
    link: "#",
    tags: [
      "PyTesseract",
      "FastAPI",
      "React.js",
      "Docker",
      "PostgreSQL",
      "Cloud Run",
      "Cloud Tasks",
    ],
  },
  {
    title: "Agino AI Data Analyst",
    description: "An AI-powered assistant for business users developed with Node.js, React.js, MongoDB, OpenAI, and Pinecone. It converts natural language questions into SQL-like queries, fetches data, and visualizes it with dynamic graphs and insights.",
    link: "#",
    tags: ["Node.js", "React.js", "MongoDB", "OpenAI", "Pinecone", "AWS"],
  },
  {
    title: "Query Ticket Automator",
    description: "A lightweight full-stack tool developed to automate customer support ticket generation from a public web form. It integrates SMTP via Amazon SES to trigger ticket creation in Freshdesk, improving workflow efficiency for internal support teams.",
    link: "#",
    tags: ["Full-stack", "Amazon SES", "Freshdesk", "SMTP"],
  },
];

export const certifications: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "October 2023",
    image: "/aws-logo.png",
    link: "https://www.credly.com/badges/your-aws-badge-id",
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    date: "September 2022",
    image: "/ibm-logo.png",
    link: "https://www.credly.com/badges/your-ibm-badge-id",
  },
];