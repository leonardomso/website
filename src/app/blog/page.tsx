import Link from "next/link";
import { getAllPosts } from "~/lib/blog";

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
      <p className="mb-4 font-mono text-[12px] tracking-[0.25em] uppercase text-[#666]">
        Blog
      </p>
      <h1 className="text-[clamp(2rem,5vw,3rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-[#ededed]">
        Writing
      </h1>
      <p className="mt-6 max-w-[440px] text-[15px] leading-[1.75] text-[#888]">
        Thoughts on software engineering, web development, and building
        products.
      </p>

      <div className="mt-16 flex flex-col gap-1">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group -mx-3 flex flex-col gap-1 rounded-lg px-3 py-4 transition-colors hover:bg-[#0a0a0a]"
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-[15px] font-medium text-[#ededed] transition-colors group-hover:text-white">
                {post.title}
              </span>
              <span className="flex shrink-0 items-baseline gap-3">
                <span className="font-mono text-[11px] tracking-wider text-[#555]">
                  {post.readingTime} min
                </span>
                <span className="font-mono text-[11px] tracking-wider text-[#666]">
                  {formatDate(post.date)}
                </span>
              </span>
            </div>
            <p className="text-[13px] leading-relaxed text-[#888] transition-colors group-hover:text-[#a0a0a0]">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
