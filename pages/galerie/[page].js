import { getAllCards } from "../../data/cardsFetcher";
import Card from "../../components/Card";
import { CardsNav } from "../../components/CardsNav";
import Link from "next/link";
import { Gallery } from "../../components/Gallery";

/* 
  I want my gallery to show each card (and its description) when the user 
  click on the card's name. In order to do that, I have to generate all the cards 
  paths, using getStaticPaths first => this async function lists all the possible 
  paths. Here, I use my getAllCards function to list all the cards slugs and 
  turn them into dynamic paths
*/

export async function getStaticPaths() {
  let cards = await getAllCards();
  let paths = [];
  cards.forEach((card) => {
    let { slug } = card;
    paths.push(`/galerie/${slug}`);
  });

  return {
    paths,
    fallback: false,
  };
}

/*
  Next step in coding dynamic paths using Next.js is to use the async function 
  getStaticProps, which allows to get all the data we need in the pages displayed
  when we click on the dynamic path (if I click "II.Néant" I'll get a page display
  different from any other card...)
*/

export async function getStaticProps({ params }) {
  let { page } = params;
  const cards = await getAllCards();

  return {
    props: {
      page,
      cards,
      card: cards.find((card) => card.slug === page),
    },
  };
}

export default function AllCards({ cards, card, page }) {
  let cardsById = cards.sort(function (a, b) {
    return a.idnb - b.idnb;
  });

  return (
    <Gallery>
      <CardsNav>
        {cardsById.map((card) => (
          <div key={card.idnb} className={page === card.slug ? "active" : ""}>
            <Link href={`/galerie/${card.slug}`}>
              <a>
                <h2>{card.name}</h2>
              </a>
            </Link>
          </div>
        ))}
      </CardsNav>
      <Card {...card} />
    </Gallery>
  );
}
