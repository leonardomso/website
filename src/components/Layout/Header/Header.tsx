import React from "react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

import { HeaderContainer } from "./Header.styles";

const Header = () => (
  <HeaderContainer>
    <NextLink href="/projects" as="/projects">
      <Link
        fontSize="16px"
        fontWeight="normal"
        lineHeight="30px"
        href="/projects"
      >
        Projects
      </Link>
    </NextLink>

    <Link
      fontSize="16px"
      fontWeight="normal"
      lineHeight="30px"
      href="https://twitter.com/leonardomso"
      target="_blank"
      rel="noopener"
    >
      Twitter
    </Link>
  </HeaderContainer>
);

export default Header;
