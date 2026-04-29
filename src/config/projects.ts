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
      "Built the domain search platform from scratch as the sole front-end engineer. Real-time WebSocket pricing across 500+ TLDs, Beast Mode bulk search, multi-currency engine across 30+ currencies.",
    url: "https://www.spaceship.com/domain-search/",
    tech: ["TypeScript", "React", "Zustand", "TanStack Query"],
    featured: true,
  },
  {
    title: "Shopwyse",
    tag: "SaaS",
    description:
      "Multi-tenant retail ERP. POS/checkout, inventory, CRM, and financial reporting. Built with TanStack Start, React 19, Elysia, Drizzle ORM, and PostgreSQL.",
    url: "https://www.getshopwyse.com",
    tech: ["TanStack Start", "React", "Elysia", "PostgreSQL"],
    featured: true,
  },
  {
    title: "Polyglot",
    tag: "SaaS",
    description:
      "AI writing assistant that interviews you first, then drafts content in your voice from different angles. Full-stack TypeScript.",
    url: "https://www.trypolyglot.ai",
    tech: ["TypeScript", "AI SDK", "Node.js"],
    featured: true,
  },
  {
    title: "Otis Finance",
    tag: "SaaS",
    description:
      "Stock market API for real-time prices, SEC filings, earnings, and financials.",
    url: "https://otisfinance.com",
    tech: ["TypeScript", "Node.js", "REST APIs"],
    featured: true,
  },
  {
    title: "gone",
    tag: "CLI Tool",
    description:
      "Fast, concurrent dead link detector. Interactive terminal UI, auto-fix for redirects, and output formats for CI/CD pipelines. Written in Go.",
    url: "https://github.com/leonardomso/gone",
    tech: ["Go", "CLI"],
    featured: true,
  },
  {
    title: "betterhook",
    tag: "CLI Tool",
    description:
      "Git hooks manager built for parallel AI coding agent workflows. DAG-based scheduling, content-addressable cache, and streaming output via Tokio. Written in Rust.",
    url: "https://github.com/leonardomso/betterhook",
    tech: ["Rust", "Tokio", "CLI"],
    featured: true,
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
      "This portfolio website. Built with Next.js 16, Tailwind CSS v4, and deployed on Vercel.",
    url: "https://leonardomso.com",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: false,
  },
];
