import React from "react";
import { ChakraProvider } from "@chakra-ui/react"

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import OpenMenu from "./OpenMenu/OpenMenu";

import { LayoutContainer } from "./Layout.styles";

import useMenu from "src/hooks/useMenu";

const Layout = ({ children }: any) => {
  const { current, handleMenu } = useMenu();

  const onRenderContent = () => {
    if (current.matches("open")) {
      return <OpenMenu />;
    }

    return children;
  };

  return (
    <ChakraProvider>
      <LayoutContainer>
        <Header current={current} handleMenu={handleMenu} />
        {onRenderContent()}
        <Footer />
      </LayoutContainer>
    </ChakraProvider>
  );
};

export default Layout;
