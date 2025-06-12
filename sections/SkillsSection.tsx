import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

const SkillsSection: React.FC = () => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  const skillsSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    if (skillsSection) {
      onSectionChange!("skills");
    }
  }, [skillsSection, onSectionChange]);

  const technicalSkills = [
    "Python",
    "Linux",
    "Docker",
    "Bash Scripting",
    "Digital Ocean",
    "CI/CD (Jenkins, GitHub Actions, GitLab CI)",
    "FastAPI",
    "RabbitMQ",
    "MongoDB",
    "PostgreSQL",
    "Git, GitHub, GitLab",
    "REST APIs",
  ];

  const softSkills = [
    "Problem-Solving",
    "Adaptability",
    "Collaboration",
    "Communication",
    "Teamwork",
    "Patience",
    "Resilience",
    "Continuous Learning",
  ];

  const nextSteps = [
    "Develop proficiency in Go (Golang) for backend systems and tooling.",
    "Broaden understanding and practical skills across the Amazon Web Services (AWS) ecosystem.",
    "Explore Microsoft Azure services for cloud infrastructure and platform solutions.",
    "Deepen Kubernetes knowledge and practical application.",
    "Explore advanced AWS/Cloud services (e.g., serverless, monitoring).",
    "Master Terraform for IaC.",
    "Contribute to more open-source projects.",
    "Enhance system design and architecture skills.",
    "Gain hands-on experience with Ansible for automation and configuration management.",
  ];

  return (
    <section ref={sectionRef} id="skills" className=" md:px-10 py-16 bg-[#F5F5F5] dark:bg-[#1B2731]">
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
          <h2 ref={elementRef} className="section-heading">Skills & Roadmap</h2>
        </RoughNotation>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Technical Skills */}
        <div className="bg-cardlight dark:bg-carddark p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-marrsgreen dark:text-carrigreen">Technical Skills</h3>
          <ul className="list-disc list-inside space-y-2">
            {technicalSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="bg-cardlight dark:bg-carddark p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-marrsgreen dark:text-carrigreen">Soft Skills</h3>
          <ul className="list-disc list-inside space-y-2">
            {softSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Next Steps */}
        <div className="bg-cardlight dark:bg-carddark p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-marrsgreen dark:text-carrigreen">Learning Roadmap</h3>
          <ul className="list-disc list-inside space-y-2">
            {nextSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;