import React from "react";
import readingTime from "reading-time";
import mdxPrism from "mdx-prism";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { ArticleJsonLd, NextSeo } from "next-seo";

import Layout from "src/components/Layout/Layout";

import MDXComponents from "src/components/MDXComponents/MDXComponents";

import { api } from "src/lib/lib";
import { BlogArticleType } from "src/types";

const components = { MDXComponents };

interface Props {
  readingTime: {
    text: string;
  };
  frontMatter: {
    title: string;
    description: string;
    date: string;
    content: string;
    author: {
      name: string;
      picture: string;
    };
    ogImage: {
      url: string;
    };
  };
  slug: string;
  source: any;
  tags: Array<string>;
}

const Index = ({ frontMatter, slug, source }: Props) => {
  return (
    <Layout>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        canonical={`https://leonardomso.com/blog/${slug}`}
        openGraph={{
          url: `https://leonardomso.com/blog/${slug}`,
          title: frontMatter.title,
          description: frontMatter.description,
          images: [
            {
              url: `/images/articles/${slug}.jpeg`,
            },
          ],
          site_name: frontMatter.title,
        }}
      />
      <ArticleJsonLd
        url={`https://leonardomso.com/blog/${slug}`}
        title={frontMatter.title}
        images={[frontMatter.ogImage.url]}
        datePublished={frontMatter.date}
        authorName="Leonardo Maldonado"
        publisherName="Podhouse"
        publisherLogo="/images/logo/icon-1200x630.jpg"
        description={frontMatter.description}
      />

      <MDXRemote {...source} components={components} />
    </Layout>
  );
};

export default Index;

type Params = {
  params: {
    slug: string;
    timeReading: {
      text: string;
    };
  };
};

export async function getStaticProps({ params }: Params) {
  const { content, data } = api.getRawArticleBySlug(params.slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [mdxPrism],
    },
  });

  const tags = data.tags ?? [];

  return {
    props: {
      slug: params.slug,
      readingTime: readingTime(content),
      source: mdxSource,
      frontMatter: data,
      tags,
    },
  };
}

export async function getStaticPaths() {
  const articles: Array<BlogArticleType> = api.getAllArticles(["slug"]);

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
