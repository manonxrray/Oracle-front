import styled from "@emotion/styled";
import { DEEPMAUVE, WHITE } from "../utils/styling";
import Link from "next/link";
import { useEffect, useState } from "react";

const Sorting = styled.div`
  padding-bottom: 1rem;
  > p {
    margin: 0.5rem 1rem;
    text-align: center;

    > strong {
      color: ${DEEPMAUVE};
      text-decoration: underline;
      font-size: 1.3rem;
    }
  }

  & > a {
    display: grid;
    place-items: center;
    background: ${DEEPMAUVE};
    color: ${WHITE};
    margin: 0 1rem;
    padding: 0.5rem;
    border-radius: 6px;

    &:hover,
    :active {
      font-style: italic;
    }
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 1.2rem;
  > div {
    > img {
      width: 4rem;
      border-radius: 6px;
      margin: 0.1rem;
    }
  }
`;

// This function shuffles an array to return another array with mixed up values

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    const next = Math.floor(Math.random() * (index + 1));
    [array[index], array[next]] = [array[next], array[index]];
  }
  return array;
}

export default function Sort({ cards }) {
  // First, I set my state containing the array with the future selected cards &
  // my shuffled cards
  const [selectedCards, setSelectedCards] = useState([]);
  const [shuffledCards, setShuffledCards] = useState([]);

  // This next function stores the new card in the selectedCards state as long as the array's length is not 3 long

  const select = (prop) => {
    if (selectedCards.length < 3 && !selectedCards.includes(prop)) {
      setSelectedCards([...selectedCards, prop]);
    }
  };

  // My useEffect hook will make sure my cards are shuffled first, and not shuffling when my selectedCards state updated
  useEffect(() => {
    let shuffled = shuffle(cards);
    setShuffledCards(shuffled);
  }, [cards]);

  return (
    <Sorting>
      <p>
        Les cartes ont été mélangées, vous pouvez en choisir <strong>3</strong>{" "}
        puis cliquer sur le bouton qui apparaîtra pour lire l'interprétation.
        Bon tirage !
      </p>
      <CardsContainer>
        {shuffledCards.map((card) => (
          <div key={card._id} onClick={() => select(card)}>
            <img
              src={
                selectedCards.includes(card) ? card.picture : "/backclosed.PNG"
              }
            />
          </div>
        ))}
      </CardsContainer>
      {selectedCards.length === 3 && (
        <Link
          href={`/tirage/resultat/${selectedCards[0].slug}-${selectedCards[1].slug}-${selectedCards[2].slug}`}
        >
          <a>Lire l'interprétation de votre tirage</a>
        </Link>
      )}
    </Sorting>
  );
}
