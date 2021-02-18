import React from "react";
import Head from "next/head";

import Layout from "src/components/Layout/Layout";
import Articles from "src/modules/Articles/Articles";

const Index = () => (
  <div className="container">
    <Head>
      <title>Leonardo Maldonado</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>
      <Articles />
    </Layout>
  </div>
);

export default Index;
