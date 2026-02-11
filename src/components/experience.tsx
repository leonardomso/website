const experiences = [
  {
    period: "2021 — Present",
    role: "Software Engineer",
    company: "Namecheap",
    description:
      "Building Spaceship, a digital platform that helps people bring ideas to life. Developed the Domain Search feature from scratch, designed its architecture for scale, and helped it reach 1M domains sold in one year.",
  },
  {
    period: "2019 — 2023",
    role: "Technical Author",
    company: "Progress",
    description:
      "Wrote extensively about JavaScript, TypeScript, React, GraphQL, and modern web development topics.",
  },
  {
    period: "2020 — 2022",
    role: "Technical Author",
    company: "LogRocket",
    description:
      "Created content empowering developers to learn programming languages, frameworks, and fundamentals.",
  },
  {
    period: "2019 — 2020",
    role: "Software Engineer",
    company: "Popstand",
    description:
      "Architected and deployed React Native apps using React, Redux, TypeScript, Firebase, and Detox.",
  },
  {
    period: "2019",
    role: "Software Engineer",
    company: "Foton",
    description:
      "Built React Native applications with TypeScript, Firebase, and modern mobile development tools.",
  },
];

export function Experience() {
  return (
    <div className="flex flex-col gap-8">
      {experiences.map((exp) => (
        <div key={exp.period} className="timeline-item">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[11px] tracking-wider text-[#666]">
              {exp.period}
            </span>
          </div>
          <p className="mt-1.5 text-[15px] font-medium text-[#ededed]">
            {exp.role}{" "}
            <span className="text-[#666]">at</span>{" "}
            <span className="text-[#a0a0a0]">{exp.company}</span>
          </p>
          <p className="mt-2 text-[14px] leading-[1.7] text-[#888]">
            {exp.description}
          </p>
        </div>
      ))}
    </div>
  );
}
