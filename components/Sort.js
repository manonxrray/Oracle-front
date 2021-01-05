import styled from "@emotion/styled";
import { LIGHTPINK } from "../utils/styling";

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
  let mixedCards = shuffle(cards);

  // The next function will store the 3 selected cards in an array
  // and make sure the user can see which card they clicked on

  let selectedCards = [];

  const select = (prop) => {
    // this next condition make sure the user can't pick more than 3 cards and not the same twice
    if (selectedCards.length < 3 && !selectedCards.includes(prop)) {
      selectedCards.push(prop);
    }
    console.log(selectedCards);
  };

  return (
    <>
      <h1>Vous pouvez tirer 3 cartes</h1>
      <CardsContainer>
        {mixedCards.map((card) => (
          <div onClick={() => select(card.slug)}>
            <img
              src={
                selectedCards.includes(card.slug)
                  ? "/backopen.PNG"
                  : "/backclosed.PNG"
              }
            />
          </div>
        ))}
      </CardsContainer>
    </>
  );
}
