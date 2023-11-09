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
const removeFromLS = (id) => {
  const cart = getStorageCard();
  const remaining = cart.filter((idx) => idx !== id);
  saveCardToLS(remaining);
};

export { addToLS, getStorageCard, removeFromLS };
