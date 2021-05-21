import React from "react";
import Phone from "./Phone.js";

function PhoneList(props) {
  const phoneItem = props.phones.map((item) => {
    return (
      <li key={item.id}>
        <Phone item={item} />
      </li>
    );
  });

  return <ul className="">{phoneItem}</ul>;
}

export default PhoneList;
