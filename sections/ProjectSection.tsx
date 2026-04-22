import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";
import mecasProject from "public/projects/mecas.svg";
import goBillSplitter from "public/projects/go-bill-splitter-icon.svg";
import snippetBox from "public/projects/snippetbox-flowchart.svg";
import goServerTools from "public/projects/go-server-tools-flowchart.svg";


const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        From media processing to deployment automation, <br />
        here are some projects that showcase my DevOps and development skills
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        More projects and contributions can be found on{" "}
        <a
          href="https://github.com/Soheil7799"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my GitHub profile
        </a>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Multimedia Conversion",
    type: "Backend + DevOps",
    image: (
      <Image
        src={mecasProject}
        sizes="100vw"
        fill
        alt="MECAS Media Conversion Service"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "FastAPI-based REST API backend service for multimedia conversion and storage, supporting 5+ file formats with asynchronous processing, Docker containerization, and CI/CD pipelines. First experience building a production-grade async API.",
    tags: [
      "Python",
      "FastAPI",
      "FFmpeg",
      "Docker",
      "GitHub Actions",
      "NumPy",
      "SciPy",
    ],
    liveUrl: "",
    codeUrl: "https://github.com/Soheil7799/mecas-service",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/Soheil7799/mecas-service",
  },
  {
    title: "Go Server Management Tool",
    type: "CLI DevOps Utility",
    image: (
      <Image
        src={goServerTools}
        sizes="100vw"
        fill
        alt="Go Server Management Tool"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Interactive command-line DevOps tool for remote server management and automation. Features terminal user interface built with Bubble Tea framework, secure SSH connections, and efficient file transfer capabilities. Mastered Go interfaces and SSH protocol handling through this project.",
    tags: ["Go", "Bubble Tea", "SSH", "SCP", "CLI", "TUI"],
    liveUrl: "",
    codeUrl: "https://github.com/Soheil7799/go-server-tools",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/Soheil7799/go-server-tools",
  },
  {
    title: "SnippetBox Web App",
    type: "Full-Stack Web Application with Go",
    image: (
      <Image
        src={snippetBox}
        sizes="100vw"
        fill
        alt="SnippetBox Web App"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Comprehensive web application demonstrating advanced Go web development patterns. Features secure user authentication, session management, and dynamic content rendering. Learned Go web security patterns including CSRF protection, secure headers, and session management.",
    tags: ["Go", "net/http", "HTML", "CSS", "Go Templates", "PostgreSQL"],
    liveUrl: "",
    codeUrl: "https://github.com/Soheil7799/snippetbox",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/Soheil7799/snippetbox",
  },
  {
    title: "Go Bill Splitter",
    type: "Full-Stack Web Application with Go",
    image: (
      <Image
        src={goBillSplitter}
        sizes="100vw"
        fill
        alt="Go Bill Splitter"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Full-stack Go web application for splitting bills and managing shared expenses. Built with Gin framework for HTTP routing, GORM for database operations, and Go templates for dynamic HTML rendering. First full-stack Go project — learned ORM patterns and server-side templating.",
    tags: ["Go", "Gin", "GORM", "HTML", "CSS", "Go Templates", "SQLite"],
    liveUrl: "",
    codeUrl: "https://github.com/Soheil7799/go-bill-splitter",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/Soheil7799/go-bill-splitter",
  },
];

export default ProjectSection;
