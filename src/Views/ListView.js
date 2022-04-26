import ShopItem from "../Types/ShopItem";

function ListView(props) {
  const { items } = props;
  return (
    <ul className="items-wrapper">
      {items.map((item, index) => {
        return <ShopItem item={item} key={index} />;
      })}
    </ul>
  );
}

export default ListView;
