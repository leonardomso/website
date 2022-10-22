import React from "react";
import { Group, Anchor } from "@mantine/core";
import { GitHub, Twitter, Youtube, Linkedin } from "react-feather";

const Footer = () => (
  <Group position="center">
    <Anchor
      href="https://github.com/leonardomso"
      target="_blank"
      rel="noopener"
    >
      <GitHub size={20} />
    </Anchor>

    <Anchor
      href="https://twitter.com/leonardomso"
      target="_blank"
      rel="noopener"
    >
      <Twitter size={20} />
    </Anchor>

    <Anchor
      href="https://www.youtube.com/channel/UChw6_OPHra-YEsf-GVDzqUA"
      target="_blank"
      rel="noopener"
    >
      <Youtube size={20} />
    </Anchor>

    <Anchor
      href="https://www.linkedin.com/in/leonardomso/"
      target="_blank"
      rel="noopener"
    >
      <Linkedin size={20} />
    </Anchor>
  </Group>
);

export default Footer;
