import React from "react";
import { Heading, Text, Stack } from "@chakra-ui/react";

const Main = () => (
  <Stack
    direction="column"
    spacing="20px"
    maxW="800px"
    h="fit-content"
    justifySelf="center"
    alignItems="center"
    justifyItems="center"
  >
    <Heading
      color="#101010"
      as="h1"
      fontSize="clamp(2em, 2em + 2vw, 3em)"
      letterSpacing="-0.03em"
      textAlign="start"
    >
      Blog
    </Heading>
    <Text color="#6F6F6F" fontSize="16px" lineHeight="30px" textAlign="center">
      My latest blog posts
    </Text>
  </Stack>
);

export default Main;
