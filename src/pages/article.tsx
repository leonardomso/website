import React from "react";
import Head from "next/head";

import Layout from "src/components/Layout/Layout";
import Article from "src/modules/Article/Article";

const Index = () => (
  <div className="container">
    <Head>
      <title>Leonardo Maldonado</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>
      <Article />
    </Layout>
  </div>
);

export default Index;
