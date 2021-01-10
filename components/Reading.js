import styled from "@emotion/styled";
import Link from "next/link";
import { MAUVE } from "../utils/styling";
import { useRouter } from "next/router";

const titles = ["passé", "présent", "futur"];

const ReadStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const SlotStyle = styled.div`
  color: ${MAUVE};
  display: flex;
  margin: 1rem 0;

  > .image {
    display: grid;
    place-items: center;
    > img {
      width: 12rem;
    }
    > h2 {
      text-transform: uppercase;
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
      <div className="image">
        <img src={IMAGE} />
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
  console.log("READING cards", past, present, future);
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
