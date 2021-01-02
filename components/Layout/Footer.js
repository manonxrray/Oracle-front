import styled from "@emotion/styled";
import { DARKPURPLE } from "../../utils/styling";
import Link from "next/link";

const FooterStyle = styled.header`
  background: ${DARKPURPLE};
`;

export default function Footer() {
  return (
    <FooterStyle>
      <Link href="/a-propos">
        <a>A propos</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </FooterStyle>
  );
}
