import React from "react";
import Scrollbars from "react-custom-scrollbars";

import { ArticleContainer, ArticlesTitle } from "./Articles.styles";

import Item from "src/components/Item/Item";

import articles from "src/data/articles/articles";

const Articles = () => (
  <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
    <ArticleContainer>
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
    </ArticleContainer>
  </Scrollbars>
);

export default Articles;
