const technologies = [
  "React",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "Tailwind CSS",
  "TanStack",
  "Git",
];

export function Stack() {
  const doubled = [...technologies, ...technologies];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#050505] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#050505] to-transparent" />

      <div className="animate-marquee flex w-max gap-6 py-2">
        {doubled.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="whitespace-nowrap font-mono text-[13px] tracking-wide text-[#555] transition-colors hover:text-[#a0a0a0]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
