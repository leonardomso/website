import React from "react";

import Layout from "src/components/Layout/Layout";
import Articles from "src/modules/Articles/Articles";

import { api } from "src/lib/lib";

import { BlogArticleType, ArticleType } from "src/types";

type Props = {
  articles: Array<ArticleType>;
};

const Index = ({ articles }: Props) => (
  <Layout>
    <Articles articles={articles} />
  </Layout>
);

export const getStaticProps = async () => {
  const articles: Array<BlogArticleType> = api.getAllArticles([
    "slug",
    "title",
    "description",
    "date",
    "timeReading",
    "content",
  ]);

  return {
    props: { articles },
  };
};

export default Index;
