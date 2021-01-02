import "../styles/globals.css";
import Paging from "../components/Layout/Page";
import Head from "next/head";

function Oracle({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>L'oracle des yeux</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Paging>
        <Component {...pageProps} />
      </Paging>
    </>
  );
}

export default Oracle;
