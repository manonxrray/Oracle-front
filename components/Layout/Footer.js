import styled from "@emotion/styled";
import { MAUVE, WHITE, DEEPBLUE } from "../../utils/styling";
import Active from "./Active";

const FooterStyle = styled.header`
  background: ${WHITE};
  height: 2.5rem;
  border-top: 1px solid ${MAUVE};
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem;

  @media (min-width: 600px) {
    padding: 1rem;
    height: 3.5rem;
    font-size: 1.2rem;
  }

  > span {
    font-weight: bold;
  }

  .selected {
    text-decoration: 4px solid ${DEEPBLUE} line-through;
    font-style: italic;
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <Active href="/a-propos">
        <a>A propos</a>
      </Active>
      <span>.</span>
      <Active href="/contact">
        <a>Contact</a>
      </Active>
    </FooterStyle>
  );
}
