import styled from "@emotion/styled";
import { DEEPMAUVE } from "../../utils/styling";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;

  @media (min-width: 800px) {
    flex-direction: row;
    padding: 0rem;
    margin-top: 3rem;
  }

  > .image {
    @media (min-width: 800px) {
      margin: 2rem;
    }
    > h1 {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 1rem;

      @media (min-width: 1000px) {
        font-size: 2rem;
      }
    }
    > img {
      display: block;
      width: 10rem;
      margin: auto;
      border-radius: 11px;

      @media (min-width: 800px) {
        width: 15rem;
      }
    }
  }

  > .about {
    @media (min-width: 800px) {
      margin-top: 2rem;
    }
    > p {
      margin: 1rem;
      display: block;

      @media (min-width: 800px) {
        margin: 2rem 3rem 0 3rem;
      }

      @media (min-width: 1000px) {
        font-size: 1.3rem;
      }

      > em {
        font-style: italic;
        font-size: 0.8rem;

        @media (min-width: 1000px) {
          font-size: 1rem;
        }
      }

      > strong {
        color: ${DEEPMAUVE};
      }
    }

    > h4 {
      text-align: right;
      margin-right: 2rem;

      img {
        width: 8rem;

        @media (min-width: 600px) {
          width: 10rem;
        }
      }
    }
  }
`;

export default function About() {
  return (
    <AboutContainer>
      <div className="image">
        <h1>A propos</h1>
        <img src="/manon.PNG" />
      </div>
      <div className="about">
        <p>
          Je m'appelle Manon Gerray, j'ai 25 ans et je suis passionnée
          d'ésotérisme <em>(et de plein d'autres choses)</em>. J'ai commencé à
          créer et <strong>dessiner</strong> les différentes cartes de l'Oracle
          des Yeux en 2019, en vue de créer ce site de tirage de cartes en ligne
          après la fin de ma formation de <strong>développement web</strong>.
        </p>
        <p>
          Le but de cet Oracle est de vous proposer des pistes de réponse et
          d'évolution à vos questions. Ceci n'est que la première version du
          site, j'aimerais <strong>par la suite</strong> vous offrir{" "}
          <strong>plus de personnalisation</strong> et surtout une{" "}
          <strong>possibilité d'enregistrer vos résultats de tirage</strong>{" "}
          afin de consulter les conseils que vous auriez pu recevoir grâce à
          l'Oracle.
        </p>
        <p>
          Je vous souhaite beaucoup de plaisir à découvrir cet Oracle 100% fait
          maison, et espère secrètement qu'il vous apportera au moins le dixième
          de ce que vous étiez venus chercher en lançant un tirage sur mon site.
        </p>
        <h4>
          <img src="/signature.PNG" href="Ma signature" />
        </h4>
      </div>
    </AboutContainer>
  );
}
