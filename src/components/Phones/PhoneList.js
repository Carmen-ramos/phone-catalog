import React from "react";
import Phone from "./Phone.js";
import "../../stylesheets/Main.scss";
import "../../stylesheets/Phone.scss";

function PhoneList(props) {
  const phoneItem = props.phones.map((item) => {
    return (
      <li className="phone" key={item.id}>
        <Phone item={item} />
      </li>
    );
  });

  return <ul className="main__container">{phoneItem}</ul>;
}

export default PhoneList;
