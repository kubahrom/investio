import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import { APISavingsAccountType } from '../types/savingsAccountsTypes';

type Props = {
  data: APISavingsAccountType;
};
// FIXME: empty array (no data)
// TODO: footer? link, dates
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
      <Main data={data.list} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(`${process.env.URL}/api/savings-accounts-mock`);
  const data: APISavingsAccountType = await response.json();

  return {
    props: { data },
  };
};

export default Home;
