import React from "react";
import Head from "next/head";

import Layout from "src/components/Layout/Layout";
import Articles from "src/modules/Articles/Articles";

import { api } from "src/lib/lib";

import { BlogArticleType, ArticleType } from "src/types";

interface Props {
  articles: Array<ArticleType>;
}

const Index = ({ articles }: Props) => {
  return (
    <div className="container">
      <Head>
        <title>Leonardo Maldonado</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Articles articles={articles} />
      </Layout>
    </div>
  );
};

export const getStaticProps = async () => {
  const articles: Array<BlogArticleType> = api.getAllArticles([
    "slug",
    "title",
    "description",
    "date",
    "coverImage",
    "author",
    "excerpt",
    "timeReading",
    "ogImage",
    "content",
  ]);

  return {
    props: { articles },
  };
};

export default Index;
