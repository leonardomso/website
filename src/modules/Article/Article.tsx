import React from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";

const Article = () => (
  <Stack direction="column" spacing="50px">
    <Stack direction="column" spacing="20px">
      <Heading
        color="#101010"
        as="h1"
        fontSize={72}
        letterSpacing="-0.03em"
        textAlign="start"
      >
        Publishers, curation and algorithms
      </Heading>

      <Stack direction="row" spacing="10px">
        <Text width="fit-content" fontSize="16px" lineHeight="30px">
          Mar 16, 2020
        </Text>

        <Text width="fit-content" fontSize="16px" lineHeight="30px">
          ·
        </Text>

        <Text width="fit-content" fontSize="16px" lineHeight="30px">
          6 min read
        </Text>
      </Stack>
    </Stack>

    <Text width="100%" fontSize="16px" lineHeight="30px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
      pharetra quis etiam amet. Congue nibh ut elementum sed lectus congue
      lorem. Et dictum ullamcorper quam amet.
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
      pharetra quis etiam amet. Congue nibh ut elementum sed lectus congue
      lorem. Et dictum ullamcorper quam amet. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Consectetur pharetra quis etiam amet. Congue
      nibh ut elementum sed lectus congue lorem. Et dictum ullamcorper quam
      amet.
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
      pharetra quis etiam amet. Congue nibh ut elementum sed lectus congue
      lorem. Et dictum ullamcorper quam amet. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Consectetur pharetra quis etiam amet. Congue
      nibh ut elementum sed lectus congue lorem. Et dictum ullamcorper quam
      amet.
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
      pharetra quis etiam amet. Congue nibh ut elementum sed lectus congue
      lorem. Et dictum ullamcorper quam amet. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Consectetur pharetra quis etiam amet. Congue
      nibh ut elementum sed lectus congue lorem. Et dictum ullamcorper quam
      amet.
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
      pharetra quis etiam amet. Congue nibh ut elementum sed lectus congue
      lorem. Et dictum ullamcorper quam amet. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Consectetur pharetra quis etiam amet. Congue
      nibh ut elementum sed lectus congue lorem. Et dictum ullamcorper quam
      amet.
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
      pharetra quis etiam amet. Congue nibh ut elementum sed lectus congue
      lorem. Et dictum ullamcorper quam amet.
    </Text>
  </Stack>
);

export default Article;
