import styled from "@emotion/styled";
import Link from "next/link";

const ContactContainer = styled.div``;

export default function Contact() {
  return (
    <ContactContainer>
      <h1>Contactez-moi !</h1>
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
            Ou vous êtes peut-être un recruteur ou CTO à la recherche de son
            prochain talent et mon profil vous intéresse ? Voici mes différents
            réseaux et contacts.
          </p>
          <div className="infos">
            <Link href="https://www.linkedin.com/in/manongerray/">
              <a>Ma page Linkedin</a>
            </Link>
            <Link href="https://www.github.com/manonxrray">
              <a>Ma page Github</a>
            </Link>
            <Link href="https://twitter.com/mnoudev">
              <a>Mon compte Twitter</a>
            </Link>
            <p className="plus">et par mail à l'adresse suivante :</p>
            <h4>manon.gerray@gmail.com</h4>
          </div>
        </div>
      </div>
    </ContactContainer>
  );
}
