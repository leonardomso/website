import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
  readingTime: number;
  tags: string[];
}

export interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
}

const WHITESPACE_RE = /\s+/;

function estimateReadingTime(text: string): number {
  const words = text.trim().split(WHITESPACE_RE).length;
  return Math.max(1, Math.round(words / 230));
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const CONTENT_DIR = path.join(process.cwd(), "src/content");

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    await fs.access(CONTENT_DIR);
  } catch {
    return [];
  }

  const files = await fs.readdir(CONTENT_DIR);

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".md"))
      .map(async (file) => {
        const raw = await fs.readFile(path.join(CONTENT_DIR, file), "utf-8");
        const { data, content } = matter(raw);

        return {
          slug: file.replace(".md", ""),
          title: data.title,
          description: data.description,
          date: data.date,
          content,
          readingTime: estimateReadingTime(content),
          tags: (data.tags as string[]) || [],
        };
      })
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(
  slug: string
): Promise<BlogPost | undefined> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}

export async function getAdjacentPosts(
  slug: string
): Promise<{ prev: BlogPost | null; next: BlogPost | null }> {
  const posts = await getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);

  return {
    prev: index > 0 ? posts[index - 1] : null,
    next: index < posts.length - 1 ? posts[index + 1] : null,
  };
}

export async function getAllTags(): Promise<{ tag: string; count: number }[]> {
  const posts = await getAllPosts();
  const tagMap = new Map<string, number>();

  for (const post of posts) {
    for (const tag of post.tags) {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    }
  }

  return Array.from(tagMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

const HEADING_RE = /^(#{2,3})\s+(.+)$/;
const BOLD_RE = /\*\*(.+?)\*\*/g;

export function extractHeadings(content: string): Heading[] {
  const headings: Heading[] = [];
  const lines = content.split("\n");

  for (const line of lines) {
    const match = line.match(HEADING_RE);
    if (match) {
      const level = match[1].length as 2 | 3;
      const text = match[2].replace(BOLD_RE, "$1").trim();
      headings.push({ id: slugify(text), text, level });
    }
  }

  return headings;
}
