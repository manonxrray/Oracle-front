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
    > a {
      margin: 0.5rem 0;
      padding: 0.5rem;
      text-align: center;

      > img {
        width: 10rem;
      }
    }
  }
`;
