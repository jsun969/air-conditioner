import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider as ReduxProvider } from 'react-redux';
import SocketDataUpdater from '../components/SocketDataUpdater';
import { useCheckClient } from '../hooks/useCheckClient';
import { store } from '../states/store';
import '../styles/tailwind.css';

function App({ Component, pageProps }: AppProps) {
  const { isClient } = useCheckClient();

  return (
    <>
      <Head>
        <title>Air Conditioner</title>
        <meta name="description" content="A Windless Air Conditioner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
        {isClient && <SocketDataUpdater />}
      </ReduxProvider>
    </>
  );
}

export default App;
