import { SITE_URL } from "~/config/site";

const PAGES = [
  { path: "", changefreq: "monthly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/projects", changefreq: "monthly", priority: "0.8" },
  { path: "/resume", changefreq: "monthly", priority: "0.7" },
  { path: "/now", changefreq: "monthly", priority: "0.5" },
  { path: "/uses", changefreq: "yearly", priority: "0.4" },
];

export function GET() {
  const entries = PAGES.map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
