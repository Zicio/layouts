import PropTypes from "prop-types";
import ItemModel from "../ItemModel";

function ShopCard(props) {
  const { card } = props;
  return (
    <li className="card">
      <p className="card__name">{card.name}</p>
      <span className="card__color">{card.color}</span>
      <img className="card__image" src={card.img} alt="Изображение" />
      <div className="card__price-tag">
        <span className="card__price">${card.price}</span>
        <button className="card__add" type="button">
          add to cart
        </button>
      </div>
    </li>
  );
}

ShopCard.propTypes = {
  card: PropTypes.instanceOf(ItemModel).isRequired,
};

export default ShopCard;
