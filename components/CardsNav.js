import styled from "@emotion/styled";
import { MAUVE, WHITE } from "../utils/styling";

export const CardsNav = styled.div`
  > .active {
    background: ${WHITE};
    color: black;
  }

  width: 30vw;
  background: ${MAUVE};
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(12, 1fr);
  margin-top: -1rem;

  > div {
    padding: 1rem;
    display: grid;
    place-items: center;
    background: ${MAUVE};
    color: ${WHITE};

    @media (min-width: 900px) {
      padding: 0.5rem;
    }

    > a {
      margin: 0.5rem 0;
      text-align: center;
      font-size: 0.5rem;

      @media (min-width: 600px) {
        font-size: 0.8rem;
      }
    }
  }
`;
