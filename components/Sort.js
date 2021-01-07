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
  const [selectedCards, setSelectedCards] = useState([]);
  const [shuffledCards, setShuffledCards] = useState([]);

  // // My cards are shuffled
  // let mixedCards = shuffle(cards);

  // Setting an empty array, fill it with the clicked cards

  const select = (prop) => {
    if (selectedCards.length < 3 && !selectedCards.includes(prop)) {
      setSelectedCards([...selectedCards, prop]);
    }
    console.log("modified", selectedCards);
  };

  console.log("state", selectedCards);

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
                selectedCards.includes(card)
                  ? "/backopen.PNG"
                  : "/backclosed.PNG"
              }
            />
          </div>
        ))}
      </CardsContainer>
      {selectedCards.length === 3 && (
        <Link href={`/tirage/resultat?selectedCards=${selectedCards}`}>
          <a>Voir les résultats de votre tirage</a>
        </Link>
      )}
    </>
  );
}
