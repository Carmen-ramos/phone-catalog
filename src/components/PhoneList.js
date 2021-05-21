import React from "react";
import Phone from "./Phone.js";

function PhoneList(props) {
  const phoneItem = props.data.map((item) => {
    return (
      <li key={item.id}>
        <Phone item={item} />
      </li>
    );
  });

  return <ul className="pokeCard">{phoneItem}</ul>;
}

export default PhoneList;
