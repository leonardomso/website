import React from "react";
import Head from "next/head";

import Layout from "src/components/Layout/Layout";
import Home from "src/modules/Home/Home";

const Index = () => {
  return (
    <div className="container">
      <Head>
        <title>Leonardo Maldonado</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Home />
      </Layout>
    </div>
  );
};

export default Index;
