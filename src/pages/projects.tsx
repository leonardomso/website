import React from "react";
import Head from "next/head";

import Layout from "src/components/Layout/Layout";

const Projects = () => {
  return (
    <div className="container">
      <Head>
        <title>Leonardo Maldonado</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>Projects</h1>
      </Layout>
    </div>
  );
};

export default Projects;
