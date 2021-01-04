import styled from "@emotion/styled";
import { LIGHTPINK, BLUEPURPLE } from "../../utils/styling";

export const CardsNav = styled.div`
  outline: 1px solid red;
  display: grid;
  grid-column: 2 / 4;

  > a {
    margin: 0.5rem 0;
    padding: 0.5rem;

    > img {
      width: 40%;
      outline: 1px solid red;
    }
  }
`;
