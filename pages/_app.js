import "../styles/globals.css";
import Paging from "../components/Layout/Page";
import Head from "next/head";

function Oracle({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>L'oracle des yeux</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Paging>
        <Component {...pageProps} />
      </Paging>
    </>
  );
}

export default Oracle;
