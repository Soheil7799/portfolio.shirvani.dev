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
      title: "Cloud Architect",
      company: "StarView",
      location: "Torino, Italy",
      duration: "Jun. 2025 - Present",
      achievements: [
        "Supervise cloud infrastructure for disaster assessment platform serving insurance companies. Achieved 99.99% uptime.",
        "Designed and implemented an automated image processing pipeline utilizing ML models with Python and Bash, increasing image processing throughput by 10x and reducing manual intervention by 90%.",
        "Deployed complete CI/CD automation on AWS using GitLab CI. Reduced release time from hours to 15 minutes.",
        "Architected microservice backend architecture using Docker and Traefik reverse proxy.",
        "Transformed legacy monolithic application to cloud-agnostic microservice architecture. Eliminated vendor dependency.",
        "Spearheaded the streamlining of 4 critical dependency management processes utilizing Docker containerization, leading to a 40% reduction in production errors and a 80% improvement in system uptime.",
        "Supervise 3-person backend team within 8-person technical organization. Oversee entire cloud infrastructure."
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

            {/* Key Metrics Highlight */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-marrsgreen dark:text-carrigreen">99.99%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">System Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-marrsgreen dark:text-carrigreen">10x</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Performance Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-marrsgreen dark:text-carrigreen">95%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Deployment Time Reduction</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;