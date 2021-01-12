import styled from "@emotion/styled";
import Link from "next/link";
import { DEEPPINK, DEEPMAUVE } from "../utils/styling";

const titles = ["passé", "présent", "futur"];

const ReadStyle = styled.div`
  padding-top: 2rem;
  > .slots {
    display: flex;
    flex-direction: column;

    @media (min-width: 600px) {
      flex-direction: row;
    }
  }

  > a {
    display: grid;
    place-items: center;
    margin-top: 2rem;
    color: ${DEEPPINK};
    text-decoration: underline;
  }
`;

const SlotStyle = styled.div`
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

  color: ${DEEPMAUVE};
  display: flex;
  margin: auto;

  @media (min-width: 600px) {
    flex-direction: column;
  }

  > .title {
    display: grid;
    place-items: center;
    > .image {
      height: 17rem;
      > img {
        width: 9rem;
        border-radius: 8px;
        animation: 2s floating infinite;

        @media (min-width: 950px) {
          width: 12rem;
        }
      }
    }

    > h2 {
      text-transform: uppercase;
      font-size: 1.2rem;
      text-align: center;
      padding: 0.5rem;
      border-radius: 10px;
      color: ${DEEPPINK};
      font-style: italic;

      @media (min-width: 950px) {
        margin-top: 4rem;
      }
    }
  }

  > .content {
    margin: 1rem 0 0 1rem;

    @media (min-width: 950px) {
      margin: auto;
      text-align: center;
    }

    > h3 {
      color: ${DEEPMAUVE};

      @media (min-width: 600px) {
        text-align: center;
      }
    }

    > p {
      color: black;

      @media (min-width: 600px) {
        margin: 1rem;
      }
    }
  }
`;

function Slot({ title, past, present, future }) {
  const IMAGE =
    title === "passé"
      ? past?.picture
      : title === "présent"
      ? present?.picture
      : future?.picture;
  const NAME =
    title === "passé"
      ? past?.name
      : title === "présent"
      ? present?.name
      : future?.name;
  const NUMBER =
    title === "passé"
      ? past?.number
      : title === "présent"
      ? present?.number
      : future?.number;
  const DESCRIPTION =
    title === "passé"
      ? past?.past
      : title === "présent"
      ? present?.present
      : future?.future;

  return (
    <SlotStyle>
      <div className="title">
        <div className="image">
          <img src={IMAGE} />
        </div>
        <h2>{title}</h2>
      </div>
      <div className="content">
        <h3>
          {NUMBER}. {NAME}
        </h3>
        {/* <p>{DESCRIPTION}</p> */}
        <p>
          Test de long texte parce que c'est possible qu'elles soient plus
          longues que ça lolilol. Du coup je teste. L'oracle est un outil de
          développement personnel qui permet de nous guider dans nos décisions.
          Ca n'a pas la prétention de lire l'avenir ou quoique ce soit, mais de
          simplement orienter le consultant vers des conseils qui l'éclairont.
        </p>
      </div>
    </SlotStyle>
  );
}

export default function Reading({ past, present, future }) {
  return (
    <ReadStyle>
      <div className="slots">
        {titles.map((title, i) => (
          <Slot
            key={titles[i]}
            title={title}
            past={past}
            present={present}
            future={future}
          />
        ))}
      </div>
      <Link href="/">Retour à la page d'accueil</Link>
    </ReadStyle>
  );
}
