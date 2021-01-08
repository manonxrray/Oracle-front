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

  if (selectedCards.length === 3) {
    // let pastCard = [
    //   {
    //     name: selectedCards[0].name,
    //     number: selectedCards[0].number,
    //     description: selectedCards[0].past,
    //     picture: selectedCards[0].picture,
    //   },
    // ];

    // let presentCard = [
    //   {
    //     name: selectedCards[1].name,
    //     number: selectedCards[1].number,
    //     description: selectedCards[1].present,
    //     picture: selectedCards[1].picture,
    //   },
    // ];

    // let futureCard = [
    //   {
    //     name: selectedCards[2].name,
    //     number: selectedCards[2].number,
    //     description: selectedCards[2].present,
    //     picture: selectedCards[2].picture,
    //   },
    // ];

    console.log("state :", selectedCards);
  }

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
          href={`/tirage/resultat?pastName=${JSON.stringify(
            selectedCards[0].name
          )}&pastNumber=${JSON.stringify(
            selectedCards[0].number
          )}&pastTxt=${JSON.stringify(
            selectedCards[0].past
          )}&pastPic=${JSON.stringify(
            selectedCards[0].picture
          )}&presentName=${JSON.stringify(
            selectedCards[1].name
          )}&presentNumber=${JSON.stringify(
            selectedCards[1].number
          )}&presentTxt=${JSON.stringify(
            selectedCards[1].present
          )}&presentPic=${JSON.stringify(
            selectedCards[1].picture
          )}&futureName=${JSON.stringify(
            selectedCards[2].name
          )}&futureNumber=${JSON.stringify(
            selectedCards[2].number
          )}&futureTxt=${JSON.stringify(
            selectedCards[2].future
          )}&futurePic=${JSON.stringify(selectedCards[2].picture)}`}
        >
          <a>Voir les résultats de votre tirage</a>
        </Link>
      )}
    </>
  );
}
