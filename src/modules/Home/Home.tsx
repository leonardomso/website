import React from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";

const Home = () => (
  <Stack direction="column" spacing="20px">
    <Heading
      color="#101010"
      as="h1"
      fontSize="clamp(2em, 2em + 2vw, 3em)"
      letterSpacing="-0.03em"
      textAlign="start"
    >
      Leonardo Maldonado
    </Heading>

    <Text width="100%" fontSize="18px" lineHeight="30px">
      I'm a <strong>software engineer</strong> with years of experience building
      modern JavaScript applications. A lifelong learner who is passionate about
      products, technologies, applications, and platforms.
      <br />
      <br />I have experience with a wide range of technologies such as{" "}
      <strong>JavaScript, React, GraphQL, TypeScript, MongoDB, Docker</strong>.
      <br />
      <br />I am{" "}
      <strong>
        currently building products to make podcasts accessible to everyone on
        the Internet
      </strong>
      . I launched a <strong>podcast web app called Podhouse</strong>, built for
      people who want to listen to podcasts combined with a nice experience.
      <br />
      <br />
      Creator of the{" "}
      <strong>33 Concepts Every JavaScript Developer Should Know</strong>{" "}
      project, a project that{" "}
      <strong>helps developers master their JavaScript skills</strong> by
      providing a list of articles, books, talks for each concept.
    </Text>
  </Stack>
);

export default Home;
