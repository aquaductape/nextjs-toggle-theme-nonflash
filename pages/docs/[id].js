import React from "react";
import GlobalStyle from "../../style/GlobalStyle";
import Layout from "../../components/Layout";
export const getStaticPaths = async () => {
  const paths = [
    { params: { id: "pig" } },
    { params: { id: "cat" } },
    { params: { id: "dog" } },
    { params: { id: "fish" } },
  ];
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  return { props: { title: params.id } };
};

const DocsId = ({ title }) => {
  return (
    <Layout>
      <main>
        <h1>Welcome to {title}!</h1>
      </main>
      <style jsx>{`
        main {
          padding: 10px;
          margin-top: 150px;
        }
      `}</style>
    </Layout>
  );
};

export default DocsId;
