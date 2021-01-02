import styled from "@emotion/styled";
import { MAUVE, WHITE } from "../../utils/styling";
import Link from "next/link";

const HeaderStyle = styled.header`
  background: ${MAUVE};
  height: 2.5rem;
  display: flex;
  justify-content: space-between;

  > .logo {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: ${WHITE};
    margin: 0.5rem;
  }

  > nav {
    color: ${WHITE};
    font-style: italic;
    margin: 0.5rem;

    > a {
      margin: 0.5rem;
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyle>
      <div className="logo" />
      <nav>
        <Link href="/">
          <a>Accueil</a>
        </Link>
        <Link href="/tirage">
          <a>Tirage</a>
        </Link>
        <Link href="/galerie">
          <a>Galerie</a>
        </Link>
      </nav>
    </HeaderStyle>
  );
}
