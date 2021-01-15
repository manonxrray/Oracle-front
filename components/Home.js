import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { DEEPMAUVE, SOFTBLUE, CANDYPINK } from "../utils/styling";

const HomeStyle = styled.div``;

export default function HomePage() {
  return (
    <main>
      <HomeStyle>
        <div className="welcome">
          <h1>Bienvenue sur</h1>
          <img src="/title.PNG" alt="Titre du site" />
        </div>
        <div className="intro">
          <img src="/cards.PNG" alt="3 cartes face cachée" />
          <h2>Prêt/e pour votre première consultation ?</h2>
          <p>
            L'Oracle des Yeux est avant tout un{" "}
            <strong>outil de développement personnel</strong> et non un outil de
            divination. Le consulter peut vous permettre d'y voir plus clair,
            d'obtenir des pistes de réponse à vos questions, ou tout simplement
            de vous amuser à voir les histoires qui se crééent au travers de
            chaque carte tirée pour le passé, le présent et le futur.
          </p>
        </div>
        <div className="start">
          <h3>Alors ne tardez plus !</h3>
          <div className="tirage">
            <h4>Faites un tirage</h4>
            <img src="/tirage.GIF" alt="Gif de tirage" />
          </div>
          <div className="galerie">
            <h4>Visitez la galerie</h4>
            <img src="/galerie.GIF" alt="Gif de recherche" />
          </div>
        </div>
      </HomeStyle>
    </main>
  );
}
