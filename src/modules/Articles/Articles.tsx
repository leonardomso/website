import React from "react";

import Main from "./Main/Main";
import Items from "./Items/Items";

import { ArticleType } from "src/types";

interface Props {
  articles: Array<ArticleType>;
}

const Articles = ({ articles }: Props) => (
  <>
    <Main />
    <Items articles={articles} />
  </>
);

export default Articles;
