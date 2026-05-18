import { markdownResponse } from "@dualmark/core";
import { getAllPosts } from "~/lib/blog";

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

export function GET({
  props,
}: {
  props: { post: Awaited<ReturnType<typeof getAllPosts>>[number] };
}) {
  const { post } = props;
  const tags = post.tags.length ? `\n\nTags: ${post.tags.join(", ")}` : "";
  const body = `# ${post.title}

> ${post.description}

Published: ${post.date} · ${post.readingTime} min read${tags}

${post.content}
`;
  return markdownResponse(body, {
    cacheControl: "public, max-age=300, s-maxage=3600",
    noindex: true,
  });
}
