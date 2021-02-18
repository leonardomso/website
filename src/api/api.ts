import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

import { ItemsType } from "src/types";

const articlesDirectory = join(process.cwd(), "_articles");

export function getArticlesSlugs() {
  console.log("articlesDirectory: ", articlesDirectory);
  return fs.readdirSync(articlesDirectory);
}

export function getArticleBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(articlesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const timeReading: any = readingTime(content);

  const items: ItemsType = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (field === "timeReading") {
      items[field] = timeReading;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllArticles(fields: string[] = []) {
  const slugs: Array<string> = getArticlesSlugs();

  const posts: Array<ItemsType> = slugs
    .map((slug) => getArticleBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}
