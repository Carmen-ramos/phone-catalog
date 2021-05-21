import React from "react";

function Phone(props) {
  return (
    <>
      <h3 className="card__title">{props.item.name}</h3>
      <img className="card__img" src={props.item.image} alt={props.item.name} />
      <div className="card__itemContainer">
        <div className="card__itemContainer--species">
          <p>{props.item.species}</p>
        </div>
        <div className="card__itemContainer--status">
          <p>{props.item.status}</p>
        </div>
      </div>
    </>
  );
}

export default Phone;
