import styled from "@emotion/styled";
import Link from "next/link";
import { DEEPPINK, WHITE, DEEPMAUVE } from "../utils/styling";
import { useRouter } from "next/router";

const titles = ["passé", "présent", "futur"];

const ReadStyle = styled.div`
  display: flex;
  flex-direction: column;

  > a {
    display: block;
    margin: 1rem auto;
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
  margin: 1rem;

  > .title {
    > .image {
      height: 17rem;
      > img {
        width: 9rem;
        border-radius: 8px;
        animation: 2s floating infinite;
      }
    }

    > h2 {
      text-transform: uppercase;
      font-size: 1.2rem;
      text-align: center;
      padding: 0.5rem;
      border-radius: 10px;
      color: ${DEEPMAUVE};
      font-style: italic;
    }
  }

  > .content {
    margin: 1rem 0 0 1rem;

    > h3 {
      color: ${DEEPMAUVE};
    }

    > p {
      color: black;
    }
  }
`;

function Slot({ title, past, present, future }) {
  const IMAGE =
    title === "passé"
      ? past.picture
      : title === "présent"
      ? present.picture
      : future.picture;
  const NAME =
    title === "passé"
      ? past.name
      : title === "présent"
      ? present.name
      : future.name;
  const NUMBER =
    title === "passé"
      ? past.number
      : title === "présent"
      ? present.number
      : future.number;
  const DESCRIPTION =
    title === "passé"
      ? past.past
      : title === "présent"
      ? present.present
      : future.future;

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
        <p>{DESCRIPTION}</p>
      </div>
    </SlotStyle>
  );
}

export default function Reading({ past, present, future }) {
  return (
    <ReadStyle>
      {titles.map((title, i) => (
        <Slot
          key={titles[i]}
          title={title}
          past={past[0]}
          present={present[0]}
          future={future[0]}
        />
      ))}
      <Link href="/">Retour à la page d'accueil</Link>
    </ReadStyle>
  );
}
