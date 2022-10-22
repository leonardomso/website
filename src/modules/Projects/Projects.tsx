import React from "react";
import { Stack, Title, Text } from "@mantine/core";

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
  <Stack spacing={50}>
    <Stack spacing={20}>
      <Title>Projects</Title>

      <Text color="#6F6F6F">
        All the projects that I ever created. These projects are responsible for
        what I am today.
      </Text>
    </Stack>

    {projects.map(({ title, description, website }: Article) => (
      <ProjectItem
        key={website}
        title={title}
        description={description}
        website={website}
      />
    ))}
  </Stack>
);

export default Projects;
