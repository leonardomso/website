"use client";

const experiences: {
  period: string;
  role: string;
  company: string;
  url: string;
  description: React.ReactNode;
}[] = [
  {
    period: "Nov 2021 — Apr 2026",
    role: "Front End Engineer",
    company: "Namecheap",
    url: "https://www.namecheap.com/",
    description: (
      <>
        Sole engineer responsible for{" "}
        <a
          className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed] print:text-[#111] print:no-underline"
          href="https://www.spaceship.com/domain-search/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Spaceship&apos;s domain search
        </a>
        . Built it from zero with React, TypeScript, and Zustand. Tackled
        real-time pricing across 500+ TLDs over WebSocket. Batched state
        updates, debounced renders, and queued incoming messages to keep the UI
        responsive. Brought re-renders down by about 80%. Integrated TanStack
        Query with query key factories and smart cache invalidation, cutting
        redundant API calls by roughly 60%. Introduced code splitting and
        virtualized rendering, ending up about 40% smaller. Built &quot;Beast
        Mode,&quot; a bulk search feature for multiple domain variations with
        filters for price, category, and TLD type. Set up a multi-currency
        pricing engine with stale-while-revalidate caching and optimistic
        updates across 30+ currencies. Defined and enforced codebase linting
        standards using Biome.
      </>
    ),
  },
  {
    period: "May 2019 — Dec 2023",
    role: "Technical Author",
    company: "Progress",
    url: "https://www.progress.com/",
    description:
      "Technical writer covering JavaScript, TypeScript, React, Node.js, and modern web development. Created educational content helping developers adopt new technologies.",
  },
  {
    period: "Feb 2020 — Feb 2022",
    role: "Technical Author",
    company: "LogRocket",
    url: "https://logrocket.com/",
    description:
      "Published 70+ technical articles on JavaScript, TypeScript, React, Node.js, GraphQL, and web fundamentals. Tutorials, deep dives, and framework comparisons.",
  },
  {
    period: "Oct 2019 — Apr 2020",
    role: "Software Engineer",
    company: "Popstand",
    url: "https://popstand.com/",
    description:
      "Built Taco Maps from scratch, a React Native food delivery app for LA taco restaurants. Handled the full setup: Redux, TypeScript, Firebase for real-time order updates, and E2E tests with Detox on both iOS and Android.",
  },
  {
    period: "Jan 2019 — Jul 2019",
    role: "Software Engineer",
    company: "Foton",
    url: "https://foton.tech/",
    description:
      "Worked on React and React Native applications for Brazilian banking clients. Code had to meet financial-grade security and reliability standards, so secure data handling and thorough testing (Detox) were a big part of the job.",
  },
];

const projects: {
  name: string;
  description: string;
  url?: string;
}[] = [
  {
    name: "33 JavaScript Concepts",
    description:
      "A curated guide to every core JavaScript concept, from closures and prototypes to async patterns. GitHub recognized it as a top open-source project of 2018. The community has translated it into 40+ languages.",
    url: "https://github.com/leonardomso/33-js-concepts",
  },
  {
    name: "Shopwyse",
    description:
      "Multi-tenant retail ERP. POS/checkout, inventory, CRM, and financial reporting. Built with TanStack Start, React 19, Elysia, Drizzle ORM, and PostgreSQL.",
  },
  {
    name: "Polyglot",
    description:
      "AI writing assistant. Guided interviews, multiple draft angles, voice profiles, rich-text editing, multi-format export. Full-stack TypeScript.",
    url: "https://trypolyglot.ai",
  },
  {
    name: "gone",
    description:
      "Dead link detector written in Go. Concurrent HTTP checks, interactive terminal UI, auto-fix for redirects, and output formats for CI/CD pipelines.",
    url: "https://github.com/leonardomso/gone",
  },
  {
    name: "betterhook",
    description:
      "Git hooks manager written in Rust for parallel AI coding agent workflows. DAG-based scheduling, content-addressable cache, and streaming output via Tokio.",
    url: "https://github.com/leonardomso/betterhook",
  },
];

const skills = [
  "TypeScript",
  "React.js",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "Full-Stack Development",
  "Product Engineering",
  "Real-Time Systems / WebSocket",
  "Performance Optimization",
  "Open Source",
  "REST APIs",
  "CI/CD",
  "GitHub Actions",
  "Redis",
];

const technicalSkills: { category: string; items: string }[] = [
  {
    category: "Languages",
    items: "JavaScript, TypeScript, Go (side projects), Rust (side projects)",
  },
  {
    category: "Frontend",
    items:
      "React.js, Next.js, TanStack Start, TanStack Query, React Native, Zustand",
  },
  {
    category: "Backend",
    items:
      "Node.js, Bun, Hono, Elysia, GraphQL, REST APIs, WebSocket, PostgreSQL, Drizzle ORM, Redis, MongoDB",
  },
  {
    category: "Tools & CI/CD",
    items: "Docker, GitHub Actions, AI SDK, Biome, Better Auth",
  },
];

const languages = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Spanish", level: "Fluent" },
];

export default function ResumePage() {
  return (
    <>
      <style>{`
        @media print {
          body { background: white !important; color: #111 !important; }
          body::before { display: none !important; }
          header, footer, .no-print { display: none !important; }
          .print-only { display: block !important; }
          .resume-section { break-inside: avoid; }
          a { color: #111 !important; text-decoration: none !important; }
          .link-hover::after { display: none !important; }
          * { color: #111 !important; border-color: #ddd !important; }
          .resume-label { color: #666 !important; }
          .resume-muted { color: #555 !important; }
        }
      `}</style>

      <div>
        <div className="no-print mb-8 flex items-center justify-between">
          <p className="font-mono text-[#666] text-[12px] uppercase tracking-[0.25em]">
            Resume
          </p>
          <button
            className="cursor-pointer font-mono text-[#666] text-[12px] tracking-wide transition-colors hover:text-[#ededed]"
            onClick={() => window.print()}
            type="button"
          >
            Print / Save as PDF
          </button>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="font-semibold text-[#ededed] text-[clamp(2rem,5vw,3rem)] leading-[1.1] tracking-[-0.03em]">
            Leonardo Maldonado
          </h1>
          <p className="mt-3 text-[#888] text-[15px]">
            Software Engineer · Valencia, Spain
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {[
              {
                label: "leonardomso11@gmail.com",
                href: "mailto:leonardomso11@gmail.com",
              },
              {
                label: "github.com/leonardomso",
                href: "https://github.com/leonardomso",
              },
              {
                label: "linkedin.com/in/leonardomso",
                href: "https://www.linkedin.com/in/leonardomso/",
              },
              { label: "leonardomso.com", href: "https://leonardomso.com" },
            ].map((link) => (
              <a
                className="link-hover text-[#a0a0a0] text-[13px] transition-colors hover:text-[#ededed]"
                href={link.href}
                key={link.label}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Summary */}
        <section className="resume-section mb-12">
          <h2 className="resume-label mb-4 font-mono text-[#666] text-[11px] uppercase tracking-[0.2em]">
            Professional Summary
          </h2>
          <p className="text-[#888] text-[15px] leading-[1.8]">
            Software engineer with 7+ years of experience. For four and a half
            years, the sole engineer responsible for Namecheap&apos;s Spaceship
            domain search product end to end: product decisions, architecture,
            React/TypeScript frontend, real-time WebSocket data layer,
            performance, and releases. Also built a retail ERP (Shopwyse) and an
            AI writing tool (Polyglot) independently, full-stack with
            TypeScript, Node.js, GraphQL, and PostgreSQL. Creator of 33
            JavaScript Concepts (66K+ GitHub stars). Author of 100+ technical
            articles. Contributor to Better Auth, Node.js, and TanStack.
          </p>
        </section>

        {/* Skills */}
        <section className="resume-section mb-12">
          <h2 className="resume-label mb-4 font-mono text-[#666] text-[11px] uppercase tracking-[0.2em]">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                className="rounded-md border border-[#161616] px-3 py-1 font-mono text-[#888] text-[12px]"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="resume-section mb-12">
          <h2 className="resume-label mb-6 font-mono text-[#666] text-[11px] uppercase tracking-[0.2em]">
            Work Experience
          </h2>
          <div className="flex flex-col gap-8">
            {experiences.map((exp) => (
              <div key={exp.period}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-medium text-[#ededed] text-[15px]">
                    {exp.role}{" "}
                    <span className="resume-muted text-[#666]">at</span>{" "}
                    <a
                      className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
                      href={exp.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {exp.company}
                    </a>
                  </p>
                  <span className="resume-muted shrink-0 font-mono text-[#666] text-[11px] tracking-wider">
                    {exp.period}
                  </span>
                </div>
                <p className="resume-muted mt-2 text-[#888] text-[14px] leading-[1.7]">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="resume-section mb-12">
          <h2 className="resume-label mb-6 font-mono text-[#666] text-[11px] uppercase tracking-[0.2em]">
            Projects
          </h2>
          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <div key={project.name}>
                <p className="font-medium text-[#ededed] text-[15px]">
                  {project.url ? (
                    <a
                      className="link-hover text-[#ededed] transition-colors hover:text-white"
                      href={project.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </p>
                <p className="resume-muted mt-1 text-[#888] text-[14px] leading-[1.7]">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="resume-section mb-12">
          <h2 className="resume-label mb-4 font-mono text-[#666] text-[11px] uppercase tracking-[0.2em]">
            Technical Skills
          </h2>
          <div className="flex flex-col gap-3">
            {technicalSkills.map((group) => (
              <div className="flex gap-3" key={group.category}>
                <span className="resume-muted shrink-0 font-mono text-[#666] text-[12px]">
                  {group.category}:
                </span>
                <span className="text-[#888] text-[14px]">{group.items}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="resume-section mb-12">
          <h2 className="resume-label mb-4 font-mono text-[#666] text-[11px] uppercase tracking-[0.2em]">
            Languages
          </h2>
          <div className="flex gap-8">
            {languages.map((lang) => (
              <div className="flex items-baseline gap-2" key={lang.name}>
                <span className="text-[#ededed] text-[15px]">{lang.name}</span>
                <span className="resume-muted font-mono text-[#666] text-[11px]">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="resume-section">
          <h2 className="resume-label mb-4 font-mono text-[#666] text-[11px] uppercase tracking-[0.2em]">
            Education
          </h2>
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-medium text-[#ededed] text-[15px]">
              Computer Engineering Technician
            </p>
            <span className="resume-muted shrink-0 font-mono text-[#666] text-[11px] tracking-wider">
              Jan 2013 — Dec 2014
            </span>
          </div>
          <p className="resume-muted mt-1 text-[#888] text-[14px]">SENAC</p>
        </section>
      </div>
    </>
  );
}
