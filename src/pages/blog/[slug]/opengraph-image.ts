import { getAllPosts, getPostBySlug } from "~/lib/blog";

function svgEscape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    params: { slug: post.slug },
  }));
}

export async function GET({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return new Response("Not found", { status: 404 });
  }

  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#050505"/>
  <text x="80" y="120" fill="#666" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="18">${svgEscape(date)} · ${post.readingTime} min read</text>
  <text x="80" y="250" fill="#ededed" font-family="system-ui, sans-serif" font-size="64" font-weight="600">${svgEscape(post.title)}</text>
  <text x="80" y="340" fill="#888" font-family="system-ui, sans-serif" font-size="28">${svgEscape(post.description)}</text>
  <text x="80" y="570" fill="#666" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="20">Leonardo Maldonado · www.leonardomso.com</text>
</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
