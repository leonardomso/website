import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
  readingTime: number;
}

function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 230));
}

const CONTENT_DIR = path.join(process.cwd(), "src/content");

export async function getAllPosts(): Promise<BlogPost[]> {
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
