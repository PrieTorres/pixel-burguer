import { AppProps } from 'next/app';
import Layout from './layout'; // Ajuste o caminho conforme necessário

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
