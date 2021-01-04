import styled from "@emotion/styled";
import { LIGHTPINK } from "../utils/styling";

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > div {
    > img {
      width: 5rem;
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
  let mixedCards = shuffle(cards);

  // The next functions allows the user to select 3 cards

  let selectedCards = [];

  function select() {
    if (selectedCards.length < 3) {
      selectedCards.push("civet");
    }
    console.log(selectedCards);
  }

  return (
    <>
      <h1>Vous pouvez tirer 3 cartes</h1>
      <CardsContainer>
        {mixedCards.map((card) => (
          <div onClick={select}>
            <img
              className={selectedCards.includes(card.slug) ? "selected" : ""}
              src="/eye.PNG"
            />
          </div>
        ))}
      </CardsContainer>
    </>
  );
}
