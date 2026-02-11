"use client";

const experiences: {
  period: string;
  role: string;
  company: string;
  url: string;
  description: React.ReactNode;
}[] = [
  {
    period: "Nov 2021 — Present",
    role: "Software Engineer",
    company: "Namecheap",
    url: "https://www.namecheap.com/",
    description: (
      <>
        Built Spaceship&apos;s{" "}
        <a
          className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed] print:text-[#111] print:no-underline"
          href="https://www.spaceship.com/domain-search/"
          rel="noopener noreferrer"
          target="_blank"
        >
          domain search platform
        </a>{" "}
        from scratch as the sole front-end developer. Established the entire
        frontend architecture with React, TypeScript, and Zustand. Built Beast
        Mode bulk search for simultaneous multi-domain queries with advanced
        filtering. Integrated TanStack Query with query key factories and
        intelligent caching, reducing API calls by 60%. Optimized performance
        through code splitting and virtualized rendering, cutting bundle size by
        40%. Refactored WebSocket processing with batched state updates,
        reducing re-renders by 80%. Built a multi-currency pricing engine
        supporting 30+ currencies across 500+ TLDs.
      </>
    ),
  },
  {
    period: "May 2019 — Dec 2023",
    role: "Technical Author",
    company: "Progress / Telerik",
    url: "https://www.progress.com/",
    description:
      "Wrote extensively about JavaScript, TypeScript, React, GraphQL, HTML/CSS, Node.js, and modern web development for the Telerik blog.",
  },
  {
    period: "Feb 2020 — Feb 2022",
    role: "Technical Author",
    company: "LogRocket",
    url: "https://logrocket.com/",
    description:
      "Created content empowering developers to learn about JavaScript, TypeScript, GraphQL, HTML/CSS, React, Node.js, and programming fundamentals.",
  },
  {
    period: "Oct 2019 — Apr 2020",
    role: "Software Engineer",
    company: "Popstand",
    url: "https://popstand.com/",
    description:
      "Built Taco Maps, a React Native food delivery app for Los Angeles taco restaurants. Architected the mobile application from the ground up with Redux, TypeScript, and Firebase. Implemented real-time order tracking, location services, and payment integration. Set up end-to-end testing with Detox across iOS and Android.",
  },
  {
    period: "Jan 2019 — Jul 2019",
    role: "Software Engineer",
    company: "Foton",
    url: "https://foton.tech/",
    description:
      "Delivered React and React Native applications across Brazilian banking projects. Built scalable frontend solutions with Redux, TypeScript, and Firebase, with comprehensive Detox testing for financial-grade reliability.",
  },
];

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "Tailwind CSS",
  "React Native",
  "Zustand",
  "TanStack Query",
  "Firebase",
  "Biome",
  "Git",
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
            Summary
          </h2>
          <p className="text-[#888] text-[15px] leading-[1.8]">
            Software engineer with 6+ years of experience building web
            applications and developer tools. Currently at Namecheap building
            Spaceship. Created 33 JavaScript Concepts, an open-source project
            with 63,000+ stars recognized by GitHub as a top project of 2018.
            Published 90+ technical articles with over 1 million views.
          </p>
        </section>

        {/* Experience */}
        <section className="resume-section mb-12">
          <h2 className="resume-label mb-6 font-mono text-[#666] text-[11px] uppercase tracking-[0.2em]">
            Experience
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

        {/* Open Source */}
        <section className="resume-section mb-12">
          <h2 className="resume-label mb-4 font-mono text-[#666] text-[11px] uppercase tracking-[0.2em]">
            Open Source
          </h2>
          <div>
            <p className="font-medium text-[#ededed] text-[15px]">
              33 JavaScript Concepts
            </p>
            <p className="resume-muted mt-1 text-[#888] text-[14px] leading-[1.7]">
              Repository created in 2018 to help developers master JavaScript
              fundamentals. Recognized by GitHub as one of the top open-source
              projects of 2018. 63,000+ stars and translated into 20+ languages.
            </p>
          </div>
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
          <p className="font-medium text-[#ededed] text-[15px]">
            Software Engineering
          </p>
        </section>
      </div>
    </>
  );
}
