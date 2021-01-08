import styled from "@emotion/styled";
import { LIGHTPINK } from "../utils/styling";
import Link from "next/link";
import { useEffect, useState } from "react";

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > div {
    > img {
      width: 4rem;
    }

    > .selected {
      border: 2px solid ${LIGHTPINK};
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
    <>
      <h1>Vous pouvez tirer 3 cartes</h1>
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
          <a>Voir les résultats de votre tirage</a>
        </Link>
      )}
    </>
  );
}
