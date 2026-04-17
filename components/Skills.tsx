"use client";
import { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "Frontend",
    emoji: "",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Framer Motion",
      "Bootstrap",
      "Figma",
    ],
  },
  {
    category: "Backend",
    emoji: "",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "SQL",
      "DynamoDB",
    ],
  },
  {
    category: "Tools & Infra",
    emoji: "",
    skills: [
      "Git",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "AWS (Cognito, EC2, ECS, S3)",
      "Linux / UNIX",
      "Vercel",
      "Jest",
      "Hurl",
      "Agile / Scrum",
      "Google Apps Script",
      "Hygraph",
    ],
  },
  {
    category: "Systems & Graphics",
    emoji: "",
    skills: [
      "C",
      "C++",
      "OpenGL",
      "Unreal Engine",
    ],
  },
  {
    category: "Currently learning",
    emoji: "",
    skills: ["Go", "Three.js"],
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting)),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="py-28"
      style={{ background: "white" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="fade-in mb-14">
          <p
            className="text-xs uppercase tracking-widest mb-2"
            style={{ color: "var(--moss)", fontFamily: "DM Mono" }}
          >
            toolkit
          </p>
          <h2
            className="text-4xl font-bold"
            style={{ fontFamily: "Fredoka", color: "var(--text-dark)" }}
          >
            Technologies I work with
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className="fade-in"
              style={{ transitionDelay: `${gi * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{group.emoji}</span>
                <h3
                  className="font-bold text-lg"
                  style={{ fontFamily: "Fredoka", color: "var(--text-dark)" }}
                >
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience timeline */}
        <div className="fade-in mt-20" style={{ transitionDelay: "400ms" }}>
          <h3
            className="text-2xl font-bold mb-8"
            style={{ fontFamily: "Fredoka", color: "var(--text-dark)" }}
          >
            Experience
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-5 top-2 bottom-2 w-px"
              style={{ background: "var(--lily)" }}
            />

            <div className="space-y-8">
              {[
                {
                  role: "Full Stack Developer Intern",
                  company: "LetsStopAIDS",
                  period: "Jan 2025 – Dec 2025",
                  desc: "Developed responsive web interfaces using React, JavaScript, and Figma, including interactive maps and registration forms. Integrated Hygraph CMS to manage dynamic content across applications. Built automated workflows with Google Apps Script for receipt generation and maintained Slack plugins for volunteer tracking. Improved development efficiency through reusable components and state-managed UI systems.",
                }
              ].map((exp, i) => (
                <div key={i} className="pl-14 relative">
                  {/* Dot */}
                  <div
                    className="absolute left-3 top-1 w-4 h-4 rounded-full border-2"
                    style={{
                      background: "var(--cream)",
                      borderColor: "var(--moss)",
                    }}
                  />
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                    <span
                      className="text-lg font-bold"
                      style={{ fontFamily: "Fredoka", color: "var(--text-dark)" }}
                    >
                      {exp.role}
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: "var(--moss)", fontFamily: "DM Mono" }}
                    >
                      @ {exp.company}
                    </span>
                  </div>
                  <div
                    className="text-xs mb-2"
                    style={{ color: "var(--text-mid)", fontFamily: "DM Mono" }}
                  >
                    {exp.period}
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-mid)", fontFamily: "DM Mono" }}
                  >
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}