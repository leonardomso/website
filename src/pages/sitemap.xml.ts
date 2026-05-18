import { getAllPosts } from "~/lib/blog";

const SITE_URL = "https://www.leonardomso.com";
const BUILD_DATE = new Date().toISOString();

function formatDate(date: Date): string {
  return date.toISOString();
}

export async function GET() {
  const posts = await getAllPosts();

  const staticPages = [
    { url: SITE_URL, changefreq: "monthly", priority: "1.0" },
    { url: `${SITE_URL}/about`, changefreq: "monthly", priority: "0.8" },
    { url: `${SITE_URL}/blog`, changefreq: "weekly", priority: "0.8" },
    { url: `${SITE_URL}/projects`, changefreq: "monthly", priority: "0.7" },
    { url: `${SITE_URL}/resume`, changefreq: "yearly", priority: "0.6" },
    { url: `${SITE_URL}/uses`, changefreq: "monthly", priority: "0.5" },
    { url: `${SITE_URL}/now`, changefreq: "weekly", priority: "0.5" },
  ];

  const entries = [
    ...staticPages.map(
      (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${BUILD_DATE}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    ),
    ...posts.map(
      (post) => `  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
    <lastmod>${formatDate(new Date(post.date))}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    ),
  ].join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
