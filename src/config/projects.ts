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
      "Repository created in 2018 to help developers master JavaScript fundamentals. Recognized by GitHub as one of the top open-source projects of 2018. 63,000+ stars and translated into 20+ languages.",
    url: "https://github.com/leonardomso/33-js-concepts",
    tech: ["JavaScript", "Open Source"],
    featured: true,
  },
  {
    title: "Spaceship",
    tag: "Work",
    description:
      "Sole engineer on the domain search platform for four and a half years — helped sell 3M+ domains. React, TypeScript, Zustand, TanStack Query. Beast Mode bulk search, real-time WebSocket pricing, multi-currency engine across 500+ TLDs.",
    url: "https://www.spaceship.com",
    tech: ["TypeScript", "React", "Zustand", "TanStack Query"],
    featured: true,
  },
  {
    title: "Shopwyse",
    tag: "SaaS",
    description:
      "An ERP software to help modern companies sell more. Built with React, Node.js, and PostgreSQL.",
    url: "https://getshopwyse.com",
    tech: ["React", "Node.js", "PostgreSQL"],
    featured: true,
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
