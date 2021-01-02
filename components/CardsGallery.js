import styled from "@emotion/styled";

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;

  > .illustration {
    width: 10rem;

    > img {
      width: 100%;
    }
  }
`;

export default function CardsGallery({ cards }) {
  return (
    <div>
      {cards.map((card) => (
        <CardStyle>
          <div className="illustration">
            <img src="/card.PNG" />
          </div>
          <h2>{card.name}</h2>
          <p>{card.description}</p>
        </CardStyle>
      ))}
    </div>
  );
}
