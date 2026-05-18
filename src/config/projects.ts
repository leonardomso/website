export interface Project {
  description: string;
  featured: boolean;
  tag: string;
  tech: string[];
  title: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Strait",
    tag: "Building Now",
    description:
      "Agentic workflow orchestration platform written in Go. Single binary under 30MB. Ships with SDKs in five languages, MCP servers, and a CLI. PostgreSQL for durable queuing, Redis for real-time events.",
    url: "https://strait.dev",
    tech: ["Go", "TanStack Start", "PostgreSQL", "Redis"],
    featured: true,
  },
  {
    title: "33 JavaScript Concepts",
    tag: "Open Source",
    description:
      "33 JavaScript concepts every developer should know. 66K+ stars and translated into 40+ languages by the community. Recognized by GitHub as a top open-source project of 2018.",
    url: "https://github.com/leonardomso/33-js-concepts",
    tech: ["JavaScript", "Open Source"],
    featured: true,
  },
  {
    title: "Spaceship",
    tag: "Work",
    description:
      "Sole engineer on the domain search platform for four and a half years, helped sell 3M+ domains. Real-time WebSocket pricing across 500+ TLDs, Beast Mode bulk search, multi-currency engine across 30+ currencies.",
    url: "https://www.spaceship.com/domain-search/",
    tech: ["TypeScript", "React", "Zustand", "TanStack Query"],
    featured: true,
  },
  {
    title: "Shopwyse",
    tag: "SaaS",
    description:
      "Multi-tenant retail ERP for small merchants. POS/checkout, inventory, CRM, and financial reporting. Built with TanStack Start, React 19, Elysia, Drizzle ORM, and PostgreSQL.",
    url: "https://www.getshopwyse.com",
    tech: ["TanStack Start", "React", "Elysia", "PostgreSQL"],
    featured: true,
  },
  {
    title: "Polyglot",
    tag: "SaaS",
    description:
      "AI-powered writing assistant that interviews the user first, then drafts content in their voice from multiple angles. Rich-text editing, voice profiles, and multi-format export.",
    url: "https://www.trypolyglot.ai",
    tech: ["TypeScript", "AI SDK", "Node.js"],
    featured: true,
  },
  {
    title: "gone",
    tag: "CLI Tool",
    description:
      "Dead link detector written in Go. Concurrent HTTP checks, interactive TUI, auto-fix for redirects, and CI/CD output formats.",
    url: "https://github.com/leonardomso/gone",
    tech: ["Go", "CLI"],
    featured: true,
  },
  {
    title: "betterhook",
    tag: "CLI Tool",
    description:
      "Git hooks manager written in Rust. DAG-based scheduling, content-addressable cache, and streaming output via Tokio.",
    url: "https://github.com/leonardomso/betterhook",
    tech: ["Rust", "Tokio", "CLI"],
    featured: true,
  },
  {
    title: "Otis Finance",
    tag: "SaaS",
    description:
      "Stock market API for real-time prices, SEC filings, earnings, and financials.",
    url: "https://otisfinance.com",
    tech: ["TypeScript", "Node.js", "REST APIs"],
    featured: false,
  },
  {
    title: "rust-skills",
    tag: "Open Source",
    description:
      "179 rules that AI coding agents can use when writing Rust. A collection of best practices for AI-assisted Rust development.",
    url: "https://github.com/leonardomso/rust-skills",
    tech: ["Rust", "AI", "Open Source"],
    featured: false,
  },
  {
    title: "leonardomso.com",
    tag: "Personal",
    description:
      "This portfolio website. Built with Astro, Tailwind CSS v4, and deployed on Cloudflare Workers.",
    url: "https://leonardomso.com",
    tech: ["Astro", "TypeScript", "Tailwind CSS"],
    featured: false,
  },
];
