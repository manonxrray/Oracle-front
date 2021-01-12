import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { DEEPMAUVE, SOFTBLUE, CANDYPINK } from "../utils/styling";

const HomeStyle = styled.div`
  margin-top: 1rem;
  padding-bottom: 1rem;

  > div {
    > h1 {
      text-align: center;
      font-size: 1.3rem;
    }
    > img {
      display: block;
      width: 15rem;
      margin: auto;
      @media (min-width: 1000px) {
        width: 20rem;
      }
    }
  }

  > .description {
    > p {
      text-align: center;
      margin: 1rem;

      @media (min-width: 600px) {
        font-size: 1.2rem;
      }

      > strong {
        color: ${DEEPMAUVE};
      }
    }

    > .options {
      display: flex;
      justify-content: space-evenly;

      > div {
        text-align: center;
        > h3 {
          font-weight: 600;
          font-style: italic;
          @media (min-width: 600px) {
            font-size: 1.7rem;
          }
        }
        > a {
          @media (min-width: 600px) {
            font-size: 1.5rem;
          }
          > .icon {
            font-size: 2.5rem;
            color: ${CANDYPINK};

            @media (min-width: 600px) {
              font-size: 3rem;
            }
          }
        }
      }
    }
  }
`;

export default function HomePage() {
  return (
    <main>
      <HomeStyle>
        <div>
          <h1>Bienvenue, installez- vous !</h1>
          <img src="/cards.PNG" />
        </div>
        <div className="description">
          <p>
            L'oracle des yeux n'a pas la prétention de pouvoir lire l'avenir,
            voyez plutôt ça comme{" "}
            <strong>un outil de développement personnel</strong> qui peut
            apporter des pistes de réponses à vos questions.
          </p>
          <div className="options">
            <div className="tirage">
              <h3>Faire un tirage</h3>
              <Link href="/tirage">
                <a>
                  <FontAwesomeIcon className="icon tir" icon={faPlay} />
                  <p>C'est parti !</p>
                </a>
              </Link>
            </div>
            <div className="galerie">
              <h3>Visiter la galerie</h3>
              <Link href="/galerie/reve">
                <a>
                  <FontAwesomeIcon className="icon gal" icon={faBookOpen} />
                  <p>Par ici !</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </HomeStyle>
    </main>
  );
}
