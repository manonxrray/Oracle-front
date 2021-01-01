import Head from "next/head";
import CardsGallery from "../components/CardsGallery";
import styles from "../styles/Home.module.css";
import { getAllCards } from "../data/cardsFetcher";

const fetcher = () => getAllCards();

export async function getStaticProps() {
  const cards = await fetcher();

  console.log(cards);

  return {
    props: {
      cards,
    },
  };
}

export default function Home({ cards }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Les yeux de l'oracle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CardsGallery cards={cards} />
      </main>
    </div>
  );
}
