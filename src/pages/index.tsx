import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { APIInvestmentType } from '../types/investmentTypes';

type Props = {
  data: APIInvestmentType;
};

const Home: NextPage<Props> = ({ data }) => {
  console.log(data);

  return (
    <div>
      <Head>
        <title>Investio</title>
        <meta name="description" content="Investio app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(`${process.env.URL}/api/investment-mock`);
  const data: APIInvestmentType = await response.json();

  return {
    props: { data },
  };
};

export default Home;
