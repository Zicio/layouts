import PropTypes from "prop-types";
import ShopCard from "../Types/ShopCard";
import ItemModel from "../ItemModel";

function CardsView(props) {
  const { cards } = props;
  return (
    <ul className="cards-wrapper">
      {cards.map((card, index) => {
        const itemModel = new ItemModel(card);
        return <ShopCard card={itemModel} key={index} />;
      })}
    </ul>
  );
}

CardsView.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default CardsView;
