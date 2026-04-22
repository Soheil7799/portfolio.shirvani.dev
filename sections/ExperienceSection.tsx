import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

const ExperienceSection: React.FC = () => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  const experienceSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    if (experienceSection) {
      onSectionChange!("experience");
    }
  }, [experienceSection, onSectionChange]);

  const experiences = [
    {
      title: "DevOps/Cloud Engineer",
      company: "StarView (StartUp)",
      location: "Torino, Italy",
      duration: "Jun. 2025 - Present",
      achievements: [
        <>Engineered a <strong>Private Cloud</strong> ecosystem for a disaster assessment platform, implementing <strong>central authentication (SSO)</strong> via <strong>Keycloak</strong> to secure HashiCorp Vault, NextCloud, Mattermost, and OpenProject with unified access through a self-hosted dashboard.</>,
        <>Designed an event-driven ML pipeline automating <strong>Python</strong> and <strong>Bash</strong> workflows via <strong>Docker Compose</strong> and <strong>RabbitMQ</strong>, decreasing manual operational time by <strong>90%</strong> and leveraging MinIO to replace legacy FTP access.</>,
        <>Executed the migration of a legacy EC2 monolith to a <strong>cloud-agnostic microservices</strong> architecture on <strong>Akamai Cloud</strong>, utilizing <strong>Terraform</strong> and <strong>Ansible</strong> for fully automated provisioning.</>,
        <>Architected a next-phase <strong>AWS Serverless</strong> solution (Amplify, AppSync, Lambda, Aurora Serverless) and migrated to <strong>Supabase</strong> as the backend platform, reducing development overhead and enabling the team to focus on the serverless migration.</>,
        <>Proposed and designed a client-side data processing architecture using <strong>Rust</strong> compiled to <strong>WebAssembly (WASM)</strong>, enabling customers to process sensitive data locally in-browser while preserving data privacy.</>,
        <>Established an automated delivery workflow where <strong>GitLab CI</strong> image builds trigger deployments via <strong>Ansible</strong> and <strong>Docker Compose</strong>, processed by a native runner on the deployment server.</>,
        <>Engaged in <strong>product design and roadmap planning</strong> with stakeholders, translating customer requirements into technical solutions; led vendor negotiations securing <strong>$15k+ in service credits</strong> from AWS and Akamai.</>,
        <>Built and managed a <strong>backend team of 3 developers</strong>, handling recruitment from screening to onboarding, mentoring on Serverless patterns, and conducting code reviews.</>,
      ]
    },
    {
      title: "Mentor & DevOps Specialist",
      company: "Application Development Lifecycle Bootcamp",
      location: "Torino, Italy",
      duration: "Mar. 2026 - Present",
      achievements: [
        <>Co-organized an in-person bootcamp teaching the full <strong>application development lifecycle</strong> — from planning (<strong>Unified Process</strong>) through development, testing, and deployment — preparing students for intern and junior developer positions.</>,
        <>Deliver hands-on sessions covering <strong>Linux</strong> fundamentals, <strong>Git</strong> version control, <strong>Docker</strong> containerization, and development workflow best practices.</>,
        <>Design and teach backend and DevOps curriculum including <strong>FastAPI</strong> (with SQLAlchemy and Pydantic), <strong>PostgreSQL</strong>, <strong>GitLab CI/CD</strong>, S3-compatible object storage, and cloud compute fundamentals.</>,
        <>Present the roles and responsibilities of backend and DevOps engineers, helping students understand how professional engineering teams operate in production environments.</>,
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="md:px-10 py-16 bg-white dark:bg-[#1f2e3a]">
      <div className="text-center mb-12">
        <RoughNotation
          type="underline"
          color={`${
            theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"
          }`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 ref={elementRef} className="section-heading">Professional Experience</h2>
        </RoughNotation>
      </div>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-cardlight dark:bg-bgdark p-8 rounded-lg shadow-lg mb-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-marrsgreen dark:text-carrigreen mb-2">
                {exp.title}
              </h3>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {exp.company} • {exp.location}
                </h4>
                <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 md:mt-0">
                  {exp.duration}
                </span>
              </div>
            </div>
            
            <div className="space-y-3">
              {exp.achievements.map((achievement, achievementIndex) => (
                <div key={achievementIndex} className="flex items-start">
                  <div className="w-2 h-2 bg-marrsgreen dark:bg-carrigreen rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;