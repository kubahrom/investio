import type { GetServerSideProps, NextPage } from 'next';
import { BuiltInProviderType } from 'next-auth/providers';
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
  signOut,
  useSession,
} from 'next-auth/react';
import Head from 'next/head';

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
  const { data: session } = useSession();
  // console.log(provider);
  return (
    <div>
      <Head>
        <title>Investio</title>
        <meta name="description" content="Investio app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {session ? (
        <button className="btn" onClick={() => signOut()}>
          Logout
        </button>
      ) : (
        <button className="btn" onClick={() => signIn(provider?.google?.id)}>
          Login
        </button>
      )}
      <Header />
      <Main data={data.list} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/savings-accounts-mock`
  );
  const data: APISavingsAccountType = await response.json();
  const provider = await getProviders();

  return {
    props: { data, provider },
  };
};

export default Home;
