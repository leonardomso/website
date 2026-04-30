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
  const doubled = [...technologies, ...technologies];

  return (
    <div aria-hidden="true" className="relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-16 bg-gradient-to-r from-[#050505] to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-16 bg-gradient-to-l from-[#050505] to-transparent" />

      <div
        className="flex w-max animate-marquee gap-6 py-2"
        role="presentation"
      >
        {doubled.map((tech, i) => (
          <span
            className="whitespace-nowrap font-mono text-[#555] text-[13px] tracking-wide transition-colors hover:text-[#a0a0a0]"
            key={`${tech}-${i}`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
