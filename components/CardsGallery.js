export default function CardsGallery({ cards }) {
  return (
    <div>
      {cards.map((card) => (
        <div>
          <h1>{card.name}</h1>
        </div>
      ))}
    </div>
  );
}
