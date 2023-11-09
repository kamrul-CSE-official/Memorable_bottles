const getStorageCard = () => {
  const storeCardString = localStorage.getItem("cart");
  if (storeCardString) {
    return JSON.parse(storeCardString);
  }
  return [];
};
const saveCardToLS = (card) => {
  const cartStingified = JSON.stringify(card);
  localStorage.setItem("cart", cartStingified);
};
const addToLS = (id) => {
  const cart = getStorageCard();
  cart.push(id);
  saveCardToLS(cart);
};

export { addToLS, getStorageCard };
