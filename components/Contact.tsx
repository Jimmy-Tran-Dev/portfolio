"use client";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Contact() {
  const ref     = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting)),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const email = "jimmytran61900@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section
        id="contact"
        ref={ref}
        className="py-28"
        style={{ background: "var(--cream)" }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="fade-in">
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: "var(--moss)", fontFamily: "DM Mono" }}
            >
              get in touch
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-5"
              style={{ fontFamily: "Fredoka", color: "var(--text-dark)" }}
            >
              Let&apos;s work together!
            </h2>
            <p
              className="text-sm mb-10 max-w-md mx-auto leading-relaxed"
              style={{ color: "var(--text-mid)", fontFamily: "DM Mono" }}
            >
              Whether you have a project in mind, want to collaborate, or just want to talk — my inbox is always open.
            </p>

            {/* Email copy block */}
            <button
              onClick={copyEmail}
              className="mx-auto mb-10 px-6 py-4 rounded-2xl flex items-center gap-3 transition-all hover:scale-105"
              style={{
                background: "white",
                border: "2px solid var(--lily)",
                cursor: "none",
                fontFamily: "DM Mono",
                color: "var(--text-dark)",
              }}
            >
              <span>{email}</span>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ background: copied ? "var(--moss)" : "var(--lily)", color: copied ? "white" : "var(--text-mid)" }}
              >
                {copied ? "copied!" : "copy"}
              </span>
            </button>

            {/* Social links */}
            <div className="flex justify-center gap-4">
              {[
                { label: "GitHub",   href: "https://github.com/Jimmy-Tran-Dev",      icon: <FaGithub size={18}/>  },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/jimmy-tran-developer/", icon: <FaLinkedin size={18}/>  },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline gap-2"
                  style={{ cursor: "none" }}
                >
                  <span>{s.icon}</span> {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 text-center border-t"
        style={{
          background: "white",
          borderColor: "var(--lily)",
          color: "var(--text-mid)",
          fontFamily: "DM Mono",
          fontSize: 12,
        }}
      >
        <div className="flex items-center justify-center gap-2">
          <span>Built with Next.js · {new Date().getFullYear()}</span>
        </div>
      </footer>
    </>
  );
}