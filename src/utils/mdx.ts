import fs from "fs";
import path from "path";

// ARTICLES_PATH is useful when you want to get the path to a specific file
export const ARTICLES_PATH = path.join(process.cwd(), "articles");

// articleFilePaths is the list of all mdx files inside the ARTICLES_PATH directory
export const articleFilePaths = fs
  .readdirSync(ARTICLES_PATH)
  .filter((path) => /\.mdx?$/.test(path));
