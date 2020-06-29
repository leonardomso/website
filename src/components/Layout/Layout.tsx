import React from "react";
import { Global } from "@emotion/core";
import { ThemeProvider } from "theme-ui";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import reset from "src/system/reset";
import theme from "src/system/theme";

const Layout = ({ children }: any) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
      <Global styles={reset} />
    </>
  );
};

export default Layout;
