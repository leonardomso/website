import React from "react";
import { Global } from "@emotion/core";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import OpenMenu from "./OpenMenu/OpenMenu";

import reset from "src/system/reset";

import { LayoutContainer } from "./Layout.styles";

import useMenu from "src/hooks/useMenu";
import { ThemeProvider } from "src/system/ThemeContext";

const Layout = ({ children }: any) => {
  const { current, handleMenu } = useMenu();

  const onRenderContent = () => {
    if (current.matches("open")) {
      return <OpenMenu />;
    }

    return children;
  };

  return (
    <>
      <ThemeProvider>
        <LayoutContainer>
          <Header current={current} handleMenu={handleMenu} />
          {onRenderContent()}
          <Footer />
        </LayoutContainer>
      </ThemeProvider>
      <Global styles={reset} />
    </>
  );
};

export default Layout;
