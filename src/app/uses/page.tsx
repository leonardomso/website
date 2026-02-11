import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses",
  description: "Tools, software, and hardware I use daily for development.",
};

const categories = [
  {
    label: "Editor & Terminal",
    items: [
      { name: "VS Code", description: "Primary code editor" },
      { name: "Terminal", description: "macOS terminal" },
      {
        name: "Geist Mono",
        description: "Monospace font for editor and terminal",
      },
    ],
  },
  {
    label: "Development",
    items: [
      { name: "TypeScript", description: "Primary language for everything" },
      { name: "React / Next.js", description: "Frontend framework of choice" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework" },
      { name: "Node.js", description: "Server-side runtime" },
      { name: "PostgreSQL", description: "Database for most projects" },
      { name: "Git", description: "Version control" },
    ],
  },
  {
    label: "Apps",
    items: [
      { name: "Figma", description: "Design and prototyping" },
      { name: "Notion", description: "Notes and documentation" },
    ],
  },
  {
    label: "Services",
    items: [
      { name: "Vercel", description: "Deployment and hosting" },
      { name: "GitHub", description: "Code hosting and collaboration" },
      { name: "Cloudflare", description: "DNS and CDN" },
    ],
  },
];

export default function UsesPage() {
  return (
    <div>
      <p className="mb-4 font-mono text-[#666] text-[12px] uppercase tracking-[0.25em]">
        Uses
      </p>
      <h1 className="font-semibold text-[#ededed] text-[clamp(2rem,5vw,3rem)] leading-[1.1] tracking-[-0.03em]">
        Tools & Setup
      </h1>
      <p className="mt-6 max-w-[440px] text-[#888] text-[15px] leading-[1.75]">
        Software, hardware, and tools I use daily for development and
        productivity.
      </p>

      <div className="mt-16 flex flex-col gap-16">
        {categories.map((category) => (
          <section key={category.label}>
            <h2 className="mb-6 font-mono text-[#666] text-[11px] uppercase tracking-[0.2em]">
              {category.label}
            </h2>
            <div className="flex flex-col gap-4">
              {category.items.map((item) => (
                <div
                  className="flex items-baseline justify-between border-[#111] border-b pb-4"
                  key={item.name}
                >
                  <span className="font-medium text-[#ededed] text-[15px]">
                    {item.name}
                  </span>
                  <span className="text-[#888] text-[13px]">
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
