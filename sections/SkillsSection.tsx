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

  const technicalSkills: Record<string, string[]> = {
    "Programming Languages": ["Python", "Go", "Rust", "Java", "C"],
    "Cloud & DevOps": ["AWS (Lambda, Fargate, AppSync, Amplify, Aurora Serverless)", "Akamai Cloud", "Docker", "Terraform", "Ansible"],
    "Security & Auth": ["HashiCorp Vault", "Keycloak", "AWS Cognito", "OpenID Connect"],
    "Observability": ["AWS CloudWatch", "Prometheus", "Grafana", "Elasticsearch", "Logstash", "Kibana"],
    "Databases & Storage": ["PostgreSQL", "MongoDB", "Redis", "MinIO"],
    "CI/CD & Automation": ["GitLab CI", "GitHub Actions", "Jenkins", "n8n"],
    "Backend & Infrastructure": ["RabbitMQ", "Supabase", "Hasura", "NginX", "Traefik"],
    "Python Ecosystem": ["FastAPI", "Pydantic", "SQLAlchemy", "boto3", "Chalice", "Mangum"],
    "Go Ecosystem": ["net/http", "Gin", "SCS", "Bubble Tea"],
    "Tools & Systems": ["Git", "REST", "GraphQL", "Node.js", "Linux", "NixOS", "Bash"],
    "Architecture": ["Microservices", "Serverless", "Agile/Scrum"],
  };

  const softSkills = [
    "Team Leadership",
    "Mentoring & Teaching",
    "Negotiation",
    "Communication",
    "Problem Solving",
    "Initiative",
    "Adaptability",
  ];

  const nextSteps = [
    "Kubernetes",
    "Kafka",
    "Azure",
    "AWS X-Ray",
    "AWS SageMaker",
    "AI/ML",
    "Embedded Systems",
    "WASM",
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className=" md:px-10 py-16 bg-[#F5F5F5] dark:bg-[#1B2731]"
    >
      <div className="text-center mb-12">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 ref={elementRef} className="section-heading">
            Skills & Roadmap
          </h2>
        </RoughNotation>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Technical Skills */}
        <div className="md:col-span-2 bg-cardlight dark:bg-carddark p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-marrsgreen dark:text-carrigreen">
            Technical Skills
          </h3>
          <div className="space-y-4">
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <div key={category}>
                <span className="font-semibold text-sm text-gray-800 dark:text-gray-200">{category}</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-8">
          {/* Soft Skills */}
          <div className="bg-cardlight dark:bg-carddark p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-marrsgreen dark:text-carrigreen">
              Soft Skills
            </h3>
            <ul className="list-disc list-inside space-y-2">
              {softSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Learning */}
          <div className="bg-cardlight dark:bg-carddark p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-marrsgreen dark:text-carrigreen">
              Learning & Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {nextSteps.map((step) => (
                <span
                  key={step}
                  className="px-3 py-1 bg-marrsgreen/10 dark:bg-carrigreen/10 text-marrsgreen dark:text-carrigreen rounded-full text-sm font-medium"
                >
                  {step}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
