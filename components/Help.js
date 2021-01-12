import styled from "@emotion/styled";
import {
  MAUVE,
  DEEPMAUVE,
  SOFTBLUE,
  CANDYPINK,
  WHITE,
  DEEPBLUE,
} from "../utils/styling";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const OpenHelp = styled.div`
  position: fixed;
  right: 1rem;
  text-align: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${WHITE};
  border: 3px solid ${SOFTBLUE};
  color: ${SOFTBLUE};
  cursor: pointer;
`;

export default function Help({ onClick }) {
  return <OpenHelp onClick={onClick}>?</OpenHelp>;
}

export const ReadContainer = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  padding: 1rem;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: ${WHITE};
  display: grid;
  place-items: center;

  @media (min-width: 600px) {
    width: 70vw;
    height: 90vh;
    top: 3rem;
    right: 1rem;
    border: 1px solid ${SOFTBLUE};
  }

  @media (min-width: 700px) {
    height: 80vh;
  }

  @media (min-width: 900px) {
    height: 65vh;
  }

  > button {
    background: none;
    border: none;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;

    > .close {
      color: red;
      font-size: 1.5rem;
    }
  }

  > h2 {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: ${DEEPBLUE};

    @media (min-width: 450px) {
      font-size: 1.2rem;
    }
  }

  > p {
    font-size: 0.8rem;
    margin-bottom: 0.2rem;

    @media (min-width: 450px) {
      font-size: 1rem;
    }

    > strong {
      color: ${DEEPMAUVE};
      font-style: italic;
      font-weight: 800;
    }
  }

  > h5 {
    text-align: center;
  }
`;

export function ReadHelp({ closeModal }) {
  return (
    <ReadContainer>
      <button type="button" onClick={closeModal}>
        <FontAwesomeIcon className="close" icon={faWindowClose} />
      </button>
      <h2>Comment lire mes cartes ?</h2>
      <p>
        Cela doit vous paraître un peu flou mais c'est très simple je vous
        assure ! Regardez : vous avez tiré 3 cartes. La{" "}
        <strong>première</strong> est placée sur la position du{" "}
        <strong>passé</strong>, elle indique donc un élément de votre passé qui
        a pu être décisif pour déterminer qui vous êtes actuellement, ou tout
        simplement ce que vous étiez auparavant.
      </p>
      <p>
        La <strong>seconde</strong> carte est placée sur la position du{" "}
        <strong>présent</strong>, elle évoque alors quelque chose que vous vivez
        actuellement ou un caractère que vous avez particulièrement en ce moment{" "}
      </p>
      <p>
        Enfin, la <strong>troisième</strong> carte évoque votre{" "}
        <strong>futur</strong>. Elle vous donne une idée de ce qui vous attend.
        Si c'est négatif, les cartes précédentes vous aideront à éviter cet
        évènement (il faut garder en tête que les cartes ne{" "}
        <em>prédisent pas l'avenir</em>) sinon, elles vous aideront à
        l'atteindre dans les meilleures conditions.
      </p>
      <h5>
        Bonne lecture ! Vous pouvez me contacter sur Twitter si vous avez besoin
        d'aider pour interpréter vos cartes.
      </h5>
    </ReadContainer>
  );
}
