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
          className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
          href="https://www.spaceship.com/domain-search/"
          rel="noopener noreferrer"
          target="_blank"
        >
          domain search platform
        </a>{" "}
        from scratch as the sole front-end developer. React, TypeScript,
        Zustand, TanStack Query. Reduced API calls by 60%, bundle size by 40%,
        and re-renders by 80% through WebSocket batching and code splitting.
      </>
    ),
  },
  {
    period: "May 2019 — Dec 2023",
    role: "Technical Author",
    company: "Progress",
    url: "https://www.progress.com/",
    description:
      "Wrote extensively about JavaScript, TypeScript, React, GraphQL, and modern web development for the Telerik blog.",
  },
  {
    period: "Feb 2020 — Feb 2022",
    role: "Technical Author",
    company: "LogRocket",
    url: "https://logrocket.com/",
    description:
      "Created content empowering developers to learn about JavaScript, TypeScript, GraphQL, React, Node.js, and programming fundamentals.",
  },
  {
    period: "Oct 2019 — Apr 2020",
    role: "Software Engineer",
    company: "Popstand",
    url: "https://popstand.com/",
    description:
      "Built Taco Maps, a React Native food delivery app for Los Angeles. Architected from the ground up with Redux, TypeScript, Firebase, and Detox e2e testing.",
  },
  {
    period: "Jan 2019 — Jul 2019",
    role: "Software Engineer",
    company: "Foton",
    url: "https://foton.tech/",
    description:
      "Delivered React and React Native applications for Brazilian banking projects. Built scalable frontend solutions with Redux, TypeScript, and Firebase.",
  },
];

export function Experience() {
  return (
    <div className="flex flex-col gap-8">
      {experiences.map((exp) => (
        <div className="timeline-item" key={exp.period}>
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[#666] text-[11px] tracking-wider">
              {exp.period}
            </span>
          </div>
          <p className="mt-1.5 font-medium text-[#ededed] text-[15px]">
            {exp.role} <span className="text-[#666]">at</span>{" "}
            <a
              className="link-hover text-[#a0a0a0] transition-colors hover:text-[#ededed]"
              href={exp.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {exp.company}
            </a>
          </p>
          <p className="mt-2 text-[#888] text-[14px] leading-[1.7]">
            {exp.description}
          </p>
        </div>
      ))}
    </div>
  );
}
