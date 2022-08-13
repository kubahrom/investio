import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import { APIInvestmentType, RowValueType } from '../types/investmentTypes';

type Props = {
  data: Array<RowValueType>;
};

const Home: NextPage<Props> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Investio</title>
        <meta name="description" content="Investio app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <Main data={data} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(`${process.env.URL}/api/investment-mock`);
  const data: APIInvestmentType = await response.json();

  return {
    props: { data: data.tableValues },
  };
};

export default Home;
