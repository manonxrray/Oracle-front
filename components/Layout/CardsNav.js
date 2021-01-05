import styled from "@emotion/styled";
import { LIGHTPINK, BLUEPURPLE } from "../../utils/styling";

export const CardsNav = styled.div`
  display: flex;
  overflow: scroll;

  > .active {
    background: ${LIGHTPINK};
    color: ${BLUEPURPLE};
  }

  > div {
    padding: 0.5rem;

    > a {
      margin: 0.5rem 0;
      text-align: center;
      font-size: 0.7rem;

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
