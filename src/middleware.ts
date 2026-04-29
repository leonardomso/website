import { type NextRequest, NextResponse } from "next/server";

const SITE_URL = "https://leonardomso.com";

const LINK_HEADERS = [
  `<${SITE_URL}/llms.txt>; rel="describedby"; type="text/plain"; title="LLM-friendly site description"`,
  `<${SITE_URL}/feed.xml>; rel="alternate"; type="application/rss+xml"; title="RSS Feed"`,
  `<${SITE_URL}/sitemap.xml>; rel="describedby"; type="application/xml"; title="Sitemap"`,
  `<${SITE_URL}/.well-known/agent-skills/index.json>; rel="describedby"; type="application/json"; title="Agent Skills"`,
].join(", ");

/** Pages that support markdown content negotiation. */
const MARKDOWN_PAGES: Record<string, () => string> = {
  "/": () => homeMarkdown(),
  "/about": () => aboutMarkdown(),
  "/projects": () => projectsMarkdown(),
  "/resume": () => resumeMarkdown(),
};

export function middleware(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";
  const pathname = request.nextUrl.pathname;

  // Markdown content negotiation (Accept: text/markdown)
  if (
    accept.includes("text/markdown") &&
    !accept.includes("text/html") &&
    MARKDOWN_PAGES[pathname]
  ) {
    const md = MARKDOWN_PAGES[pathname]();
    return new NextResponse(md, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        Link: LINK_HEADERS,
      },
    });
  }

  // Add Link headers to all HTML responses
  const response = NextResponse.next();
  response.headers.set("Link", LINK_HEADERS);
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     * - public assets
     */
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};

// ── Markdown representations ──

function homeMarkdown(): string {
  return `# Leonardo Maldonado

> Software Engineer · Valencia, Spain

Software engineer at [Namecheap](https://www.namecheap.com), where I built [Spaceship's domain search](https://www.spaceship.com/domain-search/) from scratch. Passionate about building fast, polished web experiences.

## Links

- Website: ${SITE_URL}
- GitHub: https://github.com/leonardomso
- LinkedIn: https://www.linkedin.com/in/leonardomso/
- X: https://x.com/leonardomso
- Email: leonardomso11@gmail.com

## Pages

- [About](${SITE_URL}/about)
- [Projects](${SITE_URL}/projects)
- [Blog](${SITE_URL}/blog)
- [Resume](${SITE_URL}/resume)
- [Uses](${SITE_URL}/uses)
- [Now](${SITE_URL}/now)

## More

- [LLMs.txt](${SITE_URL}/llms.txt) — Full machine-readable profile
- [RSS Feed](${SITE_URL}/feed.xml)
`;
}

function aboutMarkdown(): string {
  return `# About — Leonardo Maldonado

I'm Leonardo. I grew up in Franca, Brazil and moved to Valencia, Spain a few years ago.

I've been writing code for about 7 years. Most of that time was spent at [Namecheap](https://www.namecheap.com), where I was the sole engineer on [Spaceship's domain search](https://www.spaceship.com/domain-search/). I built the whole thing from zero: the architecture, the real-time pricing over WebSocket, bulk search, multi-currency support across 30+ currencies. Four and a half years of owning a product end to end.

On the side, I've built [Shopwyse](https://www.getshopwyse.com) (retail ERP), [Polyglot](https://www.trypolyglot.ai) (AI writing assistant), [Otis Finance](https://otisfinance.com) (stock market API), and CLI tools in Go and Rust.

In 2018, I made [33 JavaScript Concepts](https://github.com/leonardomso/33-js-concepts). 66K+ stars, translated into 40+ languages. [GitHub named it a top project of 2018](https://github.blog/2018-12-13-new-open-source-projects/#top-projects-of-2018).

I also wrote 100+ articles for [Progress](https://www.telerik.com/blogs/author/leonardo-maldonado) and [LogRocket](https://blog.logrocket.com/author/leonardomaldonado/). Over a million views total.

My main stack is TypeScript, React, and Node.js. I speak Portuguese, English, and Spanish.

Contact: leonardomso11@gmail.com
`;
}

function projectsMarkdown(): string {
  return `# Projects — Leonardo Maldonado

## 33 JavaScript Concepts
33 JavaScript concepts every developer should know. 66K+ stars, translated into 40+ languages.
https://github.com/leonardomso/33-js-concepts

## Spaceship Domain Search
Built the domain search platform from scratch as the sole front-end engineer. Real-time WebSocket pricing across 500+ TLDs, Beast Mode bulk search, multi-currency engine.
https://www.spaceship.com/domain-search/

## Shopwyse
Multi-tenant retail ERP. POS/checkout, inventory, CRM, and financial reporting.
https://www.getshopwyse.com

## Polyglot
AI writing assistant that interviews you first, then drafts content in your voice.
https://www.trypolyglot.ai

## Otis Finance
Stock market API for real-time prices, SEC filings, earnings, and financials.
https://otisfinance.com

## gone
Fast, concurrent dead link detector written in Go. Interactive terminal UI, auto-fix for redirects.
https://github.com/leonardomso/gone

## betterhook
Git hooks manager written in Rust for parallel AI coding agent workflows. DAG-based scheduling, content-addressable cache.
https://github.com/leonardomso/betterhook

## rust-skills
179 rules that AI coding agents can use when writing Rust.
https://github.com/leonardomso/rust-skills
`;
}

function resumeMarkdown(): string {
  return `# Resume — Leonardo Maldonado

> Software Engineer · Valencia, Spain

leonardomso11@gmail.com · [github.com/leonardomso](https://github.com/leonardomso) · [linkedin.com/in/leonardomso](https://www.linkedin.com/in/leonardomso/) · [leonardomso.com](${SITE_URL})

## Professional Summary

Software engineer with 7+ years of experience. For four and a half years, the sole engineer responsible for Namecheap's Spaceship domain search product end to end: product decisions, architecture, React/TypeScript frontend, real-time WebSocket data layer, performance, and releases. Also built a retail ERP (Shopwyse) and an AI writing tool (Polyglot) independently, full-stack with TypeScript, Node.js, GraphQL, and PostgreSQL. Creator of 33 JavaScript Concepts (66K+ GitHub stars). Author of 100+ technical articles. Contributor to Better Auth, Node.js, and TanStack.

## Skills

TypeScript | React.js | Node.js | GraphQL | PostgreSQL | Full-Stack Development | Product Engineering | Real-Time Systems / WebSocket | Performance Optimization | Open Source | REST APIs | CI/CD | GitHub Actions | Redis

## Work Experience

### Front End Engineer, Spaceship Domain Search — Namecheap (Nov 2021 — Apr 2026)

Sole engineer responsible for Spaceship's domain search product. Built it from zero with React, TypeScript, and Zustand. Tackled real-time pricing across 500+ TLDs over WebSocket. Brought re-renders down by about 80%. Integrated TanStack Query with query key factories and smart cache invalidation, cutting redundant API calls by roughly 60%. Introduced code splitting and virtualized rendering, ending up about 40% smaller. Built "Beast Mode" bulk search. Set up a multi-currency pricing engine across 30+ currencies.

### Technical Author — Progress (May 2019 — Dec 2023)

Technical writer covering JavaScript, TypeScript, React, Node.js, and modern web development.

### Technical Author — LogRocket (Feb 2020 — Feb 2022)

Published 70+ technical articles on JavaScript, TypeScript, React, Node.js, GraphQL, and web fundamentals.

### Software Engineer — Popstand (Oct 2019 — Apr 2020)

Built Taco Maps from scratch, a React Native food delivery app for LA taco restaurants. Redux, TypeScript, Firebase, E2E tests with Detox.

### Software Engineer — Foton (Jan 2019 — Jul 2019)

React and React Native applications for Brazilian banking clients. Financial-grade security and reliability standards.

## Projects

- **[33 JavaScript Concepts](https://github.com/leonardomso/33-js-concepts)** — 66K+ stars, translated into 40+ languages. GitHub top project of 2018.
- **[Shopwyse](https://www.getshopwyse.com)** — Multi-tenant retail ERP. TanStack Start, React 19, Elysia, Drizzle ORM, PostgreSQL.
- **[Polyglot](https://www.trypolyglot.ai)** — AI writing assistant. Full-stack TypeScript.
- **[Otis Finance](https://otisfinance.com)** — Stock market API for real-time prices, SEC filings, earnings.
- **[gone](https://github.com/leonardomso/gone)** — Dead link detector written in Go.
- **[betterhook](https://github.com/leonardomso/betterhook)** — Git hooks manager written in Rust.

## Technical Skills

- **Languages:** JavaScript, TypeScript, Go (side projects), Rust (side projects)
- **Frontend:** React.js, Next.js, TanStack Start, TanStack Query, React Native, Zustand
- **Backend:** Node.js, Bun, Hono, Elysia, GraphQL, REST APIs, WebSocket, PostgreSQL, Drizzle ORM, Redis, MongoDB
- **Tools & CI/CD:** Docker, GitHub Actions, AI SDK, Biome, Better Auth

## Languages

- Portuguese (Native)
- English (Fluent)
- Spanish (Fluent)

## Education

Computer Engineering Technician — SENAC (Jan 2013 — Dec 2014)
`;
}
