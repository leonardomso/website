import React from "react";
import { Global } from "@emotion/core";
import { ThemeProvider } from "theme-ui";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import OpenMenu from "./OpenMenu/OpenMenu";

import reset from "src/system/reset";
import theme from "src/system/theme";

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
    <>
      <ThemeProvider theme={theme}>
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
