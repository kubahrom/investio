import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Investio</title>
        <meta name="description" content="Investio app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Investio
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = { a: 1 };

  return {
    props: { data },
  };
};

export default Home;
