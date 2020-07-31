import React from "react";

import { ArticlesContainer, ArticlesTitle } from "./Articles.styles";

import Item from "src/components/Item/Item";

import articles from "src/data/articles";

const Articles = () => (
  <ArticlesContainer>
    <ArticlesTitle>Articles</ArticlesTitle>
    {articles.map(({ date, title, description, link }) => (
      <Item
        key={date}
        date={date}
        title={title}
        description={description}
        link={link}
      />
    ))}
  </ArticlesContainer>
);

export default Articles;
