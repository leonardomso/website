import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getAllPosts, getPostBySlug, getAdjacentPosts, extractHeadings } from "~/lib/blog";
import { renderMarkdown } from "~/lib/markdown";
import { ShareButtons } from "~/components/share-buttons";
import { JsonLd, blogPostSchema } from "~/components/json-ld";
import { ReadingProgress } from "~/components/reading-progress";
import { TableOfContents } from "~/components/toc";

const SITE_URL = "https://leonardomso.com";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Leonardo Maldonado`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const [html, { prev, next }] = await Promise.all([
    renderMarkdown(post.content),
    getAdjacentPosts(slug),
  ]);

  const headings = extractHeadings(post.content);

  const postUrl = `${SITE_URL}/blog/${slug}`;

  return (
    <article>
      <ReadingProgress />
      <JsonLd data={blogPostSchema(post)} />
      <Link
        href="/blog"
        className="link-hover mb-12 inline-block font-mono text-[11px] tracking-wider uppercase text-[#666] transition-colors hover:text-[#ededed]"
      >
        ← Back to blog
      </Link>

      <header className="mb-12">
        <div className="mb-3 flex items-baseline gap-3">
          <span className="font-mono text-[11px] tracking-wider text-[#666]">
            {formatDate(post.date)}
          </span>
          <span className="text-[#444]">·</span>
          <span className="font-mono text-[11px] tracking-wider text-[#666]">
            {post.readingTime} min read
          </span>
        </div>
        <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.15] font-semibold tracking-[-0.03em] text-[#ededed]">
          {post.title}
        </h1>
        <p className="mt-4 text-[15px] leading-[1.75] text-[#888]">
          {post.description}
        </p>
        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-[#161616] px-2.5 py-0.5 font-mono text-[10px] tracking-wide text-[#666]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="section-divider mb-12" />

      <TableOfContents headings={headings} />

      <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />

      <div className="mt-16 section-divider" />

      <div className="mt-8">
        <ShareButtons title={post.title} url={postUrl} />
      </div>

      {(prev || next) && (
        <>
          <div className="mt-8 section-divider" />

          <nav className="mt-8 grid grid-cols-2 gap-4">
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="group flex flex-col gap-1.5 rounded-lg border border-[#161616] p-4 transition-colors hover:border-[#222] hover:bg-[#0a0a0a]"
              >
                <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase text-[#666] transition-colors group-hover:text-[#888]">
                  <ArrowLeft className="h-3 w-3" />
                  Previous
                </span>
                <span className="text-[13px] font-medium text-[#a0a0a0] transition-colors group-hover:text-[#ededed]">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="group flex flex-col items-end gap-1.5 rounded-lg border border-[#161616] p-4 text-right transition-colors hover:border-[#222] hover:bg-[#0a0a0a]"
              >
                <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase text-[#666] transition-colors group-hover:text-[#888]">
                  Next
                  <ArrowRight className="h-3 w-3" />
                </span>
                <span className="text-[13px] font-medium text-[#a0a0a0] transition-colors group-hover:text-[#ededed]">
                  {next.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </>
      )}
    </article>
  );
}
