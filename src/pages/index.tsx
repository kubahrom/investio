import { useAtom } from 'jotai';
import type { GetServerSideProps, NextPage } from 'next';
import { BuiltInProviderType } from 'next-auth/providers';
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
} from 'next-auth/react';
import Head from 'next/head';
import { useEffect } from 'react';
import { savingsAccounts } from '../atoms/atoms';

import Header from '../components/Header';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import { APISavingsAccountType } from '../types/savingsAccountsTypes';

type Props = {
  data: APISavingsAccountType;
  provider: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
};
// FIXME: empty array (no data)
// TODO: footer? link, dates
const Home: NextPage<Props> = ({ data, provider }) => {
  const [savingsAccountsData, setSavingsAccountsData] =
    useAtom(savingsAccounts);

  useEffect(() => {
    if (data) {
      setSavingsAccountsData(data);
    }
  }, [data, setSavingsAccountsData]);

  return (
    <div>
      <Head>
        <title>Investio</title>
        <meta name="description" content="Investio app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar provider={provider?.google} />

      <Header />
      <Main data={savingsAccountsData ? savingsAccountsData.list : data.list} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/savings-accounts`
  );
  const data: APISavingsAccountType = await response.json();
  const provider = await getProviders();

  return {
    props: { data, provider },
  };
};

export default Home;
