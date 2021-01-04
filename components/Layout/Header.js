import styled from "@emotion/styled";
import { MAUVE, WHITE } from "../../utils/styling";
import Link from "next/link";

const HeaderStyle = styled.header`
  position: fixed;
  width: 100vw;
  background: ${MAUVE};
  height: 2.5rem;
  display: flex;
  justify-content: space-between;

  @media (min-width: 1000px) {
    height: 3.5rem;
  }

  > .logo {
    width: 1.5rem;
    border-radius: 50%;
    background-image: url("/eye.PNG");
    background-size: cover;
    margin: 0.5rem;
  }

  > nav {
    color: ${WHITE};
    font-style: italic;
    margin: 0.5rem;

    > a {
      margin: 0.5rem;

      @media (min-width: 600px) {
        font-size: 1.2rem;
      }

      @media (min-width: 1000px) {
        font-size: 2rem;
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
      <div className="logo" />
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
