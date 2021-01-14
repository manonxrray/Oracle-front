import styled from "@emotion/styled";
import { MAUVE, WHITE, DEEPBLUE } from "../../utils/styling";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Active from "./Active";

const FooterStyle = styled.header`
  background: ${WHITE};
  height: 2.5rem;
  border-top: 1px solid ${MAUVE};
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem;

  .icon {
    color: ${DEEPBLUE};
  }

  @media (min-width: 600px) {
    padding: 1rem;
    height: 3.5rem;
    font-size: 1.2rem;
  }

  > span {
    font-weight: bold;
  }

  a {
    &:hover,
    :active {
      font-style: italic;
    }
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
      <FontAwesomeIcon className="icon" icon={faEye} />
      <Active href="/contact">
        <a>Contact</a>
      </Active>
    </FooterStyle>
  );
}
