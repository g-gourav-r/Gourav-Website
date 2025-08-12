"use client";
import { useState } from "react";
import { Linkedin, Github, Globe, Rss, FileText } from "lucide-react"; // Importing icons

// This is the main application component.
export default function App() {
  // Use state to manage the user's links and bio.
  const [links, setLinks] = useState([
    {
      name: "Resume / CV",
      url: "https://www.gouravr.com/Gourav_R_Resume.pdf",
      icon: <FileText size={24} />,
    },
    {
      name: "Portfolio / Personal Website",
      url: "https://gouravr.com",
      icon: <Globe size={24} />,
    },
    {
      name: "LinkedIn Profile",
      url: "https://www.linkedin.com/in/gourav-r",
      icon: <Linkedin size={24} />,
    },
    {
      name: "Technical Blogs",
      url: "https://www.scaler.com/topics/author/gourav-r/",
      icon: <Rss size={24} />,
    },
    {
      name: "GitHub Profile",
      url: "https://github.com/g-gourav-r",
      icon: <Github size={24} />,
    },

    // You can add more links here as needed.
    // {
    //   name: 'Blog',
    //   url: 'https://your-blog.com',
    //   icon: <FileText size={24} />,
    // },
  ]);

  const [bio, setBio] = useState({
    name: "Gourav R",
    title: "Associate Software Engineer",
    summary:
      "An experienced full-stack developer with a strong record of delivering end-to-end web applications. Expert in designing responsive user interfaces with React.js and Next.js and architecting scalable back-end services using Python (FastAPI) and Node.js. I specialize in integrating GenAI-powered features and manage the full application lifecycle, from database design to automated deployments.",
  });

  return (
    <div className="min-h-screen bg-slate-800 text-white flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-xl w-full bg-slate-900 rounded-2xl p-6 shadow-xl border border-slate-700">
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center text-neon-yellow font-brush text-3xl font-bold mb-4">
            {/* You can replace this with an image tag: <img src="your-image-url.jpg" alt="Your Name" className="w-full h-full rounded-full object-cover"/> */}
            GR
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 text-slate-100">
            {bio.name}
          </h1>
          <h2 className="text-lg sm:text-xl font-medium text-neon-yellow mb-4">
            {bio.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-md">
            {bio.summary}
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-slate-700 hover:bg-slate-600 transition-colors duration-200 rounded-xl group"
            >
              <div className="flex items-center space-x-4">
                <div className="text-neon-yellow group-hover:scale-110 transition-transform duration-200">
                  {link.icon}
                </div>
                <span className="text-base font-medium text-slate-200 group-hover:text-white transition-colors duration-200">
                  {link.name}
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-400 group-hover:text-white transition-colors duration-200"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
