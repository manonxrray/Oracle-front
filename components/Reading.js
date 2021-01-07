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
  return (
    <SlotStyle>
      <div className="image">
        <img src="/eye.PNG" />
        <h2>{title}</h2>
      </div>
      <div className="content">
        {/* {title === "passé" && <h3>{past}</h3>}
        {title === "présent" && <h3>{present}</h3>}
        {title === "futur" && <h3>{future}</h3>} */}
        <p>Description</p>
      </div>
    </SlotStyle>
  );
}

export default function Reading() {
  let router = useRouter();

  let selectedCards = router?.query?.selectedCards;
  console.log(selectedCards);

  return (
    <ReadStyle>
      {titles.map((title, i) => (
        <Slot
          key={titles[i]}
          title={title}
          // past={pastCard}
          // present={presentCard}
          // future={futureCard}
        />
      ))}
      <Link href="/">Retour à la page d'accueil</Link>
    </ReadStyle>
  );
}
