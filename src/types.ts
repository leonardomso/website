export type ArticleType = {
  slug: string;
  title: string;
  description: string;
  date: string;
  coverImage: string;
  author: AuthorType;
  timeReading: {
    [key: string]: any;
  };
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};

export type AuthorType = {
  name: string;
  picture: string;
};

export type ItemsType = {
  [key: string]: string;
};
