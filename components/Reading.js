import styled from "@emotion/styled";
import Link from "next/link";
import { MAUVE } from "../utils/styling";

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

function Slot({ title }) {
  return (
    <SlotStyle>
      <div className="image">
        <img src="/eye.PNG" />
        <h2>{title}</h2>
      </div>
      <div className="content">
        <h3>Nom de la carte</h3>
        <p>Description de la carte</p>
      </div>
    </SlotStyle>
  );
}

export default function Reading() {
  return (
    <ReadStyle>
      {titles.map((title) => (
        <Slot title={title} />
      ))}
      <Link href="/">Retour à la page d'accueil</Link>
    </ReadStyle>
  );
}
