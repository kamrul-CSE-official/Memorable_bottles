import PropTypes from "prop-types";
import "./AddToCart.css";

function AddToCart({ cart, handleRemoveCart }) {
  return (
    <div>
      Cart: {cart.length}
      <div className="cart-contener">
        {cart.map((bottle, i) => (
          <div key={i} className="addCart-items">
            <img key={i} src={bottle.img} alt={bottle.name} />
            <button onClick={() => handleRemoveCart(bottle.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

AddToCart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveCart: PropTypes.func.isRequired,
};

export default AddToCart;
