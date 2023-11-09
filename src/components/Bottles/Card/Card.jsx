import "./Card.css";
export default function Card(props) {
    const {name, img, price} = props.bottle;
  return (
    <div>
        <div className="card">
            <h4>{name}</h4>
            <img src={img} alt={name} />
            <button onClick={()=>props.hendleAddtoCard(props.bottle)}>Add to card</button>
        </div>
    </div>
  )
}
