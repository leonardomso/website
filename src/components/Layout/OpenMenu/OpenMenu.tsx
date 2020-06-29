import React from "react";
import Link from "next/link";

import { OpenMenuContainer, OpenMenuLink } from "./OpenMenu.styles";

const OpenMenu = () => (
  <OpenMenuContainer>
    <Link href="/about" as="/about">
      <OpenMenuLink href="/about">about</OpenMenuLink>
    </Link>

    <Link href="/articles" as="/articles">
      <OpenMenuLink href="/articles">articles</OpenMenuLink>
    </Link>

    <Link href="/projects" as="/projects">
      <OpenMenuLink href="/projects">projects</OpenMenuLink>
    </Link>

    <Link href="/contact" as="/contact">
      <OpenMenuLink href="/contact">contact</OpenMenuLink>
    </Link>
  </OpenMenuContainer>
);

export default OpenMenu;
