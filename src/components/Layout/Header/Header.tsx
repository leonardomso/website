import React from "react";
import Link from "next/link";
import { Moon, Menu, X } from "react-feather";

import { useTheme } from "src/system/ThemeContext";

import {
  HeaderContainer,
  HeaderNameContainer,
  HeaderLinksContainer,
  HeaderLink,
  HeaderSwitchContainer,
} from "./Header.styles";

interface HeaderProps {
  current: any;
  handleMenu: () => void;
}

const Header = ({ current, handleMenu }: HeaderProps) => {
  const themeState = useTheme();

  const moonColor = themeState.dark ? "#FFBC05" : "#000000";
  const menuColor = themeState.dark ? "#FFF" : "#000000";

  const onRenderIcon = () => {
    if (current.matches("open")) {
      return (
        <X size={24} color={menuColor} cursor="pointer" onClick={handleMenu} />
      );
    }

    return (
      <Menu size={24} color={menuColor} cursor="pointer" onClick={handleMenu} />
    );
  };

  return (
    <HeaderContainer>
      <HeaderNameContainer>
        <Link href="/" as="/">
          <HeaderLink href="/">leonardo maldonado</HeaderLink>
        </Link>
      </HeaderNameContainer>

      <HeaderSwitchContainer>{onRenderIcon()}</HeaderSwitchContainer>

      <HeaderLinksContainer>
        <Link href="/about" as="/about">
          <HeaderLink href="/about">about</HeaderLink>
        </Link>

        <Link href="/articles" as="/articles">
          <HeaderLink href="/articles">articles</HeaderLink>
        </Link>

        <Link href="/projects" as="/projects">
          <HeaderLink href="/projects">projects</HeaderLink>
        </Link>

        <Link href="/contact" as="/contact">
          <HeaderLink href="/contact">contact</HeaderLink>
        </Link>

        <Moon
          size={24}
          color={moonColor}
          cursor="pointer"
          onClick={() => themeState.toggle()}
        />
      </HeaderLinksContainer>
    </HeaderContainer>
  );
};

export default Header;
