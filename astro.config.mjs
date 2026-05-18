import react from "@astrojs/react";
import dualmark from "@dualmark/astro";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const SITE_URL = "https://www.leonardomso.com";

export default defineConfig({
  site: SITE_URL,
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [
    react(),
    dualmark({
      siteUrl: SITE_URL,
      staticPages: [
        {
          pattern: "/",
          render: () => `# Leonardo Maldonado

> Senior Full-Stack Engineer · Valencia, Spain · React, TypeScript, Go

Senior full-stack engineer with 7+ years of experience in TypeScript, React, Node.js, and Go. Previously the sole engineer on [Spaceship's domain search](https://www.spaceship.com/domain-search/) at [Namecheap](https://www.namecheap.com), helping sell 3M+ domains. Currently building [Strait](https://strait.dev), an agentic workflow orchestration platform with SDKs in five languages, MCP servers, and a CLI.

Creator of [33 JavaScript Concepts](https://github.com/leonardomso/33-js-concepts) (66K+ GitHub stars, GitHub Top Open Source Project of 2018). Open source contributor to Better Auth, Node.js, and TanStack.

## Links

- Website: https://www.leonardomso.com
- GitHub: https://github.com/leonardomso
- LinkedIn: https://www.linkedin.com/in/leonardomso/
- X: https://x.com/leonardomso
- Email: leonardomso11@gmail.com

## Pages

- [About](https://www.leonardomso.com/about)
- [Projects](https://www.leonardomso.com/projects)
- [Blog](https://www.leonardomso.com/blog)
- [Resume](https://www.leonardomso.com/resume)
- [Uses](https://www.leonardomso.com/uses)
- [Now](https://www.leonardomso.com/now)
`,
        },
        {
          pattern: "/about",
          render: () => `# About · Leonardo Maldonado

I'm Leonardo. I grew up in Franca, Brazil and moved to Valencia, Spain a few years ago. I wanted to be closer to the European tech scene and I just really like it here.

I've been writing code for about 7 years. Most of that time was spent at [Namecheap](https://www.namecheap.com), where I was the sole engineer on [Spaceship's domain search](https://www.spaceship.com/domain-search/). I built the whole thing from zero and helped the platform sell 3M+ domains: architecture, real-time pricing over WebSocket, Beast Mode bulk search, and multi-currency support across 30+ markets.

Right now I'm heads-down on [Strait](https://strait.dev), an agentic workflow orchestration platform written in Go. A single binary under 30MB that runs background jobs, scheduled tasks, and multi-step workflows. It ships with SDKs in five languages (TypeScript, Python, Go, Ruby, Rust), MCP servers, and a CLI. PostgreSQL for durable queuing, Redis for real-time events.

On the side I also built [Shopwyse](https://www.getshopwyse.com), a multi-tenant retail ERP, and [Polyglot](https://www.trypolyglot.ai), an AI writing tool that interviews you before drafting. I write CLI tools in Go and Rust when I want to learn something new by solving a real problem.

In 2018 I created [33 JavaScript Concepts](https://github.com/leonardomso/33-js-concepts), now at 66K+ GitHub stars and translated into 40+ languages by the community. GitHub named it a top open-source project of 2018.

I also spent a few years writing 100+ technical articles for [Progress (Telerik Blog)](https://www.telerik.com/blogs/author/leonardo-maldonado) and [LogRocket](https://blog.logrocket.com/author/leonardomaldonado/) on JavaScript, TypeScript, React, Node.js, and GraphQL.

My main stack is TypeScript, React, Node.js, and Go. Rust for side projects, PostgreSQL for data, whatever framework makes sense for the problem.

I speak Portuguese (native), English (fluent), and Spanish (fluent).
`,
        },
        {
          pattern: "/projects",
          render: () => `# Projects · Leonardo Maldonado

## Strait — Building Now
https://strait.dev

Agentic workflow orchestration platform written in Go. Single binary under 30MB. Ships with SDKs in five languages (TypeScript, Python, Go, Ruby, Rust), MCP servers, and a CLI. PostgreSQL for durable queuing, Redis for real-time events. Signed audit logs and rate limiting built in.

## 33 JavaScript Concepts — 66K+ Stars
https://github.com/leonardomso/33-js-concepts

A curated guide to every core JavaScript concept, from closures and prototypes to async patterns. GitHub recognized it as a top open-source project of 2018. Translated into 40+ languages by the community.

## Spaceship Domain Search
https://www.spaceship.com/domain-search/

Sole engineer on the domain search platform for four and a half years, helped sell 3M+ domains. Real-time WebSocket pricing across 500+ TLDs, Beast Mode bulk search, multi-currency engine across 30+ currencies.

## Shopwyse
https://www.getshopwyse.com

Multi-tenant retail ERP for small merchants. POS/checkout, inventory, CRM, and financial reporting. Built with TanStack Start, React 19, Elysia, Drizzle ORM, and PostgreSQL.

## Polyglot
https://www.trypolyglot.ai

AI-powered writing assistant that interviews the user first, then drafts content in their voice from multiple angles. Rich-text editing, voice profiles, and multi-format export. Full-stack TypeScript.

## gone
https://github.com/leonardomso/gone

Dead link detector written in Go. Concurrent HTTP checks, interactive TUI, auto-fix for redirects, and CI/CD output formats.

## betterhook
https://github.com/leonardomso/betterhook

Git hooks manager written in Rust. DAG-based scheduling, content-addressable cache, and streaming output via Tokio.
`,
        },
        {
          pattern: "/resume",
          render: () => `# Resume · Leonardo Maldonado

> Senior Full-Stack Engineer · React, TypeScript, Go · Valencia, Spain (CET)

leonardomso11@gmail.com · +34 674 27 13 13 · [github.com/leonardomso](https://github.com/leonardomso) · [linkedin.com/in/leonardomso](https://www.linkedin.com/in/leonardomso/)

## Professional Summary

Senior full-stack engineer with 7+ years of experience in TypeScript, React, Node.js, and Go. Previously the sole engineer on Spaceship domain search at Namecheap, helping sell 3M+ domains. Creator of 33 JavaScript Concepts (66K+ GitHub stars, GitHub Top Open Source Project of 2018). Currently building Strait, an agentic workflow orchestration platform with SDKs in five languages, MCP servers, and a CLI. Also built Shopwyse, a multi-tenant retail ERP, and Polyglot, an AI-powered writing tool. Open source contributor to Better Auth, Node.js, and TanStack.

## Technical Skills

- Languages: JavaScript, TypeScript, Go, Rust, HTML, CSS
- Frontend: React, Next.js, React Native, Vite, Tailwind CSS, TanStack Start, TanStack Query, Redux, Zustand
- Backend: Node.js, Bun, Hono, Elysia, GraphQL, REST APIs, WebSocket, PostgreSQL, Redis, MongoDB, Drizzle ORM
- AI: Vercel AI SDK, OpenAI API, Anthropic API, MCP (Model Context Protocol), AI Agents, LLM Integration
- Cloud & Infrastructure: Docker, Fly.io, Cloudflare, Vercel, GitHub Actions, CI/CD
- Testing: Vitest, Jest, Playwright, Detox
- Dev Tools: Git, Biome, Better Auth

## Experience

### Front End Engineer, Spaceship Domain Search — Namecheap (Nov 2021 to Apr 2026)
Sole engineer on Spaceship's domain search product end to end. Built React/TypeScript frontend from scratch. Real-time WebSocket pricing for 500+ TLDs, Beast Mode bulk search, multi-currency pricing for 30+ markets. Bundle size optimized by 35%.

### Technical Author — Progress / LogRocket (May 2019 to Dec 2023)
Published 100+ technical articles on JavaScript, TypeScript, React, Node.js, GraphQL reaching millions of developers.

### Software Engineer — Popstand (Oct 2019 to Apr 2020)
Built Taco Maps, a React Native food delivery app for LA taco restaurants.

### Software Engineer — Foton (Jan 2019 to Jul 2019)
React and React Native applications for Brazilian banking clients with financial-grade security standards.

## Education

- Universidade de Franca — Bachelor of Computer Science (2016 to 2020)
- Centro Universitário Senac — Computer Engineering Technologies/Technicians (2013 to 2014)

## Awards & Open Source

1. GitHub Top Open Source Project of 2018 — 33 JavaScript Concepts (66K+ stars, 40+ language translations).
2. Open Source Contributor — Code and documentation contributions to Better Auth, Node.js, and TanStack.
`,
        },
        {
          pattern: "/uses",
          render: () => `# Uses · Leonardo Maldonado

## Editor & Terminal
- Visual Studio Code
- Claude Code
- macOS Terminal / iTerm2
- Geist Mono

## Development
- TypeScript
- Go
- Rust
- React
- Node.js
- Bun
- PostgreSQL
- Redis

## Hardware
- MacBook Pro (Apple Silicon)
`,
        },
        {
          pattern: "/now",
          render: () => `# Now · Leonardo Maldonado

## Work
Recently left Namecheap after four and a half years building Spaceship's domain search as the sole engineer. The platform sold 3M+ domains during that time. Exploring what comes next.

## Building
Heads-down on [Strait](https://strait.dev), an agentic workflow orchestration platform written in Go. SDKs in five languages, MCP servers, and a CLI.

## Side Projects
Continuing to maintain [33 JavaScript Concepts](https://github.com/leonardomso/33-js-concepts), now at 66K+ stars and 40+ language translations.

## Learning
Exploring modern AI agent patterns, MCP servers, and Go for backend systems.

## Life
Based in Valencia, Spain. Enjoying the Mediterranean pace of life.
`,
        },
      ],
      llmsTxt: {
        enabled: true,
        brandName: "Leonardo Maldonado",
        description:
          "Senior full-stack engineer with 7+ years of experience in TypeScript, React, Node.js, and Go. Previously sole engineer on Spaceship's domain search at Namecheap (3M+ domains sold). Creator of 33 JavaScript Concepts (66K+ GitHub stars). Currently building Strait, an agentic workflow orchestration platform.",
        sections: [
          {
            title: "Pages",
            links: [
              { title: "Home", href: `${SITE_URL}/` },
              { title: "About", href: `${SITE_URL}/about` },
              { title: "Projects", href: `${SITE_URL}/projects` },
              { title: "Blog", href: `${SITE_URL}/blog` },
              { title: "Resume", href: `${SITE_URL}/resume` },
              { title: "Uses", href: `${SITE_URL}/uses` },
              { title: "Now", href: `${SITE_URL}/now` },
            ],
          },
          {
            title: "Profiles",
            links: [
              { title: "GitHub", href: "https://github.com/leonardomso" },
              {
                title: "LinkedIn",
                href: "https://www.linkedin.com/in/leonardomso/",
              },
              { title: "X / Twitter", href: "https://x.com/leonardomso" },
            ],
          },
        ],
      },
      middleware: { injectLinkHeader: true },
      headers: {
        cacheControl: "public, max-age=300, s-maxage=3600",
        noindex: true,
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
