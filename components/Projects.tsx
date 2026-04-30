"use client";
import { useEffect, useRef } from "react";
import { FaFile, FaFileInvoiceDollar, FaPerson } from "react-icons/fa6";
import { MdEvent, MdOutlineSportsSoccer } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

const projects = [
  {
    title: "Fragments Microservice",
    desc: "A cloud-based REST microservice for storing and converting unstructured data fragments (text, images, JSON). Built with a separate React UI, supports multiple MIME types, authentication via AWS Cognito, and is fully containerized with Docker and deployed to AWS ECS.",
    tags: ["Node.js", "Express", "Docker", "AWS ECS", "AWS Cognito", "React", "Jest"],
    emoji: <FaFile/>,
    color: "#e8f5e1",
    link: "",
    github: "https://github.com/JTran001/fragments",
    featured: true,
  },
  {
    title: "Bookwise Invoicing",
    desc: "A full-stack invoicing and financial dashboard built with Next.js 15. Features customer management, invoice creation and status tracking, and an overview dashboard with revenue charts. Uses PostgreSQL with server actions and is deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Vercel"],
    emoji: <FaFileInvoiceDollar/>,
    color: "#e1f0f5",
    link: "https://bookwise-invoices.vercel.app/",
    github: "https://github.com/Jimmy-Tran-Dev/nextjs-dashboard",
    featured: true,
  },
  {
    title: "NoTimeToWait",
    desc: "Production website for LetsStopAIDS' national youth HIV advocacy summit. Features event registration, agenda, scholarship applications, and volunteer sign-ups. Built for the 2025 summit held in Toronto.",
    tags: ["Next.js", "React", "Cloudinary", "TypeScript", "Hygraph", "Tailwind"],
    emoji: <MdEvent/>,
    color: "#f5f0e1",
    link: "https://notimetowait.ca",
    github: "",
    featured: false,
  },
  {
    title: "Employee Manager Web App",
    desc: "A full-stack employee management system with a REST API backend and a separate React frontend",
    tags: ["Node.js", "Express", "React", "RESTful API", "Vercel", "Bootstrap", "SQL", "Git"],
    emoji: <FaPerson/>,
    color: "#f0e1f5",
    link: "",
    github: "https://github.com/n3ling/EmployeeManager",
    featured: false,
  },
  {
    title: "Sports Motion Detector",
    desc: "This project implements a motion detection system for sports videos, featuring a dynamic viewport that follows detected motion through frame subtraction",
    tags: ["Python", "Numpy", "cv2", "matplotlib", "tensorflow", "sklean", "keras"],
    emoji: <MdOutlineSportsSoccer/>,
    color: "#e1f5ee",
    link: "",
    github: "https://github.com/marythedev/motion-detection",
    featured: false,
  },
  {
    title: "Portfolio v1",
    desc: "My first portfolio site — the one you're looking at is v2!",
    tags: ["HTML", "CSS", "Vanilla JS"],
    emoji: <CgWebsite/>,
    color: "#f5e8e1",
    link: "https://jimmy-tran-dev.github.io/first-website/",
    github: "https://github.com/Jimmy-Tran-Dev/first-website",
    featured: false,
  },
];

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting)),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const featured = projects.filter((p) => p.featured);
  const rest     = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-28"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="fade-in mb-14">
          <p
            className="text-xs uppercase tracking-widest mb-2"
            style={{ color: "var(--moss)", fontFamily: "DM Mono" }}
          >
            my work
          </p>
          <h2
            className="text-4xl font-bold"
            style={{ fontFamily: "Fredoka", color: "var(--text-dark)" }}
          >
            projects I&apos;m proud of 🌿
          </h2>
        </div>

        {/* Featured — large cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featured.map((p, i) => (
            <div
              key={p.title}
              className="fade-in project-card p-8 relative"
              style={{ ["--i" as string]: i, transitionDelay: `${i * 80}ms` }}
            >
              {/* Top badge */}
              <span
                className="absolute top-4 right-4 text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: "var(--lily)",
                  color: "var(--moss)",
                  fontFamily: "DM Mono",
                }}
              >
                Featured
              </span>

              {/* Color block bg */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5"
                style={{ background: p.color }}
              >
                {p.emoji}
              </div>

              <h3
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: "Fredoka", color: "var(--text-dark)" }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "var(--text-mid)", fontFamily: "DM Mono" }}
              >
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((t) => (
                  <span key={t} className="skill-pill">{t}</span>
                ))}
              </div>

              <div className="flex gap-3">
                <a href={p.github} className="btn-outline text-xs py-1.5 px-3">
                  <GitHubIcon /> code
                </a>
                {p.link !== "" && <a href={p.link} className="btn-lily text-xs py-1.5 px-3">
                  <ExternalIcon /> live demo
                </a>}
              </div>
            </div>
          ))}
        </div>

        {/* Rest — smaller grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((p, i) => (
            <div
              key={p.title}
              className="fade-in project-card p-6"
              style={{ transitionDelay: `${(i + 2) * 80}ms` }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
                style={{ background: p.color }}
              >
                {p.emoji}
              </div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "Fredoka", color: "var(--text-dark)" }}
              >
                {p.title}
              </h3>
              <p
                className="text-xs leading-relaxed mb-4"
                style={{ color: "var(--text-mid)", fontFamily: "DM Mono" }}
              >
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((t) => (
                  <span key={t} className="skill-pill text-xs">{t}</span>
                ))}
              </div>
              <div className="flex gap-2">
                {p.github !== "" && <a href={p.github} style={{ color: "var(--moss)", cursor: "none" }}>
                  <GitHubIcon />
                </a>}
                {p.link !== "" && <a href={p.link} style={{ color: "var(--moss)", cursor: "none" }}>
                  <ExternalIcon />
                </a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}