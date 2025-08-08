import { Card } from "@/components/ui/card";

const technologies = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript"],
  },
  {
    category: "AI & Emerging Technologies",
    skills: ["GenAI", "Prompt Engineering"],
  },
  {
    category: "Front End",
    skills: [
      "HTML",
      "CSS",
      "SCSS",
      "Bootstrap",
      "Tailwind CSS",
      "GSAP",
      "React JS",
      "Next JS",
    ],
  },
  {
    category: "Back End",
    skills: ["Node.js", "FastAPI", "Celery"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "SQLite", "Redis"],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      "Docker",
      "GitHub Actions",
      "Cloud Run",
      "Cloud Tasks",
      "AWS (EC2, S3, Elastic IP, Route 53)",
    ],
  },
  {
    category: "Tools & Practices",
    skills: [
      "RESTful APIs",
      "Scrum",
      "Jira",
      "Git",
      "GitHub",
      "Artifact Registry",
      "DNS Management",
    ],
  },
  {
    category: "CMS & Marketing",
    skills: ["WordPress", "HubSpot", "SEO", "Google Search Console"],
  },
];

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card
          key={tech.category}
          className="p-6 bg-white dark:bg-purple-950/40
                     shadow-xl dark:shadow-purple-900/40
                     border border-gray-100 dark:border-purple-700/30
                     transform transition-all duration-500 hover:-translate-y-3
                     hover:shadow-purple-400/30 dark:hover:shadow-purple-700/60"
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
            {tech.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-purple-200/50 dark:bg-purple-800/40
                           px-2 py-1 text-md font-medium text-purple-800 dark:text-purple-200
                           ring-1 ring-inset ring-purple-600/20 dark:ring-purple-400/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
