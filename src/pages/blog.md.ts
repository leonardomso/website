import { markdownResponse } from "@dualmark/core";
import { getAllPosts } from "~/lib/blog";

const SITE_URL = "https://www.leonardomso.com";

export async function GET() {
  const posts = await getAllPosts();
  const links = posts.length
    ? posts
        .map(
          (p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}) — ${p.description}`,
        )
        .join("\n")
    : "No posts yet.";

  const body = `# Blog — Leonardo Maldonado

Thoughts on software engineering, web development, and building products.

## Posts

${links}
`;

  return markdownResponse(body, {
    cacheControl: "public, max-age=300, s-maxage=3600",
    noindex: true,
  });
}
