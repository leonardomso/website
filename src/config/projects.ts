export interface Project {
  title: string;
  tag: string;
  description: string;
  url: string;
  tech: string[];
  featured: boolean;
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
      "Digital platform at Namecheap that helps people bring ideas to life. Built the Domain Search feature from scratch, designed its architecture for scale, integrated various APIs, and helped reach 1M domains sold in one year.",
    url: "https://www.spaceship.com",
    tech: ["TypeScript", "React", "Next.js"],
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
