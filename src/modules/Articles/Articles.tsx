import React from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";

import ArticleItem from "src/components/ArticleItem/ArticleItem";

type Article = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
};

const articles: Array<Article> = [
  {
    title: "Publishers, curation and algorithms",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur pharetra quis etiam amet. Congue nibh ut elementum sed lectus congue lorem. Et dictum ullamcorper quam amet.",
    date: "Mar 16, 2020",
    readTime: "6 min read",
    link: "",
  },
  {
    title: "Publishers, curation and algorithms",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur pharetra quis etiam amet. Congue nibh ut elementum sed lectus congue lorem. Et dictum ullamcorper quam amet.",
    date: "Mar 16, 2020",
    readTime: "6 min read",
    link: "",
  },
  {
    title: "Publishers, curation and algorithms",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur pharetra quis etiam amet. Congue nibh ut elementum sed lectus congue lorem. Et dictum ullamcorper quam amet.",
    date: "Mar 16, 2020",
    readTime: "6 min read",
    link: "",
  },
];

const Articles = () => (
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
        pharetra quis etiam amet.
      </Text>
    </Stack>

    {articles.map(({ title, description, date, readTime, link }: Article) => (
      <ArticleItem
        title={title}
        description={description}
        date={date}
        readTime={readTime}
        link={link}
      />
    ))}
  </Stack>
);

export default Articles;
