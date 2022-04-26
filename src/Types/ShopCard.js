function ShopCard(props) {
  const { card } = props;
  return (
    <li className="card">
      <p className="card__name">{card.name}</p>
      <span className="card__color">{card.color}</span>
      <img className="card__image" src={card.img} alt="Изображение" />
      <span className="card__price">{card.price}</span>
      <button className="card__add" type="button">
        add to cart
      </button>
    </li>
  );
}

export default ShopCard;
