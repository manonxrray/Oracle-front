import styled from "@emotion/styled";
import { MAUVE, WHITE } from "../utils/styling";

export const CardsNav = styled.div`
  .active {
    background: ${WHITE};
    color: ${MAUVE};
  }

  width: 30vw;
  background: ${MAUVE};
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(12);
  margin-top: -1rem;

  > div {
    display: grid;
    place-items: center;
    background: ${MAUVE};
    color: ${WHITE};

    > a {
      margin: 0.5rem 0;
      text-align: center;
      font-size: 0.5rem;
      padding: 0 0.5rem;

      @media (min-width: 600px) {
        font-size: 0.8rem;
      }

      @media (min-width: 1000px) {
        padding: 0 2rem;
      }
    }
  }
`;
