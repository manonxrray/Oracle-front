import styled from "@emotion/styled";
import Link from "next/link";
import { DEEPBLUE, CANDYPINK, DEEPMAUVE, MAUVE } from "../../utils/styling";

export default function Contact() {
  return (
    <ContactContainer>
      <h1>Contactez-moi</h1>
      <div className="contacts">
        <div className="retours">
          <h3>J'attends vos retours sur le site</h3>
          <p className="explain">
            En vue de toujours m'améliorer et de rendre l'Oracle des Yeux plus
            agréable à utiliser, j'aimerais collecter vos retours. N'hésitez pas
            à m'écrire à l'adresse mail prévue à cet effet.
          </p>
          <p className="please">
            Vos retours peuvent pointer des éléments négatifs, mais n'oubliez
            pas de pointer le positif aussi, ça fait toujours plaisir !
          </p>
          <h4>feedbacksapp.manon@gmail.com</h4>
        </div>
        <div className="pro">
          <h3>Envie de discuter professionnellement ?</h3>
          <p className="explain">
            Vous êtes développeur ou futur développeur et souhaitez discuter ?
            Ou peut-être êtes-vous à la recherche de votre prochain talent et
            mon profil vous intéresse ? Voici mes différents réseaux et
            contacts.
          </p>
          <div className="infos">
            <Link href="https://www.linkedin.com/in/manongerray/">
              <a>
                Ma page Linkedin <strong>*</strong>
              </a>
            </Link>
            <Link href="https://www.github.com/manonxrray">
              <a>
                Ma page Github <strong>*</strong>
              </a>
            </Link>
            <Link href="https://twitter.com/mnoudev">
              <a>
                Mon compte Twitter <strong>*</strong>
              </a>
            </Link>
            <p className="plus">et par mail à l'adresse suivante :</p>
            <h4>manon.gerray@gmail.com</h4>
          </div>
        </div>
      </div>
      <img src="/cards.PNG" />
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  padding-top: 1rem;
  text-align: center;

  img {
    width: 15rem;
  }

  .contacts {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);

    @media (min-width: 700px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(1, 1fr);
    }

    h3 {
      color: ${DEEPMAUVE};
      text-decoration: 3px solid ${DEEPMAUVE} underline;
    }

    h4 {
      color: ${DEEPBLUE};
      font-weight: bold;
    }

    .retours {
      display: grid;
      place-items: center;
      height: 25rem;
      width: 19rem;
      margin: 1rem auto;
      border: 2px solid ${MAUVE};
      border-radius: 12px;
      padding: 1rem;

      .please {
        font-size: 0.8rem;
        font-style: italic;
      }
    }

    .pro {
      display: grid;
      place-items: center;
      height: 25rem;
      width: 19rem;
      padding: 1rem;
      margin: 1rem auto;
      border: 2px solid ${MAUVE};
      border-radius: 12px;

      .infos {
        display: grid;
        grid-template-rows: repeat(3, 1fr);

        a {
          text-decoration: 4px solid ${CANDYPINK} underline;

          strong {
            color: ${CANDYPINK};
          }
        }

        p {
          margin-top: 1rem;
        }
      }
    }
  }
`;
