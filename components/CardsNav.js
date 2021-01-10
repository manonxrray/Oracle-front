import styled from "@emotion/styled";
import { MAUVE, WHITE } from "../utils/styling";

export const CardsNav = styled.div`
  > .active {
    background: ${WHITE};
    color: black;
  }

  width: 30vw;

  > div {
    padding: 1rem 0.5rem;
    background: ${MAUVE};
    color: ${WHITE};

    > a {
      margin: 0.5rem 0;
      text-align: center;
      font-size: 0.5rem;

      @media (min-width: 600px) {
        font-size: 1rem;
      }

      > img {
        width: 5rem;

        @media (min-width: 800px) {
          width: 8rem;
        }
      }
    }
  }
`;
