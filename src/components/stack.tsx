const technologies = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Zustand",
  "TanStack Query",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "Tailwind CSS",
  "React Native",
  "Biome",
  "Git",
];

export function Stack() {
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-[13px] text-fg-muted tracking-wide">
      {technologies.map((tech) => (
        <li key={tech}>{tech}</li>
      ))}
    </ul>
  );
}
