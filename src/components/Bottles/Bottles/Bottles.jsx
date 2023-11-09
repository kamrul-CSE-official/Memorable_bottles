import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import "./Bottles.css";
import { addToLS, getStorageCard } from "../../../Utilities/localStorage";

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

  useEffect(()=>{
    if(bottles.length > 0){
        const localStorageData = getStorageCard();
        console.log("LS: ",localStorageData)

        for(const id of localStorageData){
           const findBottols = bottles.find((bottle) => bottle.id === id);
           const newCart = [...cart, findBottols];
           setCart(newCart)
        }
        console.log("Save cart: ",cart)
    }
  },[bottles])

  const hendleAddtoCard = (data) => {
    const addNewBottle = [...addtoCard, data];
    setAddtoCard(addNewBottle);
    addToLS(data.id);
  };

  return (
    <div>
        <div>
            cart: {cart.length}
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
