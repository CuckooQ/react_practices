import Head from "next/head";

function Seo({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="The NextJs App with NomadCoder Lecture"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Seo;
