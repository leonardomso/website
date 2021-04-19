import React from "react";
import { Stack } from "@chakra-ui/react";

import ArticleItem from "src/components/ArticleItem/ArticleItem";

import { ArticleType } from "src/types";

interface Props {
  articles: Array<ArticleType>;
}

const Items = ({ articles }: Props) => (
  <Stack
    direction="column"
    spacing="50px"
    maxW="800px"
    h="fit-content"
    justifySelf="center"
    alignItems="center"
    justifyItems="center"
  >
    {articles.map((article: ArticleType) => (
      <ArticleItem key={article.slug} article={article} />
    ))}
  </Stack>
);

export default Items;
