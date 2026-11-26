export interface Project {
  /** schema.org SoftwareApplication category. */
  category: "BusinessApplication" | "DeveloperApplication";
  description: string;
  /** Actual programming languages, for structured data. */
  languages: string[];
  /** SPDX license URL when the project is open source. */
  license?: string;
  /** One line for the home page list. */
  summary: string;
  tag: string;
  tech: string[];
  title: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "SetLuca",
    tag: "Building now",
    summary: "DM sales for creators and coaches",
    description:
      "A DM sales platform for experts, creators and coaches. It replies to every lead on Instagram, Messenger and Telegram in the creator's own voice, works out who's serious and books the call on their calendar.",
    url: "https://setluca.com",
    category: "BusinessApplication",
    languages: ["TypeScript"],
    tech: [
      "TypeScript",
      "Hono",
      "Cloudflare Workers",
      "Inngest",
      "TanStack Start",
      "PostgreSQL",
      "Drizzle",
    ],
  },
  {
    title: "Strait",
    tag: "Open source",
    summary: "Background jobs on Postgres",
    description:
      "Background jobs and multi-step workflows that run on the Postgres database you already have, with no Redis or separate queue. Durable queues with retries and backoff, workflows that can pause for manual approval, and a live dashboard. A single self-hostable Go binary under Apache-2.0, with SDKs for TypeScript, Python, Go, Ruby and Rust, plus MCP servers and a CLI.",
    url: "https://strait.dev",
    category: "DeveloperApplication",
    languages: ["Go", "TypeScript"],
    license: "https://www.apache.org/licenses/LICENSE-2.0",
    tech: ["Go", "PostgreSQL", "TanStack Start"],
  },
];
