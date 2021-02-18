import React from "react";

import Layout from "src/components/Layout/Layout";
import Articles from "src/modules/Articles/Articles";

import { getAllArticles } from "src/api/api";
import { ArticleType, ItemsType } from "src/types";

type Props = {
  articles: Array<ArticleType>;
};

const Index = ({ articles }: Props) => {
  return (
    <Layout>
      <Articles articles={articles} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const articles: Array<ItemsType> = getAllArticles([
    "slug",
    "title",
    "description",
    "date",
    "coverImage",
    "timeReading",
    "content",
  ]);

  return {
    props: { articles },
  };
};

export default Index;
