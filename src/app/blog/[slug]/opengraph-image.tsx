import { ImageResponse } from "next/og";
import { getAllPosts, getPostBySlug } from "~/lib/blog";

export const alt = "Blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return new ImageResponse(
      <div
        style={{
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ededed",
          fontSize: "48px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        Post not found
      </div>,
      { ...size }
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return new ImageResponse(
    <div
      style={{
        background: "#050505",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontSize: "14px",
          color: "#666",
          fontFamily: "monospace",
          letterSpacing: "0.1em",
        }}
      >
        <span>{formattedDate}</span>
        <span>·</span>
        <span>{post.readingTime} min read</span>
      </div>
      <div
        style={{
          fontSize: "56px",
          fontWeight: 600,
          color: "#ededed",
          letterSpacing: "-0.03em",
          lineHeight: 1.15,
          marginTop: "24px",
          maxWidth: "900px",
        }}
      >
        {post.title}
      </div>
      <div
        style={{
          fontSize: "20px",
          color: "#888",
          marginTop: "24px",
          maxWidth: "700px",
          lineHeight: 1.5,
        }}
      >
        {post.description}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          left: "80px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          fontSize: "14px",
          color: "#666",
          fontFamily: "monospace",
        }}
      >
        <span>Leonardo Maldonado</span>
        <span>·</span>
        <span>leonardomso.com</span>
      </div>
    </div>,
    { ...size }
  );
}
