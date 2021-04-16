import styled from "@emotion/styled";
import Link from "next/link";
import { DEEPMAUVE, MAUVE } from "../utils/styling";

export default function HomePage() {
  return (
    <main>
      <HomeStyle>
        <div className="welcome">
          <h1>Bienvenue sur</h1>
          <img src="/title.PNG" alt="Titre du site" />
        </div>
        <div className="intro">
          <h2>Prêt/e pour votre première consultation ?</h2>
          <p>
            L'Oracle des Yeux est avant tout un{" "}
            <strong>outil de développement personnel</strong> et non un outil de
            divination. Le consulter peut vous permettre d'y voir plus clair,
            d'obtenir des pistes de réponse à vos questions, ou tout simplement
            de vous amuser à lire les histoires qui se créent au travers des
            cartes tirées.
          </p>
        </div>
        <div className="start">
          <h2>Alors ne tardez plus !</h2>
          <div className="links">
            <Link href="/tirage">
              <a>Faites un tirage</a>
            </Link>
            <Link href="/galerie/reve">
              <a>Visitez la galerie</a>
            </Link>
          </div>
        </div>
      </HomeStyle>
    </main>
  );
}

const HomeStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-row: repeat(3, 1fr);
  place-items: center;

  h2 {
    font-size: 1.2rem;

    @media (min-width: 600px) {
      font-size: 2rem;
    }
  }

  .welcome {
    margin: 1rem;
    display: grid;
    place-items: center;
    img {
      width: 70vw;
    }
  }

  .intro {
    margin: 1rem;
    display: grid;
    place-items: center;
    text-align: center;

    p {
      margin-top: 1rem;
      width: 70vw;

      @media (min-width: 600px) {
        font-size: 1.2rem;
      }

      @media (min-width: 1000px) {
        font-size: 1.5rem;
      }
    }

    strong {
      color: ${DEEPMAUVE};
    }
  }

  .start {
    margin: 1rem;
    display: grid;
    place-items: center;
    text-align: center;

    .links {
      display: grid;
      grid-template-rows: repeat(2, 1fr);

      @media (min-width: 450px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(1, 1fr);
      }

      a {
        background: ${MAUVE};
        margin-top: 1rem;
        padding: 0.5rem;

        @media (min-width: 450px) {
          margin: 1rem;
        }

        @media (min-width: 450px) {
          font-size: 1.5rem;
        }

        &:hover,
        :active {
          background: none;
          border: 1px solid black;
        }
      }
    }
  }
`;
