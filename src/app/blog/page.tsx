import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "~/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on software engineering, web development, and building products.",
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div>
      <p className="mb-4 font-mono text-[#666] text-[12px] uppercase tracking-[0.25em]">
        Blog
      </p>
      <h1 className="font-semibold text-[#ededed] text-[clamp(2rem,5vw,3rem)] leading-[1.1] tracking-[-0.03em]">
        Writing
      </h1>
      <p className="mt-6 max-w-[440px] text-[#888] text-[15px] leading-[1.75]">
        Thoughts on software engineering, web development, and building
        products.
      </p>

      <div className="mt-16 flex flex-col gap-1">
        {posts.length === 0 && (
          <p className="py-8 text-center font-mono text-[#555] text-[13px] tracking-wide">
            No posts yet. Check back soon.
          </p>
        )}
        {posts.map((post) => (
          <Link
            className="group -mx-3 flex flex-col gap-1 rounded-lg px-3 py-4 transition-colors hover:bg-[#0a0a0a]"
            href={`/blog/${post.slug}`}
            key={post.slug}
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-medium text-[#ededed] text-[15px] transition-colors group-hover:text-white">
                {post.title}
              </span>
              <span className="flex shrink-0 items-baseline gap-3">
                <span className="font-mono text-[#555] text-[11px] tracking-wider">
                  {post.readingTime} min
                </span>
                <span className="font-mono text-[#666] text-[11px] tracking-wider">
                  {formatDate(post.date)}
                </span>
              </span>
            </div>
            <p className="text-[#888] text-[13px] leading-relaxed transition-colors group-hover:text-[#a0a0a0]">
              {post.description}
            </p>
            {post.tags.length > 0 && (
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    className="font-mono text-[#555] text-[10px] tracking-wide"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
