import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";
import mecasProject from "public/projects/mecas.svg";
import portfolioProject from "public/projects/portfolio-site.png";
import GHPortfolio from "public/projects/ghp-portfolio.png";

// import automationProject from "public/projects/ai-automation-platform.webp";
import automationProject from "public/projects/ai-automation-platform.svg";
import devopsProject from "public/projects/devops.webp";

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
    title: "AI Image Processing Automation Platform",
    type: "DevOps + Infrastructure",
    image: (
      <Image
        src={automationProject}
        sizes="100vw"
        fill
        alt="AI Processing Automation Platform"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Enterprise-level automation platform for AI image enhancement pipeline. Built interactive CLI for model selection, orchestrated multi-container workflows with RabbitMQ message queuing, and integrated MinIO S3 storage for processed images.",
    tags: ["Docker", "RabbitMQ", "MinIO S3", "Bash", "Python", "Docker Compose", "Message Queue"],
    liveUrl: "", // Add if you have a demo video
    codeUrl: "", // Add GitHub link if public
    bgColor: "bg-[#FF6B6B]",
    githubApi: "", // Add if public repo
  },
  {
    title: "MECAS - Media Conversion Service",
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
    desc: "FastAPI-based REST API backend service for multimedia conversion and storage, supporting 5+ file formats with asynchronous processing, Docker containerization, and CI/CD pipelines.",
    tags: ["Python", "FastAPI", "FFmpeg", "Docker", "GitHub Actions", "NumPy", "SciPy"],
    liveUrl: "",
    codeUrl: "https://github.com/Soheil7799/mecas-service",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/Soheil7799/mecas-service",
  },
  {
    title: "Portfolio Website",
    type: "Frontend + Deployment",
    image: (
      <Image
        src={portfolioProject}
        sizes="100vw"
        fill
        alt="Portfolio Website"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Personal portfolio website built with NextJs static site generator and deployed on CloudFlare Pages. Features responsive design, YAML configuration, and modern web practices.",
    tags: ["NextJs", "Cloud Flare Pages", "Responsive Design", "Static Site"],
    liveUrl: "https://portfolio.shirvani.dev",
    codeUrl: "https://github.com/Soheil7799/portfolio.shirvani.dev",
    bgColor: "bg-[#8b5cf6]",
    githubApi: "https://api.github.com/repos/Soheil7799/portfolio.shirvani.dev",
  },
  {
    title: "GitHub Pages Portfolio",
    type: "Frontend",
    image: (
      <Image
        src={GHPortfolio}
        sizes="100vw"
        fill
        alt="GitHub Pages Site"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Alternative portfolio website hosted directly on GitHub Pages. Demonstrates static site deployment and web development skills.",
    tags: ["Hugo", "YAML", "GitHub Pages", "Responsive Design", "Static Site"],
    liveUrl: "https://soheil7799.github.io",
    codeUrl: "https://github.com/Soheil7799/Soheil7799.github.io",
    bgColor: "bg-[#10b981]",
    githubApi: "https://api.github.com/repos/Soheil7799/Soheil7799.github.io",
  },
  {
    title: "DevOps & Backend Experience",
    type: "Professional Experience",
    image: (
      <Image
        src={devopsProject}
        sizes="100vw"
        fill
        alt="DevOps Experience"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Professional experience with Linux administration, Docker containerization, CI/CD implementation with Jenkins and GitHub Actions. Reduced deployment time by 90% through automation.",
    tags: ["Linux", "Docker", "Bash", "Shell Scripting", "Jenkins", "GitHub Actions"],
    liveUrl: "",
    codeUrl: "https://github.com/Soheil7799",
    bgColor: "bg-[#FBFBFB]",
    githubApi: "https://api.github.com/users/Soheil7799",
  },
];

export default ProjectSection;