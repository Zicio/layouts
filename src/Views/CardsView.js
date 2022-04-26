import ShopCard from "../Types/ShopCard";

function CardsView(props) {
  const { cards } = props;
  return (
    <ul className="cards-wrapper">
      {cards.map((card, index) => {
        return <ShopCard card={card} key={index} />;
      })}
    </ul>
  );
}

export default CardsView;
