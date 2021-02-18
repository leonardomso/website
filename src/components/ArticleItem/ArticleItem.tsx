import React from "react";
import { Stack, Text, Divider } from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

interface Props {
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
}

const ArticleItem = ({ date, title, description, readTime }: Props) => (
  <Stack direction="column" spacing="20px">
    <NextLink href="/article" as="/article">
      <Link
        color="#101010"
        fontSize="clamp(1em, 1em + 2vw, 2em)"
        fontWeight="bold"
        lineHeight="44px"
        letterSpacing="-0.03em"
        textAlign="start"
        href="/article"
      >
        {title}
      </Link>
    </NextLink>

    <Text width="100%" fontSize="16px" lineHeight="30px">
      {description}
    </Text>

    <Stack direction="row" spacing="10px">
      <Text width="fit-content" fontSize="16px" lineHeight="30px">
        {date}
      </Text>

      <Text width="fit-content" fontSize="16px" lineHeight="30px">
        ·
      </Text>

      <Text width="fit-content" fontSize="16px" lineHeight="30px">
        {readTime}
      </Text>
    </Stack>

    <Divider />
  </Stack>
);

export default ArticleItem;
