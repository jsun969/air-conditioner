import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider as ReduxProvider } from 'react-redux';
import SocketDataUpdater from '../components/SocketDataUpdater';
import { initSocketClient } from '../lib/socketClient';
import { store } from '../states/store';
import '../styles/tailwind.css';

initSocketClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Air Conditioner</title>
        <meta name="description" content="A Windless Air Conditioner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
        <SocketDataUpdater />
      </ReduxProvider>
    </>
  );
}

export default App;
