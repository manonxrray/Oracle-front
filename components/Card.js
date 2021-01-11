import styled from "@emotion/styled";
import { WHITE, MAUVE, LIGHTGREY } from "../utils/styling";

const Container = styled.div`
  @keyframes floating {
    0% {
      padding-top: 1rem;
    }
    50% {
      padding-top: 0rem;
    }
    100% {
      padding-top: 1rem;
    }
  }

  display: flex;
  flex-direction: column;
  text-align: center;
  width: 75vw;
  padding-top: 1rem;

  @media (min-width: 1200px) {
    flex-direction: row-reverse;
    padding-top: 5rem;
  }

  > .card {
    width: 100%;
    margin: 0 auto;
    height: 18rem;

    @media (min-width: 1200px) {
      margin: 5rem auto;
    }

    > img {
      width: 10rem;
      border-radius: 11px;
      animation: 2s floating infinite;

      @media (min-width: 800px) {
        width: 15rem;
        margin: 0;
      }
    }
  }

  > .content {
    margin: 0.5rem auto;

    > h2 {
      margin-bottom: 1rem;
      font-style: italic;

      @media (min-width: 1200px) {
        font-size: 2rem;
      }
    }

    > p {
      font-size: 0.8rem;
      margin: 0 1rem;

      @media (min-width: 400px) {
        font-size: 1rem;
      }

      @media (min-width: 800px) {
        font-size: 1.2rem;
      }

      @media (min-width: 1200px) {
        font-size: 1.5rem;
        text-align: right;
      }
    }

    @media (min-width: 600px) {
      margin-top: 1.5rem;
    }

    @media (min-width: 800px) {
      margin-top: 10rem;
    }

    @media (min-width: 1200px) {
      width: 60rem;
      margin: 5rem 0 0 2rem;
    }
  }
`;

export default function Card({ name, description, picture, number }) {
  return (
    <Container>
      <div className="card">
        <img src={picture} />
      </div>
      <div className="content">
        <h2>
          {number}. {name}
        </h2>
        {/* <p>{description}</p> */}
        <p>
          petit test avec une plus grande description parce que quand même faut
          pas abuser quoi ça va être plus long que ça le texte affiché et OUI je
          choisis de ne pas faire de Lorem Ipsum et de me débrouiller avec mon
          phrasé bien nul et chiant ! QUEL EST LE PROBLEME ?? ?HEIN ??? QUEL EST
          LE PROBLEME MES AIEUX ??
        </p>
      </div>
    </Container>
  );
}
