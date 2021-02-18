import React from "react";
import { Stack, Text, Divider } from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

import { ArticleType } from "src/types";

interface Props {
  article: ArticleType;
}

const ArticleItem = ({ article }: Props) => {
  return (
    <Stack direction="column" spacing="20px">
      <NextLink as={`/articles/${article.slug}`} href="/articles/[slug]">
        <Link
          color="#101010"
          fontSize="clamp(1em, 1em + 2vw, 2em)"
          fontWeight="bold"
          lineHeight="44px"
          letterSpacing="-0.03em"
          textAlign="start"
          href="/article"
        >
          {article.title}
        </Link>
      </NextLink>

      <Text width="100%" fontSize="16px" lineHeight="30px">
        {article.description}
      </Text>

      <Stack direction="row" spacing="10px">
        <Text width="fit-content" fontSize="16px" lineHeight="30px">
          {article.date}
        </Text>

        <Text width="fit-content" fontSize="16px" lineHeight="30px">
          ·
      </Text>

        <Text width="fit-content" fontSize="16px" lineHeight="30px">
          {article.timeReading.text}
        </Text>
      </Stack>

      <Divider />
    </Stack>
  );
}
export default ArticleItem;
