import type { AppProps } from "next/app";
import Head from "next/head";

import "styles/normalize.css";
import "styles/Body.css";

import { Header, Footer } from "components";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Bruno Ruiz</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
