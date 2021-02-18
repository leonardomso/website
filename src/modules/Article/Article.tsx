import React from "react";
import { Stack, Heading, Text, Box } from "@chakra-ui/react";

interface Props {
  title: string;
  date: string;
  timeReading: {
    text: string;
  };
  content: any;
}

const Article = ({ title, date, timeReading, content }: Props) => {
  return (
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
            {title}
          </Heading>

          <Stack direction="row" spacing="10px">
            <Text width="fit-content" fontSize="16px" lineHeight="30px">
              {date}
            </Text>

            <Text width="fit-content" fontSize="16px" lineHeight="30px">
              ·
            </Text>

            <Text width="fit-content" fontSize="16px" lineHeight="30px">
              {timeReading.text}
            </Text>
          </Stack>
        </Stack>

        <Box>{content}</Box>
      </Stack>
    </article>
  );
};

export default Article;
