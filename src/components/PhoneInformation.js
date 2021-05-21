import { Link } from "react-router-dom";

function PhoneInforation(props) {
  return (
    <>
      <Link to="/">
        <p>Back</p>
      </Link>
      <h2>{props.phone.name}</h2>
      <img src={props.phone.image} alt={props.phone.name} />
      <p>
        Brand: <spa>{props.phone.manufacturer}</spa>
      </p>
      <p>
        Description:<spa>{props.phone.description}</spa>
      </p>
      <p>
        Color:<spa>{props.phone.color}</spa>
      </p>
      <p>
        Price:<spa>{props.phone.price}</spa>
      </p>
      <p>
        Screen:<spa>{props.phone.screen}</spa>
      </p>
      <p>
        Processor:<spa>{props.phone.processor}</spa>
      </p>
      <p>
        RAM:<spa>{props.phone.ram}</spa>
      </p>
    </>
  );
}
export default PhoneInforation;
