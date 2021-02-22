import React from "react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

import { HeaderContainer } from "./Header.styles";

const Header = () => (
  <HeaderContainer>
    <NextLink href="/articles" as="/articles">
      <Link fontSize="16px" lineHeight="19px" href="/articles">
        Articles
      </Link>
    </NextLink>

    <NextLink href="/projects" as="/projects">
      <Link fontSize="16px" lineHeight="19px" href="/projects">
        Projects
      </Link>
    </NextLink>

    <Link
      fontSize="16px"
      lineHeight="19px"
      href="https://twitter.com/leonardomso"
      target="_blank"
      rel="noopener"
    >
      Twitter
    </Link>
  </HeaderContainer>
);

export default Header;
