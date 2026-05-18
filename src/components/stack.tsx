const technologies = [
  "TypeScript",
  "JavaScript",
  "Go",
  "Rust",
  "React",
  "Next.js",
  "TanStack Start",
  "Node.js",
  "Bun",
  "GraphQL",
  "PostgreSQL",
  "Redis",
  "Tailwind CSS",
  "MCP",
  "AI SDK",
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
