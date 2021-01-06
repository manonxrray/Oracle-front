import styled from "@emotion/styled";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactContainer = styled.div``;

export default function Contact() {
  return (
    <ContactContainer>
      <h1>Contactez-moi</h1>
      <div className="contacts">
        <div className="contact">
          <h3>Pour me faire un retour sur le site</h3>
          {/* <FontAwesomeIcon icon={faEnvelope} /> */}
        </div>
        <div className="contact">
          <h3>Pour parler perspectives d'emploi ?</h3>
          {/* <FontAwesomeIcon icon={faLinkedin} /> */}
        </div>
        <div className="contact">
          <h3>Venez jeter un oeil au code du site !</h3>
          {/* <FontAwesomeIcon icon={faGithub} /> */}
        </div>
      </div>
    </ContactContainer>
  );
}
