export default function CardsGallery({ cards }) {
  return (
    <div>
      {cards.map((card) => (
        <div>
          <div className="illustration">
            <img src="/card.PNG" />
          </div>
          <h2>{card.name}</h2>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}
