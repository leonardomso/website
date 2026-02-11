import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses — Leonardo Maldonado",
  description: "Tools, software, and hardware I use daily for development.",
};

const categories = [
  {
    label: "Editor & Terminal",
    items: [
      { name: "VS Code", description: "Primary editor with Vim keybindings" },
      { name: "iTerm2", description: "Terminal emulator for macOS" },
      { name: "Geist Mono", description: "Monospace font for editor and terminal" },
      { name: "GitHub Dark", description: "Theme across all tools" },
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
      { name: "Arc", description: "Primary browser" },
      { name: "Figma", description: "Design and prototyping" },
      { name: "Linear", description: "Project management" },
      { name: "Notion", description: "Notes and documentation" },
      { name: "Raycast", description: "Launcher and productivity" },
    ],
  },
  {
    label: "Services",
    items: [
      { name: "Vercel", description: "Deployment and hosting" },
      { name: "GitHub", description: "Code hosting and collaboration" },
      { name: "Cloudflare", description: "DNS and CDN" },
      { name: "Simple Analytics", description: "Privacy-first analytics" },
    ],
  },
];

export default function UsesPage() {
  return (
    <div>
      <p className="mb-4 font-mono text-[12px] tracking-[0.25em] uppercase text-[#666]">
        Uses
      </p>
      <h1 className="text-[clamp(2rem,5vw,3rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-[#ededed]">
        Tools & Setup
      </h1>
      <p className="mt-6 max-w-[440px] text-[15px] leading-[1.75] text-[#888]">
        Software, hardware, and tools I use daily for development and
        productivity.
      </p>

      <div className="mt-16 flex flex-col gap-16">
        {categories.map((category) => (
          <section key={category.label}>
            <h2 className="mb-6 font-mono text-[11px] tracking-[0.2em] uppercase text-[#666]">
              {category.label}
            </h2>
            <div className="flex flex-col gap-4">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-baseline justify-between border-b border-[#111] pb-4"
                >
                  <span className="text-[15px] font-medium text-[#ededed]">
                    {item.name}
                  </span>
                  <span className="text-[13px] text-[#888]">
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
