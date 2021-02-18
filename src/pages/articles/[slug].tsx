import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Layout from "src/components/Layout/Layout";
import Article from "src/modules/Article/Article";

import markdownToHtml from "src/api/markdownToHtml";
import { getArticleBySlug, getAllArticles } from "src/api/api";
import { ArticleType } from "src/types";

interface Props {
  article: ArticleType;
}

const Index = ({ article }: Props) => {
  const router = useRouter();

  if (!router.isFallback && !article?.slug) {
    return <h1>error</h1>;
  }

  return (
    <div className="container">
      <Head>
        <title>Leonardo Maldonado</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {router.isFallback ? (
          <h1>Loading…</h1>
        ) : (
            <Article article={article} />
          )}
      </Layout>
    </div>
  );
};

export default Index;

interface Params {
  params: {
    slug: string;
  };
}

export async function getStaticProps({ params }: Params) {
  const article = getArticleBySlug(params.slug, [
    "title",
    "description",
    "date",
    "timeReading",
    "slug",
    "content",
  ]);

  const content: string = await markdownToHtml(article.content || "");

  return {
    props: {
      article: {
        ...article,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const articles = getAllArticles(["slug"]);

  return {
    paths: articles.map((articles) => {
      return {
        params: {
          slug: articles.slug,
        },
      };
    }),
    fallback: false,
  };
}
