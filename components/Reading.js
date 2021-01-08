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
    title === "passé" ? past[3] : title === "présent" ? present[3] : future[3];
  const NAME =
    title === "passé" ? past[0] : title === "présent" ? present[0] : future[0];
  const NUMBER =
    title === "passé" ? past[1] : title === "présent" ? present[1] : future[1];
  const DESCRIPTION =
    title === "passé" ? past[2] : title === "présent" ? present[2] : future[2];

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

export default function Reading() {
  let router = useRouter();

  function noQuotes(string) {
    let newString = string.split(`"`);
    return newString;
  }

  let splitPast = router?.query?.pastPic.split(`""`);
  let pastPic = splitPast.toString();

  let splitPresent = router?.query?.presentPic.split(`""`);
  let presentPic = splitPresent.toString();

  let splitFuture = router?.query?.futurePic.split(`""`);
  let futurePic = splitFuture.toString();

  let pastCard = [
    noQuotes(router?.query?.pastName),
    noQuotes(router?.query?.pastNumber),
    noQuotes(router?.query?.pastTxt),
    pastPic.replace(/['"]+/g, ""),
  ];

  let presentCard = [
    noQuotes(router?.query?.presentName),
    noQuotes(router?.query?.presentNumber),
    noQuotes(router?.query?.presentTxt),
    presentPic.replace(/['"]+/g, ""),
  ];

  let futureCard = [
    noQuotes(router?.query?.futureName),
    noQuotes(router?.query?.futureNumber),
    noQuotes(router?.query?.futureTxt),
    futurePic.replace(/['"]+/g, ""),
  ];

  return (
    <ReadStyle>
      {titles.map((title, i) => (
        <Slot
          key={titles[i]}
          title={title}
          past={pastCard}
          present={presentCard}
          future={futureCard}
        />
      ))}
      <Link href="/">Retour à la page d'accueil</Link>
    </ReadStyle>
  );
}
