import styled from "@emotion/styled";
import Link from "next/link";
import { DEEPBLUE, CANDYPINK, DEEPMAUVE, MAUVE } from "../../utils/styling";

const ContactContainer = styled.div`
  padding-top: 1rem;
  @media (min-width: 800px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1100px) {
    font-size: 1rem;
  }

  > img {
    width: 10rem;
    margin: auto;
    display: block;
  }

  > h1 {
    text-align: center;
    font-style: italic;
    font-size: 1.5rem;
    text-decoration: 5px solid ${MAUVE} underline;
  }

  > .contacts {
    display: flex;
    flex-direction: column;

    @media (min-width: 600px) {
      margin-top: 3rem;
    }

    @media (min-width: 1100px) {
      flex-direction: row;
      justify-content: space-evenly;
      margin-top: 6rem;
      text-align: center;
    }

    h3 {
      color: ${DEEPBLUE};
    }

    h4 {
      color: ${DEEPMAUVE};
    }

    > .retours {
      margin: 1rem 0 1rem 1rem;

      > .please {
        font-size: 0.9rem;
        font-style: italic;
        margin: 0.5rem 0;
      }
    }

    > .pro {
      margin: 1rem 1rem 1rem 0;

      > .infos {
        display: flex;
        flex-direction: column;
        margin: 0.5rem 0;

        a {
          text-decoration: 3px solid ${CANDYPINK} underline;

          &:hover,
          :active {
            font-style: italic;
          }
        }
        strong {
          color: ${CANDYPINK};
        }
      }

      .plus {
        margin: 0.5rem 0;
      }

      > * {
        text-align: right;

        @media (min-width: 1100px) {
          text-align: center;
        }
      }
    }
  }
`;

export default function Contact() {
  return (
    <ContactContainer>
      <h1>Contactez-moi</h1>
      <div className="contacts">
        <div className="retours">
          <h3>J'attends vos retours sur le site</h3>
          <p className="explain">
            En vue de toujours m'améliorer et de rendre l'Oracle des Yeux
            toujours plus agréable à utiliser, j'aimerais collecter vos retours.
            N'hésitez pas à m'écrire à l'adresse mail prévue à cet effet.
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
