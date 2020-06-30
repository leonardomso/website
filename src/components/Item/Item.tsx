import React from "react";
import { ExternalLink } from "react-feather";

import {
  ItemContainer,
  ItemDate,
  ItemTitleContainer,
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
    <ItemTitleContainer>
      <ItemTitle href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </ItemTitle>
      <ExternalLink size={16} color="#000" cursor="pointer" />
    </ItemTitleContainer>
    <ItemDescription>{description}</ItemDescription>
  </ItemContainer>
);

export default Item;
