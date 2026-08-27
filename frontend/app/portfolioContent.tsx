 "use client";
  import { motion } from "framer-motion";
  import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
  import { FaReact, FaNodeJs, FaPython, FaGithub, FaLinkedin } from "react-icons/fa";
  import { ExternalLink } from "lucide-react";
  import { SiPostgresql } from "react-icons/si";
  import { BiBrain } from "react-icons/bi";
  import { useEffect, useState } from "react";
  import type { IconType } from "react-icons";

  type Project = {
    title: string;
    description: string;
    stack?: string;
    image?: string;
    url?: string;
  };

  type Experience = {
    company: string;
    role: string;
    description: string;
    time?: string;
  };

  const techIcons: Record<string, IconType> = {
    "React": FaReact,
    "Node.js": FaNodeJs,
    "PostgreSQL": SiPostgresql,
    "Python": FaPython,
    "Machine Learning": BiBrain,
  };

  export default function PortfolioContent() {
    const [profileName, setProfileName] = useState("");
    const [profileDescription, setProfileDescription] = useState("");
    const [projects, setProjects] = useState<Project[]>([]);
    const [experience, setExperience] = useState<Experience[]>([]);

    useEffect(() => {
      fetch("http://localhost:8080/api/profile")
        .then(res => res.json())
        .then(data => {
          setProfileName(data.name);
          setProfileDescription(data.description);
        });

      fetch("http://localhost:8080/api/projects")
        .then(res => res.json())
        .then(data => setProjects(data));

      fetch("http://localhost:8080/api/experience")
        .then(res => res.json())
        .then(data => setExperience(data));
    }, []);
    return (
      <div className="flex flex-col items-start justify-center w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white sm:text-left"
        >
          {profileName}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg text-zinc-400"
        >
          {profileDescription}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-3 mt-4"
        >
          <a
            href="https://github.com/ulissesmolina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-200 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 hover:border-zinc-700 hover:text-white transition-all duration-200 shadow-sm"
          >
            <FaGithub className="w-4 h-4 text-zinc-400" />
            <span>GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-500 ml-1" />
          </a>
          <a
            href="https://linkedin.com/in/ulissesmolina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-200 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 hover:border-zinc-700 hover:text-white transition-all duration-200 shadow-sm"
          >
            <FaLinkedin className="w-4 h-4 text-zinc-400" />
            <span>LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-500 ml-1" />
          </a>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 pt-8 border-t border-zinc-800 w-full text-2xl font-semibold text-white"
        >
          Experience
        </motion.h2>
        <div className="flex flex-col gap-4 mt-4 w-full">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
            >
              <Card className="bg-zinc-900/60 border border-zinc-800">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-zinc-400">{exp.role}</CardTitle>
                    {exp.time && (
                      <span className="text-sm text-zinc-400 whitespace-nowrap ml-4">{exp.time}</span>
                    )}
                  </div>
                  <CardDescription className="text-base font-medium text-white">{exp.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-500">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 pt-8 border-t border-zinc-800 w-full text-2xl font-semibold text-white"
        >
          Projects
        </motion.h2>
        <div id="projects" className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
              className="w-full"
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                <Card className="overflow-hidden bg-zinc-900/60 border border-zinc-800 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer">
                  <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-bold text-white">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-zinc-500">{project.description}</CardDescription>
                  </CardHeader>
                  {project.stack && (
                    <CardContent className="flex flex-wrap gap-3 pt-0">
                      {project.stack.split(", ").map((tech) => {
                        const Icon = techIcons[tech];
                        return (
                          <div key={tech} className="flex items-center gap-1.5 text-zinc-400" title={tech}>
                            {Icon && <Icon className="w-5 h-5" />}
                            <span className="text-xs">{tech}</span>
                          </div>
                        );
                      })}
                    </CardContent>
                  )}
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-10 text-sm text-zinc-500 text-center w-full"
        >
          Ulisses Molina © {new Date().getFullYear()}. All rights reserved.
        </motion.div>
      </div>
    );
  }
