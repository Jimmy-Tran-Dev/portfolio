"use client";
import { useEffect, useState } from "react";

const links = [
  { label: "About",    href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-lily py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group" style={{ cursor: "none" }}>
          <span
            className="font-display font-600 text-lg"
            style={{ color: "var(--text-dark)", fontFamily: "Fredoka" }}
          >
            Jimmy Tran
          </span>
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`font-body text-sm transition-colors relative group`}
                style={{
                  color: active === link.href ? "var(--moss)" : "var(--text-mid)",
                  fontFamily: "DM Mono",
                  cursor: "none",
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-200 group-hover:w-full"
                  style={{
                    background: "var(--moss)",
                    width: active === link.href ? "100%" : "0%",
                  }}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Resume button */}
        <a href="/resume.pdf" className="btn-lily text-sm hidden md:inline-flex">
          <span>↓</span> Resume
        </a>
      </div>
    </nav>
  );
}