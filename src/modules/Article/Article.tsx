import React from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";

import { ArticleType } from "src/types";

interface Props {
  article: ArticleType;
}

const Article = ({ article }: Props) => (
  <article>
    <Stack direction="column" spacing="50px">
      <Stack direction="column" spacing="20px">
        <Heading
          color="#101010"
          as="h1"
          fontSize="clamp(2em, 2em + 2vw, 3em)"
          letterSpacing="-0.03em"
          textAlign="start"
        >
          {article.title}
        </Heading>

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
      </Stack>

      <Text width="100%" fontSize="16px" lineHeight="30px">
        {article.content}
      </Text>
    </Stack>
  </article>
);

export default Article;
