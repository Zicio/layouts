function ShopItem(props) {
  const { item } = props;
  return (
    <li className="item">
      <img className="item__image" src={item.img} alt="Изображение" />
      <p className="item__name">{item.name}</p>
      <span className="item__color">{item.color}</span>
      <span className="item__price">{item.price}</span>
      <button className="item__add" type="button">
        add to cart
      </button>
    </li>
  );
}

export default ShopItem;
