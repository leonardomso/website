import React from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";

import ArticleItem from "src/components/ArticleItem/ArticleItem";

import { ArticleType } from "src/types";

interface Props {
  articles: Array<ArticleType>;
}

const Articles = ({ articles }: Props) => {
  return (
    <Stack direction="column" spacing="50px">
      <Stack direction="column" spacing="20px">
        <Heading
          color="#101010"
          as="h1"
          fontSize="clamp(2em, 2em + 2vw, 3em)"
          letterSpacing="-0.03em"
          textAlign="start"
        >
          Articles
        </Heading>

        <Text width="100%" fontSize="16px" lineHeight="30px">
          All the articles that I ever wrote. My thoughts, experiments, and ideas.
        </Text>
      </Stack>

      {articles.map((article: ArticleType) => (
        <ArticleItem key={article.slug} article={article} />
      ))}
    </Stack>
  );
};

export default Articles;
