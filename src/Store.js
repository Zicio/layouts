import { useState } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./Views/CardsView";
import ListView from "./Views/ListView";

function Store() {
  const [icon, setIcon] = useState("view_list");

  const products = [
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg",
    },
    {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg",
    },
    {
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg",
    },
    {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg",
    },
  ];

  const onSwitch = () => {
    setIcon((prevIcon) => {
      const newIcon = prevIcon === "view_list" ? "view_module" : "view_list";
      return newIcon;
    });
  };

  console.log(icon);
  return (
    <main className="layouts">
      <IconSwitch icon={icon} onSwitch={onSwitch} />
      {icon === "view_list" ? (
        <CardsView cards={products} />
      ) : (
        <ListView items={products} />
      )}
    </main>
  );
}

export default Store;
