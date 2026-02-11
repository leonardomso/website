"use client";

const experiences = [
  {
    period: "Nov 2021 — Present",
    role: "Software Engineer",
    company: "Namecheap",
    description:
      "Building Spaceship, a digital platform that helps people bring ideas to life. Developed the Domain Search feature from scratch, designed its architecture for scale, integrated various APIs, and helped it reach 1M domains sold in one year.",
  },
  {
    period: "May 2019 — Dec 2023",
    role: "Technical Author",
    company: "Progress / Telerik",
    description:
      "Wrote extensively about JavaScript, TypeScript, React, GraphQL, and modern web development topics for the Telerik blog.",
  },
  {
    period: "Feb 2020 — Feb 2022",
    role: "Technical Author",
    company: "LogRocket",
    description:
      "Created content empowering developers to learn about programming languages, frameworks, and understand the fundamentals of programming.",
  },
  {
    period: "Oct 2019 — Apr 2020",
    role: "Software Engineer",
    company: "Popstand",
    description:
      "Architected and deployed React Native apps using React, Redux, TypeScript, Firebase, and Detox for various clients.",
  },
  {
    period: "Jan 2019 — Jul 2019",
    role: "Software Engineer",
    company: "Foton",
    description:
      "Built React Native applications with TypeScript, Firebase, and modern mobile development tools.",
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
  "Firebase",
  "Git",
  "TanStack",
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
          <p className="font-mono text-[12px] tracking-[0.25em] uppercase text-[#666]">
            Resume
          </p>
          <button
            onClick={() => window.print()}
            className="cursor-pointer font-mono text-[12px] tracking-wide text-[#666] transition-colors hover:text-[#ededed]"
          >
            Print / Save as PDF
          </button>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-[clamp(2rem,5vw,3rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-[#ededed]">
            Leonardo Maldonado
          </h1>
          <p className="mt-3 text-[15px] text-[#888]">
            Software Engineer · Valencia, Spain
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: "leonardomso11@gmail.com", href: "mailto:leonardomso11@gmail.com" },
              { label: "github.com/leonardomso", href: "https://github.com/leonardomso" },
              { label: "linkedin.com/in/leonardomso", href: "https://www.linkedin.com/in/leonardomso/" },
              { label: "leonardomso.com", href: "https://leonardomso.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover text-[13px] text-[#a0a0a0] transition-colors hover:text-[#ededed]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Summary */}
        <section className="resume-section mb-12">
          <h2 className="resume-label mb-4 font-mono text-[11px] tracking-[0.2em] uppercase text-[#666]">
            Summary
          </h2>
          <p className="text-[15px] leading-[1.8] text-[#888]">
            Software engineer with 6+ years of experience building web applications
            and developer tools. Currently at Namecheap building Spaceship. Created
            33 JavaScript Concepts, an open-source project with 63,000+ stars
            recognized by GitHub as a top project of 2018. Published 90+ technical
            articles with over 1 million views.
          </p>
        </section>

        {/* Experience */}
        <section className="resume-section mb-12">
          <h2 className="resume-label mb-6 font-mono text-[11px] tracking-[0.2em] uppercase text-[#666]">
            Experience
          </h2>
          <div className="flex flex-col gap-8">
            {experiences.map((exp) => (
              <div key={exp.period}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-[15px] font-medium text-[#ededed]">
                    {exp.role}{" "}
                    <span className="resume-muted text-[#666]">at</span>{" "}
                    <span className="text-[#a0a0a0]">{exp.company}</span>
                  </p>
                  <span className="resume-muted shrink-0 font-mono text-[11px] tracking-wider text-[#666]">
                    {exp.period}
                  </span>
                </div>
                <p className="resume-muted mt-2 text-[14px] leading-[1.7] text-[#888]">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Source */}
        <section className="resume-section mb-12">
          <h2 className="resume-label mb-4 font-mono text-[11px] tracking-[0.2em] uppercase text-[#666]">
            Open Source
          </h2>
          <div>
            <p className="text-[15px] font-medium text-[#ededed]">
              33 JavaScript Concepts
            </p>
            <p className="resume-muted mt-1 text-[14px] leading-[1.7] text-[#888]">
              Repository created in 2018 to help developers master JavaScript
              fundamentals. Recognized by GitHub as one of the top open-source
              projects of 2018. 63,000+ stars and translated into 20+ languages.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="resume-section mb-12">
          <h2 className="resume-label mb-4 font-mono text-[11px] tracking-[0.2em] uppercase text-[#666]">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-[#161616] px-3 py-1 font-mono text-[12px] text-[#888]"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="resume-section mb-12">
          <h2 className="resume-label mb-4 font-mono text-[11px] tracking-[0.2em] uppercase text-[#666]">
            Languages
          </h2>
          <div className="flex gap-8">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-baseline gap-2">
                <span className="text-[15px] text-[#ededed]">{lang.name}</span>
                <span className="resume-muted font-mono text-[11px] text-[#666]">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="resume-section">
          <h2 className="resume-label mb-4 font-mono text-[11px] tracking-[0.2em] uppercase text-[#666]">
            Education
          </h2>
          <p className="text-[15px] font-medium text-[#ededed]">
            Software Engineering
          </p>
        </section>
      </div>
    </>
  );
}
