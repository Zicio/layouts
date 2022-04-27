import PropTypes from "prop-types";
import ShopItem from "../Types/ShopItem";
import ItemModel from "../ItemModel";

function ListView(props) {
  const { items } = props;
  return (
    <ul className="items-wrapper">
      {items.map((item, index) => {
        const itemModel = new ItemModel(item);
        return <ShopItem item={itemModel} key={index} />;
      })}
    </ul>
  );
}

ListView.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ListView;
