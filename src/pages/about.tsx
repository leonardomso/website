import React from "react";
import Head from "next/head";

import Layout from "src/components/Layout/Layout";
import About from "src/components/About/About";

const Index = () => (
  <div className="container">
    <Head>
      <title>Leonardo Maldonado</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>
      <About />
    </Layout>
  </div>
);

export default Index;
