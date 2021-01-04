import Sort from "../../components/Sort";
import { getAllCards } from "../../data/cardsFetcher";

export async function getStaticProps() {
  const cards = await getAllCards();

  return {
    props: {
      cards,
    },
  };
}

export default function Choose({ cards }) {
  return <Sort cards={cards} />;
}
