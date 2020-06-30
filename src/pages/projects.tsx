import React from "react";
import Head from "next/head";

import Layout from "src/components/Layout/Layout";
import Projects from "src/components/Projects/Projects";

const Index = () => {
  return (
    <div className="container">
      <Head>
        <title>Leonardo Maldonado</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Projects />
      </Layout>
    </div>
  );
};

export default Index;
