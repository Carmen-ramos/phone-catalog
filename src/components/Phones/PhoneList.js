import React from "react";
import Phone from "./Phone.js";
import PhoneNotFound from "./PhoneNotFound.js";
import "../../stylesheets/layout/Main.scss";
import "../../stylesheets/layout/Phone.scss";

function PhoneList(props) {
  const phoneItem = props.phones.map((item) => {
    return (
      <li className="phone" key={item.id}>
        <Phone item={item} />
      </li>
    );
  });

  return (
    <ul className="main__container">
      {phoneItem.length > 0 ? phoneItem : <PhoneNotFound />}
    </ul>
  );
}

export default PhoneList;
