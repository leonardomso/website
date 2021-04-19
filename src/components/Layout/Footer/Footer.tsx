import React from "react";
import { Link } from "@chakra-ui/react";
import { GitHub, Twitter, Youtube, Linkedin } from "react-feather";

import { FooterContainer } from "./Footer.styles";

const Footer = () => (
  <FooterContainer>
    <Link
      fontSize="16px"
      fontWeight="normal"
      lineHeight="30px"
      href="https://github.com/leonardomso"
      target="_blank"
      rel="noopener"
    >
      <GitHub size={20} />
    </Link>

    <Link
      fontSize="16px"
      fontWeight="normal"
      lineHeight="30px"
      href="https://twitter.com/leonardomso"
      target="_blank"
      rel="noopener"
    >
      <Twitter size={20} />
    </Link>

    <Link
      fontSize="16px"
      fontWeight="normal"
      lineHeight="30px"
      href="https://www.youtube.com/channel/UChw6_OPHra-YEsf-GVDzqUA"
      target="_blank"
      rel="noopener"
    >
      <Youtube size={20} />
    </Link>

    <Link
      fontSize="16px"
      fontWeight="normal"
      lineHeight="30px"
      href="https://www.linkedin.com/in/leonardomso/"
      target="_blank"
      rel="noopener"
    >
      <Linkedin size={20} />
    </Link>
  </FooterContainer>
);

export default Footer;
