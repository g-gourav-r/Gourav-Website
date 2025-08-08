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
  link?: string;
  tags: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

export const heroData: HeroData = {
  name: "Gourav R",
  title: "Full-Stack Developer",
  githubLink: "https://github.com/g-gourav-r",
  linkedinLink: "https://linkedin.com/in/gourav-r",
  email: "gouravrchandra@gmail.com",
};

export const experiences = [
  {
    title: "Associate Software Engineer",
    company: "Blenheim Chalcot",
    location: "Mumbai, India",
    duration: "Apr 2024 - Present",
    responsibilities: [
      "Collaborated with clients including Avado, Agilisys, Agilisys Transform, and Hive Learning to deliver innovative digital solutions.",
      "Developed and maintained full-stack applications with a strong focus on front-end excellence.",
    ],
  },
  {
    title: "Apprentice",
    company: "Blenheim Chalcot",
    location: "Mumbai, India",
    duration: "Sep 2023 - Apr 2024",
    responsibilities: [
      "Engaged in cutting-edge R&D using Python and FastAPI to streamline data aggregation from HRMS APIs and biometric systems.",
      "Delivered actionable insights by processing data from various sources.",
    ],
  },
  {
    title: "Chapter Leader",
    company: "U&I Trust",
    location: "Mysuru, Karnataka, India",
    duration: "Feb 2023 - Aug 2023",
    responsibilities: [
      "Directed strategic planning and budgeting for three centers.",
      "Mentored volunteer leaders to ensure efficient event execution and resource allocation.",
    ],
  },
  {
    title: "Google Cloud Facilitator",
    company: "Google Developer Student Clubs",
    location: "Mysuru, Karnataka, India",
    duration: "Nov 2022 - Jan 2023",
    responsibilities: [
      "Facilitated a Google Cloud Career Practitioner Course for over 100 students.",
      "Offered guidance to overcome challenges and clarify key concepts related to GCCP'22.",
    ],
  },
  {
    title: "Centre Leader",
    company: "U&I Trust",
    location: "Mysore, Karnataka, India",
    duration: "Mar 2022 - Feb 2023",
    responsibilities: [
      "Managed a dedicated team at an NGO focused on educational outreach.",
      "Oversaw center operations, budgeting, and resource allocation to maximize community impact.",
    ],
  },
  {
    title: "Content Writer",
    company: "Scaler · Freelance",
    location: "India",
    duration: "Dec 2021 - Sep 2022",
    responsibilities: [
      "Authored over 20 comprehensive articles on programming languages.",
      "Implemented SEO best practices to produce engaging, search engine friendly content.",
    ],
  },
];
export const projects: Project[] = [
  {
    title: "Agilisys Public Website",
    description: "Rebuilt and rebranded Agilisys's public-facing website end-to-end, designing the tech stack, developing full-stack features, and managing deployment. The front-end was rebuilt with responsive design, improved accessibility, and enhanced SEO. Engineered scalable back-end services including a custom job board, traffic analytics, DNS migration, and IP-blocking.",
    link: "https://www.agilisys.co.uk",
    tags: ["Wordpress", "PHP", "MySQL", "DNS Management", "SEO"],
  },
  {
    title: "QuickScore AI Evaluation Tool",
    description: "Designed and launched a full-stack AI evaluation tool for the Chartered Institute of Personnel and Development, cutting grading time by 85% via prompt engineering and intelligent response analysis. It features a clean, accessible UI and a secure back-end with JWT authentication and a relational MySQL database.",
    link: "https://avadolearning.com/",
    tags: ["AI", "Prompt Engineering","JWT", "APIs","LMS", "MySQL"],
  },
  {
    title: "Query Ticket Automator",
    description: "Developed a lightweight full-stack tool to automate customer support ticket generation from a public web form. The system integrates SMTP via Amazon SES for automated emails that trigger Freshdesk ticket creation, improving workflow efficiency and reducing response time.",
    link: "#",
    tags: ["Amazon SES", "Freshdesk", "SMTP"],
  },
  {
    title: "OptiExtract | AI - IDP",
    description: "Built an intelligent document parser using PyTesseract, FastAPI, and React.js that allows users to define templates to extract data from fixed coordinates in structured files and uses AI for flexible key-value pair extraction from unstructured documents. The cloud-native system uses PostgreSQL, Cloud Run, Docker, and orchestrates bulk uploads with Cloud Tasks and Pub/Sub.",
    link: "https://www.optiextract.com",
    tags: [
      "PyTesseract",
      "FastAPI",
      "React.js",
      "PostgreSQL",
      "Cloud Run",
      "Docker",
      "Cloud Tasks",
      "Pub/Sub",
    ],
  },
  {
    title: "Agino AI Data Analyst",
    description: "An AI-powered assistant for business users developed end-to-end using Node.js, React.js, MongoDB, OpenAI, and Pinecone. The assistant converts plain English questions into SQL-like queries, fetches data, and visualizes it with dynamic graphs. The application is deployed on AWS using S3 and Elastic Beanstalk.",
    link: "https://www.agino.tech",
    tags: ["Node.js", "React.js", "MongoDB", "OpenAI", "Pinecone", "AWS"],
  },
];

export const certifications: Certification[] = [
  {
    title: "Cloud Digital Leader",
    issuer: "Google Cloud",
    date: "November 2023",
    link: "https://www.credential.net/e2c9084f-80d6-4b8b-8e8e-36372c5e6eaf#acc.KiLlJeC5",
  },
  {
    title: "WebOps Certified Developer",
    issuer: "Pantheon",
    date: "September 2023",
    link: "https://www.credential.net/faa4cb10-c860-4eed-b46f-20192aaac688#acc.XtfVkn2x",
  },
];