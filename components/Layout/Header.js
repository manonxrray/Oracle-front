import styled from "@emotion/styled";
import { WHITE } from "../../utils/styling";
import Link from "next/link";

const HeaderStyle = styled.header`
  position: fixed;
  width: 100vw;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  background: ${WHITE};

  @media (min-width: 1000px) {
    height: 3.5rem;
  }

  > .logo {
    width: 2.2rem;
    height: 2.2rem;
    background-size: cover;
    margin: 0 0.5rem;
  }

  > nav {
    font-style: italic;
    margin: 0.5rem;

    > a {
      margin: 0.5rem;

      @media (min-width: 600px) {
        font-size: 1.2rem;
      }

      @media (min-width: 1000px) {
        font-size: 1.5rem;
      }
    }

    > .active {
      font-weight: bold;
      font-size: 1.3rem;
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyle>
      <img className="logo" src="/logo.PNG" />
      <nav>
        <Link href="/">
          <a>Accueil</a>
        </Link>
        <Link href="/tirage">
          <a>Tirage</a>
        </Link>
        <Link href="/galerie/reve">
          <a>Galerie</a>
        </Link>
      </nav>
    </HeaderStyle>
  );
}
