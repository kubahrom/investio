import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Investio</title>
        <meta name="description" content="Investio app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline">Investio</h1>
      <p>test p tag</p>
      <button className="btn">Button</button>
      <button className="btn btn-primary">Button</button>
      <button className="btn btn-secondary">Button</button>
      <button className="btn btn-accent">Button</button>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <Image
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            width="400"
            height="225"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
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
