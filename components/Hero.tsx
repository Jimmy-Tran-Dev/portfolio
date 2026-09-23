"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      {/* Decorative orbs */}
      <div
        className="orb"
        style={{
          width: 500,
          height: 500,
          background: "var(--lily)",
          top: -100,
          right: -80,
          animationDuration: "9s",
        }}
      />
      <div
        className="orb"
        style={{
          width: 300,
          height: 300,
          background: "var(--pond)",
          bottom: 80,
          left: -60,
          animationDuration: "7s",
          animationDirection: "alternate-reverse",
        }}
      />

      {/* Lily pad decorations */}
      <svg
        className="absolute bottom-10 right-10 opacity-20"
        width="160"
        height="160"
        viewBox="0 0 160 160"
      >
        <ellipse cx="80" cy="80" rx="76" ry="70" fill="#7aad76" />
        <path d="M80 10 L80 80" stroke="#5a8a56" strokeWidth="3" opacity="0.5" />
        <path d="M80 80 L20 50" stroke="#5a8a56" strokeWidth="2" opacity="0.4" />
        <path d="M80 80 L140 50" stroke="#5a8a56" strokeWidth="2" opacity="0.4" />
      </svg>

      {/* Small lily pad */}
      <svg className="absolute top-32 left-10 opacity-15" width="80" height="80" viewBox="0 0 80 80">
        <ellipse cx="40" cy="40" rx="36" ry="33" fill="#7aad76" />
        <path d="M40 7 L40 40" stroke="#5a8a56" strokeWidth="2" opacity="0.5" />
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pt-20">
        {/* Text */}
        <div className="space-y-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm"
            style={{
              background: "var(--lily)",
              border: "1.5px solid var(--pond)",
              color: "var(--text-mid)",
              fontFamily: "DM Mono",
            }}
          >
            <span className="relative inline-flex items-center justify-center w-3 h-3">
              {/* <span
                className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping"
                style={{ background: "var(--moss)" }}
              /> */}
              <span
                className="relative inline-flex w-2 h-2 rounded-full"
                style={{ background: "var(--frog-green)" }}
              />
            </span>
            Currently employed :)
          </div>

          <h1
            className="text-5xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "Fredoka", color: "var(--text-dark)" }}
          >
            Hi, I&apos;m{" "}
            <span style={{ color: "var(--moss)" }}>Jimmy</span>
          </h1>

          <p
            className="text-lg leading-relaxed max-w-md"
            style={{ color: "var(--text-mid)", fontFamily: "DM Mono" }}
          >
            a full-stack developer who builds functional things on the web.
            I like clean code, good design, and learning new things!
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#projects" className="btn-lily">
              See my work ✦
            </a>
            <a href="#contact" className="btn-outline">
              Say hello 👋
            </a>
          </div>

          {/* Stats row */}
          {/* <div
            className="flex gap-8 pt-4 border-t"
            style={{ borderColor: "var(--lily)" }}
          >
            {[
              { num: "12+", label: "projects" },
              { num: "3yr",  label: "experience" },
              { num: "8+",   label: "technologies" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="text-2xl font-bold"
                  style={{ fontFamily: "Fredoka", color: "var(--moss)" }}
                >
                  {s.num}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "var(--text-mid)", fontFamily: "DM Mono" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Frog hero illustration */}
        <div className="flex justify-center items-center relative">
          {/* Pond circle */}
          <div
            className="absolute rounded-full"
            style={{
              width: 260,
              height: 260,
              background: "radial-gradient(circle, var(--lily) 0%, var(--pond) 100%)",
              opacity: 0.6,
            }}
          />
          {/* Ripple rings */}
          <div
            className="absolute rounded-full border-2"
            style={{
              width: 300,
              height: 300,
              borderColor: "var(--pond)",
              opacity: 0.3,
            }}
          />
          <div
            className="absolute rounded-full border"
            style={{
              width: 340,
              height: 340,
              borderColor: "var(--pond)",
              opacity: 0.15,
            }}
          />

          {/* Floating badges */}
          <div
            className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs shadow-sm"
            style={{
              background: "white",
              border: "1.5px solid var(--lily)",
              fontFamily: "DM Mono",
              color: "var(--text-mid)",
              animation: "drift 5s ease-in-out infinite alternate",
            }}
          >
            TypeScript ✦
          </div>
          <div
            className="absolute bottom-8 left-4 px-3 py-1 rounded-full text-xs shadow-sm"
            style={{
              background: "white",
              border: "1.5px solid var(--lily)",
              fontFamily: "DM Mono",
              color: "var(--text-mid)",
              animation: "drift 6s ease-in-out infinite alternate-reverse",
            }}
          >
            React ✦
          </div>
          <div
            className="absolute top-1/2 right-0 px-3 py-1 rounded-full text-xs shadow-sm"
            style={{
              background: "white",
              border: "1.5px solid var(--lily)",
              fontFamily: "DM Mono",
              color: "var(--text-mid)",
              animation: "drift 7s ease-in-out infinite alternate",
            }}
          >
            Next.js ✦
          </div>
          <div className="absolute top-10 left-10 px-3 py-1 rounded-full text-xs shadow-sm"
            style={{
              background: "white",
              border: "1.5px solid var(--lily)",
              fontFamily: "DM Mono",
              color: "var(--text-mid)",
              animation: "drift 6.5s ease-in-out infinite alternate",
            }}>
            Node.js ✦
          </div>
          <div className="absolute bottom-4 right-10 px-3 py-1 rounded-full text-xs shadow-sm"
            style={{
              background: "white",
              border: "1.5px solid var(--lily)",
              fontFamily: "DM Mono",
              color: "var(--text-mid)",
              animation: "drift 5.8s ease-in-out infinite alternate-reverse",
            }}>
            AWS ✦
          </div>
          <div className="absolute top-20 left-1/3 px-3 py-1 rounded-full text-xs shadow-sm"
            style={{
              background: "white",
              border: "1.5px solid var(--lily)",
              fontFamily: "DM Mono",
              color: "var(--text-mid)",
              animation: "drift 7.2s ease-in-out infinite alternate",
            }}>
            Docker ✦
          </div>
          <div className="absolute bottom-1/3 left-0 px-3 py-1 rounded-full text-xs shadow-sm"
            style={{
              background: "white",
              border: "1.5px solid var(--lily)",
              fontFamily: "DM Mono",
              color: "var(--text-mid)",
              animation: "drift 6.2s ease-in-out infinite alternate",
            }}>
            PostgreSQL ✦
          </div>
          <div className="absolute top-1/4 right-10 px-3 py-1 rounded-full text-xs shadow-sm"
            style={{
              background: "white",
              border: "1.5px solid var(--lily)",
              fontFamily: "DM Mono",
              color: "var(--text-mid)",
              animation: "drift 5.6s ease-in-out infinite alternate-reverse",
            }}>
            REST APIs ✦
          </div>
          <div className="absolute bottom-20 right-1/4 px-3 py-1 rounded-full text-xs shadow-sm"
            style={{
              background: "white",
              border: "1.5px solid var(--lily)",
              fontFamily: "DM Mono",
              color: "var(--text-mid)",
              animation: "drift 6.8s ease-in-out infinite alternate",
            }}>
            GitHub Actions ✦
          </div>
          <div className="absolute top-1/3 left-1/2 px-3 py-1 rounded-full text-xs shadow-sm"
            style={{
              background: "white",
              border: "1.5px solid var(--lily)",
              fontFamily: "DM Mono",
              color: "var(--text-mid)",
              animation: "drift 7.5s ease-in-out infinite alternate-reverse",
            }}>
            MongoDB ✦
          </div>
          <div className="absolute bottom-1/2 left-1/4 px-3 py-1 rounded-full text-xs shadow-sm"
            style={{
              background: "white",
              border: "1.5px solid var(--lily)",
              fontFamily: "DM Mono",
              color: "var(--text-mid)",
              animation: "drift 5.3s ease-in-out infinite alternate",
            }}>
            Hygraph ✦
          </div>
          <div className="absolute top-3/4 right-1/3 px-3 py-1 rounded-full text-xs shadow-sm"
            style={{
              background: "white",
              border: "1.5px solid var(--lily)",
              fontFamily: "DM Mono",
              color: "var(--text-mid)",
              animation: "drift 6.9s ease-in-out infinite alternate-reverse",
            }}>
            CI/CD ✦
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        style={{ color: "var(--text-mid)", fontFamily: "DM Mono", fontSize: 12 }}
      >
        <span>scroll down</span>
        <svg
          className="animate-bounce"
          width="20" height="20" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
