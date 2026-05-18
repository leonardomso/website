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

> Software Engineer · Valencia, Spain

Software engineer at [Namecheap](https://www.namecheap.com), where I built [Spaceship's domain search](https://www.spaceship.com/domain-search/) from scratch. Passionate about building fast, polished web experiences.

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

I'm Leonardo. I grew up in Franca, Brazil and moved to Valencia, Spain a few years ago.

I've been writing code for about 7 years. Most of that time was spent at [Namecheap](https://www.namecheap.com), where I was the sole engineer on [Spaceship's domain search](https://www.spaceship.com/domain-search/). I built the whole thing from zero: architecture, real-time pricing over WebSocket, bulk search, and multi-currency support across 30+ currencies.

In 2018, I created [33 JavaScript Concepts](https://github.com/leonardomso/33-js-concepts) (66K+ stars), recognized by GitHub as a top project of 2018.
`,
        },
        {
          pattern: "/projects",
          render: () => `# Projects · Leonardo Maldonado

## 33 JavaScript Concepts
https://github.com/leonardomso/33-js-concepts

## Spaceship Domain Search
https://www.spaceship.com/domain-search/

## Shopwyse
https://www.getshopwyse.com

## Polyglot
https://www.trypolyglot.ai

## Otis Finance
https://otisfinance.com

## gone
https://github.com/leonardomso/gone

## betterhook
https://github.com/leonardomso/betterhook
`,
        },
        {
          pattern: "/resume",
          render: () => `# Resume · Leonardo Maldonado

> Software Engineer · Valencia, Spain

leonardomso11@gmail.com · [github.com/leonardomso](https://github.com/leonardomso) · [linkedin.com/in/leonardomso](https://www.linkedin.com/in/leonardomso/)

## Professional Summary

Software engineer with 7+ years of experience. Sole engineer on Spaceship's domain search product at Namecheap for four and a half years.

## Core Stack

TypeScript, React, Node.js, GraphQL, PostgreSQL
`,
        },
        {
          pattern: "/uses",
          render: () => `# Uses · Leonardo Maldonado

## Editor & Terminal
- VS Code
- macOS Terminal
- Geist Mono

## Development
- TypeScript
- React
- Node.js
- PostgreSQL
`,
        },
        {
          pattern: "/now",
          render: () => `# Now · Leonardo Maldonado

## Work
Recently left Namecheap after building Spaceship domain search as the sole engineer.

## Focus
Building products and writing about software engineering.
`,
        },
      ],
      llmsTxt: {
        enabled: true,
        brandName: "Leonardo Maldonado",
        description:
          "Software engineer based in Valencia, Spain. Sole engineer on Spaceship's domain search at Namecheap, helped sell 3M+ domains. Creator of 33 JavaScript Concepts (66K+ stars).",
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
