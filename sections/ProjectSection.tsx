import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

// You'll need to add these images to your public/projects/ folder
import mecasProject from "public/projects/mecas-service.webp";
import portfolioProject from "public/projects/portfolio-site.webp";
import devopsProject from "public/projects/devops-automation.webp";

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
    desc: "FastAPI-based REST API backend service for multimedia conversion and storage, supporting 5+ file formats with asynchronous processing and Docker containerization.",
    tags: ["Python", "FastAPI", "FFmpeg", "Docker", "GitHub Actions", "AWS"],
    liveUrl: "", // Add if you have a demo
    codeUrl: "https://github.com/Soheil7799/mecas-service",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/Soheil7799/mecas-service",
  },
  {
    title: "DevOps Practice Projects",
    type: "CI/CD + Backend",
    image: (
      <Image
        src={devopsProject}
        sizes="100vw"
        fill
        alt="DevOps Practice Projects"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Collection of backend services with CI/CD pipelines, database management, and cloud deployment practices using modern DevOps tools and methodologies.",
    tags: ["Node.js", "MongoDB", "Jenkins", "GitHub Actions", "Express.js"],
    liveUrl: "",
    codeUrl: "https://github.com/Soheil7799",
    bgColor: "bg-[#10b981]", // Green background like your card
    githubApi: "https://api.github.com/repos/Soheil7799",
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
    desc: "Personal portfolio website built with Hugo static site generator and deployed on GitHub Pages. Features responsive design, YAML configuration, and modern web practices.",
    tags: ["Hugo", "YAML", "GitHub Pages", "Responsive Design", "Static Site"],
    liveUrl: "https://portfolio.shirvani.dev",
    codeUrl: "https://github.com/Soheil7799/portfolio.shirvani.dev",
    bgColor: "bg-[#8b5cf6]", // Purple background like your card
    githubApi: "https://api.github.com/repos/Soheil7799/portfolio.shirvani.dev",
  },
  {
    title: "DevOps Automation Scripts",
    type: "DevOps + Infrastructure",
    image: (
      <Image
        src={devopsProject}
        sizes="100vw"
        fill
        alt="DevOps Automation"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Collection of automation scripts and configurations for CI/CD pipelines, Docker deployments, and Linux system administration. Reduced deployment time by 90%.",
    tags: ["Bash", "Docker", "Jenkins", "GitHub Actions", "Linux"],
    liveUrl: "", // Add if you have documentation
    codeUrl: "https://github.com/Soheil7799", // Link to your main profile or specific repo
    bgColor: "bg-[#A6CECE]",
    githubApi: "https://api.github.com/repos/Soheil7799", // You might need to adjust this
  },
  {
    title: "RESTful API with Node.js",
    type: "Backend",
    image: (
      <Image
        src={mecasProject} // Reuse or create a new image
        sizes="100vw"
        fill
        alt="Node.js REST API"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "RESTful APIs built with Node.js and Express.js featuring 4 key endpoints for data management, integrated with MongoDB using Mongoose with 3 main collections.",
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST API"],
    liveUrl: "",
    codeUrl: "https://github.com/Soheil7799", // Update with actual repo
    bgColor: "bg-[#C5E4E7]",
    githubApi: "https://api.github.com/repos/Soheil7799", // Update with actual repo
  },
  {
    title: "Database Design Projects",
    type: "Database + Backend",
    image: (
      <Image
        src={portfolioProject} // Reuse or create a new image
        sizes="100vw"
        fill
        alt="Database Design"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Relational database design projects using PostgreSQL with proper normalization techniques. Includes data modeling and optimization across multiple academic projects.",
    tags: ["PostgreSQL", "SQL", "Database Design", "Data Modeling"],
    liveUrl: "",
    codeUrl: "https://github.com/Soheil7799", // Update with actual repo
    bgColor: "bg-[#EBF4F4]",
    githubApi: "https://api.github.com/repos/Soheil7799", // Update with actual repo
  },
  {
    title: "Learning: Terraform & Kubernetes",
    type: "Infrastructure + Learning",
    image: (
      <Image
        src={devopsProject} // Reuse or create a new image
        sizes="100vw"
        fill
        alt="Terraform Kubernetes Learning"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Current learning projects focused on Infrastructure as Code with Terraform and container orchestration with Kubernetes. Building practical skills for cloud infrastructure management.",
    tags: ["Terraform", "Kubernetes", "Infrastructure as Code", "Cloud"],
    liveUrl: "",
    codeUrl: "https://github.com/Soheil7799", // Update when you create learning repos
    bgColor: "bg-[#FBFBFB]",
    githubApi: "https://api.github.com/repos/Soheil7799", // Update when you create learning repos
  },
];

export default ProjectSection;