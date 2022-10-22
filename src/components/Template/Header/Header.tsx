import React from "react";
import NextLink from "next/link";
import { Group, Anchor } from "@mantine/core";

const Header = () => (
  <Group position="left">
    <NextLink href="/projects" as="/projects">
      <Anchor size="md" href="/projects">
        Projects
      </Anchor>
    </NextLink>

    <Anchor
      href="https://twitter.com/leonardomso"
      target="_blank"
      rel="noopener"
      size="md"
    >
      Twitter
    </Anchor>
  </Group>
);

export default Header;
