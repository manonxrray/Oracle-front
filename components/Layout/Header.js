import styled from "@emotion/styled";
import { DARKPURPLE } from "../../utils/styling";
import Link from "next/link";

const HeaderStyle = styled.header`
  background: ${DARKPURPLE};
`;

export default function Header() {
  return (
    <HeaderStyle>
      <Link href="/">
        <a>Accueil</a>
      </Link>
      <Link href="/tirage">
        <a>Tirage</a>
      </Link>
      <Link href="/galerie">
        <a>Galerie</a>
      </Link>
    </HeaderStyle>
  );
}
