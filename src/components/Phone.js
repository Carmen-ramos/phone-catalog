import React from "react";
import { Link } from "react-router-dom";

function Phone(props) {
  return (
    <Link to={`/phone/${props.item.id}`}>
      <h3 className="card__title">{props.item.name}</h3>
      <img className="card__img" src={props.item.image} alt={props.item.name} />
      <div>
        <h3>{props.item.price}€</h3>
        <span>Click for more information</span>
      </div>
    </Link>
  );
}

export default Phone;
