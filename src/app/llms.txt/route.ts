const SITE_URL = "https://leonardomso.com";

const content = `# Leonardo Maldonado

> Software engineer based in Valencia, Spain. Sole engineer on Spaceship's domain search at Namecheap — helped sell 3M+ domains. Creator of 33 JavaScript Concepts (66K+ stars).

## About

Leonardo Maldonado is a software engineer with 7+ years of experience building web applications. He was the sole engineer on Spaceship's domain search product at Namecheap for four and a half years, helping the platform sell 3M+ domains. He built it from zero using React, TypeScript, Zustand, and TanStack Query.

He is the creator of 33 JavaScript Concepts, an open-source repository with 66,000+ stars recognized by GitHub as one of the top projects of 2018, translated into 20+ languages.

He has published 100+ technical articles across Progress/Telerik, LogRocket, Medium, and dev.to with over 1 million views total, covering JavaScript, TypeScript, React, GraphQL, Node.js, and modern web development.

Born and raised in Brazil, now based in Valencia, Spain.

## Links

- Website: ${SITE_URL}
- GitHub: https://github.com/leonardomso
- LinkedIn: https://www.linkedin.com/in/leonardomso/
- X/Twitter: https://x.com/leonardomso
- Email: leonardomso11@gmail.com

## Site Structure

- Home: ${SITE_URL}/
- About: ${SITE_URL}/about
- Projects: ${SITE_URL}/projects
- Blog: ${SITE_URL}/blog
- Resume: ${SITE_URL}/resume
- Uses: ${SITE_URL}/uses
- Now: ${SITE_URL}/now

## Key Projects

- **Spaceship Domain Search** (${SITE_URL}/projects): Sole engineer on the domain search platform at Namecheap for four and a half years — helped sell 3M+ domains. React, TypeScript, Zustand, TanStack Query. Beast Mode bulk search, real-time WebSocket pricing, multi-currency engine across 500+ TLDs.
- **33 JavaScript Concepts** (https://github.com/leonardomso/33-js-concepts): Repository to help developers master JavaScript fundamentals. 66,000+ stars. Translated into 20+ languages. GitHub top project of 2018.
- **Shopwyse** (https://getshopwyse.com): ERP software for modern companies. React, Node.js, PostgreSQL.

## Technical Skills

TypeScript, React, JavaScript, Next.js, Zustand, TanStack Query, Node.js, GraphQL, PostgreSQL, Tailwind CSS, React Native, Biome, Git

## Experience

- Software Engineer at Namecheap (Nov 2021 — Apr 2026)
- Technical Author at Progress/Telerik (May 2019 — Dec 2023)
- Technical Author at LogRocket (Feb 2020 — Feb 2022)
- Software Engineer at Popstand (Oct 2019 — Apr 2020)
- Software Engineer at Foton (Jan 2019 — Jul 2019)
`;

export function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
