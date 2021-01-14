import styled from "@emotion/styled";
import { WHITE, MAUVE, DEEPBLUE } from "../../utils/styling";
import Active from "./Active";
import GalleryActive from "./GalleryActive";
import Link from "next/link";

const HeaderStyle = styled.header`
  position: fixed;
  width: 100vw;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  background: ${WHITE};
  border-bottom: 1px solid ${MAUVE};

  .selected {
    text-decoration: 4px solid ${MAUVE} line-through;
    font-style: italic;
  }

  @media (min-width: 900px) {
  }

  .logo {
    width: 2.2rem;
    height: 2.2rem;
    background-size: cover;
    margin: 0 0.5rem;

    @media (min-width: 900px) {
      width: 3rem;
      height: 3rem;
      margin: -0.2rem 1rem;
    }
  }

  .title {
    display: flex;

    > h5 {
      display: none;

      @media (min-width: 600px) {
        display: grid;
        place-items: center;
        font-size: 1.2rem;
      }
      @media (min-width: 800px) {
        font-size: 1.4rem;
      }
    }
  }

  > nav {
    margin: 0.5rem;

    > a {
      margin: 0.5rem;

      &:hover,
      :active {
        font-style: italic;
      }

      @media (min-width: 600px) {
        font-size: 1.2rem;
      }

      @media (min-width: 1000px) {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyle>
      <Link href="/">
        <a className="title">
          <img className="logo" src="/logo.PNG" />
          <h5>L'Oracle des Yeux</h5>
        </a>
      </Link>
      <nav>
        <Active href="/">
          <a>Accueil</a>
        </Active>
        <Active href="/tirage">
          <a>Tirage</a>
        </Active>
        <GalleryActive href="/galerie/reve">
          <a>Galerie</a>
        </GalleryActive>
      </nav>
    </HeaderStyle>
  );
}
