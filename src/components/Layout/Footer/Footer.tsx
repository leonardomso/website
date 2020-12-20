import React from "react";
import { Twitter, GitHub, Linkedin, Instagram } from "react-feather";

import { FooterContainer } from "./Footer.styles";

const Footer = () => (
  <FooterContainer>
    <a
      href="https://twitter.com/leonardomso"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Twitter size={24} color="#101010" cursor="pointer" />
    </a>

    <a
      href="https://github.com/leonardomso"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHub size={24} color="#101010" cursor="pointer" />
    </a>

    <a
      href="https://www.linkedin.com/in/leonardomso/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Linkedin size={24} color="#101010" cursor="pointer" />
    </a>

    <a
      href="https://www.instagram.com/leonardomso/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Instagram size={24} color="#101010" cursor="pointer" />
    </a>
  </FooterContainer>
);

export default Footer;
