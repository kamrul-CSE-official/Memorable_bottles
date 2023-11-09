import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import "./Bottles.css";
import {
  addToLS,
  getStorageCard,
  removeFromLS,
} from "../../../Utilities/localStorage";
import AddToCart from "../../AddToCart/AddToCart";

export default function Bottles() {
  const [bottles, setBottles] = useState([]);
  const [addtoCard, setAddtoCard] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (bottles.length) {
      const localStorageData = getStorageCard();

      const savedCart = [];
      for (const id of localStorageData) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      setCart(savedCart);
    }
  }, [bottles, addtoCard]);

  const hendleAddtoCard = (data) => {
    const addNewBottle = [...addtoCard, data];
    setAddtoCard(addNewBottle);
    addToLS(data.id);
  };

  const handleRemoveCart = (id) => {
    removeFromLS(id);
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
  };

  return (
    <div>
      <div>
        <div>
          <AddToCart cart={cart} handleRemoveCart={handleRemoveCart} />
        </div>
      </div>
      <div className="bottles">
        {bottles.map((bottle) => (
          <Card
            key={bottle.id}
            bottle={bottle}
            hendleAddtoCard={hendleAddtoCard}
          />
        ))}
      </div>
    </div>
  );
}
