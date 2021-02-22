import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Header from "./Header/Header";

import { LayoutContainer, LayoutInnerContainer } from "./Layout.styles";

const Layout = ({ children }: any) => (
  <ChakraProvider>
    <LayoutContainer>
      <LayoutInnerContainer>
        <Header />
        {children}
      </LayoutInnerContainer>
    </LayoutContainer>
  </ChakraProvider>
);

export default Layout;
