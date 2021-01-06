import styled from "@emotion/styled";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;

  > .image {
    > img {
      display: block;
      width: 10rem;
      margin: auto;
    }
  }

  > .about {
    text-align: center;
    margin: auto;
  }
`;

export default function About() {
  return (
    <AboutContainer>
      <div className="image">
        <img src="/backopen.PNG" />
      </div>
      <div className="about">
        <h1>A propos de L'Oracle des Yeux</h1>
        <p>
          Je m'appelle Manon Gerray, j'ai 25 ans{" "}
          <em>tout juste aujourd'hui pour le lancement du site</em> et je suis
          passionnée d'ésotérisme <em>(et de plein d'autres choses)</em>. J'ai
          commencé à créer et <strong>dessiner</strong> les différentes cartes
          de l'Oracle des Yeux en 2019, en vue de créer ce site de tirage de
          cartes en ligne après la fin de ma formation de{" "}
          <strong>développement web</strong>.
        </p>
        <p>
          Le but de cet Oracle est de vous proposer des pistes de réponse et
          d'évolution à vos questions. Ceci n'est que la première version du
          site, j'aimerais par la suite vous offrir{" "}
          <strong>plus de personnalisation</strong>
          et surtout une{" "}
          <strong>
            possibilité d'enregistrer vos résultats de tirage
          </strong>{" "}
          afin de consulter les conseils que vous auriez pu recevoir grâce à
          l'Oracle.
        </p>
        <p>
          Je vous souhaite beaucoup de plaisir à découvrir cet Oracle 100% fait
          maison !
        </p>
        <h4>Manon</h4>
      </div>
    </AboutContainer>
  );
}
