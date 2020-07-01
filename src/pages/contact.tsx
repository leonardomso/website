import React from "react";
import Head from "next/head";

import Layout from "src/components/Layout/Layout";
import Contact from "src/components/Contact/Contact";

const Index = () => (
  <div className="container">
    <Head>
      <title>Leonardo Maldonado</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>
      <Contact />
    </Layout>
  </div>
);

export default Index;
