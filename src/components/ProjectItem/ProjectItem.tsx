import React from "react";
import { Stack, Text, Divider, Link } from "@chakra-ui/react";

interface Props {
  title: string;
  description: string;
  website: string;
}

const ProjectItem = ({ title, description, website }: Props) => (
  <Stack direction="column" spacing="20px">
    <Link
      color="#101010"
      fontSize="clamp(1em, 1em + 2vw, 2em)"
      fontWeight="bold"
      lineHeight="44px"
      letterSpacing="-0.03em"
      textAlign="start"
      href={website}
      target="_blank"
      rel="noopener"
    >
      {title}
    </Link>

    <Text color="#6F6F6F" width="100%" fontSize="16px" lineHeight="30px">
      {description}
    </Text>

    <Link
      width="fit-content"
      fontSize="16px"
      fontWeight="bold"
      lineHeight="30px"
      href={website}
      target="_blank"
      rel="noopener"
    >
      Website
    </Link>

    <Divider />
  </Stack>
);

export default ProjectItem;
