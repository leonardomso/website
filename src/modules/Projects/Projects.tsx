import React from "react";
import { Stack, Heading, Text } from "@chakra-ui/react";

import ProjectItem from "src/components/ProjectItem/ProjectItem";

type Article = {
  title: string;
  description: string;
  website: string;
};

const projects: Array<Article> = [
  {
    title: "Podhouse",
    description:
      "Podhouse aims to help people discover new podcasts and listen to their favorites. Built for people who want to listen to podcasts combining with a nice experience.",
    website: "https://podhouse.app/",
  },
  {
    title: "33 JavaScript Concepts",
    description:
      "Concepts that every JavaScript developer should know. A project that helps developers master their JavaScript skills by providing a list of articles, books, talks for each concept.",
    website: "https://github.com/leonardomso/33-js-concepts",
  },
];

const Projects = () => (
  <Stack direction="column" spacing="50px">
    <Stack direction="column" spacing="20px">
      <Heading
        color="#101010"
        as="h1"
        fontSize="clamp(2em, 2em + 2vw, 3em)"
        letterSpacing="-0.03em"
        textAlign="start"
      >
        Projects
      </Heading>

      <Text width="100%" fontSize="16px" lineHeight="30px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
        pharetra quis etiam amet.
      </Text>
    </Stack>

    {projects.map(({ title, description, website }: Article) => (
      <ProjectItem key={website} title={title} description={description} website={website} />
    ))}
  </Stack>
);

export default Projects;
