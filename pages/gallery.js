import CardsGallery from "../components/CardsGallery";
import { getAllCards } from "../data/cardsFetcher";

const fetcher = () => getAllCards();

export async function getStaticProps() {
  const cards = await fetcher();

  return {
    props: {
      cards,
    },
  };
}

export default function Gallery({ cards }) {
  return <CardsGallery cards={cards} />;
}
