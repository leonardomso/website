import React from "react";

import {
  ItemContainer,
  ItemDate,
  ItemTitle,
  ItemDescription,
} from "./Item.styles";

interface ItemProps {
  date: string;
  title: string;
  description: string;
  link: string;
}

const Item = ({ date, title, description, link }: ItemProps) => (
  <ItemContainer>
    <ItemDate>{date}</ItemDate>
    <ItemTitle href={link} target="_blank" rel="noopener noreferrer">
      {title}
    </ItemTitle>
    <ItemDescription>{description}</ItemDescription>
  </ItemContainer>
);

export default Item;
