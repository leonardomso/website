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

> Senior full-stack engineer in Valencia, Spain. Building SetLuca.

I build products end to end in TypeScript, front and back. Right now I'm working on [SetLuca](https://setluca.com), a DM sales platform for experts, creators and coaches.

Before that I spent four and a half years as the only frontend engineer on [Spaceship's domain search](https://www.spaceship.com/domain-search/) at [Namecheap](https://www.namecheap.com). I also wrote [33 JavaScript Concepts](https://github.com/leonardomso/33-js-concepts), an open-source guide that people have translated into 40+ languages.

## Projects

- [SetLuca](https://setluca.com): DM sales for creators and coaches
- [Strait](https://strait.dev): Background jobs on Postgres

## Work

- Spaceship (Namecheap): Senior front end engineer, 2021 to 2026
- Progress: Technical author, 2019 to 2023
- LogRocket: Technical author, 2020 to 2022
- Popstand: Software engineer, 2019 to 2021
- Foton: Software engineer, 2019

## Writing

Over 100 articles on React, TypeScript and frontend performance for [LogRocket](https://blog.logrocket.com/author/leonardomaldonado/) and [Progress](https://www.telerik.com/blogs/author/leonardo-maldonado).

## Contact

- Email: leonardomso11@gmail.com
- GitHub: https://github.com/leonardomso
- X: https://x.com/leonardomso
- LinkedIn: https://www.linkedin.com/in/leonardomso/

## Pages

- [About](https://www.leonardomso.com/about)
- [Projects](https://www.leonardomso.com/projects)
- [Resume](https://www.leonardomso.com/resume)
- [Uses](https://www.leonardomso.com/uses)
- [Now](https://www.leonardomso.com/now)
`,
        },
        {
          pattern: "/about",
          render: () => `# About · Leonardo Maldonado

I grew up in Franca, Brazil, and now live in Valencia, Spain.

I've been writing software professionally since 2019, all of it remote. For four and a half years I was the only frontend engineer on [Spaceship's domain search](https://www.spaceship.com/domain-search/) at [Namecheap](https://www.namecheap.com). I built it from scratch and owned everything from architecture to releases: real-time pricing over WebSockets for 500+ TLDs, bulk search, and pricing in 30+ currencies. It sold more than 3 million domains while I was there.

Now I'm building [SetLuca](https://setluca.com), a DM sales platform for experts, creators and coaches. It reads incoming DMs on Instagram, Messenger and Telegram, scores each lead and replies in the creator's own voice. TypeScript end to end: Hono on Cloudflare Workers, Inngest, TanStack Start, PostgreSQL and Drizzle.

On the side I build [Strait](https://strait.dev), background jobs and multi-step workflows that run on the Postgres database you already have, with no Redis or separate queue. A single Go binary, open source under Apache-2.0.

In 2018 I published [33 JavaScript Concepts](https://github.com/leonardomso/33-js-concepts) as a study guide for myself. It now has 66K stars and translations in 40+ languages, and GitHub named it one of the top projects of 2018. I still maintain it.

I've also written 100+ articles on React, TypeScript and frontend performance for [LogRocket](https://blog.logrocket.com/author/leonardomaldonado/) and [Progress](https://www.telerik.com/blogs/author/leonardo-maldonado).

I mostly work in TypeScript, front and back, and I like owning a product from the first architecture decision to every release.

I speak Portuguese and English, and some Spanish. I'm open to senior full-stack and freelance roles, remote or partly on-site in Europe. Email leonardomso11@gmail.com.
`,
        },
        {
          pattern: "/projects",
          render: () => `# Projects · Leonardo Maldonado

## SetLuca (building now)
https://setluca.com

A DM sales platform for experts, creators and coaches. It replies to every lead on Instagram, Messenger and Telegram in the creator's own voice, works out who's serious and books the call on their calendar.

## Strait (open source)
https://strait.dev

Background jobs and multi-step workflows that run on the Postgres database you already have, with no Redis or separate queue. Durable queues with retries and backoff, workflows that can pause for manual approval, and a live dashboard. A single self-hostable Go binary under Apache-2.0, with SDKs for TypeScript, Python, Go, Ruby and Rust, plus MCP servers and a CLI.
`,
        },
        {
          pattern: "/resume",
          render: () => `# Resume · Leonardo Maldonado

> Senior full-stack engineer · Valencia, Spain (CET)

leonardomso11@gmail.com · +34 674 27 13 13 · [github.com/leonardomso](https://github.com/leonardomso) · [linkedin.com/in/leonardomso](https://www.linkedin.com/in/leonardomso/)

Senior full-stack engineer with 8+ years of experience, all of it remote, mostly in TypeScript, front and back. For four and a half years I was the only frontend engineer on Spaceship's domain search at Namecheap, which sold more than 3 million domains. I'm building SetLuca, a DM sales platform for creators and coaches, and Strait, an open-source job and workflow engine on Postgres. I created 33 JavaScript Concepts (66K GitHub stars) and I've contributed to Better Auth, Node.js and TanStack. Open to senior full-stack and freelance roles, remote or partly on-site in Europe.

## Experience

### Namecheap: Senior Front End Engineer, Spaceship Domain Search (Nov 2021 to Jun 2026)
- Only frontend engineer on Spaceship's domain search for four and a half years. Built the React and TypeScript frontend from scratch and owned architecture, code review and every release. The product sold more than 3 million domains.
- Built a real-time pricing engine over WebSockets that streams live prices for 500+ TLDs per search and keeps renders under 100ms on large result sets.
- Shipped Beast Mode, a bulk search for up to 100 domains at once with filters for price, category and TLD type.
- Added pricing in 30+ currencies with region-aware caching, cutting price-fetch latency by about 60%.
- Reduced the bundle by 35% with code splitting and lazy rendering.
- Set the technical direction for the search frontend: component architecture, testing strategy and release process.

### Progress: Technical Author, contract (May 2019 to Dec 2023)
Wrote about TypeScript and web engineering for the Progress blog: Zod, tRPC, pattern matching, IndexedDB and React performance.

### LogRocket: Technical Author, freelance (Feb 2020 to Feb 2022)
Wrote for the LogRocket engineering blog on React, state management, frontend performance, lazy loading and Next.js rendering, plus JavaScript and CSS fundamentals.

### Popstand: Software Engineer (Oct 2019 to Apr 2021)
Built Taco Maps from scratch, a React Native food ordering app for taco restaurants in Los Angeles. Redux, TypeScript, Firebase and Detox.

### Foton: Software Engineer (Jan 2019 to Jul 2019)
Built React and React Native apps for Brazilian banking clients, held to financial-grade security and reliability standards.

## Projects

- [SetLuca](https://setluca.com) (Jul 2026 to now): DM sales platform for experts, creators and coaches.
- [Strait](https://strait.dev) (Jan 2026 to now): background jobs and workflows on Postgres, open source.

## Skills

- Languages: TypeScript, JavaScript, Go, Rust, HTML, CSS
- Frontend: React, Next.js, React Native, TanStack Start, TanStack Query, Vite, Tailwind CSS, Redux, Zustand
- Backend: Node.js, Bun, Hono, Elysia, Inngest, GraphQL, REST, WebSocket, PostgreSQL, MySQL, Redis, MongoDB, Drizzle
- AI: Vercel AI SDK, Anthropic API, OpenAI API, MCP, agents
- Infrastructure: Cloudflare Workers, Vercel, Fly.io, Docker, GitHub Actions
- Testing: Vitest, Jest, Playwright, Detox
- Spoken: Portuguese (native), English (professional), Spanish (limited)

## Education

- Universidade de Franca: BSc Computer Science (2016 to 2020)
- Centro Universitário Senac: Computer Engineering Technician (2013 to 2014)

## Recognition

- GitHub top open-source project of 2018: 33 JavaScript Concepts (66K stars, 40+ translations).
- Open-source contributor: code and documentation for Better Auth, Node.js and TanStack.
`,
        },
        {
          pattern: "/uses",
          render: () => `# Uses · Leonardo Maldonado

## Editor and terminal
- VS Code: editor
- Claude Code: coding agent
- iTerm2: terminal
- Geist Mono: editor and terminal font

## Development
- TypeScript: most of what I write
- Go: backends and CLIs
- Rust: side projects
- React: interfaces
- Node.js and Bun: runtimes
- PostgreSQL: default database
- Redis: queues and real-time events

## Apps
- Figma: design
- Notion: notes

## Services
- GitHub: code
- Cloudflare: hosting and DNS
- Vercel: hosting

## Hardware
- MacBook Pro (Apple Silicon)
`,
        },
        {
          pattern: "/now",
          render: () => `# Now · Leonardo Maldonado

## Work
I left Namecheap in June 2026 after four and a half years as the only frontend engineer on Spaceship's domain search. Since July I've been building [SetLuca](https://setluca.com), a DM sales platform for experts, creators and coaches.

I'm open to senior full-stack and freelance roles, remote or partly on-site in Europe.

## Side project
[Strait](https://strait.dev), background jobs and workflows that run on Postgres, with no Redis or separate queue.

## Open source
Maintaining [33 JavaScript Concepts](https://github.com/leonardomso/33-js-concepts), now at 66K stars and 40+ translations, and recently relaunched as a website.

## Learning
Patterns for AI agents, MCP servers, and Go for backend systems.

## Life
Living in Valencia and enjoying the Mediterranean pace.

Updated November 2026.
`,
        },
      ],
      llmsTxt: {
        enabled: true,
        brandName: "Leonardo Maldonado",
        description:
          "Senior full-stack engineer in Valencia, Spain, with 8+ years of remote experience, mostly in TypeScript. Previously the only frontend engineer on Spaceship's domain search at Namecheap (3M+ domains sold). Creator of 33 JavaScript Concepts (66K GitHub stars). Building SetLuca, a DM sales platform for creators and coaches.",
        sections: [
          {
            title: "Pages",
            links: [
              { title: "Home", href: `${SITE_URL}/index.md`, description: "Short bio, projects, work history and contact" },
              { title: "About", href: `${SITE_URL}/about.md`, description: "Background, what I'm building and how I work" },
              { title: "Projects", href: `${SITE_URL}/projects.md`, description: "SetLuca and Strait in detail" },
              { title: "Resume", href: `${SITE_URL}/resume.md`, description: "Full experience, skills, education and recognition" },
              { title: "Now", href: `${SITE_URL}/now.md`, description: "Current focus and availability" },
              { title: "Uses", href: `${SITE_URL}/uses.md`, description: "Tools, languages and hardware" },
            ],
          },
          {
            title: "Projects",
            links: [
              { title: "SetLuca", href: "https://setluca.com", description: "DM sales platform for experts, creators and coaches (building now)" },
              { title: "Strait", href: "https://strait.dev", description: "Open-source background jobs and workflows on Postgres, written in Go" },
              { title: "33 JavaScript Concepts", href: "https://github.com/leonardomso/33-js-concepts", description: "Open-source JavaScript guide, 66K GitHub stars" },
            ],
          },
          {
            title: "Writing",
            links: [
              { title: "LogRocket", href: "https://blog.logrocket.com/author/leonardomaldonado/", description: "Articles on React, state management and frontend performance" },
              { title: "Progress", href: "https://www.telerik.com/blogs/author/leonardo-maldonado", description: "Articles on TypeScript and web engineering" },
            ],
          },
          {
            title: "Contact",
            links: [
              { title: "Email", href: "mailto:leonardomso11@gmail.com" },
              { title: "GitHub", href: "https://github.com/leonardomso" },
              { title: "LinkedIn", href: "https://www.linkedin.com/in/leonardomso/" },
              { title: "X", href: "https://x.com/leonardomso" },
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
