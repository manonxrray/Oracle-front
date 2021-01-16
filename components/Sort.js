import styled from "@emotion/styled";
import { CANDYPINK, DEEPMAUVE, SOFTBLUE, WHITE } from "../utils/styling";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";

const Sorting = styled.div`
  .cards {
    width: 10rem;
    display: block;
    margin: 4rem auto;
  }

  > p {
    margin: 0.5rem 1rem;
    text-align: center;

    @media (min-width: 500px) {
      font-size: 1.5rem;
    }

    > strong {
      color: ${DEEPMAUVE};
      text-decoration: underline;
      font-size: 1.3rem;

      @media (min-width: 500px) {
        font-size: 1.8rem;
      }
    }
  }

  & > a {
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 6px;
    font-size: 0.9rem;

    > .icon {
      color: ${DEEPMAUVE};
      font-size: 1.5rem;
      margin-left: 1rem;
    }

    > @media (min-width: 600px) {
      font-size: 1.5rem;
    }

    &:hover,
    :active {
      font-style: italic;
    }
  }
`;

const CardsContainer = styled.div`
  display: grid;
  place-items: center;
  margin: auto;
  width: 90vw;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 0.5fr);

  @media (min-width: 600px) {
    width: 70vw;
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  > div {
    > img {
      width: 4rem;
      border-radius: 6px;

      cursor: pointer;

      @media (min-width: 450px) {
        width: 6rem;
      }

      @media (min-width: 700px) {
        width: 8rem;
      }
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
        Vous pouvez choisir <strong>3</strong> cartes ...
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
          <a>
            ... et lire l'interprétation de votre tirage
            <FontAwesomeIcon className="icon" icon={faPlay} />
          </a>
        </Link>
      )}
      <img className="cards" src="/cards.PNG" href="Cartes" />
    </Sorting>
  );
}
