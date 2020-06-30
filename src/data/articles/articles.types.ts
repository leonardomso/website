export interface Article {
  date: string;
  title: string;
  description: string;
  link: string;
}

export type Articles = Array<Article>;
