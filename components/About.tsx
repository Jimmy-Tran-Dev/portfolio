"use client";
import { useEffect, useRef } from "react";

export default function About() {
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
      id="about"
      ref={ref}
      className="py-28 relative"
      style={{ background: "white" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: bento-style info cards */}
          <div className="fade-in grid grid-cols-2 gap-4">
            {[
              { emoji: "🎓", label: "education", value: "B.Sc. Software Development\nSeneca Polytechnic, 2026" },
              { emoji: "📍", label: "location",  value: "Toronto, Canada" },
              { emoji: "💼", label: "currently", value: "Open to\nfull-time roles" },
              { emoji: "🌙", label: "outside work", value: "Reading, painting\n& playing games" },
            ].map((item, i) => (
              <div
                key={item.label}
                className="project-card p-5"
                style={{ ["--i" as string]: i }}
              >
                <div className="text-2xl mb-2">{item.emoji}</div>
                <div
                  className="text-xs mb-1 uppercase tracking-widest"
                  style={{ color: "var(--moss)", fontFamily: "DM Mono" }}
                >
                  {item.label}
                </div>
                <div
                  className="text-sm leading-snug whitespace-pre-line"
                  style={{ color: "var(--text-dark)", fontFamily: "DM Mono" }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Right: text */}
          <div className="fade-in space-y-5" style={{ transitionDelay: "120ms" }}>
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-2"
                style={{ color: "var(--moss)", fontFamily: "DM Mono" }}
              >
                about me
              </p>
              <h2
                className="text-4xl font-bold"
                style={{ fontFamily: "Fredoka", color: "var(--text-dark)" }}
              >
                A developer learning something new every day 🌱
              </h2>
            </div>

            <p style={{ color: "var(--text-mid)", fontFamily: "DM Mono", lineHeight: 1.8, fontSize: 14 }}>
              I&apos;m a full-stack developer focused on building web applications that are both functional and well-designed. I’m currently growing my skills and blending my interest in technology with a background in science.
            </p>

            <p style={{ color: "var(--text-mid)", fontFamily: "DM Mono", lineHeight: 1.8, fontSize: 14 }}>
              I enjoy working across the stack—from designing intuitive, polished interfaces to building reliable backend systems. I focus on creating web experiences that feel as good as they function. 
              When I&apos;m not coding, you can find me painting figures or hunting for the perfect matcha latte.
            </p>

            <a href="/resume.pdf" className="btn-lily inline-flex">
              ↓ Download resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}