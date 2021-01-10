import Reading from "../../../components/Reading";
import { getAllCards, getCardBySlug } from "../../../data/cardsFetcher";

export async function getStaticPaths() {
  let cards = await getAllCards();
  let paths = [];

  cards.forEach((c1) => {
    cards.forEach((c2) => {
      cards.forEach((c3) => {
        let { slug: s1 } = c1;
        let { slug: s2 } = c2;
        let { slug: s3 } = c3;
        paths.push(`/tirage/resultat/${s1}-${s2}-${s3}`);
      });
    });
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let { path } = params;
  let [s1, s2, s3] = path.split("-");
  console.log(s1, s2, s3);

  const card1 = await getCardBySlug(s1);
  const card2 = await getCardBySlug(s2);
  const card3 = await getCardBySlug(s3);

  return {
    props: {
      card1,
      card2,
      card3,
    },
  };
}

export default function Result({ card1, card2, card3 }) {
  return <Reading past={card1} present={card2} future={card3} />;
}
