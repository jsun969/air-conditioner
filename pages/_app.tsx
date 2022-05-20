import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Air Conditioner</title>
        <meta name="description" content="A Windless Air Conditioner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
