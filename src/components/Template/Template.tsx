import React from "react";
import { Container } from "@mantine/core";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }: any) => (
  <Container>
    <Header />
    {children}
    <Footer />
  </Container>
);

export default Layout;
