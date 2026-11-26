export const SITE_URL = "https://www.leonardomso.com";

export const EMAIL = "leonardomso11@gmail.com";

export const SOCIAL_LINKS = [
  { label: "Email", href: `mailto:${EMAIL}` },
  { label: "GitHub", href: "https://github.com/leonardomso" },
  { label: "X", href: "https://x.com/leonardomso" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/leonardomso/" },
] as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
] as const;

export const SECONDARY_LINKS = [
  { label: "Now", href: "/now" },
  { label: "Uses", href: "/uses" },
] as const;

export const WORK = [
  {
    company: "Spaceship",
    url: "https://www.spaceship.com/domain-search/",
    role: "Senior front end engineer",
    years: "2021–26",
  },
  {
    company: "Progress",
    url: "https://www.telerik.com/blogs/author/leonardo-maldonado",
    role: "Technical author",
    years: "2019–23",
  },
  {
    company: "LogRocket",
    url: "https://blog.logrocket.com/author/leonardomaldonado/",
    role: "Technical author",
    years: "2020–22",
  },
  {
    company: "Popstand",
    url: "https://popstand.com/",
    role: "Software engineer",
    years: "2019–21",
  },
  {
    company: "Foton",
    url: "https://foton.tech/",
    role: "Software engineer",
    years: "2019",
  },
] as const;

export const PUBLICATIONS = [
  {
    name: "LogRocket",
    url: "https://blog.logrocket.com/author/leonardomaldonado/",
  },
  {
    name: "Progress",
    url: "https://www.telerik.com/blogs/author/leonardo-maldonado",
  },
  { name: "Medium", url: "https://medium.com/@leonardomso" },
  { name: "dev.to", url: "https://dev.to/leonardomso" },
] as const;
