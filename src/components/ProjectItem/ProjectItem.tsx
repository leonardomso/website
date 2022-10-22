import React from "react";
import { Stack, Text, Divider, Anchor } from "@mantine/core";

interface Props {
  title: string;
  description: string;
  website: string;
}

const ProjectItem = ({ title, description, website }: Props) => (
  <Stack spacing={20}>
    <Anchor size="md" href={website} target="_blank" rel="noopener">
      {title}
    </Anchor>

    <Text>{description}</Text>

    <Anchor size="sm" href={website} target="_blank" rel="noopener">
      Website
    </Anchor>

    <Divider />
  </Stack>
);

export default ProjectItem;
