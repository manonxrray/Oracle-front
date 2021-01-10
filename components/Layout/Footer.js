import styled from "@emotion/styled";
import { SOFTBLUE, WHITE } from "../../utils/styling";
import Link from "next/link";

const FooterStyle = styled.header`
  background: ${SOFTBLUE};
  height: 2.5rem;
  color: ${WHITE};
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem;

  > span {
    font-weight: bold;
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <Link href="/a-propos">
        <a>A propos</a>
      </Link>
      <span>.</span>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </FooterStyle>
  );
}
