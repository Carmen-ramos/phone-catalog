import React from "react";
import { Link } from "react-router-dom";

function Phone(props) {
  return (
    <Link to={`/phone/${props.item.id}`}>
      <h3 className="phone__title">{props.item.name}</h3>
      <img
        className="phone__img"
        src={require(`../images/${props.item.image}`).default}
        alt={props.item.name}
      />
      <div className="phone__container">
        <h3 className="phone__container--price">{props.item.price}€</h3>
        <span className="phone__container--information">
          Click for more information
        </span>
      </div>
    </Link>
  );
}

export default Phone;
