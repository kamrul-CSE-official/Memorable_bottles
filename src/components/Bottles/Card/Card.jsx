import PropTypes from "prop-types";
import "./Card.css";

function Card(props) {
  const { name, img } = props.bottle;
  return (
    <div>
      <div className="card">
        <h4>{name}</h4>
        <img src={img} alt={name} width={50} />
        <button onClick={() => props.hendleAddtoCard(props.bottle)}>
          Add to card
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  bottle: PropTypes.object.isRequired,
  hendleAddtoCard: PropTypes.func.isRequired,
};

export default Card;
