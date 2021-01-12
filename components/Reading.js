import { useState } from "react";
import Link from "next/link";

import styled from "@emotion/styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import Help from "./Help";
import { ReadHelp } from "./Help";
import { DEEPPINK, DEEPMAUVE, LIGHTGREY } from "../utils/styling";

const titles = ["passé", "présent", "futur"];

const ReadStyle = styled.div`
  padding-top: 0.5rem;

  > .slots {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(9);

    @media (min-width: 800px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      height: 100vh;
    }
  }

  > a {
    display: flex;
    justify-content: center;
    padding: 1rem;
    margin-top: 2rem;
    color: ${DEEPPINK};

    > .icon {
      margin-left: 1rem;
      font-size: 1.5rem;
    }
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

  > .title {
    display: grid;
    place-items: center;
    > .image {
      height: 17rem;
      > img {
        width: 9rem;
        border-radius: 8px;
        animation: 4s floating infinite;

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
      color: ${LIGHTGREY};
      font-style: italic;
      margin: -1rem auto auto auto;

      @media (min-width: 900px) {
        margin: 4rem auto auto auto;
      }
    }
  }

  > .name {
    margin: auto;
    text-align: center;
    > h3 {
      color: ${DEEPMAUVE};
    }
  }

  > .description {
    > p {
      text-align: center;
      color: black;
      margin: 1rem;
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
      <div className="name">
        <h3>
          {NUMBER}. {NAME}
        </h3>
      </div>
      <div className="description">
        <p>{DESCRIPTION}</p>
      </div>
    </SlotStyle>
  );
}

export default function Reading({ past, present, future }) {
  const [helpModal, setHelpModal] = useState(false);

  function openModal() {
    setHelpModal(!helpModal);
    return;
  }

  return (
    <ReadStyle>
      <Help onClick={openModal} />
      {helpModal === true && <ReadHelp closeModal={openModal} />}
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
      <Link href="/">
        <a>
          Retour à la page d'accueil{" "}
          <FontAwesomeIcon className="icon" icon={faHome} />
        </a>
      </Link>
    </ReadStyle>
  );
}
